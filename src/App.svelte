<script>
  import Background from './components/Background.svelte'
  import Links from './components/Links.svelte'
  import Currency from './components/Currency.svelte'
  import ThemeToggle from './components/ThemeToggle.svelte'

  export let greetings, allLinks, imageUrl
</script>

<style>
  main {
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    z-index: 1;
  }

  .container {
    border-radius: 5px;
    overflow: hidden;
    width: 400px;
    background-color: var(--bg-color);
  }

  h1 {
    font-size: 2em;
    font-weight: 200;
    margin: 0;
    background-color: var(--bg-color);
    padding: 15px;
    display: flex;
  }

  h1 span {
    width: 100%;
  }
</style>

<main>
  <div class="container">
    <h1>
      <span>{greetings}</span>
      <ThemeToggle />
    </h1>
    <Links {allLinks} />
    <Currency />
  </div>
</main>

<Background {imageUrl} />
