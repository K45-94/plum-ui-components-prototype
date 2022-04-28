import { reactive } from "vue";

const state = reactive({
  navItems: [
    {
      root: "/feeds",
      to: "/feeds",
      icon: "eva-home",
    },
    {
      root: "/search",
      to: "/search",
      icon: "eva-search",
    },
    {
      root: "/camera",
      to: "/camera",
      icon: "eva-camera",
    },
    {
      root: "/light",
      to: "/light",
      icon: "eva-bulb",
    },
    {
      root: "/profile",
      to: "/profile",
      icon: "eva-square",
    },
  ],

  feeds: [
    {
      id: "id7",
      url: "/images/7.jpg",
      caption: "Thika Road at Night",
    },
    {
      id: "id8",
      url: "/images/8.jpg",
      caption: "Ngong sunset with Pauline",
    },
    {
      id: "id9",
      url: "/images/9.jpg",
      caption: "Tatu City",
    },
    {
      id: "id14",
      url: "/images/14.jpg",
      caption: "Tatu City",
    },
    {
      id: "id18",
      url: "/images/18.jpg",
      caption: "Tatu City",
    },
    {
      id: "id24",
      url: "/images/24.jpg",
      caption: "Tatu City",
    },
    {
      id: "id27",
      url: "/images/27.jpg",
      caption: "Tatu City",
    },
    {
      id: "id28",
      url: "/images/28.jpg",
      caption: "Tatu City",
    },
    {
      id: "id29",
      url: "/images/29.jpg",
      caption: "Tatu City",
    },
    {
      id: "id31",
      url: "/images/31.jpg",
      caption: "Tatu City",
    },
    {
      id: "id32",
      url: "/images/32.jpg",
      caption: "Tatu City",
    },
  ],

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
  usePageTransition: true,
});

const getters = {
  getFeed(feedId) {
    return state.feeds.filter((feed) => feed.id === feedId)[0];
  },
};

const store = {
  state,
  getters,
};

export default store;
