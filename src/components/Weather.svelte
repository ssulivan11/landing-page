<script>
  import { onMount } from 'svelte'
  import Popover from 'svelte-popover'
  import * as customJson from '../../custom.json'

  const { zipCode } = customJson

  let weatherData
  let weatherIcon
  let weatherPopover = customJson.weatherPopover
  let googleUrl = `https://www.google.com/search?q=${zipCode}+weather`

  if (customJson.zipCode) {
    onMount(async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=c75e4a20e1b09cb5e3221c35295c5569`
      )
      weatherData = await res.json()
      switch (weatherData.weather[0].main) {
        case 'Rain':
          weatherIcon = 'grain'
          break
        case 'Clear':
          weatherIcon = 'wb_sunny'
          break
        case 'Clouds':
          weatherIcon = 'wb_cloudy'
          break
        default:
          weatherIcon = 'wb_cloudy'
      }
    })
  }
</script>

<style>
  .weather-container {
    position: relative;
    border-radius: 3px;
    margin-right: 10px;
  }
  .weather-content {
    background-color: var(--bg-color);
    min-width: 150px;
    padding: 10px;
    border-radius: 5px;
    margin: -25px 40px 0 0;
  }
  h3 {
    margin: 0 0 5px;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  i:hover {
    cursor: pointer;
  }
</style>

{#if weatherData && weatherPopover}
  <div class="weather-container">
    <Popover action="hover" arrow="false">
      <i class="material-icons" slot="target">{weatherIcon}</i>
      <div slot="content" class="weather-content">
        <h3>{weatherData.weather[0].main}</h3>
        <ul>
          <li>{weatherData.weather[0].description}</li>
          <li>current: {weatherData.main.temp}°</li>
          <li>humidity: {weatherData.main.humidity}%</li>
          <li>wind: {weatherData.wind.speed} knots</li>
        </ul>
      </div>
    </Popover>
  </div>
{/if}

{#if !weatherPopover}
  <a class="weather-container" target="_self" href={googleUrl}>
    <i class="material-icons">{weatherIcon}</i>
  </a>
{/if}
