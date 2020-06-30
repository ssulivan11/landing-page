import App from './App.svelte'
import { greeting } from './utils/random'
import customJson from '../custom.json'

const app = new App({
  target: document.body,
  props: {
    greeting: greeting(),
    allLinks: customJson.dashboard,
  },
})

export default app
