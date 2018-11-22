<template>
  <div class="c-card">
      <div class="c-left-part">321</div>
      <div class="c-right-part" :style="{'background-image': 'url(' + require('@/assets/cover.jpeg') + ')'}">123</div>
    </div>
    <!-- <div class="card" :style="{'background-image': 'url(' + require('@/assets/cover.jpeg') + ')'}"> -->
    
    
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  props: {}
};
</script>

<style lang='scss'>
.c-card {
  margin: 10px;
  display: inline-block;
  width: 700px;
  flex-shrink: 0;
  background: white;
  overflow: hidden;
  height: 364px;
  border-radius: 8px;
  box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);

  .c-left-part {
    display: inline-block;
    width: 290px;
    height: 400px;
    z-index: 10;
    padding: 20px;
  }
  .c-right-part {
    background-color: #000;
    display: inline-block;
    width: 300px;
    height: 400px;
    background-size: cover;
    z-index: 0;
    transform: scale(1.5) rotate(10deg);
    float: right;
  }
}
</style>
