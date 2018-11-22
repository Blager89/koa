<template>
  <div id="app">
    <Header/>
    <Home/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/partials/Header.vue";
import Footer from "./components/partials/Footer.vue";
import Home from "./components/pages/Home.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer,
    Home
  }
};
</script>

<style>
</style>
