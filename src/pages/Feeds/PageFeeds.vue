<template>
  <page>
    <page-header>
      <template #title> PLUM </template>
    </page-header>
    <page-body
      ><div class="q-pt-sm q-pb-md q-pl-sm q-pr-sm row">
        <router-link
          v-for="feeds in store.state.feeds"
          :key="feeds.id"
          :to="`/feeds/${feeds.id}`"
          class="col-11 q-ma-sm q-pr-none q-pl-lg"
        >
          <q-img :src="feeds.url" :ratio="1" />
        </router-link></div
    ></page-body>
  </page>
</template>

<script>
import Page from "src/components/PagePlumComponent/Page.vue";
import store from "src/plumStore";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Page },
  name: "PageFeeds",
  setup() {
    return {
      store,
    };
  },
});
</script>
