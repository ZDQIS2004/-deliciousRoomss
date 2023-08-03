"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    toIndex() {
      common_vendor.index.navigateTo({
        url: "/pages/details/shopdetails"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.toIndex && $options.toIndex(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/86131/Desktop/轻醒/电商小程序/pages/cart/cart.vue"]]);
wx.createPage(MiniProgramPage);
