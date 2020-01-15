<template>
  <div id="about">

    <h2>Creative Director. Copywriter. Consultant.</h2>

    <p class="bio">
      Do your video ads pop? Do your sizzle reels need a bit more sizzle? Are you just out of creative ideas? Or do you have ideas but are not sure how to execute them?
      <br>
      Let’s work together.
      <br>
      I have been the creative director for some of the biggest films and marketing campaigns ever. (Star Wars, Avengers, The Fast and the Furious.) My goal now is to help your online presence stand out in the social market. A market that is no longer a free for all. There is a growing lack of trust with the consumers of content online. We’ve all been hit with so many scams and schemes, they took our money and nothing ever added up to anything positive for our products or business. Together we need to make sure that we are not only consumed, but trusted in our specific markets.
      <br>Products, services, ecommerce, they all need to stand out in a way that provides value. Whether you are creating your own business campaigns or you are a social media marketer who just needs an extra set of eyes. I can share my insights and expertise. Together we can adapt to your needs and or direction and create something valuable and sticky that creates the traffic we desire.
      <br>
      We can also work together with your footage and assets to create a marketing piece that will attract the attention you will need to achieve your marketing goals.
      <br>
      Let’s punch up your copy. The key to any good copy is getting a paragraph’s worth of meaning into 4 words. Add value, excite and educate your audience and above all make it cool.
      <br>
      I am proud of my track record and where I have been. Let’s work together and see where it goes next.
    </p>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

@import "@/assets/scss/app.scss"; // global styles

#about {
  text-align: left;
  padding: 0 2rem;
  color: $yellow;
  background: $black;
  min-height: 100vh;
  @include flexbox(column, nowrap, center, center);

  h2 {
    color: $blue;
    font-size: 1rem;
    padding: 40px * 2 0 20px;

    @media #{$small} {
      font-size: inherit;
    }
  }

  .bio {
    max-width: 65%;
    line-height: 30px;
    font-size: 0.75rem;
    padding-bottom: 40px;

    @media #{$small} {
      font-size: inherit;
    }
  }
}
</style>
