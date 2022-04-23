<template>
  <q-form>
    <q-input
      v-model="formData.phoneNumber"
      class="q-mb-md"
      outlined
      type="tel"
      label="Phone Number"
    />
    <q-input
      v-model="formData.amount"
      class="q-mb-md"
      outlined
      type="number"
      label="Amount"
    />
    <div class="row">
      <q-space />
      <q-btn color="primary" @click="submitForm" label="send money" />
    </div>
  </q-form>
</template>

<script>
export default {
  name: "PlumMpesaSendMoneyFormComponent",
  props: ["tab"],
  data() {
    return {
      formData: {
        phoneNumber: "",
        amount: "",
      },
    };
  },
  methods: {
    submitForm() {
      if (this.tab == "sendmoney") {
        console.log("Send Money");
      } else {
        console.log("Other Network");
      }
    },
  },
};
</script>

<style lang="sass"></style>
