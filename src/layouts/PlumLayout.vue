<template>
  <q-layout view="lHh lpr lFf lHr lpR fFf" class="shadow-2 rounded-borders">
    <q-page-container>
      <q-footer class="small-screen-only" bordered>
        <q-tabs class="row text-white" active-color="secondary">
          <q-route-tab
            v-for="navItem in store.state.navItems"
            :key="navItem.root"
            :to="navItem.to"
            :icon="navItem.icon"
            class="col"
          />
        </q-tabs>
      </q-footer>
      <router-view v-slot="{ Component }">
        <keep-alive><component :is="Component" /></keep-alive>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import store from "src/plumStore";
export default {
  setup() {
    return {
      store,
    };
  },
};
</script>
