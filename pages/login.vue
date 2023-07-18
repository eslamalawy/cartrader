<script setup>
definePageMeta({
  layout: "custom",
});

const supabase = useSupabaseClient();
const user = useSupabaseUser();

const route = useRoute();

const confrim = route.query.confirm;

watchEffect(() => {
  if (user.value) {
    navigateTo('/profile/listings')
  }
})



const email = ref("");
const password = ref("");
const emailError = ref(false);
const passError = ref(false);

const { validateEmail } = useUtilities();


const login = async (e) => {
  e.preventDefault();

  if (validateEmail(email.value) === null) {
    return (emailError.value = true);
  } else {
    emailError.value = false;

    if (!password.value) {
      return (passError.value = true);
    } else {
      passError.value = false;

      //here the login goes

      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
      });

      if (error) {
        console.log(error);
      }
      // if (data) {
      //   console.log("data", data);
      // }
    }
  }
};
</script>

<template>
  <div class="mt-10">
    <h1 class="text-5xl font-bold mb-7">Log in</h1>
    <p v-if="confrim" class="mb-3 font-bold text-center text-red-400">Please Check your email and confirm your signup before login</p>
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
        @click="login"
        type="submit"
        class="cursor-pointer bg-red-400 p-3 rounded text-white font-bold"
        value="Login with Email"
      />
      <NuxtLink class="text-blue-400" to="/signup"
        >Don't have account! signup from here</NuxtLink
      >
    </form>
  </div>
</template>

<!-- 
<script setup lang="ts">
//simple github login
//https://n3-supabase.netlify.app/


const user = useSupabaseUser()
const { auth } = useSupabaseAuthClient()
watchEffect(() => {
  if (user.value) {
    navigateTo('/tasks')
  }
})
</script>

<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <h2 class="my-6 text-center text-3xl font-extrabold u-text-white">
      Sign in to your account
    </h2>
    <LoginCard>
      <UButton
        class="mt-3"
        icon="mdi:github"
        block
        label="Github"
        variant="black"
        @click="auth.signInWithOAuth({ provider: 'github' })"
      />
    </LoginCard>
  </div>
</template> -->
