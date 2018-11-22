<template>
  <div class="c-wrapper">
    <div class="container-fluid">
      <div class="row">
      <div class="col-12">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./../partials/Card";
export default {
  name: "Home",
  components: {
    Card
  },
  props: {},
  data() {
    return {};
  }
};
</script>

<style lang='scss'>
</style>
