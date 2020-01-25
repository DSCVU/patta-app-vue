<template>
  <div id="forgot-password">
    <div class="mt-2 md:mt-8 lg:mt-16 max-w-xl mx-auto">
      <div class="bg-white p-8 shadow rounded-lg">
        <h1 class="text-3xl uppercase font-semibold tracking-wide text-center">
          Forgot Password?
        </h1>
        <p class="text-sm text-gray-700">
          Can't remember your password? Don't Worry! Enater your email and we
          will send you instructions to reset your password.
        </p>
        <form action="#" class="mt-5">
          <error-alert :errors="errors" class=""></error-alert>
          <success-alert :message="message" class=""></success-alert>
          <div class="form-group">
            <label for="email">
              Email
              <span class="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="forgot-pssword-email"
              placeholder="Email Address *"
              autocomplete="email"
              class="lowercase"
              required="required"
            />
          </div>
          <button type="submit" class="btn btn-primary btn-block mt-5">
            Send Instructions For Reset Password
          </button>
        </form>
        <div class="flex justify-between">
          <a
            href="#"
            class="inline-block mt-2 text-blue-700 hover:text-blue-500 font-bold"
            >Sign In?</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ErrorAlert from "@/components/ErrorAlert.vue";
import SuccessAlert from "@/components/SuccessAlert.vue";

export default {
  name: "ForgotPasword",
  components: {
    "error-alert": ErrorAlert,
    "success-alert": SuccessAlert
  },
  data: function() {
    return {
      errors: [],
      message: ""
    };
  }
};
</script>
