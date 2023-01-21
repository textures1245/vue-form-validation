<script lang="ts">
import { Student, StudentType, store } from "../store";
import { AlertMsg } from "../components/AlertComponent.vue";
import Swal from "sweetalert2";

export default {
  props: {},
  data() {
    return {
      onRegister: true,
      genderOpts: ["Male", "Female", "Transgender"],
      student: {
        name: "",
        gender: "",
        birthdate: "",
        major: "",
        faculty: "",
        stuId: "",
        bio: "",
        utilities: {
          bgColor: "#e2e8f0",
          picUrl: "",
        },
      },
      id: -1,
      store,
    };
  },
  mounted() {
    this.onLoadedProps();
  },
  methods: {
    async onSubmit(node: any) {
      await new Promise((r) => setTimeout(r, 1000)).then(() => {
        let studentData: StudentType = { ...this.student };
        this.store.studentState.push(studentData);
        this.$formkit.reset("student-form");
        this.student = <StudentType>{
          name: "",
          gender: "",
          birthdate: "",
          major: "",
          faculty: "",
          stuId: "",
          bio: "",
          utilities: {
            bgColor: "#e2e8f0",
            picUrl: "",
          },
        };
      });
      Swal.fire({
        title: "Submitted Success",
        text: "Your can see your submitted data on list",
        icon: "success",
        confirmButtonText: "Got it!",
      });

      //! don't why it not triggered : (
      this.$emit("sendAlert", <AlertMsg>{
        cmdAlert: "alert-success",
        messageAlert: "Your form had been submitted!",
        iconClass: "fa-solid fa-circle-check",
      });
    },
    onLoadedProps() {
      try {
        this.id = +this.$route.params.stuIndex;
      } catch (err) {
        return;
      }
      if (
        this.id !== null &&
        typeof this.id === "number" &&
        isNaN(this.id) !== true
      ) {
        this.student = <StudentType>{ ...this.store.studentState[this.id] };
        this.onRegister = false;
      }
    },
  },
};
</script>
<script setup lang="ts">
// @ts-nocheck
import { getValidationMessages } from "@formkit/validation";
import { clearErrors } from "@formkit/vue";
import { ref } from "vue";

let messages = ref([]);

function showErrors(node: any): void {
  const validations = getValidationMessages(node);
  validations.forEach((inputMessages) => {
    messages.value = messages.value.concat(
      inputMessages.map((message) => message.value) + "<br>"
    );
  });

  Swal.fire({
    title: "Invalidation Form",
    html: `
    Please fill these form below before you submitted it
    <ul class="list-disc text-error">${messages.value}</ul>`,
    icon: "warning",
    confirmButtonText: "Got it!",
  });
  clearErrors(node, true);
  messages = ref([]);
}
</script>
<template>
  <div action="" class="relative h-full">
    <div
      class="absolute z-10 h-full grid md:grid-cols-2 grid-cols-1 w-full min-h-full"
    >
      <div class="md:border-r-2 relative h-full border-0 md:my-0 py-6">
        <FormKit
          @submit-invalid="showErrors"
          v-on:click.self.prevent="onSubmit"
          :actions="onRegister"
          type="form"
          id="student-form"
          form-class="$reset"
          :actions-class="{ 'flex justify-center': true }"
          #default="{ value }"
          @submit="onSubmit"
        >
          <div class="flex items-center flex-col h-full">
            <h1 class="text-center lg:text-base text-sm">Information</h1>
            <div
              class="basis-2/4 w-full flex md:flex-col xl:flex-row sm:flex-row flex-col md:items-center items-center xl:justify-evenly sm:justify-evenly"
            >
              <div class="form-control h-full w-5/12">
                <FormKit
                  type="text"
                  label="Name"
                  validation="required|alpha_spaces:latin|length:10"
                  label-class="$reset text-xs font-bold"
                  placeholder="Firstname Lastname"
                  :inner-class="{
                    'text-xs': true,
                  }"
                  v-model.lazy="student.name"
                />
                <FormKit
                  type="select"
                  label="Gender"
                  validation="required"
                  label-class="$reset text-xs font-bold"
                  placeholder="Option Select"
                  :inner-class="{
                    'text-xs': true,
                  }"
                  :options="genderOpts"
                  v-model="student.gender"
                />
                <FormKit
                  type="date"
                  label="Birthdate"
                  validation="required"
                  label-class="$reset text-xs font-bold"
                  placeholder="Option Select"
                  :inner-class="{
                    'text-xs': true,
                  }"
                  v-model.lazy="student.birthdate"
                />
                <FormKit
                  type="text"
                  label="Faculty"
                  validation="required|alpha_spaces:latin|length:5"
                  label-class="$reset text-xs font-bold"
                  placeholder="Science"
                  :inner-class="{
                    'text-xs': true,
                  }"
                  v-model.lazy="student.faculty"
                />
                <FormKit
                  type="text"
                  label="Major"
                  validation="required|alpha_spaces:latin|length:10"
                  label-class="$reset text-xs font-bold"
                  placeholder="Computer Science"
                  :inner-class="{
                    'text-xs': true,
                  }"
                  v-model.lazy="student.major"
                />
              </div>
              <div class="form-control flex justify-start h-full w-5/12">
                <FormKit
                  type="text"
                  label="Student ID"
                  validation="alphanumeric:latin|required|length:10,10|"
                  label-class="$reset text-xs font-bold"
                  placeholder="64xxxxxxx"
                  :inner-class="{
                    'text-xs': true,
                  }"
                  v-model.lazy="student.stuId"
                />
                <FormKit
                  type="text"
                  label="Image Picture URL"
                  validation="required|url"
                  label-class="$reset text-xs font-bold"
                  placeholder="https://www.example.com..."
                  :inner-class="{
                    'text-xs': true,
                  }"
                  v-model.lazy="student.utilities.picUrl"
                />
                <FormKit
                  type="color"
                  label="Background Color Picker"
                  label-class="$reset text-xs font-bold"
                  placeholder="https://www.example.com..."
                  :inner-class="{
                    'min-w-full': true,
                  }"
                  v-model.lazy="student.utilities.bgColor"
                />
              </div>
            </div>
            <div class="mx-6 flex justify-center h-full basis-full">
              <FormKit
                type="textarea"
                label="About me"
                validation="required|length:15,350"
                label-class="$reset text-xs font-bold"
                placeholder="Option Select"
                :inner-class="{
                  'min-w-full': true,
                  'text-xs': true,
                }"
                rows="6"
                cols="90"
                v-model="student.bio"
              />
            </div>
          </div>
        </FormKit>
      </div>

      <!--- Bio  -->
      <div class="h-full gap-3 flex flex-col">
        <div
          :style="`background: rgb(32,32,32); background: linear-gradient(0deg, rgba(32,32,32,1) 0%, ${student.utilities.bgColor} 100%);`"
          class="flex basis-2/4 justify-end w-full"
        >
          <img
            :src.lazy="student.utilities.picUrl"
            class="object-cover relative mr-6 bg-gray-400 h-1/4 md:top-3/4 xl:top-2/4 top-[4rem] w-32 min-h-[8rem] border-2 rounded-full"
          />
        </div>
        <div class="basis-1/4 flex flex-col gap-2 mx-5 mt-8">
          <h1 class="xl:text-lg text-base">Name: {{ student.name || "-" }}</h1>
          <div class="flex gap-2 text-xs font-light text-slate-900">
            <p><b>Gender:</b> {{ student.gender || "-" }}</p>
            <p><b>Birthday:</b> {{ student.birthdate || "-" }}</p>
          </div>
          <div class="flex gap-2 text-xs font-light text-slate-900">
            <p><b>Major: </b>{{ student.major ? student.major : "-" }}</p>
            <p><b>Student ID: </b>{{ student.stuId || "-" }}</p>
          </div>
        </div>
        <div class="basis-2/4 m-5">
          <p class="font-light break-words lg:text-base text-sm indent-12">
            {{
              student.bio ||
              `Your Bio goes here, Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam animi
          explicabo accusantium exercitationem, molestias odio perspiciatis
          laboriosam assumenda iure, non perferendis fugiat, suscipit nesciunt.
          Laudantium in magni soluta ratione assumenda!`
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.boxsizingBorder {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

[data-invalid] .formkit-inner {
  border-color: red;
  box-shadow: 0 0 0 1px red;
}

[data-complete] .formkit-inner {
  border-color: red;
  box-shadow: 0 0 0 1px green;
}
[data-complete] .formkit-inner::after {
  content: "✅";
  display: block;
  padding: 0.5em;
}

.formkit-messages {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
