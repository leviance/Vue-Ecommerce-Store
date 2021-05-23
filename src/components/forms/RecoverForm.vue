<template>
  <!-- forget password form -->
  <div class="recover-form" :class="{ 'form-active': show_form }">
    <strong> Recover Password </strong>
    <form>
      <input
        type="email"
        placeholder="Example@gmail.com"
        name="email"
        required
      />
      <!-- submit-btn -->
      <input
        type="submit"
        value="Recover Password"
        v-on:click.prevent="login"
      />
    </form>
    <!-- forget password and sign up -->
    <div class="form-btns">
      <span v-on:click="show_signup_form" class="btn-sign-up"
        >Create Your Account</span
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
    show_signup_form() {
      this.$emit("show_signup_form");
    },

    show_login_form() {
      this.$emit("show_login_form");
    },
  },
};
</script>

<style></style>
