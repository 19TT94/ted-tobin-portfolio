<template>
  <div id="home">
    <div class="main">
      <h1 class="title">It's&nbsp;art&nbsp;with an&nbsp;outcome.</h1>
      <hr class="line"/>
      <h4><span class="red">Ted Tobin Creative</span> online and offline marketing&nbsp;consultant.</h4>
    </div>
    <!-- <div class="bar">
      <div class="wrapper">
        <div class="text">
          <span>Creative Director</span>&nbsp;
          <span>Copywriter</span>&nbsp;
          <span>Consultant</span>
        </div>
      </div>
    </div> -->

    <!-- <div class="video-container" :class="{ hide : through }">
      <div class="wrapper">
        <youtube id="5CYbEEebcL0" @player="setPlayer($event)"></youtube>
      </div>
      <button @click="go()">Through to <em>Ted Tobin Creative</em>.</button>
   </div> -->
  </div>
</template>

<script>

import youtube from '@/components/Youtube.vue'

export default {

  components: {
    youtube
  },

  data () {
    return {
      through: false,
      player: null
    }
  },

  methods: {
    setPlayer(player) {
      this.player = player
      this.player.playVideo();
    },
    go () {
      this.through = true
      this.player.pauseVideo();
    }
  }
}
</script>

<style lang="scss">

  @import "@/assets/scss/app.scss"; // global styles

  #home {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    text-align: left;
    overflow: hidden;

    .main {
      width: 50%;

      .title {
        font-weight: 400;
        font-size: 500%;
        letter-spacing: 2px;
        text-shadow: 10px 10px 10px rgba(0,0,0,0.2);
        padding: 20px;
        line-height: 70px;
        -webkit-font-smoothing: antialiased;

        @media #{$small} {
          line-height: 100px;
          font-size: 800%;
        }
      }

      .line {
        width: 50%;
        height: 5px;
        margin: 0 20px;
        background: $yellow;
        border: 0;
        box-shadow: 10px 10px 10px rgba(0,0,0,0.2);
      }

      h4 {
        margin: 20px;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        text-shadow: 10px 10px 10px rgba(0,0,0,0.2);

        span {
          color: $red;
          font-size: 18px;
          font-weight: 400;
        }
      }
    }

    .bar {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 8%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $blue;
      color: $yellow;
      text-align: center;
      text-transform: uppercase;

      .wrapper {
        position: relative;
        width: 80%;
        height: 40%;
        overflow: hidden;

        @media #{$small} {
          width: 50%;
        }

        .text {
          position: absolute;
          width: 265%;
          left: 0;
          animation: scroll 15s infinite linear;

          span {
            margin-right: 200px;
          }
        }
      }
    }

    .video-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: $menu + 1;
      background: rgba(255,255,255,0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .wrapper {
        width: 80%;
        height: 60%;
        max-width: 715px;

        iframe {
          width: 100%;
          height: 100%;
        }
      }

      button {
        margin: 10px;
        padding: 5px 10px;
        color: $blue;
        transition: all ease 1s;

        &:hover {
          color: $red;
        }
      }
    }
  }

  @keyframes scroll {
    0% {
      transform: translateX(50%);
    }

    100% {
      transform: translateX(-100%);
    }
  }

  .hide {
    visibility: hidden;
  }
</style>
