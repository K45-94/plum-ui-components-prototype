<template>
  <page>
    <page-header>
      <template #button-left>
        <page-header-button-back-left label="settings" />
      </template>
      <template #title> Theme switcher </template>
    </page-header>
    <page-body>
      <div class="q-pt-lg q-pb-md q-pl-lg q-pr-lg">
        <div class="row q-col-gutter-lg">
          <q-option-group
            type="radio"
            v-model="themes"
            :options="select"
            color="secondary"
          />
        </div>
      </div>
    </page-body>
  </page>
</template>

<script>
import Page from "src/components/PagePlumComponent/Page.vue";
import PageHeader from "src/components/PagePlumComponent/PageHeader.vue";
import PageHeaderButtonBackLeft from "src/components/PagePlumComponent/PageHeaderButtonBackLeft.vue";
import { ref, defineComponent } from "vue";

export default defineComponent({
  components: [Page, PageHeader, PageHeaderButtonBackLeft],
  name: "PageThemes",
  setup() {
    return {
      themes: ref("op1"),

      select: [
        {
          label: "Bright background",
          value: "op1",
        },
        {
          label: "Dim background",
          value: "op2",
        },
        {
          label: "Dark background",
          value: "op3",
        },
      ],
    };
  },
});
</script>
