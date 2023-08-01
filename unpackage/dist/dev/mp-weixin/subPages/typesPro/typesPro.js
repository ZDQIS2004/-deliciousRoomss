"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      id: 1
    };
  },
  onLoad(option) {
    console.log(option);
    this.id = option.id;
    common_vendor.index.setNavigationBarTitle({
      title: option.title
    });
  },
  setup() {
    const store = common_vendor.useStore();
    console.log(store.state.sortData[0].details);
    return {
      store
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($setup.store.state.sortData[$data.id - 1].details, (item, k0, i0) => {
      return {
        a: item.imageUrl,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.payment),
        d: common_vendor.t(item.Events),
        e: common_vendor.t(item.money),
        f: common_vendor.t(item.SpellIt),
        g: item.id,
        h: "/subPages/proDetails/proDetails?id=" + item.id + "&title=" + item.name
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ee7eff14"], ["__file", "F:/web/作业/2023.7.25轻醒/电商页面/电商小程序/subPages/typesPro/typesPro.vue"]]);
wx.createPage(MiniProgramPage);
