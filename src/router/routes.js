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
        component: () => import("src/pages/Feeds/PageFeeds.vue"),
        children: [
          {
            path: "/feeds/:id",
            component: () => import("src/pages/Feeds/PagePost.vue"),
          },
        ],
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
        path: "/:name",
        component: () => import("src/pages/PageUserProfile.vue"),
      },
      {
        path: "/profile",
        component: () => import("src/pages/profile/PageProfile.vue"),
        children: [
          {
            path: "/profile/settings",
            component: () => import("src/pages/profile/PageSettings.vue"),
            children: [
              {
                path: "/profile/settings/themes",
                component: () => import("src/pages/profile/PageThemes.vue"),
              },
            ],
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
                  {
                    path: "/profile/payments/mpesawallet/lipanampesa",
                    component: () =>
                      import("pages/profile/payments/PageLipaNaMpesa.vue"),
                    name: "lipanampesa",
                  },
                ],
              },
              {
                path: "/profile/payments/airtelwallet",
                component: () =>
                  import("pages/profile/payments/PageAirtelMoney.vue"),
                name: "airtelwallet",
                children: [
                  {
                    path: "/profile/payments/airtelwallet/sendairtelmoney",
                    component: () =>
                      import("pages/profile/payments/PageSendAirtelMoney.vue"),
                    name: "sendairtelmoney",
                  },
                ],
              },
              {
                path: "/profile/payments/telkomwallet",
                component: () =>
                  import("pages/profile/payments/PageTelkomMoney.vue"),
                name: "telkomwallet",
                children: [
                  {
                    path: "/profile/payments/telkomwallet/sendtelkommoney",
                    component: () =>
                      import("pages/profile/payments/PageSendTelkomMoney.vue"),
                    name: "sendtelkommoney",
                  },
                ],
              },
              {
                path: "/profile/payments/paypalwallet",
                component: () =>
                  import("pages/profile/payments/PagePayPalMoney.vue"),
                name: "paypalwallet",
                children: [
                  {
                    path: "/profile/payments/paypalwallet/sendpaypalmoney",
                    component: () =>
                      import("pages/profile/payments/PageSendPayPalMoney.vue"),
                    name: "sendpaypalmoney",
                  },
                ],
              },
              {
                path: "/profile/payments/pesalinkwallet",
                component: () =>
                  import("pages/profile/payments/PagePesalinkMoney.vue"),
                name: "pesalinkwallet",
                children: [
                  {
                    path: "/profile/payments/pesalinkwallet/sendpesalinkmoney",
                    component: () =>
                      import(
                        "pages/profile/payments/PageSendPesalinkMoney.vue"
                      ),
                    name: "sendpesalinklmoney",
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
                path: "/profile/users/:id",
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
    path: "/",
    component: () => import("src/layouts/PlumTransitLayout.vue"),
    children: [
      {
        path: "/light",
        component: () => import("src/pages/PageLight.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
