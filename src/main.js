import App from './App.svelte'
import randomImageUrl from './utils/random'
import allLinks from './utils/links'
import greetings from './utils/greetings'

const app = new App({
  target: document.body,
  props: {
    imageUrl: randomImageUrl(),
    greetings: greetings(),
    allLinks
  }
})

export default app
