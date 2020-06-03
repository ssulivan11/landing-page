<script>
  import { onMount } from 'svelte'
  onMount(async () => {
    const toggleSwitch = document.querySelector(
      '.theme-switch input[type="checkbox"]'
    )
    const currentTheme = localStorage.getItem('theme')
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme)
      if (currentTheme === 'dark') toggleSwitch.checked = true
    }

    const switchTheme = (event) => {
      if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        return localStorage.setItem('theme', 'dark')
      }
      document.documentElement.setAttribute('data-theme', 'light')
      return localStorage.setItem('theme', 'light')
    }

    toggleSwitch.addEventListener('change', switchTheme, false)
  })
</script>

<style>
  .theme-switch-wrapper {
    display: flex;
    align-items: center;
  }

  .theme-switch {
    display: inline-block;
    height: 24px;
    position: relative;
    width: 40px;
  }

  .theme-switch input {
    display: none;
  }

  .slider {
    background-color: #333;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
  }

  .slider:before {
    background-color: #eee;
    bottom: 4px;
    content: '';
    height: 16px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 16px;
  }

  input:checked + .slider {
    background-color: #eee;
  }

  input:checked + .slider:before {
    transform: translateX(16px);
    background-color: #333;
  }

  .slider.round {
    border-radius: 24px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>

<div class="theme-switch-wrapper">
  <label class="theme-switch" for="checkbox">
    <input type="checkbox" id="checkbox" />
    <div class="slider round" />
  </label>
</div>
