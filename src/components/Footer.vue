<template>
  <footer>
    <p class="copyright">Copyright 2021 - Anthony Levi</p>
    <div class="subcribe">
      <form>
        <input v-model="email" type="email" placeholder="Example@gmail.com" />
        <input v-on:click="subcribe" type="submit" value="Subcribe" />
      </form>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      email: "",
    };
  },

  methods: {
    subcribe(e) {
      if (this.email.length === 0) alert("Please type your email");
      else if (!this.email.includes("@gmail.com"))
        alert("Email adress invalid. Please type your email again!");
      else alert("Thank you!");

      e.preventDefault();
    },
  },
};
</script>

<style lang="scss">
footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
  flex-wrap: wrap;
  margin-top: 20px;

  .copyright {
    font-size: 0.9rem;
    color: #4e4e4e;
    letter-spacing: 1px;
  }

  .subcribe {
    form {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
    input {
      width: 240px;
      height: 43px;
      padding: 0px 20px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      outline: none;
      box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.05);
    }

    input[type="submit"] {
      width: 120px;
      background-color: #0b9d8a;
      color: #ffffff;
      margin: 0 5px;
      cursor: pointer;
    }
  }
}
</style>
