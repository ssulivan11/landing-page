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

  form {
    margin: 15px 20px;
  }
  input {
    width: calc(100% - 60px);
    padding: 15px 15px 15px 45px;
    background-color: var(--bg-color);
    color: var(--primary);
    outline: none;
    border-radius: 30px;
    font-size: 1em;
    border: none;
    margin-top: 25px;
  }

  .search-icon {
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 38px;
    left: 35px;
    background-size: contain;
    opacity: 0.75;
    fill: var(--primary);
  }
</style>

<div class="search">
  <i class="material-icons search-icon">search</i>
  <form on:submit={handleSubmit}>
    <input type="text" bind:value={searchTerm} placeholder="" />
  </form>
</div>
