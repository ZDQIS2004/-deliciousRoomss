<template>
	<view>
		<view class="head" :style="bgcolor">
			<view class="back">
				<view class="left1"><image src="" mode=""></image></view>
			</view>
 
			<table></table>
			<view class="title1">
				<view class="" :style="color1"><text @click="sp" :style="fw1">商品</text></view>
				<view class="" :style="color2" value="1"><text @click="xq" :style="fw2">详情</text></view>
				<view class="" :style="color3" value="2"><text @click="tj" :style="fw3">推荐</text></view>
			</view>
		</view>
 
		<view class="fanhui" :style="{ display: flag === false ? 'none' : 'block' }"><image src="" mode=""></image></view>
 
		<view class="">
			<view class="swiper"><u-swiper :list="list" mode="none" height="760"></u-swiper></view>
			<view class="" style="height: 110rpx;width: 810%;padding: 20rpx;">
				<text style="font-weight: bold;">白象方便面混合装多口味整箱香菇老坛酸菜油泼辣子汤红烧牛肉泡面</text>
			</view>
			<view class="xian"></view>
			<view class="zuobiao">
				<image src="" mode=""></image>
				<text style="font-size: 24rpx;color: #969696;position: absolute;left: 70rpx;	top: 20rpx;">退货包运费 · 全场包邮 · 7天无理由退货 · 48小时发货</text>
			</view>
			<view class="bg"></view>
			<view class="guige">
				<view class="title2" style="display: flex;justify-content: space-between;font-weight: bold;color: #010101;font-size: 28rpx;">
					<text>规格</text>
					<text>一箱几个</text>
					<text>价格</text>
				</view>
				<view>
					<view class="first" style="margin-top: 20rpx;">
						<view class="first1">白象方便面</view>
						<view class="first2">20袋一箱</view>
						<view class="first3"><text style="float: right;padding:20rpx 26rpx 0 0;color: #00CE88;font-weight: bold; ">￥20/箱</text></view>
					</view>
					<view class="two">
						<view class="first1">白象方便面</view>
						<view class="first2">20袋一箱</view>
						<view class="first3"><text style="float: right;padding:20rpx 26rpx 0 0;color: #00CE88;font-weight: bold; ">￥20/箱</text></view>
					</view>
					<view class="three">
						<view class="first1">白象方便面</view>
						<view class="first2">20袋一箱</view>
						<view class="first3"><text style="float: right;padding:20rpx 26rpx 0 0;color: #00CE88;font-weight: bold; ">￥20/箱</text></view>
					</view>
				</view>
			</view>
			<view class="bg"></view>
			<view class="shandong">
				<view class="touxiang">
					<image src="" style="width: 100%;height: 100%;" mode=""></image>
				</view>
				<text style="position: absolute;top: 40rpx;left: 160rpx;font-weight: bold;font-size: 28rpx;color: #646464;">白象工厂</text>
				<text style="font-size: 24rpx;color: #969696;position: absolute;bottom: 30rpx;">诚信经营。 诚信经营。 诚信经营。 诚信经营。 诚信经营。诚信经营。</text>
				<view 
					@click="todpsy"
					class="ckmp"
					style="position: absolute;right: 60rpx;top: 40rpx;width: 144rpx;height: 50rpx;background-color: #fff;border-radius: 40rpx;border: 2rpx solid #00ce88;text-align: center;line-height: 44rpx;font-size: 24rpx;color: #00ce88;"
				>
					<text>查看信息</text>
				</view>
				<view class="bao"><image style="width: 100%;height: 100%;" src="" mode=""></image></view>
				<view class="huangguan"><image style="width: 100%;height: 100%;" src="" mode=""></image></view>
			</view>
			<view class="bg"></view>
			<view class="tuijian">
				<view class="tuijian1">
					<view class="" style="height: 50rpx;width: 50%;"><text style="font-weight: bold;font-size: 30rpx;">评论</text></view>
					<view class="">
						<text style="color: #00CE88;" @click="review">查看全部</text>
					</view>
				</view>
				<view class="xian"></view>
				<view class="hongmao">
					<view class="hongmao1">
						<view class="" style="width:220rpx;height: 200rpx;background-color: #2979FF;border-radius: 12rpx;">
							<image src="" style="width: 100%;height: 100%;" mode=""></image>
						</view>
						<view class="" style="font-size: 24rpx;color: #323232; margin-top: 16rpx;"><text>很便宜</text></view>
						<view class="" style="margin-top: 20rpx;">
							<text style="font-size: 20rpx;color: #969696;">1730人看过</text>
						</view>
					</view>
					<view class="hongmao2">
						<view class="" style="width:220rpx;height: 200rpx;background-color: #2979FF;border-radius: 12rpx;">
							<image src="" style="width: 100%;height: 100%;" mode=""></image>
						</view>
						<view class="" style="font-size: 24rpx;color: #323232; margin-top: 16rpx;"><text>很便宜</text></view>
						<view class="" style="margin-top: 20rpx;">
							<text style="font-size: 20rpx;color: #969696;">1730人看过</text>
						</view>
					</view>
					<view class="hongmao3">
						<view class="" style="width:220rpx;height: 200rpx;background-color: #2979FF;border-radius: 12rpx;">
							<image src="" style="width: 100%;height: 100%;" mode=""></image>
						</view>
						<view class="" style="font-size: 24rpx;color: #323232; margin-top: 16rpx;"><text>很便宜</text></view>
						<view class="" style="margin-top: 20rpx;">
							<text style="font-size: 20rpx;color: #969696;">1730人看过</text>
						</view>
					</view>
				</view>
			</view>
			<view class="bg"></view>
			<view class="huopin">
				<view class=""><text style="font-size: 32rpx;color: #141414;font-weight: bold;">货品详情</text></view>
				<view class="xian"></view>
				<view class="" style="margin-top: 20rpx;">
					<text style="font-size: 28rpx;color: #323232;">
					角色粉色加上了附件二十分鸡儿覅欧式机烦死饿了就烦死额很好吃，分手角色粉色加上了附件二十分鸡儿覅欧式机烦死饿了就烦死额很好吃分手角色粉色加上了附件二十分鸡儿覅欧式机烦死饿了就烦死额很好吃
					</text>
				</view>
			</view>
			<view class="img2" style="width: 100%;height: 760rpx;background-color: #007AFF;">
				<image src="" style="width: 100%;height: 100%;" mode=""></image>
			</view>
			<view class="img2" style="width: 100%;height: 760rpx;background-color: #007AFF;margin-top: 16rpx;">
				<image src="" style="width: 100%;height: 100%;" mode=""></image>
			</view>
			<view
				class="fabu"
				style="width: 100%;height: 84rpx;
					font-size: 24rpx;color: #646464;"
			>
				<view class="" style="width: 110rpx;height: 100%;padding-top: 20rpx;text-align: center;float: left;margin-left: 30rpx;"><text>发布时间:</text></view>
				<view class="" style="width: 110rpx;height: 100%;padding-top: 20rpx;text-align: center;float: left;"><text>05月15日</text></view>
				<view class="" style="width: 80rpx;height: 100%;padding-top: 20rpx;text-align: center;float: left;"><text>15:08</text></view>
			</view>
			<view
				class="heng"
				style="position: relative;	width: 100%;
			height: 70rpx;
			background-color: #F2F2F2;"
			>
				<view class="" style="width: 160rpx;height: 1rpx;color: #e0e0e0;position: absolute;left: 140rpx;top: 16rpx;">—————</view>
				<view class="weinin"><text>为您推荐</text></view>
				<view class="" style="width: 160rpx;height: 1rpx;color: #e0e0e0;position: absolute;right: 140rpx;top: 16rpx;">—————</view>
			</view>
			<view class="end">
				<view class="green" style="width: 8rpx;height: 34rpx;background-color: #00CE88;position: absolute;top: 24rpx;left: 40rpx;"></view>
				<view class=""><text style="font-size: 28rpx;font-weight: bold;color: #141414;position: absolute;left: 70rpx;top: 20rpx;">为您推荐</text></view>
				<view class="youxuan" style="position: absolute;top: 60rpx;width: 100%;">
					<view class="youxuan1" style="width: 46%;margin:10rpx 10rpx 10rpx 2%;float: left;border-radius: 14rpx;box-shadow:2px 4px 2px #eee;">
						<view class="" style="width: 100%;height: 350rpx;border-top-right-radius: 14rpx;border-top-left-radius: 14rpx;"><image src="" style="width: 100%;height: 100%;" mode=""></image></view>
						<view class="" style="width: 90%;margin-top: 10rpx;margin-bottom: 10rpx;margin-left: 20rpx;">
							<text style="font-size: 28rpx;font-weight: bold;">各种方便面</text>
						</view>
						<view class="" style="width: 100%;margin-bottom: 20rpx;margin-left: 20rpx;">
							<text style="color: #969696;font-size: 20rpx;">中国</text>
						</view>
					</view>
					<view class="youxuan1" style="width: 46%;margin:10rpx 10rpx 10rpx 2%;float: left;border: 1rpx solid #ddd;border-radius: 14rpx;box-shadow:0px 2px 0px #eee;">
						<view class="" style="width: 100%;height: 350rpx;border-top-right-radius: 14rpx;border-top-left-radius: 14rpx;"><image src="" style="width: 100%;height: 100%;" mode=""></image></view>
						<view class="" style="width: 90%;margin-top: 10rpx;margin-bottom: 10rpx;margin-left: 20rpx;">
							<text style="font-size: 28rpx;font-weight: bold;">各种方便面</text>
						</view>
						<view class="" style="width: 100%;margin-bottom: 20rpx;margin-left: 20rpx;">
							<text style="color: #969696;font-size: 20rpx;">中国</text>
						</view>
					</view>
					<view class="youxuan1" style="width: 46%;margin:10rpx 10rpx 10rpx 2%;float: left;border: 1rpx solid #ddd;border-radius: 14rpx;box-shadow:0px 2px 0px #eee;">
						<view class="" style="width: 100%;height: 350rpx;border-top-right-radius: 14rpx;border-top-left-radius: 14rpx;"><image src="" style="width: 100%;height: 100%;" mode=""></image></view>
						<view class="" style="width: 90%;margin-top: 10rpx;margin-bottom: 10rpx;margin-left: 20rpx;">
							<text style="font-size: 28rpx;font-weight: bold;">各种方便面</text>
						</view>
						<view class="" style="width: 100%;margin-bottom: 20rpx;margin-left: 20rpx;">
							<text style="color: #969696;font-size: 20rpx;">中国</text>
						</view>
					</view>
					<view class="youxuan1" style="width: 46%;margin:10rpx 10rpx 10rpx 2%;float: left;border: 1rpx solid #ddd;border-radius: 14rpx;box-shadow:0px 2px 0px #eee;">
						<view class="" style="width: 100%;height: 350rpx;border-top-right-radius: 14rpx;border-top-left-radius: 14rpx;"><image src="" style="width: 100%;height: 100%;" mode=""></image></view>
						<view class="" style="width: 90%;margin-top: 10rpx;margin-bottom: 10rpx;margin-left: 20rpx;">
							<text style="font-size: 28rpx;font-weight: bold;">各种方便面</text>
						</view>
						<view class="" style="width: 100%;margin-bottom: 20rpx;margin-left: 20rpx;">						
							<text style="color: #969696;font-size: 20rpx;">中国</text>
						</view>
					</view>
					<view class="youxuan1" style="width: 46%;margin:10rpx 10rpx 10rpx 2%;float: left;border: 1rpx solid #ddd;border-radius: 14rpx;box-shadow:0px 2px 0px #eee;">
						<view class="" style="width: 100%;height: 350rpx;border-top-right-radius: 14rpx;border-top-left-radius: 14rpx;"><image src="" style="width: 100%;height: 100%;" mode=""></image></view>
						<view class="" style="width: 90%;margin-top: 10rpx;margin-bottom: 10rpx;margin-left: 20rpx;">
							<text style="font-size: 28rpx;font-weight: bold;">各种方便面</text>
						</view>
						<view class="" style="width: 100%;margin-bottom: 20rpx;margin-left: 20rpx;">
							<text style="color: #969696;font-size: 20rpx;">中国</text>
						</view>
					</view>
				</view>
			</view>
			<view class="lxsj" style="width: 100%;height: 100rpx;position: fixed;bottom: 0;">
				<view class="">
					<view class="mp" @click="todpsy">
						<image src="" mode=""></image>
						<view class=""><text style="color: #969696;font-size: 24rpx;position: absolute;top: 50rpx;left: 2rpx;">名片</text></view>
					</view>
					<view class="fx" style="">
						<image src="" mode=""></image>
						<view class="" style="text-align: center;"><text style="color: #969696;font-size: 24rpx;position: absolute;top: 50rpx;left: 2rpx;"  @click="popup3">分享</text></view>
						<uni-popup class="popup3"  ref="popup3" type="bottom" background-color="#fff" >
							<uni-popup-share title="分享到"></uni-popup-share>			
						</uni-popup>
					</view>
					<view class="sc" style="">
						<image src="" mode=""></image>
						<view class="" style="text-align: center;"><text style="color: #969696;font-size: 24rpx;position: absolute;top: 50rpx;left: 2rpx;">收藏</text></view>
					</view>
				</view>
				<view class="btn"><text>加入购物车</text></view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			fw1: 'font-weight:400',
			fw2: 'font-weight:400',
			fw3: 'font-weight:400',
			color1: 'color:#323232',
			color2: 'color:#323232',
			color3: 'color:#323232',
			bgcolor: '',
			list: [
				{
					image: ''
				},
				{
					image: ''
				},
				{
					image: ''
				}
			],
			flag: true,
			top: '',
			juli2: '',
			juli1: 0,
			juli3: ''
		};
	},
	methods: {
		review(){
			uni.navigateTo({
				url:"/pages/review/new_file"
			})
		},
		
		popup3() {
		    this.$refs.popup3.open()
		},
		sp(e) {
			this.fw1 = 'font-weight:bold';
			this.fw2 = 'font-weight:400';
			this.fw3 = 'font-weight:400';
			this.color1 = 'color:#00ce88';
			this.color2 = 'color:#323232';
			this.color3 = 'color:#323232';
			uni.pageScrollTo({
				duration: 150,
				scrollTop: this.juli1
			});
		},
		xq(e) {
			this.fw1 = 'font-weight:400';
			this.fw2 = 'font-weight:bold';
			this.fw3 = 'font-weight:400';
			this.color1 = 'color:#323232';
			this.color2 = 'color:#00ce88';
			this.color3 = 'color:#323232';
			uni.pageScrollTo({
				duration: 150,
				scrollTop: this.juli2
			});
		},
		tj(e) {
			this.fw1 = 'font-weight:400';
			this.fw2 = 'font-weight:400';
			this.fw3 = 'font-weight:bold';
			this.color1 = 'color:#323232';
			this.color2 = 'color:#323232';
			this.color3 = 'color:#00ce88';
			uni.pageScrollTo({
				duration: 150,
				scrollTop: this.juli3
			});
		}
	},
	// 通过这个方法,监听滑动的距离,通过距离,动态修改透明的
	onPageScroll(e) {
		if (e.scrollTop >= 0 && e.scrollTop <= 8) {
			this.bgcolor = 'opacity:0';
		} else if (e.scrollTop > 8 && e.scrollTop <= 16) {
			this.bgcolor = 'opacity:0.1';
		} else if (e.scrollTop > 16 && e.scrollTop <= 24) {
			this.bgcolor = 'opacity:0.2';
		} else if (e.scrollTop > 24 && e.scrollTop <= 32) {
			this.bgcolor = 'opacity:0.3';
		} else if (e.scrollTop > 32 && e.scrollTop <= 40) {
			this.bgcolor = 'opacity:0.4';
		} else if (e.scrollTop > 40 && e.scrollTop <= 48) {
			this.bgcolor = 'opacity:0.5';
		} else if (e.scrollTop > 48 && e.scrollTop <= 56) {
			this.bgcolor = 'opacity:0.6';
		} else if (e.scrollTop > 56 && e.scrollTop <= 64) {
			this.bgcolor = 'opacity:0.7';
		} else if (e.scrollTop > 64 && e.scrollTop <= 72) {
			this.bgcolor = 'opacity:0.8';
		} else if (e.scrollTop > 72 && e.scrollTop <= 80) {
			this.bgcolor = 'opacity:0.9';
		} else if (e.scrollTop > 80) {
			this.bgcolor = 'opacity:1';
		}
		this.top = e.scrollTop;
		// console.log(this.top);
		if (e.scrollTop <= 16) {
			this.flag = true;
		} else {
			this.flag = false;
		}
		if (this.top <= this.juli2 - this.juli1) {
			this.fw1 = 'font-weight:bold';
			this.fw2 = 'font-weight:400';
			this.fw3 = 'font-weight:400';
			this.color1 = 'color:#00ce88';
			this.color2 = 'color:#323232';
			this.color3 = 'color:#323232';
		}
		if (this.top >= this.juli2 && this.top < this.juli3) {
			this.fw1 = 'font-weight:400';
			this.fw2 = 'font-weight:bold';
			this.fw3 = 'font-weight:400';
			this.color1 = 'color:#323232';
			this.color2 = 'color:#00ce88';
			this.color3 = 'color:#323232';
		}
		if (this.top >= this.juli3) {
			this.fw1 = 'font-weight:400';
			this.fw2 = 'font-weight:400';
			this.fw3 = 'font-weight:bold';
			this.color1 = 'color:#323232';
			this.color2 = 'color:#323232';
			this.color3 = 'color:#00ce88';
		}
	},
 
	// 页面加载,默认opacity:0,意为透明不显示
	onLoad() {
		this.fw1 = 'font-weight:bold';
		this.fw2 = 'font-weight:400';
		this.fw3 = 'font-weight:400';
		this.color1 = 'color:#00ce88';
		this.color2 = 'color:#323232';
		this.color3 = 'color:#323232';
		this.bgcolor = 'opacity:0';
	},
	mounted() {
		uni.createSelectorQuery()
			.select('.huopin')
			.boundingClientRect(res => {
				// console.log(res)
				console.log('2的高度是' + res.top);
				var juli2 = res.top;
				this.juli2 = juli2 - 90;
			})
			.exec();
		uni.createSelectorQuery()
			.select('.end')
			.boundingClientRect(res => {
				console.log(res);
				console.log('3的高度是' + res.top);
				var juli3 = res.top;
				this.juli3 = juli3 - 90;
			})
			.exec();
	},
	onHide() {
		uni.pageScrollTo({
			duration: 1,
			scrollTop: 0
		});
	}
};
</script>

<style scoped>
.head {
	width: 100%;
	height: 176rpx;
	display: flex;
	justify-content: space-around;
	background-color: #fff;
	position: fixed;
	top: 0;
	background-color: #fff;
	z-index: 2;
}
.left1 {
	height: 50rpx;
	width: 48rpx;
	position: absolute;
	bottom: 20rpx;
	left: 30rpx;
}
.fanhui {
	width: 60rpx;
	height: 60rpx;
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 50%;
	position: fixed;
	top: 100rpx;
	left: 24rpx;
	z-index: 1;
}
.fanhui image {
	height: 50rpx;
	width: 48rpx;
	margin-top: 6rpx;
	transform: rotateY(180deg);
	margin-left: 6rpx;
}
.left1 image {
	height: 100%;
	width: 100%;
}
.title1 {
	width: 40%;
	height: 40rpx;
	font-size: 28rpx;
	font-weight: bold;
	font-family: 黑体;
	margin: 0 auto;
	color: #323232;
	display: flex;
	justify-content: space-between;
	font-family: 黑体;
	margin-top: 118rpx;
}
.title2 {
	width: 40%;
	height: 40rpx;
	font-size: 28rpx;
	font-weight: bold;
	font-family: 黑体;
	margin: 0 auto;
	color: #323232;
	display: flex;
	justify-content: space-between;
	font-family: 黑体;
	margin-top: 20rpx;
}
.swiper {
	height: 760rpx;
	width: 100%;
}
.xian {
	width: 96%;
	height: 2rpx;
	background-color: #eee;
	margin-top: 20rpx;
	margin-left: 2%;
}
.zuobiao {
	width: 100%;
	height: 50rpx;
	position: relative;
}
 
.zuobiao image {
	width: 28rpx;
	height: 28rpx;
	margin-top: 20rpx;
	position: absolute;
	left: 30rpx;
}
.kanguo {
	width: 100%;
	height: 50rpx;
	position: relative;
}
 
.kanguo image {
	width: 28rpx;
	height: 28rpx;
	margin-top: 20rpx;
	position: absolute;
	left: 30rpx;
}
.bg {
	width: 100%;
	height: 16rpx;
	background-color: #eee;
	margin-top: 20rpx;
}
.guige {
	width: 90%;
	height: 420rpx;
	margin-left: 5%;
}
.first,
.two,
.three {
	width: 100%;
	height: 110rpx;
	display: flex;
	justify-content: space-between;
}
.first1,
.first2,
.first3,
.two1,
.two2,
.two3,
.three1,
.three2,
.three3 {
	width: 33.3%;
	height: 100%;
	/* background-color: red; */
}
.first1,
.two1,
.three1 {
	border-right: 1rpx solid #e8e8e8;
	border-bottom: 1rpx solid #e8e8e8;
	padding: 20rpx;
}
.first2,
.two2,
.three2 {
	border-bottom: 1rpx solid #e8e8e8;
	padding: 20rpx;
}
.first3,
.two3,
.three3 {
	border-left: 1rpx solid #e8e8e8;
	border-bottom: 1rpx solid #e8e8e8;
}
.first1,
.first2,
.first3 {
	border-top: 1rpx solid #e8e8e8;
}
.shandong {
	width: 100%;
	height: 230rpx;
	position: relative;
	padding: 20rpx 30rpx 20rpx 30rpx;
}
.touxiang {
	width: 116rpx;
	height: 116rpx;
}
.huangzuan {
	width: 82rpx;
	height: 34rpx;
	background-color: #ffc355;
	position: absolute;
	left: 180rpx;
	top: 100rpx;
	border-radius: 4rpx;
	text-align: right;
	padding-right: 8rpx;
}
.bao {
	width: 36rpx;
	height: 36rpx;
	position: absolute;
	top: 100rpx;
	left: 280rpx;
}
.huangguan {
	width: 36rpx;
	height: 36rpx;
	position: absolute;
	top: 100rpx;
	left: 330rpx;
}
.tuijian {
	width: 100%;
	height: 440rpx;
	position: relative;
}
.tuijian1 {
	width: 95%;
	height: 60rpx;
	display: flex;
	justify-content: space-between;
	padding: 20rpx;
}
.tuijian1 image {
	width: 40rpx;
	height: 40rpx;
	transform: rotateY(180deg);
	position: absolute;
	right: 20rpx;
	top: 20rpx;
}
.hongmao {
	width: 94%;
	height: 300rpx;
	display: flex;
	justify-content: space-around;
	position: absolute;
	left: 3%;
	top: 120rpx;
}
.huopin {
	width: 100%;
	height: 250rpx;
	padding: 30rpx;
}
.weinin {
	width: 30%;
	height: 70rpx;
	position: absolute;
	left: 34%;
	text-align: center;
	line-height: 70rpx;
	color: #9e9e9e;
	font-size: 28rpx;
}
.end {
	width: 100%;
	height: 1750rpx;
	position: relative;
	margin-bottom: 120rpx;
}
.lxsj {
	background-color: #fff;
	border-top: 1rpx solid #eee;
	position: relative;
}
.mp {
	width: 50rpx;
	height: 90%;
	position: absolute;
	left: 40rpx;
	top: 10rpx;
}
.mp image {
	width: 50rpx;
	height: 50rpx;
}
.fx {
	width: 50rpx;
	height: 100%;
	position: absolute;
	left: 130rpx;
	top: 10rpx;
}
.fx image {
	width: 50rpx;
	height: 50rpx;
}
.sc {
	width: 50rpx;
	height: 100%;
	position: absolute;
	left: 220rpx;
	top: 10rpx;
}
.sc image {
	width: 50rpx;
	height: 50rpx;
}
.btn {
	width: 370rpx;
	height: 80rpx;
	background-color: #00ce88;
	border-radius: 60rpx;
	position: absolute;
	top: 10rpx;
	right: 32rpx;
	text-align: center;
	line-height: 74rpx;
	font-size: 32rpx;
	color: #ffffff;
}
</style>