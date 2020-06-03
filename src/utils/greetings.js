export default () => {
  const hour = new Date().getHours()
  if (hour < 11) return '🏠 Hello, Good Morning'
  if (hour >= 11 && hour <= 16) return '🏠 Hey, Good Afternoon'
  if (hour >= 16 && hour <= 20) return '🏠 Hello, Good Evening'
  return '🏠 Good Night'
}
