<template>


  <a class="container-click" v-on:click="picClick" >

    <img :src="getPic(cardData.id)"  class="container-icon">

    <div v-if="cardData.name" class="container-title">
      {{cardData.name}}
    </div>

  </a>

</template>

<script>
import {getPicName} from "./dataMap";

export default {
name: "timelineCardColumnItem",
  props: {
    cardData: {
      type: Object,
      default: ()=>{
        return {};
      }
    }
  },


  methods: {
    getPic() {
      return getPicName(this.cardData.id);
    },
    picClick() {
      this.$emit("picItemClick",this.cardData)

    }

  }
}
</script>

<style scoped>
.container-title {
  overflow: hidden;
  text-align: center;
  display: inline-block;
  font-size: 12px;
  color: gray;
  max-width: 100%;
}
.container-icon {
  margin-left: 10px;
  display: block;
  width: 13px;
  height:13px;
  box-sizing: content-box;
}
</style>
