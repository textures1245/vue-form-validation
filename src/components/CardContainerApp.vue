<script lang="ts">
import AlertComponent from "./AlertComponent.vue";

export default {
  components: {
    AlertComponent,
  },
  mounted() {},
};
</script>
<script setup lang="ts"></script>
<template>
  <div class="flex relative -top-32 min-h-full w-full justify-center">
    <div class="absolute -top-10 z-20">
      <AlertComponent></AlertComponent>
    </div>
    <div
      class="card-h text-base shadow-lg z-10 lg:mx-12 md:mx-6 mx-4 w-full bg-white rounded-md"
    >
      <router-view></router-view>
    </div>
  </div>
</template>
<style scoped>
.card-h {
  height: 37rem;
  min-height: 34rem;
  overflow-y: auto;
}
</style>
