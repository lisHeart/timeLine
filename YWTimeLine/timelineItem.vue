<template>

  <li v-if="timelineDirection ==='row'" class="timeline-item-row" :style="itemStyle">
    <div  :class="timeAreaClass">
      <div class="timeLabel">
        {{obj.startTime}}
      </div>

      <div v-if="obj.endTime||''!=''" class="timeLabel">
        {{obj.endTime}}
      </div>
    </div>

    <i :class="getPic()" class="nodePic"  v-on:click="nodeClick" style="color: #0096F2"></i>

    <div  :class="nameAreaClass">
      <timeline-card :item="obj" v-on:picItemClick="picItemClick" class="timeline-card" :timeline-direction-theme="timelineDirection">
      </timeline-card>
    </div>

  </li>

  <li v-else-if="timelineDirection.indexOf('column')!=-1"  class="timeline-item-column" >
    <div :class="timeLabelClass">
        {{obj.startTime}}
    </div>
    <i  :class="timelineCircleClass"  v-on:click="nodeClick" style="color: #0096F2"></i>
    <div>
      <timeline-card :item="obj" v-on:cardClick="cardClick" v-on:picItemClick="picItemClick" class="timeline-card" :timeline-direction-theme="timelineDirection">
      </timeline-card>
    </div>
  </li>
</template>

<script>
  import timelineItemBase from './timelineItemBase.vue'
  import TimelineCard from "./timelineCard";
  import {getPicName} from "@/components/YWTimeLine/dataMap";

  export default {
    components: {TimelineCard},
    extends: timelineItemBase,

    methods: {
      getPic() {
        return getPicName(this.obj.diagType);
      },
      picItemClick(item) {
        this.$emit("picItemClick",item)
      },

      nodeClick(model){
        this.$emit("nodeClick",this.obj)
      },

      cardClick(card){
        this.$emit("cardClick",card)
      }
    },
  }
</script>

