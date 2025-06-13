<script setup>
import HelloWorld from './components/HelloWorld.vue'
import home-page from './pages/HomePage.vue'
</script>

<template>
  <div id="app">
    <base_header />
    <home-page />
    <base-footer />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
