<script>
  import { onMount } from 'svelte'
  import * as customJson from '../../custom.json'

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
        alert(
          `The ${customJson.currency.convertFrom} is over $${customJson.currency.alertAt} conversion!`
        )
      }
    })
  }
</script>

<style>
  .currency {
    text-decoration: none;
  }
  .currency:hover {
    text-decoration: underline;
  }
</style>

{#if dollarConversion}
  <a
    class="currency"
    href={`https://www.xe.com/currencyconverter/convert/?Amount=1&From=${customJson.currency.convertFrom}&To=USD`}>
    {customJson.currency.convertFrom} ${dollarConversion}
  </a>
{/if}
