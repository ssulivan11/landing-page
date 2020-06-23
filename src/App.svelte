<script>
  import Background from './components/Background.svelte'
  import Links from './components/Links.svelte'
  import Currency from './components/Currency.svelte'
  import ThemeToggle from './components/ThemeToggle.svelte'
  import Search from './components/Search.svelte'
  import Weather from './components/Weather.svelte'

  export let greeting = {},
    allLinks = []
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

  header {
    border-radius: 5px 5px 0 0;
    margin: 0;
    background-color: var(--bg-color);
    padding: 15px;
    display: flex;
    position: relative;
  }

  h1 {
    font-size: 2em;
    font-weight: 200;
    padding: 0;
    margin: 0;
  }

  .greeting {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .greeting:hover small {
    opacity: 1;
  }

  small {
    position: absolute;
    left: 50px;
    bottom: 5px;
    transition: opacity 0.25s ease-in-out;
    opacity: 0;
    font-size: 0.5em;
    text-transform: uppercase;
  }
</style>

<main>
  <div class="container">
    <header>
      <span class="greeting">
        <Weather />
        <h1>{greeting.text.translate}</h1>
        <small>{greeting.time} - {greeting.text.lang}</small>
      </span>
      <ThemeToggle />
    </header>
    {#if allLinks.length}
      <Links {allLinks} />
    {/if}
    <Search />
    <Currency />
  </div>
</main>

<Background />
