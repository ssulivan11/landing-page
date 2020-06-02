<script>
  import Background from './components/Background.svelte'
  import Links from './components/Links.svelte'
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
    padding: 5px 15px;
    border-radius: 5px;
    width: 400px;
    background-color: rgba(255, 255, 255, 0.8);
  }

  h1 {
    font-size: 2em;
    font-weight: 200;
  }
</style>

<main>
  <div class="container">
    <h1>🏠 Hello, {greetings}!</h1>
    <Links {allLinks} />
  </div>
</main>

<Background {imageUrl} />
