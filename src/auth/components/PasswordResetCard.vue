<script setup>
import { QCard, QCardSection, QBtn } from "quasar";
import usePasswordReset from "auth/composables/usePasswordReset";
import ErrorsBanner from "./ErrorsBanner.vue";
import PasswordResetForm from "./forms/PasswordResetForm.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const {
  reset,
  resetPasswordForm,
  loading,
  hasValidationErrors,
  validationErrors,
  errors,
  resetErrors,
  hasErrors,
} = usePasswordReset();

async function onResetClicked() {
  await reset();
  if (!hasErrors.value) {
    router.push({ name: "dashboard" });
  }
}
</script>

<template>
  <q-card class="password-reset-card" flat>
    <q-card-section class="text-center q-pb-sm">
      <!-- Password Reset Form -->
      <PasswordResetForm
        v-model:email="resetPasswordForm.email"
        v-model:password="resetPasswordForm.password"
        v-model:passwordConfirmation="resetPasswordForm.password_confirmation"
        :validation-errors="validationErrors"
        @update:model-value="resetErrors"
      />

      <!-- Errors -->
      <div v-if="!hasValidationErrors">
        <ErrorsBanner :errors="errors" />
      </div>
    </q-card-section>

    <!-- Change Password Button -->
    <q-btn
      :loading="loading"
      class="full-width"
      color="primary"
      label="Change Password"
      unelevated
      @click="onResetClicked"
    />
  </q-card>
</template>
<style lang="scss">
.password-reset-card {
  background: linear-gradient(90deg, #00d546 15%, #00d546 85%);
}
</style>
