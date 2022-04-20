<template>
  <page>
    <page-header>
      <template #button-left>
        <page-header-button-back-left to="/profile" label="profile" />
      </template>
      <template #title> CHATS </template>
    </page-header>
    <page-body>
      <div class="constrain q-pt-lg q-pb-md q-pl-lg q-pr-lg">
        <q-list class="full-width">
          <q-item
            v-for="user in users"
            :key="user.id"
            to="/profile/users/chat"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-avatar color="primary" text-color="white">
                {{ user.name.charAt(0) }}
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle2 text-weight-bold">{{
                user.name
              }}</q-item-label>
              <q-item-label caption lines="2">{{ user.chat }}</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-badge rounded :color="user.online ? 'positive' : 'negative'" />
            </q-item-section>
          </q-item>
          <q-page-sticky position="bottom-right" :offset="[20, 60]">
            <q-btn fab icon="add" color="primary" />
          </q-page-sticky>
        </q-list>
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
  name: "PageUsers",
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Kelvin Githinji",
          chat: "doing all my transactions in plum",
          online: true,
        },
        {
          id: 2,
          name: "Plum User2",
          chat: "we have a meeting at 5 pm remember",
          online: false,
        },
        {
          id: 3,
          name: "Plum User3",
          chat: "servers are up and running",
          online: false,
        },
        {
          id: 4,
          name: "Plum User4",
          chat: "secured!",
          online: true,
        },
        {
          id: 5,
          name: "Plum User5",
          chat: "check this out, you can now send money via plum",
          online: true,
        },
        {
          id: 6,
          name: "Plum User6",
          chat: "Hi, kindly check the new technical document i have sent",
          online: true,
        },
        {
          id: 8,
          name: "Plum User7",
          chat: "your MRI scan results are out. check them below",
          online: false,
        },
        {
          id: 9,
          name: "Plum User7",
          chat: "Tesla",
          online: false,
        },
        {
          id: 11,
          name: "Plum User8",
          chat: "We are moving upcountry next week, will you visit us?",
          online: false,
        },
        {
          id: 12,
          name: "Plum User9",
          chat: "amazing horses",
          online: false,
        },
        {
          id: 13,
          name: "Plum User10",
          chat: "meeting next week",
          online: false,
        },
        {
          id: 14,
          name: "Plum User11",
          chat: "backend",
          online: true,
        },
        {
          id: 15,
          name: "Plum User12",
          chat: "i need help with linux",
          online: true,
        },
        {
          id: 16,
          name: "Plum User13",
          chat: "the client reverts",
          online: true,
        },
        {
          id: 18,
          name: "Plum User14",
          chat: "your MRI scan results are out. check them below",
          online: false,
        },
        {
          id: 19,
          name: "Plum User15",
          chat: "Tesla",
          online: true,
        },
      ],
    };
  },
});
</script>
