<template>
  <q-layout view="lHh lpr lFf lHr lpR fFf" class="shadow-2">
    <q-header>
      <q-toolbar>
        <q-btn
          @click="toggleLeftDrawer"
          color="secondary"
          flat
          rounded
          dense
          no-caps
          icon="eva-menu-2-outline"
        />
        <q-toolbar-title
          class="page-header-title q-pl-none text-weight-light text-white text-body1"
          >COMMUTE</q-toolbar-title
        >
      </q-toolbar>
    </q-header>
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

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      overlay
      persistent
      class="bg-accent"
    >
      <q-header>
        <q-toolbar>
          <q-toolbar-title
            class="page-header-title q-pl-none text-weight-light text-white text-body1"
          >
            PLAN
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
      <q-scroll-area class="fit q-pa-sm">
        <!-- Content here -->
      </q-scroll-area>
      <q-footer><q-toolbar> </q-toolbar></q-footer>
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import store from "src/plumStore";
import { ref } from "vue";

export default {
  name: "PlumTransitLayout",

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      store,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>

<style lang="scss">
.q-header {
  height: 51px;
}
.q-footer {
  background: linear-gradient(145deg, #4a180e 15%, #4a180e 85%);
  height: 50px;
}
</style>
