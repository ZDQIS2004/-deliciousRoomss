"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _component_van_button = common_vendor.resolveComponent("van-button");
  _component_van_button();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      type: "primary"
    }),
    b: common_vendor.p({
      type: "default"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/86131/Desktop/轻醒/电商小程序/pages/types/types.vue"]]);
wx.createPage(MiniProgramPage);
