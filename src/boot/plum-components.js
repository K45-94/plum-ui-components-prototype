import { boot } from "quasar/wrappers";

const plumComponents = {
  page: require("components/PagePlumComponent/Page").default,
  pageHeader: require("components/PagePlumComponent/PageHeader").default,
  pageHeaderButtonBackLeft:
    require("components/PagePlumComponent/PageHeaderButtonBackLeft").default,
  pageHeaderButtonForwardRight:
    require("components/PagePlumComponent/PageHeaderButtonForwardRight")
      .default,
  pageBody: require("components/PagePlumComponent/PageBody").default,
  pageSettingsButton: require("components/PagePlumComponent/PageSettingsButton")
    .default,
  pageButtonBack: require("components/PagePlumComponent/PageButtonBack")
    .default,
  plumSendMoneyFormComponent:
    require("components/PagePlumComponent/PlumSendMoneyFormComponent").default,
  plumBuygoodsFormComponent:
    require("components/PagePlumComponent/PlumBuygoodsFormComponent").default,
  plumPaybillFormComponent:
    require("components/PagePlumComponent/PlumPaybillFormComponent").default,
};

export default boot(async ({ app }) => {
  for (const key in plumComponents) {
    app.component(key, plumComponents[key]);
  }
});
