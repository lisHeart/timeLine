<template>
  <a class="container-click-row" v-on:click="picClick">

    <img :src="getPic('1')" class="container-icon-row">

  </a>
</template>

<script>
import {getPicName} from "./dataMap";

export default {
name: "timelineCardRowItem",
  props: {
    cardData: {
      type: Object,
      default: ()=>{
        return {name:"诊断",id:"1",imgPath:"https://user-images.githubusercontent.com/12069729/36057805-80cfc3d2-0e4e-11e8-8851-6fda091ff389.png"};
      }
    }
  },
  methods: {
    getPic() {
      return getPicName(this.cardData.id);
    },
    picClick() {
      console.log("===picClick===")
      this.$emit("picItemClick",this.cardData)

    }
  }
}
</script>

<style scoped>
.container-icon-row {
  margin: 5px 0px 5px 5px;
  display: block;
  width: 15px;
  height:15px;
  box-sizing: content-box;
}
</style>
