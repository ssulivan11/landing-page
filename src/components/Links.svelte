<script>
  export let allLinks;
</script>

<style>
  h2 {
    font-size: 1.5em;
    font-weight: 200;
    margin-bottom: -10px;
  }
  a {
    color: #111;
    font-weight: 200;
    text-decoration: underlind;
  }
</style>

<div>
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
