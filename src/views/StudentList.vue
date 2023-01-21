<script lang="ts">
import { store, StudentType } from "../store";
export default {
  data() {
    return {
      students: store.studentState,
    };
  },
};
</script>
<template>
  <div class="overflow-x-auto w-full">
    <table class="table table-zebra w-full">
      <!-- head -->
      <thead>
        <tr>
          <th>Name</th>
          <th>Major</th>
          <th>Student ID</th>
          <th></th>
        </tr>
      </thead>
      <tbody class="text-sm google-font">
        <tr v-for="(stu, index) in students" class="bg-slate-600">
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <img :src="stu.utilities.picUrl" :alt="stu.name" />
                </div>
              </div>
              <div class="">
                <div class="font-base">{{ stu.name }}</div>
                <div
                  :class="{
                    'badge-secondary': stu.gender === 'Female',
                    'badge-primary': stu.gender === 'Transgender',
                  }"
                  class="mr-2 badge badge-sm py-2 text-xs opacity-80"
                >
                  <i
                    :class="{
                      'fa-solid fa-mars': stu.gender === 'Male',
                      'fa-solid fa-venus': stu.gender === 'Female',
                      'fa-solid fa-transgender': stu.gender === 'Transgender',
                    }"
                    class="fa-solid fa-person-half-dress mr-1"
                  ></i>
                  {{ stu.gender }}
                </div>
                <div
                  class="badge badge-sm py-2 badge-outline text-xs opacity-80"
                >
                  <i class="fa-solid fa-calendar-days mr-1"></i>
                  {{ stu.birthdate }}
                </div>
              </div>
            </div>
          </td>
          <td class="lg:text-sm text-xs">
            {{ stu.major }}
            <br />
            <span
              :class="index % 2 === 0 ? 'badge-ghost' : 'bg-opacity-80'"
              class="badge py-2 badge-sm"
              >{{ stu.faculty }} Faculty</span
            >
          </td>
          <td class="lg:text-sm text-xs">{{ stu.stuId }}</td>
          <th>
            <router-link
              :to="`/form-app/student-id/${index}`"
              class="btn btn-primary btn-xs"
              >details</router-link
            >
          </th>
        </tr>
        <!-- row 2 -->
      </tbody>
    </table>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Roboto:wght@500&display=swap");

.google-font {
  font-family: "Nanum Gothic", sans-serif;
  font-family: "Roboto", sans-serif;
}
</style>
