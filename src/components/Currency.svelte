<script>
  import { onMount } from 'svelte'

  let poundToDollar
  onMount(async () => {
    const res = await fetch(`https://api.exchangeratesapi.io/latest?base=GBP`)
    poundToDollar = await res.json()
    poundToDollar = poundToDollar.rates.USD.toFixed(3)

    if (poundToDollar > 1.3) {
      alert('The Sterling Pound is over $1.30 conversion!')
    }
  })
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
  }
</style>

<div class="currency">🇬🇧 🇺🇸 ${poundToDollar}</div>
