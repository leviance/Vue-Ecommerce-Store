<template>
  <!-- sign up form -->
  <div class="sign-up-form" :class="{ 'form-active': show_form }">
    <strong> Sign Up </strong>
    <form>
      <input type="text" placeholder="Full name" name="username" required />
      <input
        type="email"
        placeholder="Example@gmail.com"
        name="email"
        required
      />
      <input type="password" placeholder="Password" name="password" required />
      <!-- submit-btn -->
      <input type="submit" value="Sign Up" v-on:click.prevent="login" />
    </form>
    <!-- forget password and sign up -->
    <div class="form-btns">
      <span v-on:click="show_recover_form" class="forget"
        >Forget Your Password?</span
      >
      <span v-on:click="show_login_form" class="btn-log-in"
        >Already have Account?</span
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

    show_login_form() {
      this.$emit("show_login_form");
    },
  },
};
</script>

<style></style>
