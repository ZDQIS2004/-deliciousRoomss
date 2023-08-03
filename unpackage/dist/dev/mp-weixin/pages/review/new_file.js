"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "evaluateList",
  data() {
    return {
      list: [
        {
          name: "好吃好吃好吃好吃",
          title: "年度无污染快捷方便食品",
          image: "",
          score: 4.5,
          time: "2021.06.06",
          content: "性价比超高，味道不错，包装完好，正品，物美价廉物美价廉，料很足，都吃了好多包了，经典国货，白象牌方便面值得拥有，强烈推荐哦!",
          imageList: [
            { url: "https://slzh-oss.oss-cn-beijing.aliyuncs.com/usercenter/template/2c94809a787cec070179e0234e7902ab.png" },
            { url: "https://slzh-oss.oss-cn-beijing.aliyuncs.com/usercenter/template/2c94809a787cec070179e0234e7902ab.png" },
            { url: "https://slzh-oss.oss-cn-beijing.aliyuncs.com/usercenter/template/2c94809a787cec070179e0234e7902ab.png" },
            { url: "https://slzh-oss.oss-cn-beijing.aliyuncs.com/usercenter/template/2c94809a787cec070179e0234e7902ab.png" },
            { url: "https://slzh-oss.oss-cn-beijing.aliyuncs.com/usercenter/template/2c94809a787cec070179e0234e7902ab.png" },
            { url: "https://slzh-oss.oss-cn-beijing.aliyuncs.com/usercenter/template/2c94809a787cec070179e0234e7902ab.png" },
            { url: "https://slzh-oss.oss-cn-beijing.aliyuncs.com/usercenter/template/2c94809a787cec070179e0234e7902ab.png" }
          ]
        },
        {
          name: "好吃",
          title: "1999年无污染",
          image: "",
          score: 4.5,
          time: "2021.06.06",
          content: "服务好服务好服务好服务好，景色好，山河锦绣，树木茂盛树木茂盛树木茂盛树木茂盛树木茂盛树木茂盛树木茂盛树木茂盛树木茂盛树木茂盛树木茂盛树木茂盛，空气清新，鸟语花香，人杰地灵",
          imageList: [
            { url: "https://slzh-oss.oss-cn-beijing.aliyuncs.com/usercenter/template/2c94809a787cec070179e0234e7902ab.png" },
            { url: "https://slzh-oss.oss-cn-beijing.aliyuncs.com/usercenter/template/2c94809a787cec070179e0234e7902ab.png" },
            { url: "https://slzh-oss.oss-cn-beijing.aliyuncs.com/usercenter/template/2c94809a787cec070179e0234e7902ab.png" },
            { url: "https://slzh-oss.oss-cn-beijing.aliyuncs.com/usercenter/template/2c94809a787cec070179e0234e7902ab.png" },
            { url: "https://slzh-oss.oss-cn-beijing.aliyuncs.com/usercenter/template/2c94809a787cec070179e0234e7902ab.png" },
            { url: "https://slzh-oss.oss-cn-beijing.aliyuncs.com/usercenter/template/2c94809a787cec070179e0234e7902ab.png" },
            { url: "https://slzh-oss.oss-cn-beijing.aliyuncs.com/usercenter/template/2c94809a787cec070179e0234e7902ab.png" }
          ]
        }
      ]
    };
  },
  created() {
    this.getlist();
  },
  onLoad() {
    this.getlist();
  },
  methods: {
    getlist() {
      this.list.forEach((item) => {
        if (item.content.length > 60) {
          item.isMore = true;
          item.contentAll = true;
        } else {
          item.isMore = false;
          item.contentAll = false;
        }
      });
    },
    changeAllFun(item, index) {
      let list = JSON.parse(JSON.stringify(this.list));
      list.forEach((elem, ind) => {
        if (index === ind) {
          elem.contentAll = !elem.contentAll;
        }
      });
      this.list = list;
    }
  }
};
if (!Array) {
  const _component_uni_rate = common_vendor.resolveComponent("uni-rate");
  _component_uni_rate();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return common_vendor.e({
        a: item.image,
        b: common_vendor.t(item.name),
        c: "f8b2c4c8-0-" + i0,
        d: common_vendor.p({
          size: "12",
          activeColor: "#fd9130",
          ["is-fill"]: false,
          readonly: true,
          disabledColor: "",
          ["allow-half"]: true,
          value: item.score || 3.5
        }),
        e: common_vendor.t(item.time),
        f: common_vendor.t(item.content),
        g: item.contentAll ? 1 : "",
        h: item.isMore
      }, item.isMore ? common_vendor.e({
        i: item.contentAll
      }, item.contentAll ? {
        j: common_vendor.o(($event) => $options.changeAllFun(item, index), index)
      } : {
        k: common_vendor.o(($event) => $options.changeAllFun(item, index), index)
      }) : {}, {
        l: common_vendor.f(item.imageList, (itm, ind, i1) => {
          return {
            a: ind
          };
        }),
        m: common_vendor.t(item.title),
        n: index
      });
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f8b2c4c8"], ["__file", "C:/Users/86131/Desktop/轻醒/电商小程序/pages/review/new_file.vue"]]);
wx.createPage(MiniProgramPage);
