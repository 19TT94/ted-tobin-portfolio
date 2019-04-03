<template>

	<div class="word-slider">
    <div class="word-wrapper">
  		<p class="word">
  			<span class="letter" v-for="letter in letters">{{letter}}</span>
        <span class="letter-mut" v-for="item in text"
          :style="{ left: item.pos.x + 'px', top: item.pos.y + 'px' }">{{item.letter}}</span>
  		</p>
  	</div>

  	<button @click="toggleScatter">Scatter</button>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',

  data() {
		return {
			scatter: false,
			quote: "word",
      text: []
		};
	},

	mounted() {
    // get letters in word
		let letters = document.getElementsByClassName('letter')
    // set initial position based on relative
		for (var i=0; i < letters.length; i++) {
      let pos = {
        x: letters[i].offsetLeft,
        y: letters[i].offsetTop
      }
      // build data structure ~ each slide contains letters w/ corresponding positions
      this.text.push({
        letter : letters[i].innerHTML,
        pos    : pos
      })
    }
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
			let elem = document.getElementsByClassName('letter-mut');
			if(this.scatter) {
				// set position of each letter
				this.text.forEach((item,index)=> {
					// psuedo random position ~ seed with window width/height
					var randLeft = Math.floor(Math.random() * document.body.clientWidth)
					var randTop = Math.floor(Math.random() * document.body.clientHeight)
					// move letter
					elem[index].style.left = randLeft + "px"
					elem[index].style.top = randTop + "px"
				})
			} else {
				// reset letter position
				this.text.forEach((item,index)=> {
					elem[index].style.left = item.pos.x + "px"
					elem[index].style.top = item.pos.y + "px"
				})
			}
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
  visibility: hidden;

  &-mut {
    position: absolute;
    transition: all 1s ease;
  }
}

button {
	position: absolute;
	bottom: 10%;
}
</style>
