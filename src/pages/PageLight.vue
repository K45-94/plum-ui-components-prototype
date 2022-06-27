<template>
  <page>
    <page-header> <template #title> COMMUTE </template></page-header>
    <page-body>
      <plum-transit
        city="Nairobi"
        apikey="ptqyBW77etZLythXEOSzw46Zm1QofiQN"
      ></plum-transit>
    </page-body>
  </page>
</template>

<script>
import Page from "src/components/PagePlumComponent/Page.vue";
import PlumTransit from "src/components/PagePlumComponent/PlumTransit.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Page, PlumTransit },
  name: "PageLight",
});
</script>
