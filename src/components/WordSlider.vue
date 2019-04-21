<template>

  <div class="word-slider">
    <div class="word-wrapper">
      <p class="word" :id="quotes[index]" v-for="(quote, index) in quotes" :key="quote.id">
        <span class="letter" v-for="letter in quote" :key="letter.id" v-html="letter"></span>
      </p>
    </div>

    <div class="controls">
      <button class="prev" @click="prev"><font-awesome-icon icon="chevron-left" /></button>
      <button class="open-work" @click="openProject(current)">View Work</button>
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

  // computed: {
  //   open () {
  //     return this.$store.state.modal
  //   }
  // },

  data () {
    return {
      current: 0,
      open: this.$store.state.modal
    }
  },

  mounted () {
    // split words into letters
    this.quotes.forEach((quote, index) => {
      quote = quote.split('')
    })
    this.scatter()
  },

  methods: {
    /* @returns incremented current slide index */
    next () {
      // keep modal closed on next
      this.open = false
      // check for max
      if (this.current === this.quotes.length - 1) {
        this.current = 0
      }
      // increment current
      this.current = this.current + 1
      // set active slide and scatter others
      this.scatter()
    },
    /* @returns decremented current slide index */
    prev () {
      // keep modal closed on next
      this.open = false
      // check for min
      if (this.current === 0) {
        this.current = this.quotes.length
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
      let active = document.getElementById(this.quotes[this.current]).children
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

.word {
  position: absolute;
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
  font-size: 20px;
  font-weight: 200;
  color: $white;
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
    color: $orange;
  }

  .open-work {
    color: $blue;
    font-weight: 300;
    transition: all ease 0.5s;

    &:hover {
      color: $orange;
    }
  }

  .next {
    color: $orange;
  }
}

</style>
