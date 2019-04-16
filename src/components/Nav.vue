<template>
  <div id="nav">
    <router-link class="home" to="/">
      <span class="first">Ted</span> <span class="last">Tobin</span>
    </router-link>
    <div class="toggle" @click="toggleNav">
			<div class="bar" :class="{ 'rotate': open }"></div>
			<div class="bar" :class="{ 'rotate': open }"></div>
		</div>
    <div class="menu" :class="{ 'reveal': open }">
      <router-link class="item" to="/">Scripts</router-link>
      <router-link class="item" to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',

  data() {
    return {
      open: false
    }
  },

  methods: {
    toggleNav() {
      console.log("hi");
      this.open = !this.open;
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
	width: 30px;
	height: 30px;
	margin: 2rem 2.4rem;
	z-index: $front;

	.bar {
		width: 100%;
		height: 2px;
		background: $red;
		margin-top: 6px;
		transition: all ease-in-out 0.5s;
	}
}

.menu {
  position: absolute;
  margin: 2rem 2.4rem;
  width: auto;
  top: 0;
  right: 50px;
  display: flex;
  flex-direction: row;
  z-index: $front;
  opacity: 0;
  visibility: hidden;
  transition: all ease 0.5s;

  .item {
    font-family: $font;
    font-weight: 200;
    font-size: 1.5rem;
    color: $yellow;
    padding: 0 1rem;
  }
}

.reveal {
  opacity: 1;
  visibility: visible;
}

.rotate {
  transform: rotate(45deg);
}

</style>
