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
    toggle_table(e) {
        let check_data = ['p','b','t','x','y'];
        let arr_data_input = [...this.data_input.split("")];
        
        for (let i = 0; i < arr_data_input.length; i++) {
          arr_data_input[i] = arr_data_input[i].toLowerCase();

          if(!check_data.includes(arr_data_input[i])){
            alert("Bạn đã nhập sai dữ liệu vui lòng nhập lại!");

            arr_data_input = [];
            this.data_input = "";
            
            e.preventDefault();
            return;
          }
        }

        if(arr_data_input.length > 0) {
          this.arr.push(...arr_data_input);
          this.data_input = "";
        }
    },
  },
};
</script>

<style></style>
