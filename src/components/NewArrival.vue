<template>
  <section class="new-arrival">
    <div class="arrival-heading heading-dark sub-heading">
      <h2>New Arrival</h2>
      <p>We Provide You New Design Fashion Clothes</p>
    </div>

    <div class="product-container">
      <div
        class="product-box"
        v-for="(product, index) in feature_products"
        :key="product.id"
      >
        <div class="product-image">
          <img
            :src="require(`../assets/images/${product.img}`)"
            :alt="product.name"
          />
          <a href class="add-cart" v-on:click.prevent="add_to_cart(index)">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </a>
        </div>
        <div class="product-detail">
          <router-link
            :to="{ name: 'Detail', params: { id: product.id } }"
            class="p-name"
            >{{ product.name }}</router-link
          >
          <span class="p-price">{{ product.price }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      feature_products: [
        {
          img: "p-1.png",
          id: "1",
          name: "Drawstring T-Shirt",
          price: "$11.00",
        },
        { img: "p-2.png", id: "2", name: "Blue Shirt", price: "$17.00" },
        { img: "p-3.png", id: "3", name: "Black T-Shirt", price: "$11.00" },
        {
          img: "p-4.png",
          id: "4",
          name: "Drawstring T-Shirt",
          price: "$11.00",
        },
        { img: "p-5.png", id: "5", name: "Bllue Coat", price: "$22.00" },
        { img: "p-6.png", id: "6", name: "Denim Shirt", price: "$19.00" },
        { img: "p-7.png", id: "7", name: "Orange Coat", price: "$23.00" },
        { img: "p-8.png", id: "8", name: "Women Jacket", price: "$34.00" },
      ],
    };
  },

  methods: {
    add_to_cart(index) {
      this.$store.state.shopping_cart.push(this.feature_products[index]);
    },
  },
};
</script>

<style lang="scss">
.new-arrival {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .product-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 20px;

    .product-box {
      display: flex;
      flex-grow: 0.5;
      flex-direction: column;
      align-items: center;
      border: 1px solid #f7f7f7;
      border-radius: 10px;
      margin: 20px;
      transition: 0.4s;

      .product-image {
        width: 200px;
        height: 210px;
        cursor: pointer;
        margin: 20px;
        position: relative;

        .add-cart {
          position: absolute;
          right: -20px;
          top: 10px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: none;
          justify-content: center;
          align-items: center;
          color: #ffffff;
          background-color: #0b9d8a;
          box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.01);
          transition: 0.4s;
        }

        .add-cart:hover {
          background-color: #f76b6a;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
        }
      }

      .product-detail {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 10px 20px;
        border-top: 1px solid #f3f3f3;

        .p-name {
          color: #727272;
        }

        .p-price {
          color: #333333;
          font-size: 1.2rem;
          font-weight: 400;
        }
      }
    }

    .product-box:hover {
      box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.07);

      .add-cart {
        display: flex;
      }
    }
  }
}
</style>
