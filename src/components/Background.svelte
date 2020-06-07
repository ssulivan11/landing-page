<script>
  import { onDestroy } from 'svelte'
  import { imageUrl } from '../utils/random'

  let newImageUrl = imageUrl()
  const interval = setInterval(() => (newImageUrl = imageUrl()), 5000)
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
    transition: background-image 1s linear;
  }
</style>

<div class="background" style="--image-url: url({newImageUrl})" />
