<script setup lang="ts">
import HeaderApp from "./components/HeaderApp.vue";
import CardContainerApp from "./components/CardContainerApp.vue";
</script>
<template>
  <main class="w-full bg-slate-100">
    <div id="header" class="pt-12">
      <HeaderApp></HeaderApp>
      <template> </template>
      <div id="card-container" class="h-auto">
        <CardContainerApp></CardContainerApp>
        <template>
        </template>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
