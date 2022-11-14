<script lang="ts">
  import Counter from './lib/Counter.svelte'
</script>

<main>
  <div>
    <a href="https://vitejs.dev/" target="_blank" rel="noreferrer"><img id="v" src="assets/svg/vite.svg" class="logo" alt="Vite Logo" /></a>
    <a href="https://www.electronjs.org/" target="_blank" rel="noreferrer"><img id="e" src="assets/svg/electron.svg" class="logo" alt="Electron Logo" /></a>
    <a href="https://svelte.dev/" target="_blank" rel="noreferrer"><img id="s" src="assets/svg/svelte.svg" class="logo" alt="Svelte Logo" /></a>
    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img id="t" src="assets/svg/typescript.svg" class="logo" alt="Typescript Logo" /></a>
    <a href="https://sass-lang.com/" target="_blank" rel="noreferrer"><img id="a" src="assets/svg/sass.svg" class="logo" alt="SASS Logo" /></a>
  </div>
  <h1>Vite + Electron + Svelte + TypeScript + Sass</h1>

  <div class="card">
    <Counter />
  </div>
</main>

<style lang="sass">
  .logo 
    height: 6em
    padding: 1.5em
    will-change: filter
  
    &:hover 
      &#v
        filter: drop-shadow(0 0 2em #646cffaa)
      &#e
        filter: drop-shadow(0 0 2em #9feaf9aa)
      &#s
        filter: drop-shadow(0 0 2em #ff3e00aa)
      &#t
        filter: drop-shadow(0 0 2em #3178c6aa)
      &#a
        filter: drop-shadow(0 0 2em #cd6799aa)
</style>