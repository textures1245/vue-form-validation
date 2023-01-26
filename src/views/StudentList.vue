<script lang="ts">
import { store, StudentType } from "../store";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      students: store.studentState,
    };
  },
  methods: {
    onRemoveState(index: number) {
      Swal.fire({
        title: "Do you want to remove the state?",
        showDenyButton: true,
        confirmButtonText: "Yes",
        denyButtonText: `Nope`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.students.splice(index, 1);
          Swal.fire("State had been removed", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Remove action got denied", "", "info");
        }
      });
    },
  },
};
</script>
<template>
  <div v-if="students.length > 0" class="overflow-x-auto w-full">
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
                  <img :src="stu.picUrl" :alt="stu.name" />
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
            ><br />
            <button
              @click="onRemoveState(index)"
              class="btn btn-error btn-xs mt-2"
            >
              remove
            </button>
          </th>
        </tr>
        <!-- row 2 -->
      </tbody>
    </table>
  </div>
  <div v-else class="h-full w-full grid">
    <div
      class="place-self-center flex flex-col lg:flex-row justify-center items-center gap-6"
    >
      <img
        class="w-2/4 h-2/4"
        src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-3613108-3020773.png"
        alt=""
      />
      <div class="">
        <h1 class="text-xl font-semibold text-center lg:text-start">
          State is empty!
        </h1>
        <p class="">Submitted form state to see the result.</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Roboto:wght@500&display=swap");
.google-font {
  font-family: "Nanum Gothic", sans-serif;
  font-family: "Roboto", sans-serif;
}
</style>
