<template>
  <ul class="timeline" ref="timeline">
    <timeline-item v-for="(item,i) in this.dataSource" v-on:cardClick="cardClick" v-on:nodeClick="nodeClick" v-on:picItemClick="picItemClick" :key="i" :timelineDirection="timelineDirection" :identifier="i" :obj="item"></timeline-item>
    <slot />
  </ul>
</template>
<script>
  import TimelineItem from "./timelineItem";

  export default {
    name: 'Timeline',
    components: {TimelineItem},
    props: {
      //数据源
      dataSource: {
        type: Array,
        default:function () {
          return []
        }
      },
      timelineDirection: {
        type: String,
        default: "row"
      },
      timelineTheme: {
        type: String,
        default: '#0096F2'
      }
    },
    data() {
      return {
        timelineDirectionData: this.timelineDirection
      }
    },

    mounted() {
      const timeline = this.$refs.timeline
      timeline.style.setProperty('--timelineTheme', this.timelineTheme)
      timeline.style.setProperty('--timelineDirection', this.timelineDirectionData.indexOf("column")!=-1?"column":"row")
      console.log(timeline.style.getPropertyValue("--timelineDirection"));

    },
    methods: {
      picItemClick(item){
        this.$emit("picItemClick",item)
      },

      nodeClick(model){
        this.$emit("nodeClick",model)
      },

      cardClick(card) {
        this.$emit("cardClick",card)
      }
    }

   }
</script>

<style>
  .timeline {
    display: flex;
    padding: 0;
    position: relative;
    flex-direction: var(--timelineDirection);
    flex-wrap: nowrap;
    font-family: PingFangSC-light, Avenir, Helvetica, Arial, Hiragino Sans GB, Microsoft YaHei, sans-serif;
    -webkit-font-smoothing: antialiased;
    margin: 10px 20px;
    flex: 1;
    overflow: auto;

  }
  .timeline-item-row {
    display: flex;
    height: 160px;
    width: 200px;
    flex-direction: column;
    position: relative;
  }
  .timeline-item-column{
    display: flex;
    height: auto;
    width: 200px;
    flex-direction: column;
    position: relative;
  }
  .timeline-time-area-top {
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-bottom: 2px dashed var(--timelineTheme);
    padding-bottom: 15px;
  }

  .timeline-time-area-bottom {
    height: 50%;
    flex-direction: column;
    padding-top: 15px;
    display: flex;
  }

  .timeline-name-area-top {
    height: 50%;
    border-bottom: 2px dashed var(--timelineTheme);
  }

  .timeline-name-area-bottom {
    height: 50%;

  }
  .timeline-card{
    display: flex;
    height: fit-content;
    flex-direction: column;
  }
  .timeLabel{
    width: 100px;
    height: 15px;
    white-space: pre-line;
    color: var(--timelineTheme);
    font-size: 10px;
    font-weight: bold;
  }
  .timeLabel-column-left {
    width: 100px;
    height: auto;
    white-space: pre-line;
    color: var(--timelineTheme);
    font-size: 10px;
    font-weight: bold;
  }
  .timeLabel-column-right {
    width: 100px;
    height: auto;
    align-self: flex-end;
    text-align: end;
    white-space: pre-line;
    color: var(--timelineTheme);
    font-size: 10px;
    font-weight: bold;
  }

  .nodePic{
    font-size: 25px;
    margin-left: 18px;
    display: inline-block;
    position: absolute;
    box-sizing: content-box;
    margin-top: -15px;
    border-radius: 12px;
    bottom: 68px;
    background-color: white;
  }




  .timeline-circle-column {
    width: 16px;
    height: 16px;
    margin-left: 25px;
    z-index: 1;
    box-sizing: content-box;
    margin-top: -5px;
  }

  .timeline-circle-column-right {
    width: 16px;
    align-self: flex-end;
    height: 16px;
    margin-right: 25px;
  }

  .timeline-circle-column-left {
    width: 16px;
    height: 16px;
    margin-left: 25px;
  }

  .card-detail{
    border-top: 1px dashed #999999;
    display: flex;
    flex-wrap: wrap;
  }
  .container-click-row {
    display: flex;
    align-items: center;
  }
  .container-click {
    width: 50%;
    display: flex;
    align-items: center;
  }




  .timeline-circle.hollow {
    background-color: var(--timelineBg);
  }

  .timeline-title {
    position: relative;
    display: inline-block;
    /**
     * BFC inline-block 元素与其兄弟元素、子元素和父元素的外边距都不会折叠（包括其父元素和子元素）
     */
    cursor: crosshair;
    margin: -.15em 0 15px 28px
  }
  .timeline-title:not(:first-child) {
    margin-top: 28px;
  }
  .timeline-title-circle {
    left: -36px;
    top: .15em;
    width: 16px;
    height: 16px;
  }

</style>
