<script>
  let searchTerm = ''
  const handleSubmit = () =>
    window
      .open(`https://www.google.com/search?q=${searchTerm}`, '_blank')
      .focus()
</script>

<style>
  .search {
    position: relative;
  }

  input {
    background-color: var(--bg-color);
    color: var(--primary);
    min-width: 350px;
    padding: 15px 20px;
    outline: none;
    border-radius: 30px;
    font-size: 1.25em;
    border: none;
    margin-top: 25px;
  }

  form::after {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 40px;
    right: 15px;
    background-size: contain;
    background-image: url('https://image.flaticon.com/icons/svg/49/49116.svg');
    filter: var(--invert);
  }
</style>

<div class="search">
  <form on:submit={handleSubmit}>
    <input type="text" bind:value={searchTerm} placeholder="" />
  </form>
</div>
