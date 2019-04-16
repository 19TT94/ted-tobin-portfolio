<template>
  <div id="nav">
    <router-link class="home" to="/">
      <span class="first">Ted</span> <span class="last">Tobin</span>
    </router-link>
    <div class="toggle" @click="toggleNav">
			<div class="bar"></div>
			<div class="bar"></div>
		</div>
    <div class="menu">
      <router-link class="home" to="/">Home</router-link>
      <router-link class="about" to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',

  methods: {
    toggleNav() {
      console.log("hi");
    }
  }
}
</script>

<style lang="scss">

@import "@/assets/scss/app.scss"; // global styless

.home {
  position: absolute;
  top: 0;
  left: 0;
  margin: 2rem 2.4rem;
  z-index: $front;

  .first {
    color: $red;
    font-size: 1.5rem;
  }

  .last {
    color: $yellow;
    font-size: 1.5rem;
  }
}

.toggle {
	position: absolute;
	top: 0;
	right: 0;
	width: 35px;
	height: 35px;
	margin: 2rem 2.4rem;
	z-index: $front;

	.bar {
		width: 100%;
		height: 3px;
		background: $red;
		margin-top: 6px;
		transition: all ease-in-out 0.5s;
	}
}

.menu {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: $white;
  opacity: 0;
  visibility: hidden;
  z-index: $front;
  transition: all 0.5s ease;

  .item {
    font-family: $font;
    font-weight: 600;
    padding: 1rem 0;
    color: $black;
    font-size: 2rem;
  }
}

</style>
