<script lang="ts">

</script>
<template>
  <div class="w-full flex justify-center">
    <h1
      class="relative badge shadow-md shadow-gray-700 badge-lg text-xl z-10 top-4 bg-primary-focus py-4"
    >
      Student UI Creation Form
    </h1>
  </div>
  <nav class="h-72 min-h-full w-full bg-gray-800">
    <div class="w-full h-2/4 relative">
      <div class="flex h-full justify-around items-center">
        <router-link
          active-class="active-route"
          to="/application-overview"
          class="google-font hover:text-opacity-100 cursor-pointer duration-300 text-opacity-70 text-white lg:text-2xl text-lg tracking-widest"
        >
          INFO
        </router-link>
        <router-link
          to="/form-app"
          active-class="active-route"
          class="google-font hover:text-opacity-100 cursor-pointer duration-200 text-bolder text-opacity-70 text-white lg:text-2xl text-lg tracking-widest"
        >
          FORM
        </router-link>
        <router-link
          active-class="active-route"
          to="/student-list"
          class="google-font hover:text-opacity-100 cursor-pointer duration-200 text-bolder text-opacity-70 text-white lg:text-2xl text-lg tracking-widest"
        >
          LISTS
        </router-link>
      </div>
    </div>
  </nav>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Monoton&display=swap");
@tailwind components;
.google-font {
  font-family: "Monoton", cursive;
}

@layer components {
  .active-route {
    @apply lg:!text-4xl !text-2xl !text-opacity-100;
  }
}
</style>
