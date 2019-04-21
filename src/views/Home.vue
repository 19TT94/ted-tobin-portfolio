<template>
  <div id="home">
    <slider :quotes="quotes" />
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

<style>

</style>
