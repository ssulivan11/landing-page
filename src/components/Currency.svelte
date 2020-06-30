<script>
  import { onMount } from 'svelte'
  import customJson from '../../custom.json'

  let dollarConversion
  if (customJson.currency) {
    onMount(async () => {
      const res = await fetch(
        `https://api.exchangeratesapi.io/latest?base=${customJson.currency.convertFrom}`
      )
      dollarConversion = await res.json()
      dollarConversion = dollarConversion.rates.USD.toFixed(3)

      if (
        customJson.currency.alertAt &&
        dollarConversion > customJson.currency.alertAt
      ) {
        alert('The Sterling Pound is over $1.30 conversion!')
      }
    })
  }
</script>

<style>
  .currency {
    text-align: right;
    background-color: var(--bg-color);
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
    border-radius: 0 0 5px 5px;
    display: block;
    text-decoration: none;
  }
  .currency:hover {
    text-decoration: underline;
  }
</style>

{#if dollarConversion}
  <a
    class="currency"
    href={`https://www.xe.com/currencyconverter/convert/?Amount=1&From=${customJson.currencyConversion}&To=USD`}
    target="_blank">
    {customJson.currency.convertFrom} ${dollarConversion}
  </a>
{/if}
