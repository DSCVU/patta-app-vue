<template>
  <div id="reset-password">
    <div class="mt-2 md:mt-8 lg:mt-16 max-w-xl mx-auto">
      <div class="bg-white p-8 shadow rounded-lg">
        <h1 class="text-3xl uppercase font-semibold tracking-wide text-center">
          Reset Password
        </h1>
        <form action="#" class="mt-5">
          <error-alert :errors="errors" class=""></error-alert>
          <success-alert :message="message" class=""></success-alert>
          <div
            class="bg-red-300 rounded px-3 py-3 font-semibold mb-5 leading-tight"
          >
            <font-awesome-icon
              icon="times"
              class="float-right text-gray-700"
            ></font-awesome-icon>
            <p class="font-bold pl-3 underline">Errors</p>
            <ul class="list-disc pl-3">
              <li>
                Email is not a valid. Please provide valid Email to continue.
              </li>
              <li>
                Password must be 6 to 72 characters must contain a number.
              </li>
            </ul>
          </div>
          <div class="form-group">
            <label for="password">
              Password
              <span class="text-red-600">*</span>
            </label>
            <input
              type="password"
              name="password"
              id="reset-password-password"
              placeholder="Password *"
              required="required"
            />
          </div>
          <div class="form-group">
            <label for="confirm-password">
              Confirm Password
              <span class="text-red-600">*</span>
            </label>
            <input
              type="password"
              name="confirm-password"
              id="reset-password-confirm"
              placeholder="Confirm Password *"
              required="required"
            />
          </div>
          <button type="submit" class="btn btn-primary btn-block mt-5">
            Reset Password
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
  name: "ResetPassword",
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
