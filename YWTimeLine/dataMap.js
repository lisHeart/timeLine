import TimelineItem from './timelineItem'
import iconName from '@/options/public/iconName'

export function getPicName(id) {
  switch (id) {
    case 1:
      return iconName.ywLiveIcon
    case 2:
      return iconName.ywPainents
    default:
      return 'https://user-images.githubusercontent.com/12069729/36057805-80cfc3d2-0e4e-11e8-8851-6fda091ff389.png'
  }
}
