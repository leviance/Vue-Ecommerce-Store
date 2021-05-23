<template>
  <!-- login form -->
  <div class="login-form" :class="{ 'form-active': show_form }">
    <strong> Log in </strong>
    <form>
      <input
        type="email"
        placeholder="Example@gmail.com"
        name="email"
        required
      />
      <input type="password" placeholder="Password" name="password" required />
      <!-- submit-btn -->
      <input type="submit" value="Log in" v-on:click.prevent="login" />
    </form>
    <!-- forget password and sign up -->
    <div class="form-btns">
      <span v-on:click="show_recover_form" class="forget"
        >Forget Your Password?</span
      >
      <span v-on:click="show_signup_form" class="btn-sign-up"
        >Create Your Account</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["show_form"],
  data() {
    return {};
  },

  methods: {
    show_recover_form() {
      this.$emit("show_recover_form");
    },

    show_signup_form() {
      this.$emit("show_signup_form");
    },
  },
};
</script>

<style></style>
