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
  usePageTransition: true,
});

const store = {
  state,
};

export default store;
