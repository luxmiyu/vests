import { builtinModules } from 'node:module'
import { defineConfig } from 'vite'

export default defineConfig({
  root: __dirname,
  envDir: process.cwd(),

  build: {
    sourcemap: 'inline',
    outDir: '../../dist/preload',
    emptyOutDir: true,

    lib: {
      entry: 'src/index.ts',
      formats: ['cjs'],
    },

    rollupOptions: {
      external: [
        'electron',
        ...builtinModules.flatMap((p) => [p, `node:${p}`]),
      ],

      output: {
        entryFileNames: '[name].cjs',
      },
    },
  },
})