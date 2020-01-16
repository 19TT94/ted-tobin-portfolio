<template>

  <div class="word-slider">
    <div class="word-wrapper">
      <p class="quote" :id="quoteList[index]" v-for="(quote, index) in quoteList" :key="quote.id">
        <span class="letter" v-for="letter in quote" :key="letter.id" v-html="letter"></span>
      </p>
    </div>

    <div class="controls">
      <button class="prev" @click="prev"><font-awesome-icon icon="chevron-left" /></button>
      <button class="open-work" @click="openProject(current)">View Project</button>
      <button class="next" @click="next"><font-awesome-icon icon="chevron-right" /></button>
    </div>

    <project :current="current" :open="open" />
  </div>

</template>

<script>
import project from '@/components/Project'

export default {
  name: 'WordSlider',

  components: {
    project
  },

  props: {
    quotes: Array
  },

  computed: {
    open () {
      return this.$store.state.modal
    }
  },

  data () {
    return {
      current: 0,
      quoteList: this.quotes
    }
  },

  mounted () {
    this.scatter()
  },

  methods: {
    /* @returns incremented current slide index */
    next () {
      // check for max
      if (this.current === this.quoteList.length - 1) {
        this.current = 0
      }
      // increment current
      this.current = this.current + 1
      // set active slide and scatter others
      this.scatter()
    },
    /* @returns decremented current slide index */
    prev () {
      // check for min
      if (this.current === 0) {
        this.current = this.quoteList.length
      }
      // decrement current
      this.current = this.current - 1
      // set active slide and scatter others
      this.scatter()
    },
    scatter (control) {
      // remove old active
      let reset = document.getElementsByClassName('active')
      // remove active class from html collection
      while (reset.length) reset[0].classList.remove('active')
      // get absolutly positioned letters
      let elems = document.getElementsByClassName('letter')
      // randomly position all words
      for (var i = 0; i < elems.length; i++) {
        var randLeft = this.random(document.body.clientWidth)
        var randTop = this.random(document.body.clientHeight)
        elems[i].style.transform = 'translate(' + randLeft + 'px,' + randTop + 'px)'
      }
      // set active element
      let active = document.getElementById(this.quoteList[this.current]).children
      // set each active letter to position 0
      for (var j = 0; j < active.length; j++) {
        active[j].style.transform = 'translate(0)'
        active[j].classList.add('active')
      }
    },
    random (max) {
      // random value based on max
      let value = Math.floor(Math.random() * max / 2)
      // return +/- based on seed
      return Math.random() < 0.5 ? -value : value
    },
    getLetters (word) {
      return word.split('')
    },
    openProject () {
      this.$store.commit('toggle')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import "@/assets/scss/app.scss"; // global styles

.word-slider {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.word-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: $black;
  overflow: hidden;
  @include flexbox(row, nowrap, center, center);
}

.quote {
  position: absolute;
}

.word {
  @include flexbox(row, nowrap, flex-start, flex-start);
}

.letter {
  position: relative;
  display: inline-block;
  min-width: 5px;
  font-weight: 400;
  color: $gray;
  opacity: 0.5;
  filter: blur(1px);
  transition: all ease 0.5s;
}

.active {
  font-size: 16px;
  font-weight: 200;
  color: $yellow;
  opacity: 1;
  filter: blur(0);
  transition: all ease 0.5s;

  @media #{$small} {
    font-size: 30px;
  }
}

.controls {
  display: block;
  position: absolute;
  bottom: 5%;
  left: 0;
  right: 0;
  width: 90%;
  margin: 0 auto;
  @include flexbox(row, wrap, space-between, center);

  .prev {
    color: $yellow;
  }

  .open-work {
    color: $blue;
    font-weight: 300;
    transition: all ease 0.5s;

    &:hover {
      color: $yellow;
    }
  }

  .next {
    color: $yellow;
  }
}

</style>
