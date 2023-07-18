<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();

const logout = async () => {
  //1 make user.value = null
  //2 remove jwt from cookie browser
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error);
  }

  try {
    await $fetch("/api/_supabase/session", {
      method: "POST",
      body: { event: "SIGNED_OUT", session: null },
    });
  } catch (error) {
    return console.log(error);
  }
  user.value = null;
  navigateTo("/");
};
</script>
<template>
  <header
    class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md"
  >
    <NuxtLink class="text-3xl font-mono" to="/"> CarTrader</NuxtLink>
    <div v-if="user" class="flex">
      <NuxtLink class="mr-5" to="/profile/listings">Profile</NuxtLink>
      <p @click="logout" class="cursor-pointer">Logout</p>
    </div>
    <NuxtLink v-else to="/login"> Login</NuxtLink>
  </header>
</template>
