<script>
  import { onDestroy } from 'svelte'
  import { imageName } from '../utils/random'

  let imageNamePath = imageName()
  const interval = setInterval(() => (imageNamePath = imageName()), 20000)
  onDestroy(() => clearInterval(interval))
</script>

<style>
  .background {
    background-image: var(--image-url);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 0;
    transition: background-image 2s ease-in-out;
    filter: blur(0.5px);
  }

  button {
    z-index: 3;
    bottom: 0;
    right: 0;
    background: none;
    border: none;
    position: fixed;
  }
</style>

<div
  class="background"
  style="--image-url: url(../images/earth/{imageNamePath})" />

<button on:click={() => (imageNamePath = imageName())}>🔄</button>
