<template>
  <div class="feature-categories">
    <div class="feature-heading">
      <h2>Featured Categories</h2>
    </div>
    <VueSlickCarousel v-bind="settings">
      <div v-for="image_name in feature_images" :key="image_name">
        <div class="feature-box">
          <router-link :to="{ name: 'Product', params: { type: 'Men' } }">
            <img :src="require(`../assets/images/${image_name}`)" alt="" />
          </router-link>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },

  data() {
    return {
      feature_images: [
        "feature_1.jpg",
        "feature_2.jpg",
        "feature_3.jpg",
        "feature_4.jpg",
        "feature_5.jpg",
        "feature_6.jpg",
        "feature_7.jpg",
        "feature_8.jpg",
        "feature_9.jpg",
      ],

      settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 525,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
.feature-categories {
  .feature-box {
    width: 155px;
    height: 155px;
    overflow: hidden;
    margin: 0 20px;
    border-radius: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
