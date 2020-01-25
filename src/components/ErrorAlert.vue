<template>
  <div
    class="bg-red-300 rounded px-3 py-3 font-semibold mb-5 leading-tight"
    :class="errors.length === 0 ? 'hidden' : ''"
  >
    <font-awesome-icon
      icon="times"
      class="float-right text-gray-700"
    ></font-awesome-icon>
    <p class="font-bold pl-3 underline">Errors</p>
    <ul class="list-disc pl-3">
      <li v-for="error in errors" :key="error">
        {{ error }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ErrorAlert",
  props: {
    errors: Array
  }
};
</script>
