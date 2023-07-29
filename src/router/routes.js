const routes = [
  {
    path: "/",
    component: () => import("src/layouts/PlumLayout.vue"),
    children: [
      {
        path: "",
        redirect: "/login",
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
        component: () => import("src/pages/Profile/PageProfile.vue"),
        children: [
          {
            path: "/profile/users",
            component: () => import("src/pages/Profile/PageUsers.vue"),
            name: "Users",
            children: [
              {
                path: "/profile/users/:id",
                component: () => import("src/pages/Profile/PageChat.vue"),
                name: "Chat",
              },
            ],
          },
          {
            path: "/profile/settings",
            component: () => import("src/pages/Profile/PageSettings.vue"),
            children: [
              {
                path: "/profile/settings/themes",
                component: () => import("src/pages/Profile/PageThemes.vue"),
              },
            ],
          },
          {
            path: "/profile/payments",
            component: () =>
              import("src/pages/Profile/Payments/PagePayments.vue"),
            name: "Payments",
            children: [
              {
                path: "/profile/payments/mpesawallet",
                component: () => import("pages/Profile/Payments/PageMpesa.vue"),
                name: "mpesawallet",
                children: [
                  {
                    path: "/profile/payments/mpesawallet/sendmpesa",
                    component: () =>
                      import("pages/Profile/Payments/PageSendMpesa.vue"),
                    name: "sendmpesa",
                  },
                  {
                    path: "/profile/payments/mpesawallet/lipanampesa",
                    component: () =>
                      import("pages/Profile/Payments/PageLipaNaMpesa.vue"),
                    name: "lipanampesa",
                  },
                ],
              },
              {
                path: "/profile/payments/airtelwallet",
                component: () =>
                  import("pages/Profile/Payments/PageAirtelMoney.vue"),
                name: "airtelwallet",
                children: [
                  {
                    path: "/profile/payments/airtelwallet/sendairtelmoney",
                    component: () =>
                      import("pages/Profile/Payments/PageSendAirtelMoney.vue"),
                    name: "sendairtelmoney",
                  },
                ],
              },
              {
                path: "/profile/payments/telkomwallet",
                component: () =>
                  import("pages/Profile/Payments/PageTelkomMoney.vue"),
                name: "telkomwallet",
                children: [
                  {
                    path: "/profile/payments/telkomwallet/sendtelkommoney",
                    component: () =>
                      import("pages/Profile/Payments/PageSendTelkomMoney.vue"),
                    name: "sendtelkommoney",
                  },
                ],
              },
              {
                path: "/profile/payments/paypalwallet",
                component: () =>
                  import("pages/Profile/Payments/PagePayPalMoney.vue"),
                name: "paypalwallet",
                children: [
                  {
                    path: "/profile/payments/paypalwallet/sendpaypalmoney",
                    component: () =>
                      import("pages/Profile/Payments/PageSendPayPalMoney.vue"),
                    name: "sendpaypalmoney",
                  },
                ],
              },
              {
                path: "/profile/payments/pesalinkwallet",
                component: () =>
                  import("pages/Profile/Payments/PagePesalinkMoney.vue"),
                name: "pesalinkwallet",
                children: [
                  {
                    path: "/profile/payments/pesalinkwallet/sendpesalinkmoney",
                    component: () =>
                      import(
                        "pages/Profile/Payments/PageSendPesalinkMoney.vue"
                      ),
                    name: "sendpesalinklmoney",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/light",
    component: () => import("src/layouts/PlumTransitLayout.vue"),
    children: [
      {
        path: "",
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
