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
    transition: background-image 2.5s ease-in-out;
  }
</style>

<div
  class="background"
  style="--image-url: url(../images/earth/{imageNamePath})" />
