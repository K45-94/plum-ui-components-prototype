<template>
  <div id="map" class="window-height"></div>
</template>

<script>
import tt from "@tomtom-international/web-sdk-maps";

export default {
  name: "PlumTransit",
  props: ["city", "apikey"],
  mounted() {
    tt.map({
      container: "map",
      key: this.apikey,
    });
  },
};
</script>
