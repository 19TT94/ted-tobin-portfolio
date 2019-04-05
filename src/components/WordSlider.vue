<template>

	<div class="word-slider">
    <div class="word-wrapper">
  		<p class="word" v-for="quote in quotes">
  			<span class="letter" v-for="letter in quote">{{letter}}</span>
  		</p>
  	</div>

  	<button @click="toggleScatter">Scatter</button>
  </div>

</template>

<script>
export default {
  name: 'WordSlider',

  data() {
		return {
			scatter: false,
			quote: "word",
      quotes: [
        "word1",
        "word2",
        "word3",
        "word4"
      ]
		};
	},

  mounted() {
    this.quotes.forEach((quote,index)=> {
      quote = this.quote.split("")
    })
  },

	computed: {
		/*@returns array of letters from word data */
		letters() {
			return this.quote.split("")
		}
	},

  methods: {
    toggleScatter() {
			// toggle scatter boolean
			this.scatter = !this.scatter
			// get absolutly positioned letters
			let elems = document.getElementsByClassName('letter')
			if(this.scatter) {
        for(var index=0; index < elems.length; index++) {
          var randLeft = this.random(document.body.clientWidth)
					var randTop = this.random(document.body.clientHeight)
          elems[index].style.transform = "translate(" + randLeft + "px," + randTop + "px)"
        }
			} else {
        for(var index=0; index < elems.length; index++) {
          var randLeft = this.random(document.body.clientWidth)
					var randTop = this.random(document.body.clientHeight)
          elems[index].style.transform = "translate(0)"
        }
			}
		},
		random(max) {
			// random value based on max
			let value = Math.floor(Math.random() * max/2);
			// return +/- based on seed
			return Math.random() < 0.5 ? -value : value;
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
}

.letter {
  position: relative;
	display: inline-block;
	transition: all ease 0.5s;
}

button {
	position: absolute;
	bottom: 10%;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100px;
}
</style>
