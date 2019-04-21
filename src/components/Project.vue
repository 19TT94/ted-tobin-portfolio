<template>
  <div class="project" :class="{'open': open}">
    <h1>{{work[currentProject].title}}</h1>
    <img :src="work[currentProject].poster">
    <button class="close" @click="closeProject">
      <div class="toggle">
        <div class="bar rotate"></div>
        <div class="bar rotate"></div>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'WordSlider',

  props: {
    current: Number,
    open: Boolean
  },

  computed: {
    currentProject () {
      return this.current
    }
  },

  data () {
    return {
      modal: this.$store.state.modal,
      work: [
        {
          'quote': 'Every generation has a story"',
          'image': require('@/assets/images/grid/the-force-awakens.jpg'),
          'poster': require('@/assets/images/posters/the-force-awakens.jpg'),
          'title': 'Star Wars The Force Awakens',
          'description': ''
        },
        {
          'quote': 'Don’t let anyone spoil this.',
          'image': require('@/assets/images/grid/the-last-jedi.jpg'),
          'poster': require('@/assets/images/posters/the-last-jedi.jpg'),
          'title': 'Star Wars The Last Jedi',
          'description': ''
        },
        {
          'quote': 'Hero…Legend…King',
          'image': require('@/assets/images/grid/black-panther.jpg'),
          'poster': require('@/assets/images/posters/black-panther.jpg'),
          'title': 'Black Panther',
          'description': ''
        },
        {
          'quote': 'Anyone can save the galaxy…once.',
          'image': require('@/assets/images/grid/guardians.jpg'),
          'poster': require('@/assets/images/posters/guardians.jpg'),
          'title': 'Guardians of the Galaxy Vol. 2',
          'description': ''
        },
        {
          'quote': 'Question reality. Change your destiny.',
          'image': require('@/assets/images/grid/doctor-strange.jpg'),
          'poster': require('@/assets/images/posters/doctor-strange.jpg'),
          'title': 'Doctor Strange',
          'description': ''
        },
        {
          'quote': 'New model original parts',
          'image': require('@/assets/images/grid/fast-and-furious.jpg'),
          'poster': require('@/assets/images/posters/fast-and-furious.jpg'),
          'title': 'The Fast and the Furious',
          'description': ''
        },
        {
          'quote': 'Bring the adventure… to life',
          'image': require('@/assets/images/grid/the-jungle-book.jpg'),
          'poster': require('@/assets/images/posters/the-jungle-book.jpg'),
          'title': 'The jungle Book',
          'description': ''
        },
        {
          'quote': 'A whole new kind of animal.',
          'image': require('@/assets/images/grid/wolfman.jpg'),
          'poster': require('@/assets/images/posters/wolfman.jpg'),
          'title': 'The Wolfman',
          'description': ''
        }
      ]
    }
  },
  methods: {
    closeProject () {
      this.$store.commit('toggle')
    }
  }
}
</script>

<style lang="scss" scoped>

@import "@/assets/scss/app.scss"; // global styles

.project {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: $black;
  z-index: $back;
  opacity: 0;
  text-align: center;
  transition: all ease 0.5s;
  @include flexbox(column, wrap, center, center);

  h1 {
    padding: 4rem;
    color: $blue;
  }

  img {
    max-height: 200px;
    margin: 0 auto;
  }
}

.open {
  opacity: 1;
  z-index: $menu;
}

.close {
  position: absolute;
  top: 5%;
  left: 6%;
  color: $orange;

  .rotate {
    transform: rotate(45deg);

    &:first-child {
      transform: rotate(45deg) translateX(6px);
    }

    &:last-child {
      transform: rotate(-45deg) translateX(6px);
    }
  }
}
</style>
