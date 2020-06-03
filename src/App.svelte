<script>
  import Background from './components/Background.svelte'
  import Links from './components/Links.svelte'
  import Currency from './components/Currency.svelte'
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
    background-color: rgba(255, 255, 255, 0.9);
  }

  h1 {
    font-size: 2em;
    font-weight: 200;
    margin: 0;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 15px;
    box-shadow: 0 8px 6px -6px #ccc;
  }
</style>

<main>
  <div class="container">
    <h1>{greetings}!</h1>
    <Links {allLinks} />
    <Currency />
  </div>
</main>

<Background {imageUrl} />
