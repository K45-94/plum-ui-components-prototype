<template>
  <q-page>
    <div>
      <plum-transit
        city="Nairobi"
        apikey="ptqyBW77etZLythXEOSzw46Zm1QofiQN"
      ></plum-transit>
    </div>
    <div class="page-body-spacer-footer"></div>
  </q-page>
</template>

<script>
import PlumTransit from "src/components/PagePlumComponent/PlumTransit.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageLight",
  components: [PlumTransit],
});
</script>
<style lang="scss">
.q-page {
  background: linear-gradient(90deg, #ccc5b9 79%, #ccc5b9 15%);
}
</style>
