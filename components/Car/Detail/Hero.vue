<script setup>
const props = defineProps({
  car: Object,
});
const config = useRuntimeConfig();
</script>
<template>
  <div class="mt-10">
    <img
      :src="`${config.public.supabase.url}/storage/v1/object/public/images/${car.image}`"
      class="w-full"
      alt=""
    />
    <h1 class="mt-10 text-4xl">{{ car.name }}</h1>
    <div class="text-slate-500 flex text-lg mt-3 border-b pb-5 justify-between">
      <div class="flex">
        <p class="mr-2">{{ car.numberOfSeats }} seats</p>
        <p class="mr-2">|</p>
        <p class="mr-2">{{ car.miles }} miles</p>
      </div>
      <div>
        <p class="font-bold text-2xl">${{ car.price }}</p>
      </div>
    </div>
  </div>
</template>
