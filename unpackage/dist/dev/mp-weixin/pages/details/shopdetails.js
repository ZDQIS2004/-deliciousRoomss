"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      fw1: "font-weight:400",
      fw2: "font-weight:400",
      fw3: "font-weight:400",
      color1: "color:#323232",
      color2: "color:#323232",
      color3: "color:#323232",
      bgcolor: "",
      list: [
        {
          image: ""
        },
        {
          image: ""
        },
        {
          image: ""
        }
      ],
      flag: true,
      top: "",
      juli2: "",
      juli1: 0,
      juli3: ""
    };
  },
  methods: {
    review() {
      common_vendor.index.navigateTo({
        url: "/pages/review/new_file"
      });
    },
    popup3() {
      this.$refs.popup3.open();
    },
    sp(e) {
      this.fw1 = "font-weight:bold";
      this.fw2 = "font-weight:400";
      this.fw3 = "font-weight:400";
      this.color1 = "color:#00ce88";
      this.color2 = "color:#323232";
      this.color3 = "color:#323232";
      common_vendor.index.pageScrollTo({
        duration: 150,
        scrollTop: this.juli1
      });
    },
    xq(e) {
      this.fw1 = "font-weight:400";
      this.fw2 = "font-weight:bold";
      this.fw3 = "font-weight:400";
      this.color1 = "color:#323232";
      this.color2 = "color:#00ce88";
      this.color3 = "color:#323232";
      common_vendor.index.pageScrollTo({
        duration: 150,
        scrollTop: this.juli2
      });
    },
    tj(e) {
      this.fw1 = "font-weight:400";
      this.fw2 = "font-weight:400";
      this.fw3 = "font-weight:bold";
      this.color1 = "color:#323232";
      this.color2 = "color:#323232";
      this.color3 = "color:#00ce88";
      common_vendor.index.pageScrollTo({
        duration: 150,
        scrollTop: this.juli3
      });
    }
  },
  // 通过这个方法,监听滑动的距离,通过距离,动态修改透明的
  onPageScroll(e) {
    if (e.scrollTop >= 0 && e.scrollTop <= 8) {
      this.bgcolor = "opacity:0";
    } else if (e.scrollTop > 8 && e.scrollTop <= 16) {
      this.bgcolor = "opacity:0.1";
    } else if (e.scrollTop > 16 && e.scrollTop <= 24) {
      this.bgcolor = "opacity:0.2";
    } else if (e.scrollTop > 24 && e.scrollTop <= 32) {
      this.bgcolor = "opacity:0.3";
    } else if (e.scrollTop > 32 && e.scrollTop <= 40) {
      this.bgcolor = "opacity:0.4";
    } else if (e.scrollTop > 40 && e.scrollTop <= 48) {
      this.bgcolor = "opacity:0.5";
    } else if (e.scrollTop > 48 && e.scrollTop <= 56) {
      this.bgcolor = "opacity:0.6";
    } else if (e.scrollTop > 56 && e.scrollTop <= 64) {
      this.bgcolor = "opacity:0.7";
    } else if (e.scrollTop > 64 && e.scrollTop <= 72) {
      this.bgcolor = "opacity:0.8";
    } else if (e.scrollTop > 72 && e.scrollTop <= 80) {
      this.bgcolor = "opacity:0.9";
    } else if (e.scrollTop > 80) {
      this.bgcolor = "opacity:1";
    }
    this.top = e.scrollTop;
    if (e.scrollTop <= 16) {
      this.flag = true;
    } else {
      this.flag = false;
    }
    if (this.top <= this.juli2 - this.juli1) {
      this.fw1 = "font-weight:bold";
      this.fw2 = "font-weight:400";
      this.fw3 = "font-weight:400";
      this.color1 = "color:#00ce88";
      this.color2 = "color:#323232";
      this.color3 = "color:#323232";
    }
    if (this.top >= this.juli2 && this.top < this.juli3) {
      this.fw1 = "font-weight:400";
      this.fw2 = "font-weight:bold";
      this.fw3 = "font-weight:400";
      this.color1 = "color:#323232";
      this.color2 = "color:#00ce88";
      this.color3 = "color:#323232";
    }
    if (this.top >= this.juli3) {
      this.fw1 = "font-weight:400";
      this.fw2 = "font-weight:400";
      this.fw3 = "font-weight:bold";
      this.color1 = "color:#323232";
      this.color2 = "color:#323232";
      this.color3 = "color:#00ce88";
    }
  },
  // 页面加载,默认opacity:0,意为透明不显示
  onLoad() {
    this.fw1 = "font-weight:bold";
    this.fw2 = "font-weight:400";
    this.fw3 = "font-weight:400";
    this.color1 = "color:#00ce88";
    this.color2 = "color:#323232";
    this.color3 = "color:#323232";
    this.bgcolor = "opacity:0";
  },
  mounted() {
    common_vendor.index.createSelectorQuery().select(".huopin").boundingClientRect((res) => {
      console.log("2的高度是" + res.top);
      var juli2 = res.top;
      this.juli2 = juli2 - 90;
    }).exec();
    common_vendor.index.createSelectorQuery().select(".end").boundingClientRect((res) => {
      console.log(res);
      console.log("3的高度是" + res.top);
      var juli3 = res.top;
      this.juli3 = juli3 - 90;
    }).exec();
  },
  onHide() {
    common_vendor.index.pageScrollTo({
      duration: 1,
      scrollTop: 0
    });
  }
};
if (!Array) {
  const _component_u_swiper = common_vendor.resolveComponent("u-swiper");
  const _component_uni_popup_share = common_vendor.resolveComponent("uni-popup-share");
  const _component_uni_popup = common_vendor.resolveComponent("uni-popup");
  (_component_u_swiper + _component_uni_popup_share + _component_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.sp && $options.sp(...args)),
    b: common_vendor.s($data.fw1),
    c: common_vendor.s($data.color1),
    d: common_vendor.o((...args) => $options.xq && $options.xq(...args)),
    e: common_vendor.s($data.fw2),
    f: common_vendor.s($data.color2),
    g: common_vendor.o((...args) => $options.tj && $options.tj(...args)),
    h: common_vendor.s($data.fw3),
    i: common_vendor.s($data.color3),
    j: common_vendor.s($data.bgcolor),
    k: $data.flag === false ? "none" : "block",
    l: common_vendor.p({
      list: $data.list,
      mode: "none",
      height: "760"
    }),
    m: common_vendor.o((...args) => _ctx.todpsy && _ctx.todpsy(...args)),
    n: common_vendor.o((...args) => $options.review && $options.review(...args)),
    o: common_vendor.o((...args) => _ctx.todpsy && _ctx.todpsy(...args)),
    p: common_vendor.o((...args) => $options.popup3 && $options.popup3(...args)),
    q: common_vendor.p({
      title: "分享到"
    }),
    r: common_vendor.sr("popup3", "2c8bb6db-1"),
    s: common_vendor.p({
      type: "bottom",
      ["background-color"]: "#fff"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2c8bb6db"], ["__file", "C:/Users/86131/Desktop/轻醒/电商小程序/pages/details/shopdetails.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
