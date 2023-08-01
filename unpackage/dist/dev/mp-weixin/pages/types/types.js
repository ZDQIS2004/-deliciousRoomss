"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_van_sidebar_item = common_vendor.resolveComponent("van-sidebar-item");
  const _component_van_sidebar = common_vendor.resolveComponent("van-sidebar");
  (_component_van_sidebar_item + _component_van_sidebar)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "types",
  setup(__props) {
    const activeKey = common_vendor.ref(0);
    const store = common_vendor.useStore();
    console.log(store.state.sortData);
    const onChange = (event) => {
      activeKey.value = event.detail;
    };
    const toTypesPro = (val) => {
      common_vendor.index.navigateTo({
        url: `/subPages/typesPro/typesPro?id=${val.id}&title=${val.name}`
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "手机壳"
        }),
        b: common_vendor.p({
          title: "耳机"
        }),
        c: common_vendor.p({
          title: "帆布鞋"
        }),
        d: common_vendor.o(onChange),
        e: common_vendor.p({
          activeKey: activeKey.value
        }),
        f: activeKey.value === 0
      }, activeKey.value === 0 ? {
        g: common_vendor.f(common_vendor.unref(store).state.sortData, (item, k0, i0) => {
          return common_vendor.e({
            a: item.id === 1
          }, item.id === 1 ? {
            b: item.pic,
            c: common_vendor.t(item.name)
          } : {}, {
            d: common_vendor.o(($event) => toTypesPro(item), item.id),
            e: item.id
          });
        })
      } : {}, {
        h: activeKey.value === 1
      }, activeKey.value === 1 ? {
        i: common_vendor.f(common_vendor.unref(store).state.sortData, (item, k0, i0) => {
          return common_vendor.e({
            a: item.id === 2
          }, item.id === 2 ? {
            b: item.pic,
            c: common_vendor.t(item.name)
          } : {}, {
            d: common_vendor.o(($event) => toTypesPro(item), item.id),
            e: item.id
          });
        })
      } : {}, {
        j: activeKey.value === 2
      }, activeKey.value === 2 ? {
        k: common_vendor.f(common_vendor.unref(store).state.sortData, (item, k0, i0) => {
          return common_vendor.e({
            a: item.id === 3
          }, item.id === 3 ? {
            b: item.pic,
            c: common_vendor.t(item.name)
          } : {}, {
            d: common_vendor.o(($event) => toTypesPro(item), item.id),
            e: item.id
          });
        })
      } : {});
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-af696197"], ["__file", "F:/web/作业/2023.7.25轻醒/电商页面/电商小程序/pages/types/types.vue"]]);
wx.createPage(MiniProgramPage);
