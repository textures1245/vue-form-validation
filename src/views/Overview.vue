<script lang="ts"></script>
<script setup lang="ts">
const playground = [
  "Application for creating an simple UI student card.",
  'All data that had been submitted it will store as "state" that had located on store.ts',
  'You can see all data in "Lists" page',
  'You can view all student information that were stored by click on "Detail" icon.',
];

const feature = {
  validation: [
    "Form had validation feature",
    "It will prevent submit behavior if some were invalid.",
    "It will show and alert invalid message when input are/is invalid ",
    "All input has it own rule of validation.",
    "When submitted, all field were cleared out (reset form)",
  ],
};

const permission = {
  present:
    "**โปรเจคนี้จัดทำเพื่อนำเสนอ อาจารย์อรรถวิท ชังคมานนท์ รายวิชา คพ313 การพัฒนาโปรแกรมประยุกต์บนเว็บ**",
  creator: "สร้างโดย นายไตรภาค สิทธิแก้ว รหัสนักศักษา 6404101318",
};
</script>
<template>
  <div>
    <div class="container overflow-visible h-full w-full border-0 mx-auto">
      <div class="my-8 py-5 border-0 md:border-2 rounded-sm h-full w-full top-">
        <h1 class="badge relative badge-lg font-bold -top-8 left-6">
          Student UI Creation Form
        </h1>
        <div class="mx-2">
          <div class="flex flex-col gap-4">
            <div class="">
              <p
                class="font-mono text-primary xl:text-xl text-lg font-semibold"
              >
                Playground
              </p>
              <ul
                class="ml-2 font-base lg:text-base text-sm text-primary-focus break-words list-disc list-inside"
              >
                <li v-for="text in playground">{{ text }}</li>
              </ul>
            </div>
            <div class="">
              <p
                class="font-mono text-secondary xl:text-xl text-lg font-semibold"
              >
                Features
              </p>
              <p class="text-secondary-focus ml-2 text-base font-mono">
                Validation
              </p>
              <ul
                class="ml-2 font-base lg:text-base text-sm text-secondary-focus break-words list-disc list-inside"
              >
                <li v-for="validation of feature.validation">
                  {{ validation }}
                </li>
              </ul>
            </div>
            <div class="text-center font-semibold mt-10 xl:text-base text-sm">
              <p>{{ permission.present }}</p>
              <p>{{ permission.creator }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
