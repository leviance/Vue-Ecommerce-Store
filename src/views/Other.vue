<template>
  <div>
    <input v-model="data_input" type="text" placeholder="enter the value" />
    <button v-on:click="toggle_table">Add</button>
    <div>
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
    };
  },

  methods: {
    toggle_table() {
        this.arr.push(...this.data_input.split(""));
        this.data_input = "";
    },
  },
};
</script>

<style></style>
