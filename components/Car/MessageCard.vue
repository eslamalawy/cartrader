<script setup>
defineProps({
  message: Object,
});
</script>
<template>
  <div class="even:bg-gray-100 p-4">
    <h1 class="font-fold text-2xl">{{ message.name }}</h1>
    <p class="text-gray-700">
      {{ message.message }}
    </p>
    <div class="flex items-center mt-4">
      <p class="text-green-700 mr-10">{{ message.email }}</p>
      <p class="text-blue-500">{{ message.phone }}</p>
    </div>
  </div>
</template>
