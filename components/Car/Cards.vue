<script setup>
//const { cars } = useCars();
const favorite = useLocalStorage("favorite", {});

const props = defineProps({
  cars: Array,
});

const handelFavorite = (id) => {
  if (id in favorite.value) {
    delete favorite.value[id];
  } else {
    favorite.value = {
      ...favorite.value,
      [id]: true,
    };
  }
};
</script>

<template>
  <div class="w-full">
    <!-- <ClientOnly></ClientOnly> we can wrap it or rename it with .client -->
    <CarCard
      v-for="car in cars"
      :key="car.id"
      :car="car"
      @favor="handelFavorite"
      :favored="car.id in favorite"
    />
    
  </div>
</template>
