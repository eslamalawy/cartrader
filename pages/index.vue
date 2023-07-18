<!-- <script>
import NavBar from "../components/NavBar.vue";
</script> -->
<!-- we don't use it because it's smart enough to get the components folder itself -->
<script setup>
useHead({
  title: "CarTrader",
});
</script>
<template>
  <div>
    <CarHero />
  </div>
</template>
