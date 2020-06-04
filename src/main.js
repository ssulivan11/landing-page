import App from './App.svelte'
import randomImageUrl from './utils/random'
import greetings from './utils/greetings'
import allLinks from '../links.json'

const app = new App({
  target: document.body,
  props: {
    imageUrl: randomImageUrl(),
    greetings: greetings(),
    allLinks
  }
})

export default app
