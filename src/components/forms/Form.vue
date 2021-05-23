<template>
  <div class="form" :class="{ 'form-active': $store.state.show_form }">
    <div class="wrap-form">
      <a href class="form-cancel" v-on:click.prevent="hidden_form"
        ><i class="fa fa-times" aria-hidden="true"></i
      ></a>
      <LoginForm
        :show_form="show_form[0]"
        @show_recover_form="show_recover_form"
        @show_signup_form="show_signup_form"
      />
      <SignUpForm
        :show_form="show_form[1]"
        @show_recover_form="show_recover_form"
        @show_login_form="show_login_form"
      />
      <RecoverForm
        :show_form="show_form[2]"
        @show_login_form="show_login_form"
        @show_signup_form="show_signup_form"
      />
    </div>
  </div>
</template>

<script>
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import RecoverForm from "./RecoverForm";

export default {
  components: {
    LoginForm,
    SignUpForm,
    RecoverForm,
  },
  data() {
    return {
      show_form: [true, false, false],
    };
  },

  methods: {
    hidden_form() {
      this.$store.state.show_form = false;
    },

    show_recover_form() {
      this.show_form = [false, false, true];
    },

    show_signup_form() {
      this.show_form = [false, true, false];
    },

    show_login_form() {
      this.show_form = [true, false, false];
    },
  },
};
</script>

<style lang="scss">
.form {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
  z-index: 102;
  flex-direction: column;
  display: none;

  .wrap-form {
    position: relative;

    .form-cancel {
      position: absolute;
      top: 10px;
      right: 20px;
      color: #868686;
      z-index: 1;
    }

    .form-cancel:hover {
      color: #0b9d8a;
      transition: 0.4s;
    }

    .login-form,
    .sign-up-form,
    .recover-form {
      width: 420px;
      max-width: 45vh;
      padding: 20px 10px;
      border-radius: 5px;
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #ffffff;
      position: relative;

      form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
      }

      strong {
        color: #272727;
        text-transform: uppercase;
        margin: 2px 7px 7px 7px;
        letter-spacing: 0.5px;
        font-size: 2rem;
        font-weight: 500;
      }

      input {
        width: 90%;
        padding: 0 10px;
        border-radius: 7px;
        outline: none;
        height: 45px;
        margin: 6px 0;
        border: 1px solid rgba(0, 0, 0, 0.1);
      }

      input::placeholder {
        color: rgba(0, 0, 0, 0.5);
      }

      input[type="submit"] {
        background-color: #0b9d8a;
        color: #ffffff;
        border: none;
        outline: none;
        text-transform: uppercase;
        margin-top: 10px;
        border-radius: 3px;
        box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.1);
      }

      .form-btns {
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;

        span {
          cursor: pointer;
          font-size: 0.9rem;
          color: #4d4d4d;
        }

        .btn-sign-up,
        .btn-log-in {
          border-bottom: 1px solid #868686;
        }
      }
    }
  }
}

.form-active {
  display: flex !important;
}
</style>
