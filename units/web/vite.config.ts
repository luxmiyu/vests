import { join } from 'node:path'
import { builtinModules } from 'node:module'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

console.log(join(__dirname, './public'));

export default defineConfig({
  plugins: [svelte()],
  root: __dirname,
  base: './',

  publicDir: join(__dirname, './public'),

  build: {
    sourcemap: 'inline',
    emptyOutDir: true,
    outDir: '../../dist/web',

    rollupOptions: {
      input: join(__dirname, 'index.html'),
      external: [...builtinModules.flatMap((p) => [p, `node:${p}`])],
    },
  },
})
