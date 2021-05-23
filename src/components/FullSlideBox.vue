<template>
  <div class="main-slide-container">
    <VueSlickCarousel v-bind="settings">
      <div v-for="img_name in slide_images" :key="img_name">
        <div
          class="full-slide-box"
          v-bind:style="{
            backgroundImage: `url(${require(`../assets/images/${img_name}`)})`,
          }"
        >
          <div class="slide-text-container">
            <div class="f-slide-text">
              <span>Limited offer</span>
              <strong
                >30% off <br />
                with <font>promo code</font></strong
              >
              <router-link
                :to="{ name: 'Product', params: { type: 'Men' } }"
                class="f-slide-btn"
                >View now</router-link
              >
            </div>
          </div>
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
      slide_images: ["Slider_01.jpg", "Slider_02.jpg", "Slider_03.jpg"],

      settings: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
      },
    };
  },
};
</script>

<style lang="scss">
.main-slide-container {
  width: 100%;
  height: 65vh;
  overflow: hidden;

  .slick-dots {
    bottom: 10px;

    button:before {
      font-size: 8px !important;
    }
  }

  .slick-prev {
    left: 20px !important;
    z-index: 1;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 35px;
  }

  .slick-next {
    right: 30px !important;
  }
}

.full-slide-box,
.banner-box {
  width: 100%;
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .slide-text-container,
  .banner-text-container {
    width: 80%;
    height: 90%;
    display: flex;
    align-items: center;

    .f-slide-text,
    .banner-text {
      display: flex;
      flex-direction: column;
      margin-right: auto;
    }

    strong {
      color: #333333;
      font-size: 3rem;
      line-height: 55px;
      margin-top: 10px;
      letter-spacing: 1px;

      font {
        color: #0b9d8a;
      }
    }

    span {
      text-transform: uppercase;
      font-size: 1.2rem;
      font-weight: 500;
      color: #666666;
      letter-spacing: 6px;
    }

    .f-slide-btn,
    .banner-btn {
      width: 170px;
      height: 40px;
      background-color: #0b9d8a;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      margin-top: 15px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }
}

.f-slide-1 {
  background-image: url(../assets/images/Slider_01.jpg);
}
.f-slide-2 {
  background-image: url(../assets/images/Slider_02.jpg);
}
.f-slide-3 {
  background-image: url(../assets/images/Slider_03.jpg);
}
</style>
