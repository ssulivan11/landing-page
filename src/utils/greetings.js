export default () => {
  const hour = new Date().getHours()
  if (hour < 11) return '🏠 Mornin!'
  if (hour >= 11 && hour <= 16) return '🏠 Hey, Good Afternoon'
  if (hour >= 16 && hour <= 20) return '🏠 Hello, Good Evening'
  return '🏠 ¡Hasta mañana!'
}
