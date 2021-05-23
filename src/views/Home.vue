<template>
  <div class="home">
    <FullSlideBox />
    <FeatureCategories />
    <NewArrival />
    <SaleProducts />
    <FeatureItems />
    <BannerBox />
    <Services />
    <Footer />
    <SearchBar />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from "../components/SearchBar";
import FullSlideBox from "../components/FullSlideBox";
import FeatureCategories from "../components/FeatureCategories";
import NewArrival from "../components/NewArrival";
import SaleProducts from "../components/SaleProducts";
import FeatureItems from "../components/FeatureItems";
import BannerBox from "../components/BannerBox";
import Services from "../components/Services";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    SearchBar,
    FullSlideBox,
    FeatureCategories,
    NewArrival,
    SaleProducts,
    FeatureItems,
    BannerBox,
    Services,
    Footer,
  },
};
</script>

<style lang="scss">
@media (max-width: 1010px) {
  nav {
    position: relative;

    .navigation {
      height: 80px;

      .mobile-nav-bar {
        display: block;
        font-size: 1.4rem;
        cursor: pointer;
      }

      .menu {
        width: 100%;
        position: absolute;
        top: 100px;
        left: 0px;
        background-color: #ffffff;
        border-bottom: 4px solid #0b9a8a;
        flex-direction: column;
        padding: 0;
        margin: 0;
        display: none;

        li {
          width: 100%;
          margin: 0;
          padding: 0;

          a {
            width: 100%;
            height: 10px;
            display: flex;
            align-items: center;
            margin: 0px;
            padding: 20px 50px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          }

          .sale-label {
            display: none;
          }
        }
      }

      .menu.active {
        display: flex;
      }
    }
  }

  .fix-nav {
    height: 80px;
  }
}

@media (max-width: 600px) {
  .navigation {
    padding: 10px !important;
  }

  .f-slide-text strong {
    font-size: 1.2rem !important;
    line-height: 25px !important;
  }

  .main-slide-container,
  .full-slide-box {
    height: 30vh !important;
  }

  .f-slide-btn {
    width: 120px;
    height: 30px;
    font-size: 0.8rem;
  }

  .feature-heading,
  .arrival-heading {
    h2 {
      font-size: 1.2rem !important;
    }

    p {
      font-size: 0.8rem !important;
    }
  }

  .sale-products {
    width: 100%;

    .sale-box {
      width: 100%;
      height: 180px;
      margin: 10px;
    }
  }

  .add-cart {
    display: flex !important;
  }

  .services {
    width: 100%;
    .services-box {
      width: 100%;
    }
  }

  footer .subcribe input {
    margin: 10px 5px !important;
  }

  .copyright {
    margin: 20px 0;
    text-align: center;
  }
}

.feature-categories,
.new-arrival,
.sale-products {
  width: 90%;
  max-width: 1500px;
  margin: 30px auto;
  overflow: hidden;

  .feature-heading,
  .arrival-heading {
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 1.5rem;
      color: #1b1919;
      letter-spacing: 1px;
      text-transform: uppercase;
      font-weight: 600;
      margin-top: 40px;
      padding: 5px 30px;
      border: 1px solid #e0e0e0;
    }
  }

  .heading-dark {
    h2 {
      font-weight: 500 !important;
      background-color: #202020;
      color: #ffffff !important;
    }
  }

  .sub-heading {
    flex-direction: column;

    p {
      font-size: 0.9rem;
      color: #808080;
      margin: 10px;
    }
  }
}
</style>
