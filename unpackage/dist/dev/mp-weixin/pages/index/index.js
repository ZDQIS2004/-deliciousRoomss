"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_van_icon = common_vendor.resolveComponent("van-icon");
  const _component_van_tab = common_vendor.resolveComponent("van-tab");
  const _component_van_tabs = common_vendor.resolveComponent("van-tabs");
  (_component_van_icon + _component_van_tab + _component_van_tabs)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const active = common_vendor.ref(1);
    const data = common_vendor.reactive({
      hot_list: [
        {
          "id": "sortChild-15",
          "name": "iphone14 pro max 炫酷发光手机壳",
          "payment": "先用后付",
          "Events": "关注立减6元",
          "imageUrl": "../../static/images/types/types_pro_03.jpg",
          "state": false,
          "money": 3.9,
          "SpellIt": 1677
        },
        {
          "id": "sortChild-13",
          "name": "红米k50 k50pro手机壳液态",
          "imageUrl": "../../static/images/types/types_pro_01.jpg",
          "payment": "先用后付",
          "Events": "立减5元",
          "state": false,
          "money": 1.9,
          "SpellIt": 604
        },
        {
          "id": "sortChild-7",
          "name": "华强北新款五代真无线蓝牙耳机",
          "payment": "先用后付",
          "Events": "立减5元",
          "imageUrl": "../../static/images/types/types_pro_05.jpg",
          "state": false,
          "money": 23.73,
          "SpellIt": 10
        },
        {
          "id": "sortChild-6",
          "name": "卡帝乐鳄鱼男鞋夏季休闲白塔运动高帮板鞋青少年潮流百搭帆布鞋男",
          "payment": "先用后付",
          "Events": "旗舰店",
          "imageUrl": "../../static/images/types/types_pro_09.jpg",
          "state": false,
          "money": 59,
          "SpellIt": 10
        }
      ],
      phone_list: [
        {
          "id": "sortChild-13",
          "name": "红米k50 k50pro手机壳液态",
          "imageUrl": "../../static/images/types/types_pro_01.jpg",
          "payment": "先用后付",
          "Events": "立减5元",
          "state": false,
          "money": 1.9,
          "SpellIt": 604
        },
        {
          "id": "sortChild-14",
          "name": "红米k50 k50pro手机壳液态",
          "payment": "先用后付",
          "imageUrl": "../../static/images/types/types_pro_02.jpg",
          "Events": "快点每200减30",
          "state": false,
          "money": 25.46,
          "SpellIt": 1688
        },
        {
          "id": "sortChild-15",
          "name": "iphone14 pro max 炫酷发光手机壳",
          "payment": "先用后付",
          "Events": "关注立减6元",
          "imageUrl": "../../static/images/types/types_pro_03.jpg",
          "state": false,
          "money": 3.9,
          "SpellIt": 1677
        },
        {
          "id": "sortChild-16",
          "name": "OPPOa5手机壳男潮流炫酷r",
          "payment": "先用后付",
          "Events": "一年低价",
          "imageUrl": "../../static/images/types/types_pro_04.jpg",
          "money": 2.97,
          "state": false,
          "SpellIt": 2140
        },
        {
          "id": "sortChild-17",
          "name": "Redmi红米K50 K50pro枫叶冰若雨",
          "payment": "先用后付",
          "Events": "关注立减6元",
          "imageUrl": "../../static/images/types/types_pro_01.jpg",
          "state": false,
          "money": 3.9,
          "SpellIt": 1688
        },
        {
          "id": "sortChild-18",
          "name": "红米k50 k50pro手机壳液态",
          "payment": "先用后付",
          "Events": "立减5元",
          "imageUrl": "../../static/images/types/types_pro_02.jpg",
          "state": false,
          "money": 4.9,
          "SpellIt": 604
        }
      ],
      err_list: [
        {
          "id": "sortChild-7",
          "name": "华强北新款五代真无线蓝牙耳机",
          "payment": "先用后付",
          "Events": "立减5元",
          "imageUrl": "../../static/images/types/types_pro_05.jpg",
          "state": false,
          "money": 23.73,
          "SpellIt": 10
        },
        {
          "id": "sortChild-8",
          "name": "数显蓝牙耳机真无限入耳式运动降噪2023新款",
          "payment": "先用后付",
          "Events": "立减5元",
          "imageUrl": "../../static/images/types/types_pro_06.jpg",
          "state": false,
          "money": 38.8,
          "SpellIt": 2735
        },
        {
          "id": "sortChild-9",
          "name": "适用于苹果13pro/12pro/11x/xr/xs新款蓝牙耳机",
          "payment": "先用后付",
          "Events": "旗舰店",
          "imageUrl": "../../static/images/types/types_pro_07.jpg",
          "state": false,
          "money": 25.5,
          "SpellIt": 10
        },
        {
          "id": "sortChild-10",
          "name": "无线蓝牙耳机高音质双耳入迷听音乐",
          "payment": "先用后付",
          "Events": "旗舰店",
          "imageUrl": "../../static/images/types/types_pro_08.jpg",
          "state": false,
          "money": 39.8,
          "SpellIt": 10
        },
        {
          "id": "sortChild-11",
          "name": "华强北新款四代真无线蓝牙耳机",
          "payment": "先用后付",
          "Events": "立减6元",
          "imageUrl": "../../static/images/types/types_pro_05.jpg",
          "state": false,
          "money": 19.77,
          "SpellIt": 10
        },
        {
          "id": "sortChild-12",
          "name": "四代五无线蓝牙耳机入耳",
          "payment": "先用后付",
          "Events": "立减10元",
          "imageUrl": "../../static/images/types/types_pro_06.jpg",
          "state": false,
          "money": 25.8,
          "SpellIt": 10
        }
      ],
      xie_list: [
        {
          "id": "sortChild-1",
          "name": "春夏季帆布男学生布鞋低帮运动板鞋",
          "payment": "先用后付",
          "Events": "一年低价",
          "imageUrl": "../../static/images/types/types_pro_09.jpg",
          "state": false,
          "money": 29.9,
          "SpellIt": 10
        },
        {
          "id": "sortChild-2",
          "name": "回力帆布鞋男低帮板鞋女鞋正品回力男鞋帆布鞋运动百搭学生情侣鞋",
          "payment": "先用后付",
          "Events": "30天低价",
          "imageUrl": "../../static/images/types/types_pro_10.jpg",
          "state": false,
          "money": 69,
          "SpellIt": 10
        },
        {
          "id": "sortChild-3",
          "name": "帆布鞋男帮学生情侣男鞋潮百搭布鞋春夏季球鞋迷",
          "payment": "先用后付",
          "Events": "退货包运费",
          "imageUrl": "../../static/images/types/types_pro_11.jpg",
          "state": false,
          "money": 39.9,
          "SpellIt": 10
        },
        {
          "id": "sortChild-4",
          "name": "环球男鞋子2023新款绿色帆布鞋夏季百搭国潮鞋子学生低帮平底板鞋",
          "payment": "先用后付",
          "Events": "历史低价",
          "imageUrl": "../../static/images/types/types_pro_12.jpg",
          "state": false,
          "money": 69,
          "SpellIt": 10
        },
        {
          "id": "sortChild-5",
          "name": "回力经典帆布鞋高帮男2023夏季新款休闲帆布鞋ins",
          "payment": "先用后付",
          "Events": "品质险",
          "imageUrl": "../../static/images/types/types_pro_10.jpg",
          "state": false,
          "money": 75,
          "SpellIt": 10
        },
        {
          "id": "sortChild-6",
          "name": "卡帝乐鳄鱼男鞋夏季休闲白塔运动高帮板鞋青少年潮流百搭帆布鞋男",
          "payment": "先用后付",
          "Events": "旗舰店",
          "imageUrl": "../../static/images/types/types_pro_09.jpg",
          "state": false,
          "money": 59,
          "SpellIt": 10
        }
      ]
    });
    const onChange = (event) => {
      console.log(event);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          classPrefix: "iconfont icon-shangpinshoucang",
          name: "hot",
          color: "red",
          info: "秒",
          size: "30px"
        }),
        b: common_vendor.p({
          classPrefix: "iconfont icon-duanmaqingcang",
          name: "hot",
          color: "orange",
          size: "30px"
        }),
        c: common_vendor.p({
          classPrefix: "iconfont icon-fushi-nvzhuang",
          name: "hot",
          color: "#e76ecd",
          size: "30px"
        }),
        d: common_vendor.p({
          classPrefix: "iconfont icon-lingquanzhongxin",
          name: "hot",
          color: "orange",
          size: "30px"
        }),
        e: common_vendor.p({
          classPrefix: "iconfont icon-shengqianyueka",
          name: "hot",
          color: "orange",
          size: "30px"
        }),
        f: common_vendor.f(data.hot_list, (item, index, i0) => {
          return {
            a: item.imageUrl,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.payment),
            d: common_vendor.t(item.Events),
            e: common_vendor.t(item.money),
            f: common_vendor.t(item.SpellIt),
            g: index
          };
        }),
        g: common_vendor.p({
          title: "热门",
          name: "1"
        }),
        h: common_vendor.f(data.phone_list, (item, index, i0) => {
          return {
            a: item.imageUrl,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.payment),
            d: common_vendor.t(item.Events),
            e: common_vendor.t(item.money),
            f: common_vendor.t(item.SpellIt),
            g: index
          };
        }),
        i: common_vendor.p({
          title: "手机壳",
          name: "2"
        }),
        j: common_vendor.f(data.err_list, (item, index, i0) => {
          return {
            a: item.imageUrl,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.payment),
            d: common_vendor.t(item.Events),
            e: common_vendor.t(item.money),
            f: common_vendor.t(item.SpellIt),
            g: index
          };
        }),
        k: common_vendor.p({
          title: "耳机",
          name: "3"
        }),
        l: common_vendor.f(data.xie_list, (item, index, i0) => {
          return {
            a: item.imageUrl,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.payment),
            d: common_vendor.t(item.Events),
            e: common_vendor.t(item.money),
            f: common_vendor.t(item.SpellIt),
            g: index
          };
        }),
        m: common_vendor.p({
          title: "男鞋",
          name: "4"
        }),
        n: common_vendor.o(onChange),
        o: common_vendor.p({
          activeKey: active.value
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/web/作业/2023.7.25轻醒/电商页面/电商小程序/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
