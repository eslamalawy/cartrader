export default defineNuxtRouteMiddleware((to,from)=>{
    //if (to.path.includes("profile")){ //case of global
    const user = useSupabaseUser();
    if (user.value) {
      return;
    }
    return navigateTo("/login");
//}
});

//to use inline name it auth.js and paste this code
// definePageMeta({
//      middleware: [
//        'auth',
//      ],
//   });

//to use global in all just rename to auth.global.js this will protect all pages
// and to specify pages change to, from
// maybe you use it when you make http request in all of your pages
