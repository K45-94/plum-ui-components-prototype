<template>
  <page>
    <page-header>
      <template #button-left>
        <page-header-button-back-left label="mpesa" />
      </template>
      <template #title> SEND MPESA </template>
    </page-header>
    <page-body>
      <div class="constrain q-pt-lg q-pb-md q-pl-lg q-pr-lg">
        <div class="row q-col-gutter-lg">
          <div class="col-12 col-sm-8">
            <q-card>
              <q-tabs
                v-model="tab"
                dense
                class="text-grey"
                active-color="primary"
                indicator-color="primary"
                align="justify"
                narrow-indicator
              >
                <q-tab name="sendmoney" label="Send money" />
                <q-tab name="othernetwork" label="Other network" />
              </q-tabs>

              <q-separator />

              <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="sendmoney">
                  <plum-mpesa-send-money-form-component></plum-mpesa-send-money-form-component>
                </q-tab-panel>

                <q-tab-panel name="othernetwork">
                  <plum-mpesa-send-money-form-component></plum-mpesa-send-money-form-component>
                </q-tab-panel>
              </q-tab-panels>
            </q-card>
          </div>
        </div>
      </div>
    </page-body>
  </page>
</template>

<script>
import Page from "src/components/PagePlumComponent/Page.vue";
import PageHeader from "src/components/PagePlumComponent/PageHeader.vue";
import PageHeaderButtonBackLeft from "src/components/PagePlumComponent/PageHeaderButtonBackLeft.vue";
import PlumMpesaSendMoneyFormComponent from "src/components/PagePlumComponent/PlumMpesaSendMoneyFormComponent.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: [
    Page,
    PageHeader,
    PageHeaderButtonBackLeft,
    PlumMpesaSendMoneyFormComponent,
  ],
  name: "sendmpesa",
  setup() {
    return {
      tab: ref("sendmoney"),
    };
  },
});
</script>

<style lang="sass">
.q-card
  background: linear-gradient(90deg,#CCC5B9 79%,#CCC5B9 15%)

.q-tab-panels
  background: linear-gradient(90deg,#CCC5B9 79%,#CCC5B9 15%)
</style>
