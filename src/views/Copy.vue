<template>
  <div id="about">

    <div id="slider">
      <slider :quotes="quotes" />
    </div>

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
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  @include flexbox(column, nowrap, center, center);

  #slider {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
  }
}
</style>
