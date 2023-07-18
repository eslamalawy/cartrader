<script setup>
const city = ref("");
const cityError = ref(false);
//const router = useRouter(); //first way
const handelSearch = () => {
  if (!city.value) {
    return (cityError.value = true);
  }
  // router.push(`/city/${city.value}/car`); //first way
  navigateTo(`/city/${city.value}/car`); //built in function
};
</script>

<template>
  <div
    class="font-serif text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto"
  >
    <input
      type="text"
      class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none"
      :class="cityError ? 'border-red-500 border' : ''"
      placeholder="Search by city..."
      v-model="city"
    />
    <button class="bg-sky-500 px-10 text-white" @click="handelSearch">
      Search
    </button>
  </div>
</template>
