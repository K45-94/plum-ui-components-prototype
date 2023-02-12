<template>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";
import { authenticateRoutes } from "@vueauth/quasar-ui-auth";
authenticateRoutes();

export default defineComponent({
  name: "App",
});
</script>
