<template>
	<view class="searchCom">
		<van-search :value="value" shape="round" placeholder="请输入搜索关键词" />
	</view>
	<view class="CarList">
		<van-swipe-cell :right-width="65">
			<view class="option">
				<van-checkbox :value="check" checked-color="#fec631" style="margin-left: 10px;"
					@change="onChange"></van-checkbox>
				<view class="pic">
					<image src="/static/logo.png" mode=""></image>
				</view>
				<view class="ComMsg">
					<!-- 传过来的标题 -->
					<view>3333</view>
					<!-- 选择的款式 -->
					<view>1111</view>
					<!-- 折扣 -->
					<view class="discount">立减3元</view>
					<!-- 价格和件数 -->
					<view class="price">
						<text>￥12.9</text><text>已拼2727件</text>
					</view>
				</view>
			</view>
			<view slot="right" class="van-swipe-cell__right">删除</view>
		</van-swipe-cell>
	</view>
	<view class="footer">
		<view class="paragraph">已选<text>{{sum}}</text>款</view>
		<view class="total">
			合计：<text style="color: red;">￥{{totalFun}}</text>
			<van-button type="danger">结算</van-button>
		</view>
	</view>
	<!-- <van-submit-bar price="3050" button-text="结算" @submit="onClickButton" tip="true">
		<van-tag type="primary">标签</van-tag>
		<view slot="tip">您的收货地址不支持同城送, <text>修改地址</text></view>
	</van-submit-bar> -->
</template>

<script setup lang="ts">
	import { ref, computed } from 'vue'
	let num = ref(0)
	let check = ref(false)
	let value = ref('')
	const onChange = () => {
		check.value = !check.value
	}
	const onClickButton = () => {
		console.log('提交')
	}
	let sum = computed(() => {
		return check.value === true ? 1 : 0
	})
	let totalFun = computed(() => {
		let total = 0
		// CartList.forEach(item => {
		// 	if (item.state) {
		// 		total += item.money * item.num
		// 	}
		// })
		return total
	})
</script>

<style lang="scss">
	.van-button--normal {
		width: 100px;
		margin-left: 10px;
	}

	.goods-card {
		margin: 0;
		background-color: #fff;
	}

	.delete-button {
		height: 100%;
		background-color: #fec72f;
		border: 1px solid #fec72f;
	}

	.van-swipe-cell__right {
		background-color: red;
		color: #fff;
		width: 64px;
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
		padding: 23px 8px;
	}

	.CarList {
		display: flex;
		flex-direction: column;
		background-color: #f4f4f4;

		.option {
			display: flex;
			align-items: center;
			background-color: #fff;
			margin-bottom: 10px;

			.pic {
				width: 100px;
				height: 100px;
				background-color: #f5f5f5;
				margin: 2%;
				border-radius: 10px;

				image {
					width: 100% !important;
					height: 100% !important;
				}
			}

			.ComMsg {
				width: 58%;
				// height: 100px;
				margin: 10px;

				view {
					font-size: 14px;

					&:nth-of-type(2) {
						background-color: #f7f8fa;
						color: #b6b6b6;
						padding: 2px 5px;
						border-radius: 5px;
						margin: 10px 0;
					}

					&:nth-of-type(3) {
						display: flex;
						flex-direction: row;
						justify-content: space-between;

						text {
							font-size: 18px;
							color: #fa412f;
						}
					}
				}

				.discount {
					color: red;
					margin-top: 30px;
				}

				.price {
					text {
						&:nth-of-type(1) {
							color: red;
							font-size: 20px;
							font-weight: bold;
						}

						&:nth-of-type(2) {
							color: gray;
							margin-left: 10px;
							font-size: 14px;
						}
					}
				}
			}
		}
	}

	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;

		.paragraph {
			color: gray;
			margin-left: 10px;
		}
	}
</style>