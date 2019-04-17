<template>
  <div id="app">
    <!-- Navigation Bar -->
    <navigation />
    <!-- Pages -->
    <router-view />
  </div>
</template>

<script>
import navigation from "@/components/Nav";

export default {
  name: 'App',

  components: {
    navigation
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
