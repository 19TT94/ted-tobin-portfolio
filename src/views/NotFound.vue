<template>
  <div id="not-found">
    <p class="bio">
      404
    </p>
    <router-link class="item desktop" to="/">Back to Home</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

@import "@/assets/scss/app.scss"; // global styles

#not-found {
  padding: 0 2rem;
  color: $orange;
  background: $black;
  min-height: 100%;
  @include flexbox(column, nowrap, center, center);
}
</style>
