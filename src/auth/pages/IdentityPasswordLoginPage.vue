<script setup>
import AuthLoginCard from "src/auth/components/LoginCard.vue";
</script>

<template>
  <div class="flex flex-center log" padding>
    <div class="text-center">
      <h5 class="q-mb-md">Sign In</h5>
      <AuthLoginCard />
      <q-btn
        class="full-width q-mt-md"
        color="grey-8"
        label="forgot password"
        flat
        :to="{ name: 'auth.requestPasswordReset' }"
      />
    </div>
  </div>
  <div class="absolute-top-right q-pa-md">
    <div>Need an account?</div>
    <q-btn
      no-caps
      label="register"
      flat
      class="full-width"
      :to="{ name: 'auth.register' }"
    />
  </div>
</template>
<style lang="sass">
.log
  background: linear-gradient(90deg, #ccc5b9 79%, #ccc5b9 15%)
  min-height: 100vh
</style>
