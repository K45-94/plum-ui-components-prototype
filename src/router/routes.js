const routes = [
  {
    path: "/",
    component: () => import("src/layouts/PlumLayout.vue"),
    children: [
      {
        path: "",
        redirect: "/feeds",
      },
      {
        path: "/feeds",
        component: () => import("src/pages/PageFeeds.vue"),
      },
      {
        path: "/search",
        component: () => import("src/pages/PageSearch.vue"),
      },
      {
        path: "/camera",
        component: () => import("src/pages/PageCamera.vue"),
      },
      {
        path: "/light",
        component: () => import("src/pages/PageLight.vue"),
      },
      {
        path: "/profile",
        component: () => import("src/pages/profile/PageProfile.vue"),
        children: [
          {
            path: "/profile/settings",
            component: () => import("src/pages/profile/PageSettings.vue"),
          },
          {
            path: "/profile/payments",
            component: () =>
              import("src/pages/profile/payments/PagePayments.vue"),
            name: "Payments",
            children: [
              {
                path: "/profile/payments/mpesawallet",
                component: () => import("pages/profile/payments/PageMpesa.vue"),
                name: "mpesawallet",
                children: [
                  {
                    path: "/profile/payments/mpesawallet/sendmpesa",
                    component: () =>
                      import("pages/profile/payments/PageSendMpesa.vue"),
                    name: "sendmpesa",
                  },
                ],
              },
            ],
          },
          {
            path: "/profile/users",
            component: () => import("src/pages/profile/PageUsers.vue"),
            name: "Users",
            children: [
              {
                path: "/profile/users/chat",
                component: () => import("src/pages/profile/PageChat.vue"),
                name: "Chat",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
