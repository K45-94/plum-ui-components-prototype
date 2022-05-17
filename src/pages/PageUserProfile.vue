<template>
  <page>
    <page-header>
      <template #button-left>
        <page-button-back label="" />
      </template>

      <template #title> USER-ID </template></page-header
    >
    <page-body></page-body>
  </page>
</template>

<script>
import Page from "src/components/PagePlumComponent/Page.vue";
import PageHeader from "src/components/PagePlumComponent/PageHeader.vue";
import PageButtonBack from "src/components/PagePlumComponent/PageButtonBack.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Page, PageHeader, PageButtonBack },
  name: "PageUserProfile",
});
</script>
