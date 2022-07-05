<template>
  <page>
    <page-header>
      <template #button-left>
        <page-header-button-back-left label="chats" />
      </template>
      <template #title> CHAT-ID </template>
    </page-header>
    <page-body>
      <div class="q-pt-lg q-pb-md">
        <div class="page-chat constrain-more">
          <div class="q-pa-sm col justify-end">
            <q-chat-message
              class="q-pb-sm q-mb-sm q-pl-sm q-pr-sm"
              v-for="(message, key) in store.state.messages"
              :key="key"
              :text="[message.text]"
              :sent="message.from == 'me' ? true : false"
              :bg-color="message.from == 'me' ? 'brown-14' : 'grey-2'"
              :text-color="message.from == 'me' ? 'white' : 'black'"
            />
          </div>
        </div>
      </div>
      <div class="page-body-spacer-footer"></div>
      <q-page-sticky position="bottom" class="chat">
        <q-card class="chat-type q-pr-none q-pl-none q-ma-none constrain-more">
          <q-toolbar>
            <q-form @submit="sendMessage" class="full-width">
              <q-input
                class="q-mt-xs"
                v-model="newMessage"
                maxlength="250"
                counter
                ref="newMessage"
                bg-color="white"
                outlined
                rounded
                placeholder="Message"
                dense
              >
                <template v-slot:prepend>
                  <q-btn
                    dense
                    round
                    flat
                    color="primary"
                    @click="card = true"
                    icon="eva-file-outline"
                  >
                    <q-dialog v-model="card">
                      <q-card
                        class="center"
                        style="width: 600px; max-width: 90vw"
                      >
                        <q-card
                          style="
                            background: linear-gradient(
                              90deg,
                              #8bace7 20%,
                              #8bace7 80%
                            );
                          "
                        >
                          <div class="row q-pa-sm">
                            <q-btn
                              class="col-3 q-ma-sm shadow-10"
                              rounded
                              color="secondary"
                              text-color="black"
                              label="Document"
                              no-caps
                            />
                            <q-btn
                              class="col-3 q-ma-sm shadow-10"
                              rounded
                              color="secondary"
                              text-color="black"
                              label="Camera"
                              no-caps
                            />
                            <q-btn
                              class="col-3 q-ma-sm shadow-10"
                              rounded
                              color="secondary"
                              text-color="black"
                              label="Gallery"
                              no-caps
                            />
                            <q-btn
                              class="col-3 q-ma-sm shadow-10"
                              rounded
                              color="secondary"
                              text-color="black"
                              label="Audio"
                              no-caps
                            />
                            <q-btn
                              class="col-3 q-ma-sm shadow-10"
                              rounded
                              color="secondary"
                              text-color="black"
                              label="Location"
                              no-caps
                            />
                            <q-btn
                              class="col-3 q-ma-sm shadow-10"
                              rounded
                              color="secondary"
                              text-color="black"
                              label="Contact"
                              no-caps
                            />
                            <q-btn
                              class="col-3 q-ma-sm shadow-10"
                              to="/profile/payments"
                              rounded
                              color="secondary"
                              text-color="black"
                              label="Payment"
                              no-caps
                            />
                          </div>
                        </q-card>
                      </q-card>
                    </q-dialog>
                  </q-btn>
                </template>
                <template v-slot:after>
                  <q-btn
                    class="q-pr-sm q-pl-sm shadow-4"
                    dense
                    flat
                    unelevated
                    align="right"
                    @click="sendMessage"
                    color="secondary"
                    icon="send"
                  />
                </template>
              </q-input>
            </q-form>
          </q-toolbar>
        </q-card>
      </q-page-sticky>
    </page-body>
  </page>
</template>

<script>
import Page from "src/components/PagePlumComponent/Page.vue";
import PageHeader from "src/components/PagePlumComponent/PageHeader.vue";
import PageHeaderButtonBackLeft from "src/components/PagePlumComponent/PageHeaderButtonBackLeft.vue";
import store from "src/plumStore";
import { defineComponent } from "vue";

export default defineComponent({
  components: [Page, PageHeader, PageHeaderButtonBackLeft],
  name: "PageChat",
  data() {
    return {
      card: false,
      newMessage: "",
      store,
    };
  },
  methods: {
    sendMessage() {
      this.store.state.messages.push({
        text: this.newMessage,
        from: "me",
      });
      this.newMessage = "";
    },
  },
});
</script>

<style lang="scss">
.chat-type {
  background: linear-gradient(145deg, #4a180e 15%, #4a180e 85%);
  height: 50px;
  width: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
.chat {
  background: linear-gradient(145deg, #4a180e 15%, #4a180e 85%);
  width: 100%;
}
</style>
