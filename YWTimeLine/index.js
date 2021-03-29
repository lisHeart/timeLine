import Timeline from './timeline.vue'
import TimelineItem from './timelineItem.vue'
import TimelineTitle from './timelineTitle.vue'
import Timelinecard from './timelineCard'

export {
  Timeline,
  TimelineItem,
  TimelineTitle,
  Timelinecard,
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(Timeline.name, Timeline)
  window.Vue.component(TimelineItem.name, TimelineItem)
  window.Vue.component(TimelineTitle.name, TimelineTitle)
  window.Vue.component(Timelinecard.name, Timelinecard)
}
