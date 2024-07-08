<script setup>
import Test1 from "./components/Test1.vue";
import Test2 from "./components/Test2.vue";
</script>

<template>
  <h1>変更しました</h1>
  <Test1 />
  <Test2 />
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
