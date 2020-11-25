<script>
  import { onDestroy } from 'svelte'
  let isOnline = true

  const interval = setInterval(() => {
    if (!!navigator && navigator.onLine) {
      if (!isOnline) return location.reload()
      return clearInterval(interval)
    }
    return (isOnline = false)
  }, 500)
  onDestroy(() => clearInterval(interval))
</script>

<style>
  .offline {
    padding: 15px;
    border-bottom: 1px dashed var(--primary-color);
  }

  .offline__message:after {
    overflow: hidden;
    display: inline-block;
    vertical-align: bottom;
    animation: ellipsis steps(4, end) 1s infinite;
    content: '\2026';
    width: 0;
  }

  @keyframes ellipsis {
    to {
      width: 15px;
    }
  }
</style>

{#if !isOnline}
  <div class="offline">
    <span class="offline__message">Still Connecting</span>
  </div>
{/if}
