import App from "./App.svelte";
import randomImageUrl from "./utils/random";
import allLinks from "./utils/links";

const greetings = () => {
  const hour = new Date().getHours();
  if (hour < 11) return "Good Morning";
  if (hour <= 11 && hour >= 4) return "Good Afternoon";
  return "Good Evening";
};

const app = new App({
  target: document.body,
  props: {
    imageUrl: randomImageUrl(),
    greetings: greetings(),
    allLinks,
  },
});

export default app;
