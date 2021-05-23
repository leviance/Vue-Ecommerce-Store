<template>
  <div
    class="banner-box"
    v-bind:style="{
      backgroundImage: `url(${require(`../assets/images/${image_banner}`)})`,
    }"
  >
    <div class="banner-text-container">
      <div class="banner-text">
        <span>Limited offer</span>
        <strong>30% off <br />with <font>promo code</font></strong>
        <a href="" class="banner-btn">Shop now</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image_banner: "Slider_03.jpg",
    };
  },
};
</script>

<style>
/* style in FullSlideBox */
.banner-box {
  height: 40vh;
  margin: 20px 0;
}
</style>
