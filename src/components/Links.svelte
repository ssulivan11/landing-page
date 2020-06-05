<script>
  export let allLinks = []
</script>

<style>
  .container {
    margin: 5px 15px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  h2 {
    font-size: 1em;
    font-weight: 200;
    margin-bottom: -10px;
  }
  a {
    font-weight: 200;
    text-decoration: none;
    font-size: 0.75em;
  }

  a:hover {
    text-decoration: underline;
  }

  ul {
    padding: 0;
  }
  li {
    list-style-type: none;
  }
</style>

<div class="container">
  {#each allLinks as group}
    <div>
      <h2>{group.title}</h2>
      <ul>
        {#each group.links as link}
          <li class="link-button">
            <a target="_blank" href={link.url}>
              <span>- {link.name}</span>
            </a>
          </li>
        {/each}
      </ul>
    </div>
  {/each}
</div>
