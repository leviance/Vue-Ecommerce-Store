<template>
  <section class="new-arrival">
    <div class="arrival-heading heading-dark sub-heading">
      <h2>Feature Items</h2>
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

<style></style>
