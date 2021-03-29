<template>
  <div  :class="container">
    <div class="card" @mouseover="selectStyle()" v-on:click="cardClick" @mouseout="outStyle()" :style="hover">

      <div v-if="timelineDirectionTheme.indexOf('column')!=-1" class="headLabel"> {{item.diagResult}}</div>
      <div class="nameLabel">
        {{this.getTitle()}}
      </div>
      <div class="nameLabel">
        {{item.orgName}}
      </div>
      <div class="card-detail" :style="cardDetailStyle" v-if="timelineDirectionTheme ==='row'">
        <timeline-card-row-item v-for="(model,index) in item.iconShow" v-on:picItemClick="picItemClick" :cardData="model" :key="index+'11111'"></timeline-card-row-item>
      </div>

      <div class="card-detail" v-else-if="timelineDirectionTheme.indexOf('column')!=-1">
      <timeline-card-column-item v-for="(model,index) in item.iconShow" v-on:picItemClick="picItemClick" :cardData="model" :key="index+'00000'"></timeline-card-column-item>
    </div>
    </div>
  </div>


</template>

<script>

import TimelineCardRowItem from "./timelineCardRowItem";
import TimelineCardColumnItem from "./timelineCardColumnItem";

export default {
  components: {TimelineCardColumnItem, TimelineCardRowItem},
  name: "timelineCard",

  props: {
    timelineDirectionTheme: {
      type:String,
      default: "row"
    },
    item: {
      type:Object,
      default: function () {
        return {};
      }
    },
  },
  data() {
    return {
      ishover: false,
      cardRowStyle: {
        'margin-left': "5px",
        'border-width': "0"
      }
    }
  },
  methods: {
    selectStyle() {
        this.ishover = true
    },
    outStyle() {
      this.ishover = false
    },
    picItemClick(item){
      this.$emit("picItemClick",item)
    },
    cardClick() {
      this.$emit("cardClick",this.item)
    },
    getTitle() {
      if (this.timelineDirectionTheme === 'row'){
        return this.item.diagDept+'('+this.item.diagResult+')';
      }else {
        return this.item.diagDept
      }

    }
  },
  computed: {

    cardDetailStyle() {
      let style = {};

      if (this.timelineDirectionTheme === 'row'){
        style = {"border-top-width":"0px"}
      } else if (this.item.iconShow.length=0){
        style = {"border-top-width":"0px"}
      }
      return style;
    },

    hover (){
      let style = {'color': this.fontColor};
      if (this.ishover){
        style = Object.assign({}, style, {
          'background-color': "#D7F4FF"
        })
      }else {
        style = Object.assign({}, style, {
          'background-color': "white"
        })
      }

      if (this.timelineDirectionTheme === 'row'){
        style = Object.assign({}, style, this.cardRowStyle);
      }else if(this.timelineDirectionTheme === "column-left"){
        style = Object.assign({}, style, {
          'margin-left': "5px"
        })
      }else if(this.timelineDirectionTheme === "column-right"){
        style = Object.assign({}, style, {
          'margin-right': "5px"
        })
      }
      return style;
    },

    container() {
      let classname = "";
      console.log(this.timelineDirectionTheme)
      if (this.timelineDirectionTheme === 'row'){
        classname = "container-card";
      }else if(this.timelineDirectionTheme === "column-left"){
        classname = "container-card-left";
      }else if(this.timelineDirectionTheme === "column-right"){
        classname = "container-card-right";
      }
      return classname;

    }
  }

}
</script>

<style scoped>

.container-card{
  border-left:  2px solid var(--timelineTheme);
  height: 100%;
  margin-left: 30px;
}
.container-card-left{
  border-left:  2px solid var(--timelineTheme);
  height: 100%;
  margin-left: 30px;
}
.container-card-right{
  border-right:  2px solid var(--timelineTheme);
  height: 100%;
  margin-right: 30px;
}
 .headLabel{
   padding-left: 5px;
   font-size: 14px;
   max-width: 100%;
   font-weight: bold;
   color: white;
   background-color: #0096F2;
 }


 .card{
   border: 1px solid var(--timelineTheme);
   border-radius: 5px;
   margin-top: 5px;
   margin-left: 5px;
 }

 .nameLabel{
   margin-top: 3px;
   margin-left: 5px;
   font-size: 12px;
   white-space: pre-wrap;
   overflow: hidden;
   text-overflow:ellipsis;
   white-space: nowrap;
 }
</style>
