<template>

	<div class="word-slider">
    <div class="word-wrapper">
  		<p class="word" :id="quotes[index]" v-for="quote,index in quotes">
  			<span class="letter" v-for="letter in quote" v-html="letter"></span>
  		</p>
  	</div>

  	<div class="controls">
      <button class="prev" @click="prev">Prev</button>
      <button class="next" @click="next">Next</button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'WordSlider',

  data() {
		return {
      quotes: [
        "Every generation has a story",
        "New model original parts",
        "A whole new kind of animal",
        "Question reality. Change your destiny",
        "Hero…Legend…King",
        "Anyone can save the galaxy…once.",
        "Bring the adventure…to life",
        "Don’t let anyone spoil this."
      ],
      current: 0
		};
	},

  mounted() {
    // split words into letters
    this.quotes.forEach((quote,index)=> {
      quote = quote.split("")
    })
    this.scatter();
  },

  methods: {
    /*@returns incremented current slide index */
		next() {
      // check for max
			if(this.current === this.quotes.length - 1) {
        this.current = 0
      }
      // increment current
      this.current = this.current + 1
      // set active slide and scatter others
      this.scatter()
		},
    /*@returns decremented current slide index */
		prev() {
      // check for min
			if(this.current === 0) {
        this.current = this.quotes.length
      }
      // decrement current
      this.current = this.current - 1
      // set active slide and scatter others
      this.scatter()
		},
    scatter(control) {
      //remove old active
      let reset = document.getElementsByClassName("active");
      // remove active class from html collection
      while (reset.length) reset[0].classList.remove('active');
			// get absolutly positioned letters
			let elems = document.getElementsByClassName("letter")
      // randomly position all words
      for(var index=0; index < elems.length; index++) {
        var randLeft = this.random(document.body.clientWidth)
				var randTop = this.random(document.body.clientHeight)
        elems[index].style.transform = "translate(" + randLeft + "px," + randTop + "px)"
      }
      // set active element
      let active = document.getElementById(this.quotes[this.current]).children
      // set each active letter to position 0
      for(var index=0; index < active.length; index++) {
        active[index].style.transform = "translate(0)"
        active[index].classList.add("active")
      }
		},
		random(max) {
			// random value based on max
			let value = Math.floor(Math.random() * max/2)
			// return +/- based on seed
			return Math.random() < 0.5 ? -value : value
		},
    getLetters(word) {
      return word.split("")
    }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.word-wrapper {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

  background: black;
}

.word {
  position: absolute;
}

.letter {
  position: relative;
	display: inline-block;
	transition: all ease 0.5s;
  min-width: 5px;

  color: #CCC7C7;
  opacity: 0.5;
  filter: blur(1px);
}

.active {
  font-size: 20px;

  color: #F9F4F4;
  opacity: 1;
  filter: blur(0);
}

.controls {
	position: absolute;
	bottom: 10%;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100px;
  display: flex;
  flex-direction: row;
}
</style>
