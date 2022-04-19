<template>
  <q-layout view="lHh lpr lFf lHr lpR fFf" class="shadow-2 rounded-borders">
    <q-page-container class="bg-white">
      <q-footer class="small-screen-only" bordered>
        <q-tabs class="text-white" active-color="secondary">
          <q-route-tab
            v-for="navItem in store.state.navItems"
            :key="navItem.root"
            :to="navItem.to"
            :icon="navItem.icon"
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
export default {
  data() {
    return {};
  },
};
</script>

<style lang="sass">
.q-footer
  .q-tab_icon
    font-size: 24px
.q-footer
    background: linear-gradient(145deg,#272D2D 15%,#272D2D 85%)
</style>
