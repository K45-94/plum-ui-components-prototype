<template>
  <page>
    <page-header>
      <template #title> PLUM </template>
    </page-header>
    <page-body
      ><div class="q-pt-sm q-pb-md q-pl-sm q-pr-sm row">
        <q-card
          class="post inset-shadow inset-shadow-down col-11 q-ma-xs"
          v-for="feeds in store.state.feeds"
          :key="feeds.id"
        >
          <q-card-section
            class="q-pt-xs q-pl-none q-pr-none q-pb-none"
            vertical
          >
            <q-card-section class="q-pt-xs q-pl-none q-pr-none q-pb-none">
              <q-item class="q-pt-xs q-pl-none q-pr-none q-pb-none">
                <q-item-section avatar>
                  <q-avatar>
                    <img :src="feeds.url" />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label class="text-bold">Plum Account</q-item-label>
                  <q-item-label caption> post location </q-item-label>
                </q-item-section>
              </q-item>
              <div class="text-bold q-mt-sm q-mb-xs">Ruiru</div>
              <q-item :to="`/feeds/${feeds.id}`" clickable class="q-pa-none">
                <div class="text-black">
                  Building Plum with vue 3. This app is getting complex and I
                  thought I could redesign and rebuild it better with Vue 3
                  Finally found a way for nesting child pages in routes. Please
                  click on the image.
                </div></q-item
              >
            </q-card-section>
            <q-card-section class="col-7 q-pt-xs q-pl-none q-pr-none q-pb-none"
              ><router-link :to="`/feeds/${feeds.id}`">
                <q-img
                  :src="feeds.url"
                  :ratio="1"
                /> </router-link></q-card-section
          ></q-card-section>
          <q-card-section class="q-pt-xs q-pl-none q-pr-none q-pb-sm">
            <div class="row justify-between">
              <q-btn color="primary" icon="far fa-comment" flat round />
              <q-btn color="primary" icon="fas fa-retweet" flat round />
              <q-btn color="primary" icon="far fa-heart" flat round />
            </div>
          </q-card-section>
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
    transform: translateX(-51%)
    background-image: linear-gradient(90deg,#CCC5B9 79%,#CCC5B9 15%)
    border-top-left-radius: 2px
    border-top-right-radius: 2px
    border-bottom-right-radius: 2px
    border-bottom-left-radius: 2px
</style>
