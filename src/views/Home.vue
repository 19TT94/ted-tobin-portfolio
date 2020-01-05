<template>
  <div id="home">
    <div class="main">
      <h1 class="title">Art&nbsp;with&nbsp;an outcome.</h1>
    </div>
    <div class="info">
      <h4>Ted Tobin Creative online and offline marketing consultant. I don’t want to work for you, I want to
work with you. Website in the works, more content to come!</h4>
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

    .main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      height: 100vh;
      width: 100vw;
      text-align: left;

      .title {
        font-weight: bold;
        font-size: 800%;
        letter-spacing: 2px;
        text-shadow: 10px 10px 10px rgba(0,0,0,0.2);
        padding: 20px;
      }
    }

    .info {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 20%;
      margin: 20px;
      text-align: left;
      background: $yellow;
      box-shadow: 0 -5px 10px rgba(0,0,0,0.1);

      h4 {
        padding: 20px;
        line-height: 30px;
      }
    }
  }
</style>
