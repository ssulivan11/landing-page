<script>
  export let imageUrl
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
  }
</style>

<div class="background" style="--image-url: url({imageUrl})" />
