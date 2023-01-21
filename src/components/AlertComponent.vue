<script lang="ts">
export type AlertMsg = {
  cmdAlert: string;
  messageAlert: string;
  iconClass: string;
};

export default {
  //   expose: ['setAlert'],
  data() {
    return {
      onAlert: false,
      message: {
        cmdAlert: "",
        messageAlert: "",
        iconClass: "",
      },
    };
  },
  emits: ["sendAlert"],
  methods: {
    async clearAlertMsg() {
      await new Promise((r) => setTimeout(r, 2000)).then(() => {
        this.message = {
          cmdAlert: "",
          messageAlert: "",
          iconClass: "",
        };
        this.onAlert = false;
      });
    },
    setAlert(alertObj: AlertMsg) {
      this.message = <AlertMsg>{ ...alertObj };
      alert(this.message);
      this.onAlert = true;
      this.clearAlertMsg();
    },
  },
};
</script>
<script lang="ts" setup>
import PlaceHolder from "./PlaceHolder.vue";
</script>

<template>
  <PlaceHolder @send-alert="setAlert"></PlaceHolder>
  <template> </template>
  <div v-if="onAlert">
    <div class="alert alert-warning shadow-lg text-sm">
      <div>
        <i :class="message.iconClass"></i>
        <span>{{ message.messageAlert }}</span>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
