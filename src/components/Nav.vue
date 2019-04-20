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
      <a href="#"><font-awesome-icon class="item" :icon="['fab', 'instagram']" /></a>
      <a href="#"><font-awesome-icon class="item" :icon="['fab', 'linkedin']" /></a>
    </div>
    <div class="modal" :class="{ 'hide': !modal }">
      <span class="modal-text" :class="{ 'reveal': creative }">Creative Director.</span>
      <span class="modal-text" :class="{ 'reveal': writer }">Copywriter.</span>
      <span class="modal-text" :class="{ 'reveal': consultant }">Consultant.</span>
   </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',

  mounted() {
    setTimeout(()=> {
      this.creative = true;
      setTimeout(()=> {
        this.writer = true;
        setTimeout(()=> {
          this.consultant = true;
          setTimeout(()=> {
            this.modal = false;
          }, 2000);
        }, 1000);
      }, 1000);
    }, 1000);
  },

  data() {
    return {
      open: false,
      modal: true,
      creative: false,
      writer: false,
      consultant: false
    }
  },

  methods: {
    toggleNav() {
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
  margin: 1.5rem 1.5rem;
  z-index: $front;

  @media #{$small} {
    margin: 2rem 2.4rem;
  }

  .first,
  .last {
    font-size: 1.5rem;
    font-weight: 300;
  }

  .first {
    color: $orange;
  }

  .last {
    color: $blue;
  }
}

.toggle {
	position: absolute;
	top: 0;
	right: 0;
	width: 30px;
	height: 30px;
	z-index: $menu;
  margin: 1.5rem 1.5rem;

  @media #{$small} {
    margin: 2rem 2.4rem;
  }

	.bar {
		width: 100%;
		height: 2px;
		background: $orange;
		margin-top: 6px;
		transition: all ease-in-out 0.5s;
	}
}

.menu {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  z-index: $front;
  opacity: 0;
  visibility: hidden;
  transition: all ease 0.5s;
  background: $black;
  @include flexbox(column, nowrap, center, center);

  @media #{$small} {
    right: 50px;
    width: auto;
    height: auto;
    background: transparent;
    margin: 2rem 2.4rem;
    @include flexbox(row-reverse, nowrap, flex-start, flex-start);
  }

  .item {
    font-family: $font;
    font-weight: 200;
    font-size: 1.2rem;
    color: $blue;
    padding: 1rem;

    @media #{$small} {
      padding: 0 1rem;
    }
  }
}

.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: $menu;
  background: $black;
  transition: all ease 1s;
  @include flexbox(column, nowrap, center, center);

  &-text {
    color: $red;
    opacity: 0;
    padding: 1rem;
    font-size: 1.5rem;
    visibility: visible;
  }
}

.reveal {
  opacity: 1;
  visibility: visible;
}

.hide {
  opacity: 0;
  visibility: hidden;
}

.rotate {
  transform: rotate(45deg);

  &:first-child {
		transform: rotate(45deg) translateX(6px);
	}

	&:last-child {
		transform: rotate(-45deg) translateX(6px);
	}
}

</style>
