<template>
  <page>
    <page-header>
      <template #button-left>
        <page-header-button-back-left to="/profile/payments" label="payments" />
      </template>
      <template #title> MPESA </template>
    </page-header>
    <page-body>
      <div class="constrain q-pt-lg q-pb-md q-pl-lg q-pr-lg">
        <div class="row q-col-gutter-lg">
          <div class="col-12 col-sm-8">
            <q-card>
              <q-item>
                <q-item-section avatar class="col-4">
                  <q-avatar color="secondary" text-color="white"> SM </q-avatar>
                </q-item-section>
                <q-item-section class="col-4">
                  <q-item-label class="text-bold absolute-center"
                    >Send Money</q-item-label
                  >
                </q-item-section>
                <q-item-section class="col-4">
                  <q-btn
                    to="/sendMoney"
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
            <q-card>
              <q-item>
                <q-item-section avatar class="col-4">
                  <q-avatar color="secondary" text-color="white"> WC </q-avatar>
                </q-item-section>
                <q-item-section class="col-4">
                  <q-item-label class="text-bold absolute-center"
                    >Withdraw Cash</q-item-label
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
            </q-card>
            <q-space class="q-pa-sm" />
            <q-card>
              <q-item>
                <q-item-section avatar class="col-4">
                  <q-avatar color="secondary" text-color="white"> LM </q-avatar>
                </q-item-section>
                <q-item-section class="col-4">
                  <q-item-label class="text-bold absolute-center"
                    >Lipa na M-PESA</q-item-label
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
            <q-card>
              <q-item>
                <q-item-section avatar class="col-4">
                  <q-avatar color="secondary" text-color="white"> B </q-avatar>
                </q-item-section>
                <q-item-section class="col-4">
                  <q-item-label class="text-bold absolute-center"
                    >Balance</q-item-label
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
                  />
                </q-item-section>
              </q-item>
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
import { defineComponent } from "vue";

export default defineComponent({
  components: [Page, PageHeader, PageHeaderButtonBackLeft],
  name: "mpesawallet",
});
</script>

<style lang="sass">
.q-card
  background: linear-gradient(90deg,#CCC5B9 79%,#CCC5B9 15%)
</style>
