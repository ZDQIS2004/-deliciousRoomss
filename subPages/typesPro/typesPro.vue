<template>
	<div class="typesPro">
		<div class="list">
			<navigator class="item" v-for="item in store.state.sortData[id-1].details" :key="item.id" open-type="navigate"
				:url="'/subPages/proDetails/proDetails?id='+item.id+'&title='+item.name">
				<image :src="item.imageUrl" mode=""></image>
				<h3 class="title">{{item.name}}</h3>
				<div class="bonus">
					<div class="greenColo">{{item.payment}}</div>
					<div class="redColo">{{item.Events}}</div>
				</div>
				<div class="total">
					<div class="money">￥{{item.money}}</div>
					<div class="spellIt">已拼{{item.SpellIt}}件</div>
				</div>
			</navigator>
		</div>
	</div>
</template>

<script lang="ts">
	import { useStore } from 'vuex'
	export default {
		data() {
			return {
				id: 1
			}
		},
		onLoad(option) {
			console.log(option)
			this.id = option.id
			uni.setNavigationBarTitle({
				title: option.title
			})
		},
		setup() {
			const store = useStore()
			console.log(store.state.sortData[0].details)

			return {
				store
			}
		}
	}
</script>

<style scoped lang="less">
	.typesPro {
		.list {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			padding: 20rpx;
			background-color: #f4f4f4;

			.item {
				width: 48%;

				&:nth-child(n+3) {
					margin-top: 20rpx;
				}

				image {
					width: 100%;
					height: 340rpx;
				}

				.title {
					font-size: 30rpx;
					font-weight: 700;
				}

				.bonus {
					display: flex;
					margin-top: 10rpx;
					font-size: 24rpx;
					font-weight: 600;

					.greenColo {
						color: green;
						margin: 0 10rpx 0 0;
					}

					.redColo {
						color: #d81e06;
						margin: 0 10rpx 0 0;
					}
				}

				.total {
					display: flex;
					margin-top: 10rpx;

					.money {
						margin: 0 10rpx 0 0;
						color: #d81e06;
					}

					.spellIt {
						margin: 0 10rpx 0 0;
						color: #9f9f9f;
					}
				}
			}
		}
	}
</style>