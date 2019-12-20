<template>
  <div id="about">

    <div id="slider">
      <slider :quotes="quotes" />
    </div>

    <h2>Creative Director. Copywriter. Consultant.</h2>

    <p class="bio">
      I have had the privilege of working on some of the biggest films of all time. (Star Wars, Avengers, Jungle Book, Beauty and The Beast, Black Panther and The Fast and Furious) I have brought together teams of talented creative people who made me look good. (Created the Disney In-house marketing department) I am now returning to my roots as a copywriter as well as helping out both studios and vendors alike as a creative consultant. I am proud of where I have been and excited about where I am going.
    </p>

  </div>
</template>

<script>
import slider from '@/components/WordSlider'

export default {
  components: {
    slider
  },

  data () {
    return {
      quotes: [
        'Every generation has a story',
        'Don’t let anyone spoil this.',
        'Hero…Legend…King',
        'Anyone can save the galaxy ... once.',
        'Question reality. Change your destiny.',
        'New model original parts',
        'Bring the adventure…to life',
        'A whole new kind of animal'
      ]
    }
  }
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

  #slider {
    position: relative;
    width: 100%;
    height: 250px;
  }

  h2 {
    color: $blue;
    font-size: 1rem;
    padding: 10px * 2;

    @media #{$small} {
      font-size: inherit;
    }
  }

  .bio {
    line-height: 30px;
    font-size: 0.75rem;

    @media #{$small} {
      font-size: inherit;
    }
  }
}
</style>
