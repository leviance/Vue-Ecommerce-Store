<template>
  <div>
    <i class="fas fa-h1">Đây là trang sản phẩm {{ $route.params.type }}</i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product_type: "",
    };
  },
};
</script>

<style></style>
