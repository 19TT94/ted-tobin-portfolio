<template>
  <div id="home">
    <div class="main">
      <h1 class="title">Art&nbsp;with&nbsp;an outcome.</h1>
      <hr class="line"/>
      <h4>Ted Tobin Creative online and offline marketing&nbsp;consultant.</h4>
    </div>
    <div class="bar">
      <div class="wrapper">
        <div class="text">
          Online and Offline marketing consultant. I don't want to work for you, I want  to work with you. New site coming soon!
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss">

  @import "@/assets/scss/app.scss"; // global styles

  #home {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    text-align: left;

    .main {
      width: 50%;

      .title {
        font-weight: 200;
        font-size: 800%;
        letter-spacing: 2px;
        text-shadow: 10px 10px 10px rgba(0,0,0,0.2);
        padding: 20px;
        line-height: 100px;
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
        font-size: 20px;
        line-height: 24px;
        text-shadow: 10px 10px 10px rgba(0,0,0,0.2);
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
        width: 50%;
        height: 25%;
        overflow: hidden;

        .text {
          position: absolute;
          width: 250%;
          left: 0;
          // transform: translateX(100%);
          animation: scroll 20s infinite linear;
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
</style>
