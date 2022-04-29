<template>
  <page>
    <page-header>
      <template #title> PLUM </template>
    </page-header>
    <page-body
      ><div class="q-pt-sm q-pb-md q-pl-sm q-pr-sm row">
        <q-card
          class="post inset-shadow inset-shadow-down col-11 q-ma-sm"
          v-for="feeds in store.state.feeds"
          :key="feeds.id"
        >
          <q-card-section horizontal>
            <q-card-section class="q-pt-xs">
              <div class="text-overline">Plum</div>
              <div class="text-h6 q-mt-sm q-mb-xs">Ruiru</div>
              <div class="text-caption text-grey">
                Building Plum with vue 3. This app is getting complex and I
                thought I could redesign and rebuild it better with Vue 3
                Finally found a way for nesting child pages in routes. Please
                click on the image.
              </div>
            </q-card-section>
            <q-card-section class="col-7"
              ><router-link :to="`/feeds/${feeds.id}`">
                <q-img
                  :src="feeds.url"
                  :ratio="1"
                /> </router-link></q-card-section
          ></q-card-section>
          <q-separator />

          <q-card-actions>
            <q-btn flat round icon="event" />
            <q-btn flat> 7:30PM </q-btn>
            <q-btn flat color="primary"> Reserve </q-btn>
          </q-card-actions>
        </q-card>
      </div></page-body
    >
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
</style>
