<script setup>

const error = useError();
const handelError = ()=>{
    clearError({
        redirect: "/"
    })
}
</script>
<template>
    <div class="flex h-screen justify-center items-center flex-col">
        <h1 class="text-9xl  text-red-500">
            {{error.statusCode}}
        </h1>
        <p class="mt-7 text-4xl">{{error.message}}</p>
        <button @click="handelError" class="rounded mt-7 text-2xl bg-blue-400 px-7 py-4 text-white">Go Back</button>
    </div>
</template>