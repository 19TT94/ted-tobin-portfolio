
<template>
  <div id="player"></div>
</template>

<script>

export default {
  name: 'Youtube',

  props: {
    id: String
  },

  data () {
    return {
      player: null
    }
  },

  mounted () {
    setTimeout (()=> {
      this.player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: this.id,
        events: {
          'onReady': (e) => {
            this.$emit('player', e.target)
          }
        }
      })
    }, 500);
  }
}
</script>
