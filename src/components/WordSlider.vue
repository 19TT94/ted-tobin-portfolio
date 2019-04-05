<template>

	<div class="word-slider">
    <div class="word-wrapper">
  		<p class="word">
  			<span class="letter" v-for="letter in letters">{{letter}}</span>
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
      text: []
		};
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
			let elem = document.getElementsByClassName('letter')
			if(this.scatter) {
				// set position of each letter
				this.letters.forEach((item,index)=> {
					// psuedo random position ~ seed with window with half width/height
					var randLeft = this.random(document.body.clientWidth)
					var randTop = this.random(document.body.clientHeight)
					// move letter
					elem[index].style.transform = "translate(" + randLeft + "px," + randTop + "px)"
				})
			} else {
				// reset letter position
				this.letters.forEach((item,index)=> {
					elem[index].style.transform = "translate(0)"
				})
			}
		},
		random(max) {
			// random value based on max
			let value = Math.floor(Math.random() * max/2);
			// return +/- based on seed
			return Math.random() < 0.5 ? -value : value;
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
