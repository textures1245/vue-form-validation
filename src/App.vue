<script setup lang="ts">
// @ts-nocheck
import HeaderApp from "./components/HeaderApp.vue";
import CardContainerApp from "./components/CardContainerApp.vue";
import FormApp from "./views/FormApp.vue";
</script>
<template>
  <main class="w-full">
    <div id="header" class="pt-12">
      <HeaderApp></HeaderApp>
      <template> </template>
      <div id="card-container" class="h-auto relative">
        <CardContainerApp></CardContainerApp>
        <template>
          <FormApp></FormApp>
          <template></template>
        </template>
      </div>
    </div>
  </main>
</template>
<style scoped></style>
