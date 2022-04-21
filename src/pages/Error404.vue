<template>
  <div
    class="fullscreen bg-warning text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="text-h2" style="opacity: 0.4">Oops. Nothing here...</div>
      <div>
        <page-button-back-error label="Go Back" />
      </div>
    </div>
  </div>
</template>

<script>
import PageButtonBackError from "src/components/PagePlumComponent/PageButtonBackError.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: [PageButtonBackError],
  name: "Error404",
});
</script>
