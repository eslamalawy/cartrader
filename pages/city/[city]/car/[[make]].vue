<script setup>
const route = useRoute();
const {data: cars,refresh} = await useFetchCars(route.params.city,{
  minPrice: route.query.minPrice,
  maxPrice: route.query.maxPrice,
  make: route.params.make,
});

watch(
  ()=> route.query,
  ()=> {
    window.location.reload(true);
  }
  //()=> refresh()
);

</script>

<template>
  <div>
    <CarCards v-if="cars.length" :cars="cars" />
    <h1 class="text-red-600" v-else>Nothing found with your filters</h1>
  </div>
</template>

<!-- Comment -->