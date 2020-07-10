<script>
  import Background from './components/Background.svelte'
  import Links from './components/Links.svelte'
  import Currency from './components/Currency.svelte'
  import ThemeToggle from './components/ThemeToggle.svelte'
  import Search from './components/Search.svelte'
  import Weather from './components/Weather.svelte'

  let isHiddenContainer = false

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
    opacity: 1;
    transition: opacity 1s ease;
  }

  main.isHiddenContainer {
    opacity: 0;
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

  button.hide-button {
    left: 0;
    bottom: 0;
    background: none;
    border: none;
    position: fixed;
    z-index: 3;
    border: 0;
  }

  .curtain.isHiddenContainer {
    transition: opacity 1s ease;
    opacity: 0;
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.5);
  }
  .curtain.isHiddenContainer {
    opacity: 1;
  }
</style>

<main class:isHiddenContainer>
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
  <button class="hide-button" on:click={() => (isHiddenContainer = true)}>
    ✖️
  </button>
</main>

<div class="curtain" class:isHiddenContainer />

<Background />
