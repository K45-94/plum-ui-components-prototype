<template>
  <page>
    <page-header>
      <template #button-left>
        <page-header-button-back-left to="/profile/users" label="chats" />
      </template>
      <template #title> CHAT-ID </template>
    </page-header>
    <page-body>
      <div class="q-pt-lg q-pb-md q-pl-lg q-pr-lg">
        <div class="page-chat flex column constrain-more">
          <div class="q-pa-md column col justify-end">
            <q-chat-message
              v-for="(message, key) in messages"
              :key="key"
              :text="[message.text]"
              :sent="message.from == 'me' ? true : false"
              :bg-color="message.from == 'me' ? 'primary' : 'secondary'"
              :text-color="message.from == 'me' ? 'white' : 'black'"
            />
          </div>
          <q-footer class="q-pb-lg q-mb-lg constrain-more" elevated>
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
                            <q-btn
                              class="q-mt-lg q-ml-lg shadow-10"
                              rounded
                              color="secondary"
                              text-color="black"
                              label="Document"
                              no-caps
                            />
                            <q-btn
                              class="q-mt-lg q-ml-lg shadow-10"
                              rounded
                              color="secondary"
                              text-color="black"
                              label="Camera"
                              no-caps
                            />
                            <q-btn
                              class="q-mt-lg q-ml-lg shadow-10"
                              rounded
                              color="secondary"
                              text-color="black"
                              label="Gallery"
                              no-caps
                            />
                            <q-btn
                              class="q-mt-lg q-ml-lg shadow-10"
                              rounded
                              color="secondary"
                              text-color="black"
                              label="Audio"
                              no-caps
                            />
                            <q-btn
                              class="q-mt-lg q-ml-lg shadow-10"
                              rounded
                              color="secondary"
                              text-color="black"
                              label="Location"
                              no-caps
                            />
                            <q-btn
                              class="q-mt-lg q-ml-lg shadow-10"
                              rounded
                              color="secondary"
                              text-color="black"
                              label="Contact"
                              no-caps
                            />
                            <q-btn
                              class="q-mt-lg q-ml-lg q-mb-lg shadow-10"
                              to="/profile/payments"
                              rounded
                              color="secondary"
                              text-color="black"
                              label="Payment"
                              no-caps
                            />
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
                      align="right"
                      @click="sendMessage"
                      color="secondary"
                      icon="send"
                    />
                  </template>
                </q-input>
              </q-form>
            </q-toolbar>
          </q-footer>
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
  name: "PageChat",
  data() {
    return {
      card: false,
      newMessage: "",
      messages: [
        {
          text: "social apps should not be addictive",
          from: "me",
        },
        {
          text: "the HickHyman law",
          from: "them",
        },
        {
          text: "less features results in faster decision making. also, trim the decision making process",
          from: "them",
        },
        {
          text: "and we need mpesa integration on this chat section. would be great to mpesa on a chat app",
          from: "me",
        },
        {
          text: "doing all my transactions in plum",
          from: "them",
        },
      ],
    };
  },
  methods: {
    sendMessage() {
      this.messages.push({
        text: this.newMessage,
        from: "me",
      });
      this.newMessage = "";
    },
  },
});
</script>
