import * as customJson from '../../custom.json'

const {
  morningText,
  afternoonText,
  eveningText,
  nightText,
  images,
  imageRotation,
} = customJson

interface IRandomArr {
  translate: string
  lang: string
}

const getRandom = (arr: Array<string | IRandomArr>) =>
  arr[Math.floor(Math.random() * arr.length)]

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

let imageCount = -1
const imageName = () => {
  if (!images.length) return null
  if (imageRotation === 'ordered') {
    imageCount += 1
    if (imageCount >= images.length) imageCount = 0
    return images[imageCount]
  }
  return getRandom(images)
}

export { greeting, imageName }
