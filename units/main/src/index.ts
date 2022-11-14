import { join } from 'node:path'
import { app, BrowserWindow } from 'electron'

const isSingleInstance = app.requestSingleInstanceLock()

if (!isSingleInstance) {
  app.quit()
  process.exit(0)
}

async function createWindow() {
  const browserWindow = new BrowserWindow({
    show: false,
    width: 1200,
    height: 768,
    webPreferences: {
      preload: join(__dirname, '../preload/index.cjs'),
    },
  })

  browserWindow.on('ready-to-show', () => {
    browserWindow?.show()
  })

  const pageUrl = import.meta.env.DEV
    ? 'http://localhost:3000'
    : new URL('../dist/web/index.html', `file://${__dirname}`).toString()

  await browserWindow.loadURL(pageUrl)

  return browserWindow
}

app.on('second-instance', () => {
  createWindow().catch((err) =>
    console.error(
      'Error while trying to prevent second-instance Electron event:',
      err
    )
  )
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  createWindow().catch((err) =>
    console.error('Error while trying to handle activate Electron event:', err)
  )
})

app
  .whenReady()
  .then(createWindow)
  .catch((e) => console.error('Failed to create window:', e))
