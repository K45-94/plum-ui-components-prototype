<template>
  <page>
    <page-header>
      <template #title> PLUM </template>
    </page-header>
    <page-body
      ><div class="q-pt-sm q-pb-sm q-pl-none q-pr-none row">
        <q-card
          class="post col-11 q-ma-xs q-pb-md"
          v-for="feeds in store.state.feeds"
          :key="feeds.id"
          flat
        >
          <q-card-section
            class="q-pt-xs q-pl-none q-pr-none q-pb-none"
            vertical
          >
            <q-card-section class="q-pt-xs q-pl-none q-pr-none q-pb-none">
              <q-item class="q-pt-xs q-pl-none q-pr-none q-pb-none">
                <q-item-section avatar>
                  <q-btn round to="/userprofile">
                    <q-avatar>
                      <img :src="feeds.url" />
                    </q-avatar>
                  </q-btn>
                </q-item-section>

                <q-item-section>
                  <q-item-label class="text-bold">Plum Account</q-item-label>
                  <q-item-label caption> post location </q-item-label>
                </q-item-section>
              </q-item>
              <q-item :to="`/feeds/${feeds.id}`" clickable class="q-pa-none">
                <div class="text-black">
                  A microblogging platform with very minimal user interactions.
                  No like buttons, no reposts/retweets. Propaganda or fake news
                  can be limited because posts are not supposed to go viral.
                </div></q-item
              >
            </q-card-section>
            <q-card-section class="col-7 q-pt-md q-pl-none q-pr-none q-pb-none"
              ><router-link :to="`/feeds/${feeds.id}`">
                <q-img
                  :src="feeds.url"
                  :ratio="4 / 3"
                  class="shadow-20"
                /> </router-link></q-card-section
          ></q-card-section>
        </q-card></div
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
<style lang="sass">
.post
    position: relative
    left: 49%
    transform: translateX(-49.7%)
    background-image: linear-gradient(90deg,#CCC5B9 79%,#CCC5B9 15%)
    border-radius: 0
</style>
