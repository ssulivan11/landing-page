import App from './App.svelte'
import { greeting } from './utils/random'
import allLinks from '../links.json'

const app = new App({
  target: document.body,
  props: {
    greeting: greeting(),
    allLinks
  }
})

export default app
