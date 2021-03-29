<script>
  export default {
    name: 'TimelineItemBase',
    props: {
      bgColor: {
        type: String,
        default: '#0096F2'
      },
      lineColor: {
        type: String,
        default: '#0096F2'
      },
      hollow: {
        type: Boolean,
        default: false
      },
      timelineDirection: {
      type: String,
      default: "row"
      },
      iconSize: {
        type: String,
        default: ''
      },
      obj: {
        type: Object,
        default: function () {
          return  {endTime:""}
        }
      },
      imgSource: {
        type: Object,
        default: ()=>{
          return {}
        }
      },
      fontColor: {
        type: String,
        default: '#37414a'
      },
      identifier: {
        type: Number,
        default: 0
      }
    },

    data () {
      return {
        slotOthers: false,
        isTimeArea: false,
      }
    },

    computed: {
      //改变li的属性
      itemStyle () {
        let style = {'color': this.fontColor};
        if (this.identifier%2 == 0){
          style = Object.assign({}, style, {
            'flex-direction': "column"
          })
        }else {
          style = Object.assign({}, style, {
            'flex-direction': "column-reverse"
          })
        }

        return style;
      },

      slotClass () {
        let className = '';
        if (this.slotOthers) {
          className = 'timeline-others'
        }
        else if (this.hollow){
          className = 'hollow'
        }
        return className
      },

      timeAreaClass () {
        let className = '';
        //先根据传入的类型判断用什么类
        if (this.timelineDirection === 'row'){
          //再根据奇偶性获取类别
          if (this.identifier%2 == 0) {
            className = 'timeline-time-area-top'
          }
          else{
            className = 'timeline-time-area-bottom'
          }
        }else if (this.timelineDirection === 'column'){
          className = 'timeline-time-area-column'
        }

        return className
      },

      nameAreaClass() {
        let className = '';

        if (this.identifier%2 == 0) {
          className = 'timeline-name-area-bottom'
        }
        else{
          className = 'timeline-name-area-top'
        }

        return className
      },

      timeLabelClass() {
        let className = '';

        if (this.timelineDirection == "column-right") {
          className = 'timeLabel-column-right'
        } else{
          className = 'timeLabel-column-left'
        }

        return className
      },
      timelineCircleClass() {
        let className = this.getPic();

        if (this.timelineDirection == "column-right") {
          className += ' timeline-circle-column-right'
        } else if (this.timelineDirection == "column-left") {
          className = ' timeline-circle-column-left'
        }else{
          className = ' timeline-circle-column'
        }

        return className
      }
    },



    mounted () {
      // this.slotOthers = !!this.$refs.others.innerHTML
    },
  }
</script>
