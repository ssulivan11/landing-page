import * as customJson from '../../custom.json'

const {
  morningText,
  afternoonText,
  eveningText,
  nightText,
  images,
} = customJson

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)]

const greeting = () => {
  const hour = new Date().getHours()
  if (hour < 11) {
    if (!morningText) return 'Good Morning'
    return { time: 'good morning', text: getRandom(morningText) }
  }
  if (hour >= 11 && hour <= 16) {
    if (!afternoonText) return 'Good Afternoon'
    return { time: 'good afternoon', text: getRandom(afternoonText) }
  }
  if (hour >= 16 && hour <= 20) {
    if (!eveningText) return 'Good Evening'
    return { time: 'good evening', text: getRandom(eveningText) }
  }
  if (!nightText) return 'Good Night'
  return { time: 'good night', text: getRandom(nightText) }
}

const imageName = () => {
  if (!images.length) return null
  return getRandom(images)
}

export { greeting, imageName }
