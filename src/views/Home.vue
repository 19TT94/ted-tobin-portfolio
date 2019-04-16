<template>
  <div id="home">
    <navigation />
    <slider :quotes="quotes" />
  </div>
</template>

<script>
import navigation from "@/components/Nav";
import slider from "@/components/WordSlider";

export default {
  components: {
    navigation,
    slider
  },

  data() {
    return {
      quotes: [
        "Every generation has a story",
        "New model original parts",
        "A whole new kind of animal",
        "Question reality. Change your destiny.",
        "Hero…Legend…King",
        "Anyone can save the galaxy…once.",
        "Bring the adventure…to life",
        "Don’t let anyone spoil this."
      ]
    }
  }
}
</script>

<style>

</style>
