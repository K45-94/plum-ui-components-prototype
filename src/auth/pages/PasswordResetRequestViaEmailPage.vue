<script setup>
import PasswordResetRequestCard from "src/auth/components/PasswordResetRequestCard.vue";
</script>

<template>
  <div class="flex flex-center password-reset" padding>
    <div class="text-center">
      <h5 class="q-mb-md">Password Reset</h5>
      <PasswordResetRequestCard />
      <q-btn
        class="full-width q-mt-md"
        color="grey-6"
        label="back"
        flat
        :to="{ name: 'auth.login' }"
      />
    </div>
  </div>
</template>
<style lang="sass">
.password-reset
  background: linear-gradient(90deg, #ccc5b9 79%, #ccc5b9 15%)
  min-height: 100vh
</style>
