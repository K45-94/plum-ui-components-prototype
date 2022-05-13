<template>
  <page>
    <page-header>
      <template #button-left>
        <page-header-button-back-left label="payments" />
      </template>
      <template #title> AIRTEL MONEY </template>
    </page-header>
    <page-body>
      <div class="constrain q-pt-lg q-pb-md q-pl-lg q-pr-lg">
        <div class="row q-col-gutter-lg">
          <div class="col-12 col-sm-8">
            <q-list class="full-width">
              <q-item
                to="/profile/payments/airtelwallet/sendairtelmoney"
                clickable
              >
                <q-item-section avatar class="col-4">
                  <q-avatar color="secondary" text-color="white"> AM </q-avatar>
                </q-item-section>
                <q-item-section class="col-4">
                  <q-item-label class="text-bold absolute-center"
                    >Send From Airtel</q-item-label
                  >
                </q-item-section>
                <q-item-section class="col-4">
                  <q-btn
                    to="/profile/payments/airtelwallet/sendairtelmoney"
                    class="absolute-right"
                    icon="eva-arrow-ios-forward-outline"
                    flat
                    dense
                    color="black"
                  />
                </q-item-section>
              </q-item>
              <q-space class="q-pa-sm" />
              <q-item to="/TelkomWallet" clickable>
                <q-item-section avatar class="col-4">
                  <q-avatar color="secondary" text-color="white"> LA </q-avatar>
                </q-item-section>
                <q-item-section class="col-4">
                  <q-item-label class="text-bold absolute-center"
                    >Pay With Airtel Money</q-item-label
                  >
                </q-item-section>
                <q-item-section class="col-4">
                  <q-btn
                    to="/airtelwallet"
                    class="absolute-right"
                    icon="eva-arrow-ios-forward-outline"
                    flat
                    dense
                    color="black"
                  />
                </q-item-section>
              </q-item>
              <q-space class="q-pa-sm" />
              <q-item to="/withdrawCash" clickable>
                <q-item-section avatar class="col-4">
                  <q-avatar color="secondary" text-color="white"> WC </q-avatar>
                </q-item-section>
                <q-item-section class="col-4">
                  <q-item-label class="text-bold absolute-center"
                    >Withdraw Cash From Airtel</q-item-label
                  >
                </q-item-section>
                <q-item-section class="col-4">
                  <q-btn
                    to="/withdrawCash"
                    class="absolute-right"
                    icon="eva-arrow-ios-forward-outline"
                    flat
                    dense
                    color="black"
                  />
                </q-item-section>
              </q-item>
              <q-space class="q-pa-sm" />
              <q-item to="/PayPalWallet" clickable>
                <q-item-section avatar class="col-4">
                  <q-avatar color="secondary" text-color="white"> B </q-avatar>
                </q-item-section>
                <q-item-section class="col-4">
                  <q-item-label class="text-bold absolute-center"
                    >Airtel Money Balance</q-item-label
                  >
                </q-item-section>
              </q-item>
            </q-list>
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
import { defineComponent } from "vue";

export default defineComponent({
  components: [Page, PageHeader, PageHeaderButtonBackLeft],
  name: "airtelwallet",
});
</script>

<style lang="sass">
.q-card
  background: linear-gradient(90deg,#CCC5B9 79%,#CCC5B9 15%)
</style>
