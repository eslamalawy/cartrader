<script setup>
definePageMeta({
  layout: "custom",
  middleware: ["auth"],
});
const route = useRoute();
const { data: messages } = useFetch(
  `/api/car/listings/${route.params.id}/message`
);
</script>

<template>
  <div class="rounded shadow mt-20">
    <CarMessageCard
      v-for="message in messages"
      :key="message.id"
      :message="message"
    />
  </div>
</template>
