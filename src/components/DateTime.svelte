<script>
  import { onMount } from 'svelte'
  const date = new Date()
  const dateString = `${date.getMonth()}-${
    date.getDate() + 1
  }-${date.getFullYear()}`

  // these automatically update when `time`
  // changes, because of the `$:` prefix
  let time = new Date()
  let timeString
  $: hours = time.getHours()
  $: minutes = time.getMinutes()
  $: seconds = time.getSeconds()

  onMount(() => {
    const interval = setInterval(() => {
      time = new Date()
      timeString = `${hours}:${minutes}:${seconds}`
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  })
</script>

<style>
  .date-time {
    flex-grow: 1;
    font-weight: bold;
    display: flex;
  }
  .time {
    flex-grow: 1;
    text-align: center;
  }
</style>

<div class="date-time">
  <span class="date">{dateString}</span>
  {#if timeString}
    <span class="time">{timeString}</span>
  {/if}
</div>
