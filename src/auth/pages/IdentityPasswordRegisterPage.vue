<script setup>
import AuthRegisterCard from "src/auth/components/RegisterCard.vue";
</script>

<template>
  <div class="flex flex-center reg" padding>
    <div class="text-center">
      <h5 class="q-mb-md">Register</h5>
      <AuthRegisterCard />
    </div>
  </div>
  <div class="absolute-top-right q-pa-md">
    <div>Already have an account?</div>
    <q-btn
      no-caps
      label="login"
      flat
      class="full-width"
      :to="{ name: 'auth.login' }"
    />
  </div>
</template>
<style lang="sass">
.reg
  background: linear-gradient(90deg, #ccc5b9 79%, #ccc5b9 15%)
  min-height: 100vh
</style>
