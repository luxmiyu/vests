import { contextBridge, shell } from 'electron'

contextBridge.exposeInMainWorld('api', {
  openUrl: (url: string) => shell.openExternal(url),
})
