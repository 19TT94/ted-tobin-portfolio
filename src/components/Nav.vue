<template>
  <div id="nav">
    <router-link class="home" to="/">
      <img :src="require('@/assets/images/ttcreative.svg')">
    </router-link>
    <div class="toggle" @click="toggleNav">
      <div class="bar" :class="{ 'rotate': open }"></div>
      <div class="bar" :class="{ 'rotate': open }"></div>
    </div>
    <div class="menu" :class="{ 'reveal': open }">
      <router-link class="item desktop" to="/" @click.native="toggleNav">
        Home
      </router-link>
      <router-link class="item" to="/about" @click.native="toggleNav">
        About
      </router-link>
      <router-link class="item" to="/copy" @click.native="toggleNav">
        Copy
      </router-link>
      <a class="item download" :href="require('@/assets/images/scripts-samples.pdf')" download>
        Scripts
      </a>
      <a class="phone item" href="tel:323-497-1947"><font-awesome-icon :icon="['fas', 'phone']" />
        <span class="phone">
          (323) 497-1947
        </span>
      </a>
      <a class="item" href="mailto:ted.tobin@gmail.com">
        <font-awesome-icon :icon="['fas', 'envelope']" />
      </a>
      <a href="https://www.instagram.com/ttobin32/" target="_blank">
        <font-awesome-icon class="item" :icon="['fab', 'instagram']" />
      </a>
      <a href="https://www.linkedin.com/in/ted-tobin-7655406/" target="_blank">
        <font-awesome-icon class="item" :icon="['fab', 'linkedin']" />
      </a>
    </div>
    <div class="modal" :class="{ 'hide': !modal, 'remove': remove }" v-if="currentPage === 'Home'">
      <span class="modal-text" :class="{ 'reveal': creative }">Creative Director.</span>
      <span class="modal-text" :class="{ 'reveal': writer }">Copywriter.</span>
      <span class="modal-text" :class="{ 'reveal': consultant }">Consultant.</span>
   </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',

  mounted () {
    setTimeout(() => {
      this.creative = true
      setTimeout(() => {
        this.writer = true
        setTimeout(() => {
          this.consultant = true
          setTimeout(() => {
            this.modal = false
            setTimeout(() => {
              this.remove = true
            }, 1000)
          }, 2000)
        }, 1000)
      }, 1000)
    }, 1000)
  },

  data () {
    return {
      currentPage: this.$router.currentRoute.name,
      open: false,
      modal: true,
      remove: false,
      creative: false,
      writer: false,
      consultant: false
    }
  },

  methods: {
    toggleNav () {
      this.open = !this.open
    }
  }
}
</script>

<style lang="scss">

@import "@/assets/scss/app.scss"; // global styles

.home {
  position: absolute;
  top: 0;
  left: 0;
  margin: 1.5rem 1.5rem;
  z-index: $front;

  @media #{$small} {
    margin: 1rem 0;
  }

  &:hover {
    cursor: pointer;
  }

  img {
    width: 80px;
    height: 80px;
    padding: 0;
    transform: translateY(2px);
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

  &:hover {
    cursor: pointer;
  }

  @media #{$small} {
    margin: 2rem 2.4rem;
  }

  .bar {
    width: 100%;
    height: 2px;
    background: $blue;
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
    color: $blue;
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

.remove {
  display: none;
}

.rotate {
  transform: rotate(45deg);

  &:first-child {
    background: $yellow;
    transform: rotate(45deg) translateX(6px);
  }

  &:last-child {
    background: $yellow;
    transform: rotate(-45deg) translateX(6px);
  }
}

.desktop {
  display: block;

  @media #{$small} {
    display: none;
  }
}

.phone {
  position: relative;

  &:hover span {
    opacity: 1;
  }

  .svg-inline--fa {
    width: 15px;
  }

  span {
    opacity: 0;
    position: absolute;
    top: 38px;
    left: -35px;
    width: 120px;
    color: $orange;
    font-size: 14px;
    transition: all ease 0.5s;
  }
}

</style>
