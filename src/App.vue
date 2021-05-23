<template>
  <div id="app">
    <Nav />
    <Form />
    <router-view />
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Form from "./components/forms/Form";

export default {
  components: {
    Nav,
    Form,
  },
};
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}

#app {
  position: relative;
}

ul {
  list-style: none;
}

a {
  text-decoration: none !important;
}
</style>
