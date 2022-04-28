<template>
  <page>
    <page-header>
      <template #button-left>
        <page-header-button-back-left label="profile" />
      </template>
      <template #title> PAYMENTS </template>
    </page-header>
    <page-body>
      <div class="q-pt-lg q-pb-md q-pl-lg q-pr-lg">
        <div class="col-12 col-sm-8">
          <q-card class="inset-shadow inset-shadow-down">
            <q-item>
              <q-item-section avatar class="col-4">
                <q-avatar color="secondary" text-color="white"> M </q-avatar>
              </q-item-section>
              <q-item-section class="col-4">
                <q-item-label class="text-bold absolute-center"
                  >Mpesa</q-item-label
                >
              </q-item-section>
              <q-item-section class="col-4">
                <q-btn
                  to="/profile/payments/mpesawallet"
                  class="absolute-right"
                  icon="eva-arrow-ios-forward-outline"
                  flat
                  dense
                  color="black"
                >
                  <q-badge color="green" floating>5</q-badge>
                </q-btn>
              </q-item-section>
            </q-item>
          </q-card>
          <q-space class="q-pa-sm" />
          <q-card class="inset-shadow inset-shadow-down">
            <q-item>
              <q-item-section avatar class="col-4">
                <q-avatar color="secondary" text-color="white"> A </q-avatar>
              </q-item-section>
              <q-item-section class="col-4">
                <q-item-label class="text-bold absolute-center"
                  >Airtel Money</q-item-label
                >
              </q-item-section>
              <q-item-section class="col-4">
                <q-btn
                  to="/AirtelWallet"
                  class="absolute-right"
                  icon="eva-arrow-ios-forward-outline"
                  flat
                  dense
                  color="black"
                />
              </q-item-section>
            </q-item>
          </q-card>
          <q-space class="q-pa-sm" />
          <q-card class="inset-shadow inset-shadow-down">
            <q-item>
              <q-item-section avatar class="col-4">
                <q-avatar color="secondary" text-color="white"> T </q-avatar>
              </q-item-section>
              <q-item-section class="col-4">
                <q-item-label class="text-bold absolute-center"
                  >T-kash</q-item-label
                >
              </q-item-section>
              <q-item-section class="col-4">
                <q-btn
                  to="/TelkomWallet"
                  class="absolute-right"
                  icon="eva-arrow-ios-forward-outline"
                  flat
                  dense
                  color="black"
                />
              </q-item-section>
            </q-item>
          </q-card>
          <q-space class="q-pa-sm" />
          <q-card class="inset-shadow inset-shadow-down">
            <q-item>
              <q-item-section avatar class="col-4">
                <q-avatar color="secondary" text-color="white"> PP </q-avatar>
              </q-item-section>
              <q-item-section class="col-4">
                <q-item-label class="text-bold absolute-center"
                  >PayPal</q-item-label
                >
              </q-item-section>
              <q-item-section class="col-4">
                <q-btn
                  to="/PayPalWallet"
                  class="absolute-right"
                  icon="eva-arrow-ios-forward-outline"
                  flat
                  dense
                  color="black"
                >
                  <q-badge color="blue" floating>3</q-badge>
                </q-btn>
              </q-item-section>
            </q-item>
          </q-card>

          <q-space class="q-pa-sm" />
          <q-card class="inset-shadow inset-shadow-down">
            <q-item>
              <q-item-section avatar class="col-4">
                <q-avatar color="secondary" text-color="white"> P </q-avatar>
              </q-item-section>
              <q-item-section class="col-4">
                <q-item-label class="text-bold absolute-center"
                  >Pesalink</q-item-label
                >
              </q-item-section>
              <q-item-section class="col-4">
                <q-btn
                  to="/Pesalink"
                  class="absolute-right"
                  icon="eva-arrow-ios-forward-outline"
                  flat
                  dense
                  color="black"
                >
                  <q-badge color="orange" floating>2</q-badge>
                </q-btn>
              </q-item-section>
            </q-item>
          </q-card>
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
  name: "PagePayments",
});
</script>

<style lang="sass">
.q-card
  background: linear-gradient(90deg,#CCC5B9 79%,#CCC5B9 15%)
</style>
