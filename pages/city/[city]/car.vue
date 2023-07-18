<script setup>
const route = useRoute();
const {toTitleCase} = useUtilities();
useHead({
  title: `${
    route.params.make ? toTitleCase(route.params.make) : "Cars"
  } in ${toTitleCase(route.params.city)}`,
});


definePageMeta({
  layout: "custom",
});
</script>
<template>
  <div>
    <div class="mt-32 flex">
      <NuxtErrorBoundary> <!-- this to handel the client side error  it cache the error and don't render anything except the error template-->
      <CarSideBar />

      <NuxtPage />
      <template #error="{error}">
      <div class=" text-center mx-auto flex flex-col">
        <h1 class="text-red-400 mb-3 text-5xl">Sorry, Something went wrong</h1>
        <code>{{error}}</code>
        <button class="text-white bg-blue-400 px-10 py-3 rounded mt-4" @click="error.value = null">Go Back</button>
      </div>
      </template>
    </NuxtErrorBoundary>
    </div>
  </div>
</template>
