<template>
  <q-layout view="lHh lpr lFf lHr lpR fFf" class="shadow-2 rounded-borders">
    <q-page-container class="bg-white">
      <q-footer class="small-screen-only" bordered>
        <q-tabs class="text-white" active-color="secondary">
          <q-route-tab to="/feeds" icon="eva-home" />
          <q-route-tab to="/search" icon="eva-search" />
          <q-route-tab to="/camera" icon="eva-camera" />
          <q-route-tab to="/light" icon="eva-bulb" />
          <q-route-tab to="/profile" icon="eva-square" />
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
    return {
      left: false,
      right: false,
    };
  },
};
</script>

<style lang="sass">
.q-footer
  .q-tab_icon
    font-size: 24px
.q-footer
    background: linear-gradient(145deg,#363020 15%,#605c4E 85%)
</style>
