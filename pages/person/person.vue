<template>
	<view class="content">
		<view class="cont">
			<view class="order_top">
				<view>我的订单</view>
				<view class="look_add">查看全部></view>
			</view>
			<view class="order_top state">
				<view class="order_icon">
					<van-icon class-prefix="iconfont icon-daifukuan" name="hot" color="#999" size="26px" />
					<view>待付款</view>
				</view>
				<view class="order_icon">
					<van-icon class-prefix="iconfont icon-daifenxiang" name="hot" color="#999" size="26px" />
					<view>待分享</view>
				</view>
				<view class="order_icon">
					<van-icon class-prefix="iconfont icon-daifahuo" name="hot" color="#999" size="26px" />
					<view>待发货</view>
				</view>
				<view class="order_icon">
					<van-icon class-prefix="iconfont icon-daishouhuo" name="hot" color="#999" size="26px" />
					<view>待收货</view>
				</view>
				<view class="order_icon">
					<van-icon class-prefix="iconfont icon-pingjia" name="hot" color="#999" size="26px" />
					<view>待评价</view>
				</view>
			</view>
		</view>
		<view class="cont">
			<view class="order_top">
				<view>多多钱包</view>
				<view class="look_add">查看余额></view>
			</view>
		</view>
		<view class="cont">
			<view class="order_top state2">
				<view class="order_icon">
					<van-icon class-prefix="iconfont icon-youhuiquan" name="hot" color="red" size="26px" />
					<view>优惠券</view>
				</view>
				<view class="order_icon">
					<van-icon class-prefix="iconfont icon-shangpinshoucang" name="hot" color="red" size="26px" />
					<view>商品收藏</view>
				</view>
				<view class="order_icon">
					<van-icon class-prefix="iconfont icon-dianpuguanzhu" name="hot" color="red" size="26px" />
					<view>店铺关注</view>
				</view>
				<view class="order_icon">
					<van-icon class-prefix="iconfont icon-lishiliulan" name="hot" color="red" size="26px" />
					<view>历史浏览</view>
				</view>
				<view class="order_icon">
					<van-icon class-prefix="iconfont icon-shouhuodizhi" name="hot" color="red" size="26px" />
					<view>收货地址</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.cont {
		background-color: #fff;
		padding: 20rpx;
		margin-bottom: 20rpx;
	}

	.content {
		/* padding: 20rpx; */
		background-color: #f4f4f4;
	}

	.order_top {
		display: flex;
		justify-content: space-between;
		font-size: 30rpx;
	}

	.look_add {
		color: #999;
	}

	.order_icon {
		text-align: center;
	}

	.state {
		margin-top: 20rpx;
	}

	.state>view {
		margin-top: 10rpx;
	}

	.state2>view {
		margin-top: 10rpx;
	}

	@font-face {
		font-family: "iconfont";
		/* Project id 4188333 */
		src: url('//at.alicdn.com/t/c/font_4188333_rh8lsdvxc2.woff2?t=1690599182901') format('woff2'),
			url('//at.alicdn.com/t/c/font_4188333_rh8lsdvxc2.woff?t=1690599182901') format('woff'),
			url('//at.alicdn.com/t/c/font_4188333_rh8lsdvxc2.ttf?t=1690599182901') format('truetype');
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icon-shangpinshoucang:before {
		content: "\e6c6";
	}

	.icon-dianpuguanzhu:before {
		content: "\e675";
	}

	.icon-daifahuo:before {
		content: "\e600";
	}

	.icon-daifukuan:before {
		content: "\e601";
	}

	.icon-shouhuodizhi:before {
		content: "\e657";
	}

	.icon-daishouhuo:before {
		content: "\e640";
	}

	.icon-pingjia:before {
		content: "\e641";
	}

	.icon-lishiliulan:before {
		content: "\e60a";
	}

	.icon-daifenxiang:before {
		content: "\e65c";
	}

	.icon-youhuiquan:before {
		content: "\e8c8";
	}
</style>