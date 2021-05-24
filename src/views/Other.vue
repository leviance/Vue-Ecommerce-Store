<template>
  <div>
    <input v-model="data_input" type="text" placeholder="enter the value" />
    <button v-on:click="toggle_table">show table</button>
    <div v-show="show_table">
      <Challenge :arr_input="arr" />
    </div>
  </div>
</template>

<script>
import Challenge from "../components/challenge/Challenge";

export default {
  components: {
    Challenge,
  },

  data() {
    return {
      data_input: "",
      arr: [],
      show_table: false,
    };
  },

  methods: {
    toggle_table() {
      this.show_table = !this.show_table;

      if (this.show_table) {
        this.arr.push(...this.data_input.split(""));
        this.data_input = "";
      } else {
        this.arr = [];
      }
    },
  },
};
</script>

<style></style>
