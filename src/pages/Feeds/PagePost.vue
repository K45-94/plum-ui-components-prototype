<template>
  <page>
    <page-header>
      <template #button-left>
        <page-header-button-back-left label="feeds" />
      </template>
      <template #title> POST </template>
    </page-header>
    <page-body>
      <div class="q-pt-lg q-pb-md q-pl-lg q-pr-lg">
        <p v-for="i in 30" :key="i">
          Building Plum with vue 3. This app is getting complex and I thought I
          could redesign and rebuild it better with Vue 3 Finally found a way
          for nesting child pages in routes.
        </p>
      </div>
    </page-body>
  </page>
</template>

<script>
import Page from "src/components/PagePlumComponent/Page.vue";
import PageHeaderButtonBackLeft from "src/components/PagePlumComponent/PageHeaderButtonBackLeft.vue";
import { onActivated } from "vue";
import store from "src/plumStore";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Page, PageHeaderButtonBackLeft },
  name: "PagePost",
  setup() {
    onActivated(() => {
      console.log(onActivated);
    });
    return {
      store,
    };
  },
});
</script>
