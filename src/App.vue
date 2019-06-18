<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
const hacks = require('viewport-units-buggyfill/viewport-units-buggyfill.hacks');
const buggyfill = require('viewport-units-buggyfill');


export default {
  data() {
    return {
    };
  },
  created() {
    console.log('App created!');
  },
  mounted() {
    // 修复vierport特性的在某些浏览器上的错误行为
    buggyfill.init({
      hacks,
    });

    console.log('app mounted');
  },
};
</script>
<style>

</style>
