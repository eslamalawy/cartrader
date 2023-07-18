<script setup>
const route = useRoute();


const {data: car} = await useFetchCar(route.params.id);


// const user = useSupabaseUser();

const {toTitleCase} = useUtilities();
useHead({
  title: toTitleCase(route.params.name),
});


// const {cars} = useCars();
// const car = computed(()=>{
//   return cars.find((c)=>{
//     return c.id === parseInt(route.params.id)
//   })
// });

// if(!car.value){
// throw createError({
//   statusCode: 404,
//   message: `Car with id of ${route.params.id} is not found!`,
// })
// }

definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div>
    <!-- {{user.id}} -->
    <CarDetailHero :car="car"/>
    <CarDetailAttributes :features="car.features"/>
    <CarDetailDescription :description="car.description"/>
    <CarDetailContact />
  </div>
</template>
