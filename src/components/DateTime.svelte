<script>
  import { onMount } from 'svelte'
  const date = new Date()
  const dateString = `${
    date.getMonth() + 1
  }-${date.getDate()}-${date.getFullYear()}`

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
      timeString = `${hours}:${minutes > 10 ? '' : '0'}${minutes}:${
        seconds > 10 ? '' : '0'
      }${seconds}`
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
  <span class="time">{timeString || '--:--:--'}</span>
</div>
