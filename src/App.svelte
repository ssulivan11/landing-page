<script>
  import Background from './components/Background.svelte'
  import Links from './components/Links.svelte'
  import Currency from './components/Currency.svelte'
  import ThemeToggle from './components/ThemeToggle.svelte'
  import Search from './components/Search.svelte'

  export let greetings = '',
    allLinks = [],
    imageUrl = ''
</script>

<style>
  main {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    z-index: 1;
    flex-direction: column-reverse;
  }

  .container {
    border-radius: 5px;
    width: 400px;
    background-color: var(--bg-color);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  h1 {
    border-radius: 5px 5px 0 0;
    font-size: 2em;
    font-weight: 200;
    margin: 0;
    background-color: var(--bg-color);
    padding: 15px;
    display: flex;
  }

  h1 .greeting {
    width: 100%;
  }
</style>

<main>
  <Search />
  <div class="container">
    <h1>
      <span class="greeting">{greetings}</span>
      <ThemeToggle />
    </h1>
    {#if allLinks.length}
      <Links {allLinks} />
    {/if}
    <Currency />
  </div>
</main>

<Background {imageUrl} />
