<script setup>
import PasswordResetCard from "src/auth/components/PasswordResetCard.vue";
</script>

<template>
  <div class="flex flex-center password-reset" padding>
    <div class="text-center">
      <h5 class="q-mb-md">Password Reset</h5>
      <PasswordResetCard />
    </div>
  </div>
</template>
<style lang="sass">
.password-reset
  background: linear-gradient(90deg, #ccc5b9 79%, #ccc5b9 15%)
  min-height: 100vh
</style>
