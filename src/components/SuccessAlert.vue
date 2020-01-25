<template>
  <div
    class="bg-green-300 rounded px-3 py-3 font-semibold mb-5 leading-tight"
    :class="message === '' ? 'hidden' : ''"
  >
    <font-awesome-icon
      icon="times"
      class="float-right text-gray-700"
    ></font-awesome-icon>
    <p class="font-bold pl-3 underline">Success</p>
    <div class="pl-3">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: "SuccessAlert",
  props: {
    message: String
  }
};
</script>
