<template>
  <div
    class="search-bar"
    :class="{ 'search-bar-active': $store.state.show_search_bar }"
  >
    <div class="search-input">
      <input type="text" placeholder="Search for product" autofocus />
      <div class="search-bar-cancel" v-on:click="hidden_search_bar">
        <i class="fa fa-times" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    hidden_search_bar() {
      return (this.$store.state.show_search_bar = false);
    },
  },
};
</script>

<style lang="scss">
.search-bar {
  width: 100%;
  height: 300px;
  position: fixed;
  z-index: 101;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px -5px 30px rgba(0, 0, 0, 0.1);
  transform: translateY(100%);
  transition: 0.4s;

  .search-input {
    width: 90%;
    margin-top: 20px;
    border-bottom: 2px solid #555555;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;

    input {
      border: none;
      outline: none;
      width: 100%;
      padding: 30px;
      font-size: 2rem;
      margin: 20px;
      padding: 0 20px;
    }

    .search-bar-cancel {
      font-size: 2rem;
      color: #272727;
    }

    .search-bar-cancel:hover {
      transition: 0.4s;
      color: #0b9d8a;
      cursor: pointer;
    }
  }
}

.search-bar-active {
  transform: translateY(0);
}
</style>
