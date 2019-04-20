<template>
  <div id="about">
    <p class="bio">
      I have had the privilege of working on some of the biggest films of all time. (Star Wars, Avengers, Jungle Book, Beauty and The Beast, Black Panther and The Fast and Furious) I have brought together teams of talented creative people who made me look good. (Created the Disney In-house marketing department) I am now returning to my roots as a copywriter as well as helping out both studios and vendors alike as a creative consultant. I am proud of where I have been and excited about where I am going.
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

@import "@/assets/scss/app.scss"; // global styles

#about {
  padding: 0 2rem;
  color: $orange;
  background: $black;
  min-height: 100%;
  @include flexbox(column, nowrap, center, center);

  .bio {
    line-height: 30px;
  }
}
</style>
