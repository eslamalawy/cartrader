<script setup>
definePageMeta({
  layout: "custom",
});

const supabase = useSupabaseClient();

const email = ref("");
const password = ref("");
const password2 = ref("");
const emailError = ref(false);
const passError = ref(false);

const { validateEmail, validatePassword } = useUtilities();

const signup = async (e) => {
  e.preventDefault();

  if (validateEmail(email.value) === null) {
    return (emailError.value = true);
  } else {
    emailError.value = false;

    if (!validatePassword(password.value, password2.value)) {
      return (passError.value = true);
    } else {
      passError.value = false;

      //   //here the signup goes

      const { data, error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
      });

      if (error) {
        console.log(error);
      }
      if (data) {
        //console.log("data", data);
        navigateTo('/login?confirm=false');
      }
    }
  }
};
</script>

<template>
  <div class="mt-10">
    <h1 class="text-5xl font-bold mb-7">Sign Up</h1>
    <form class="flex flex-col gap-y-3">
      <input
        :class="emailError ? 'border-red-500 border' : ''"
        class="p-3 border rounded font-bold"
        v-model="email"
        type="email"
        placeholder="Email"
      />
      <input
        :class="passError ? 'border-red-500 border' : ''"
        class="p-3 border rounded font-bold"
        v-model="password"
        type="password"
        placeholder="Password"
      />
      <input
        :class="passError ? 'border-red-500 border' : ''"
        class="p-3 border rounded font-bold"
        v-model="password2"
        type="password"
        placeholder="Repeat Password"
      />
      <input
        @click="signup"
        type="submit"
        class="cursor-pointer bg-red-400 p-3 rounded text-white font-bold"
        value="SignUp with Email"
      />
      <NuxtLink class="text-blue-400" to="/login"
        >Already regesteried! login from here</NuxtLink
      >
    </form>
  </div>
</template>
