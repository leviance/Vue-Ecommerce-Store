<template>
  <div class="shopping-cart">
    <h1>Đây là trang giỏ hàng</h1>
    <p>
      Trong giỏ hàng hiện giờ bạn đang có:
      {{ $store.state.shopping_cart.length }}
    </p>
    <div v-if="$store.state.shopping_cart.length > 0" class="cart-box">
      <div
        class="cart-item"
        v-for="product in $store.state.shopping_cart"
        :key="product.id"
      >
        <div class="product-img">
          <img
            :src="require(`../assets/images/${product.img}`)"
            :alt="product.name"
          />
        </div>
        <span class="p-name">{{ product.name }}</span>
        <p class="p-price">{{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.shopping-cart {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: auto;
  flex-direction: column;

  .cart-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .cart-item {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      flex-grow: 0.5;
      border: 1px solid rgba(0, 0, 0, 0.05);
      box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.01);
      margin: 20px;
      transition: 0.4s;
      cursor: pointer;

      .product-img {
        width: 210px;
        height: 210px;
        padding: 20px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
        }
      }
    }

    .cart-item:hover {
      box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
