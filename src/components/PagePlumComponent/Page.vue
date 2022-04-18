<template>
  <div class="page absolute-top fit shadow-10">
    <slot />
    <router-view v-slot="{ Component }">
      <transition
        appear
        enter-active-class="animated slideInRight slow"
        leave-active-class="animated slideOutRight slow"
      >
        <keep-alive><component :is="Component" /></keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: "Page",
};
</script>

<style lang="sass">
.page
  background: linear-gradient(90deg,#CCC5B9 79%,#CCC5B9 15%)
</style>
