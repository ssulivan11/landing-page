<script>
  import { onDestroy } from 'svelte'
  import { imageName } from '../utils/random'

  let imageNamePath = imageName()
  const interval = setInterval(() => (imageNamePath = imageName()), 7500)
  onDestroy(() => clearInterval(interval))
</script>

<style>
  .background {
    background-image: var(--image-url);
    background-repeat: no-repeat;
    background-size: cover;
    height: calc(100vh + 120px);
    width: calc(100vw + 120px);
    top: 0;
    left: 0;
    position: absolute;
    z-index: 0;
    /* transition: background 2s; */
    background-position: center center;
    animation: pulse 30s infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: translate(-20px, -20px) scale(1);
    }
    50% {
      transform: translate(-75px, -75px) scale(0.95);
    }
  }

  button {
    z-index: 3;
    bottom: 0;
    right: 0;
    background: none;
    border: none;
    position: fixed;
    opacity: 0.75;
  }
</style>

<div class="background" style="--image-url: url(../images/{imageNamePath})" />

<button on:click={() => (imageNamePath = imageName())}>🔄</button>
