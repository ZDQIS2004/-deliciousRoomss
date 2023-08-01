"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const store_index = require("./store/index.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/types/types.js";
  "./pages/cart/cart.js";
  "./pages/person/person.js";
  "./subPages/proDetails/proDetails.js";
  "./subPages/typesPro/typesPro.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/web/作业/2023.7.25轻醒/电商页面/电商小程序/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(store_index.Store);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
