<script>
  export let allLinks
</script>

<style>
  .container {
    margin: 5px 15px;
  }
  h2 {
    text-transform: uppercase;
    font-size: 0.75em;
    font-weight: 200;
    margin-bottom: -10px;
  }
  a {
    color: #111;
    font-weight: 200;
    text-decoration: none;
    font-size: 0.9em;
  }
  li {
    list-style-type: circle;
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
              <span>{link.name}</span>
            </a>
          </li>
        {/each}
      </ul>
    </div>
  {/each}
</div>
