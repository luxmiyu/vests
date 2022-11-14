<script lang="ts">
  let count: number = 0
  const increment = () => {
    count++
  }
</script>

<button on:click={increment}>
  Count is {count}
</button>