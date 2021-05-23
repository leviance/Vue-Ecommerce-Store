<template>
  <nav v-bind:class="{ 'fix-nav': fix_nav }">
    <div class="social-call">
      <div class="social">
        <router-link
          to="https://www.facebook.com/profile1.account.tab.id100009/"
          ><i class="fa fa-facebook" aria-hidden="true"></i
        ></router-link>
        <router-link to="/"
          ><i class="fa fa-twitter" aria-hidden="true"></i
        ></router-link>
        <router-link to="/"
          ><i class="fa fa-youtube-play" aria-hidden="true"></i
        ></router-link>
        <router-link to="/"
          ><i class="fa fa-instagram" aria-hidden="true"></i
        ></router-link>
      </div>
      <div class="phone">
        <span>Call number: +84968268030</span>
      </div>
    </div>
    <!-- navigation -->
    <div class="navigation">
      <!-- logo -->
      <router-link to="/" class="logo">
        <img src="../assets/images/logo.png" alt="Logo Ecommerce Store" />
      </router-link>

      <div class="mobile-nav-bar" v-on:click="toggle_mobile_nav">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </div>
      <!-- menu -->
      <ul class="menu" v-bind:class="{ active: nav_mobile_active }">
        <li><router-link to="/">Home</router-link></li>
        <li>
          <router-link :to="{ name: 'Product', params: { type: 'Men' } }"
            >Men</router-link
          >
          <div class="sale-label">sale</div>
        </li>
        <li>
          <router-link :to="{ name: 'Product', params: { type: 'Women' } }"
            >Women</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'Product', params: { type: 'Kids' } }"
            >Kids</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'Product', params: { type: 'Unisex' } }"
            >Unisex</router-link
          >
        </li>
      </ul>
      <!-- right menu -->
      <div class="right-menu">
        <a href v-on:click.prevent="show_search_bar">
          <i class="fa fa-search" aria-hidden="true"></i>
        </a>
        <a href v-on:click.prevent="show_form">
          <i class="fa fa-user" aria-hidden="true"></i>
        </a>
        <router-link :to="{ name: 'Cart' }">
          <i class="fa fa-shopping-cart" aria-hidden="true">
            <span class="num-cart-product">{{
              $store.state.shopping_cart.length
            }}</span>
          </i>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      fix_nav: false,
      nav_mobile_active: false,
    };
  },

  methods: {
    show_search_bar() {
      return (this.$store.state.show_search_bar =
        !this.$store.state.show_search_bar);
    },

    show_form() {
      return (this.$store.state.show_form = !this.$store.state.show_form);
    },

    handleScroll() {
      if (window.pageYOffset > 130) this.fix_nav = true;
      else this.fix_nav = false;
    },

    toggle_mobile_nav() {
      this.nav_mobile_active = !this.nav_mobile_active;
    },
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss">
nav {
  width: 100%;
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  z-index: 100;
  transition: 0.4s;

  .social-call {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    .social {
      a {
        margin: 0 5px;
        color: rgba(0, 0, 0, 0.7);
        font-size: 0.9rem;
      }

      a:hover {
        color: #0b9d8a;
        transition: 0.3s;
      }

      .phone {
        color: rgba(0, 0, 0, 0.7);
        font-size: 0.9rem;
      }
    }
  }

  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 45px;

    .logo {
      img {
        height: 30px;
      }
    }

    .mobile-nav-bar {
      display: none;
    }

    .menu {
      display: flex;

      li {
        position: relative;
        text-transform: uppercase;
        display: flex;
        font-weight: 500;
        margin: 20px;

        a {
          color: #555555;
        }

        .sale-label {
          width: 38px;
          height: 17px;
          background-color: #f76b6a;
          text-transform: uppercase;
          position: absolute;
          text-align: center;
          line-height: 17px;
          top: -20px;
          right: -10px;
          color: #ffffff;
          font-size: 0.7rem;
          font-weight: 700;
        }

        .sale-label::after {
          content: "";
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 3px solid transparent;
          border-bottom: 5px solid transparent;
          border-top: 7px solid #f76b6a;
          position: absolute;
          top: 100%;
          left: 10%;
        }
      }
    }

    .right-menu {
      a {
        font-size: 1.2rem;
        margin: 0 10px;
        color: #555555;
      }

      .fa-shopping-cart {
        position: relative;
      }

      .num-cart-product {
        position: absolute;
        top: -17px;
        right: -17px;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: #0b9d8a;
        color: #ffffff;
        font-size: 0.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .menu a:hover,
    .right-menu a:hover {
      color: #0b9d8a;
      transition: 0.4s;
    }
  }
}

.fix-nav {
  top: -40px;
  left: 0;
  position: fixed;

  .navigation {
    background-color: #ffffff;
  }
}
</style>
