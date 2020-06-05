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
    transition: 0.25s width ease-out;
    width: 12px;
    background-color: var(--bg-color);
    color: var(--primary);
    padding: 15px 20px;
    outline: none;
    border-radius: 30px;
    font-size: 1.25em;
    border: none;
    margin-top: 25px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  input:focus {
    width: 350px;
    padding: 15px 20px;
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
    opacity: 0.75;
    background-image: url('https://image.flaticon.com/icons/svg/49/49116.svg');
    filter: var(--invert);
  }
</style>

<div class="search">
  <form on:submit={handleSubmit}>
    <input type="text" bind:value={searchTerm} placeholder="" />
  </form>
</div>
