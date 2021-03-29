<script>
  export let allLinks = []
</script>

<style>
  .container {
    margin: 5px 15px;
  }
  h2 {
    /* display: none; */
    font-size: 1em;
    font-weight: 200;
    margin-bottom: -10px;
    text-transform: uppercase;
    text-align: center;
  }
  a {
    font-weight: 200;
    text-decoration: none;
    font-size: 0.75em;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  i {
    background-color: var(--bg-color);
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 0 5px;
    padding: 5px;
    border-radius: 100%;
  }

  i.letter {
    text-decoration: none;
    font-style: unset;
    font-weight: bold;
    font-size: 1.25em;
    font-family: 'Courier New', Courier, monospace;
  }

  a:hover i {
    transition: all 0.2s ease-in;
    background-color: var(--secondary-color);
    color: var(--bg-color);
    transform: scale(1.15);
  }
  ul {
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
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
            <a href={link.url}>
              {#if link.icon}
                <i class="material-icons">{link.icon}</i>
              {:else}
                <i class="letter">{link.name.charAt(0)}</i>
              {/if}
              <span>{link.name}</span>
            </a>
          </li>
        {/each}
      </ul>
    </div>
  {/each}
</div>
