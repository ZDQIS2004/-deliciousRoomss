<template>
	<view class="history">
		<view class="manage">
			<view v-if="!show" @click="handoff"><van-icon name="search" />管理</view>
			<view v-else @click="handoff">完成</view>
		</view>
		<view class="title">商品</view>
		<view class="dayList">
			<view v-for='(item,index) in list' :key='item.id' class="item">
				<view v-show="show" class="left"><van-checkbox :value="item.state"
						@change="onChange(item,index)"></van-checkbox>
				</view>
				<view class="right">
					<van-card :desc="'以拼' + item.num + '件'" :title="item.name" :thumb="'/static/images'+item.pic">
						<view slot='price' class="cont">
							<view class="price">
								￥<text>{{item.price}}</text>
							</view>
							<view class="preferential">
								直降{{item.preferential}}元
							</view>
							<view class="btn" @click="goTo">去拼单</view>
						</view>
					</van-card>
				</view>
				<!-- <image :src="'../../static'+item.pic" mode="" /> -->
			</view>
		</view>

		<view class="dayList">
			<view v-for='(item,index) in showList' :key='item.id' class="item">
			</view>
		</view>
		<view v-show="show" class="di"></view>
		<view v-show="show" class="bottom"><van-checkbox :value="alltate" @change="allChange">全选</van-checkbox>
			<view class="delBtn" @click="del">删除</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		name: 'history',
		data() {
			return {
				alltate: false,
				show: false,
				currentList: {},
				list: [{
						id: 'history01',
						name: '白象方便面混合袋多口味',
						num: '43',
						price: '12.8',
						preferential: '1.34',
						pic: '/types/types_pro_03.jpg',
						year: 2023,
						month: 6,
						today: 6,
						state: false
					},
					{
						id: 'history02',
						name: '红米K50手机壳',
						pic: '/types/types_pro_04.jpg',
						num: '44',
						price: '25.46',
						preferential: '5',
						year: 2023,
						month: 9,
						today: 6,
						state: false
					},
					{
						id: 'history03',
						name: '红米K50手机壳液态硅胶',
						pic: '/types/types_pro_05.jpg',
						num: '143',
						price: '1.9',
						preferential: '14',
						year: 2023,
						month: 7,
						today: 31,
						state: false
					},
					{
						id: 'history04',
						name: 'Redmi红米K50水彩枫叶手机壳',
						pic: '/types/types_pro_06.jpg',
						num: '66',
						price: '3.9',
						preferential: '6',
						year: 2023,
						month: 8,
						today: 14,
						state: false
					},
					{
						id: 'history05',
						name: '黑象不方便面',
						pic: '/types/types_pro_07.jpg',
						num: '666',
						price: '1.66',
						preferential: '3',
						year: 2023,
						month: 7,
						today: 21,
						state: false
					},
					{
						id: 'history06',
						name: '汤达人版面',
						pic: '/types/types_pro_09.jpg',
						num: '777',
						price: '999',
						preferential: '7',
						year: 2023,
						month: 7,
						today: 20,
						state: false
					}
				]
			}
		},
		computed: {
			// ...mapState(['']),
			showList: {
				get() {
					var newList = []
					// this.list.filter((item, index) => {
					// 	console.log(item, index)
					// })
					// this.list.indexof()
					// console.log(newList)
					return newList
				},
				set(val) {
					// console.log(val)
				}
			}
		},
		created() {
			// console.log(this.uid)
			let now = new Date();
			let year = now.getFullYear(); //获取完整的年份(4位,1970-????)
			let month = now.getMonth() + 1; //获取当前月份(0-11,0代表1月)
			let today = now.getDate(); //获取当前日(1-31)
			// console.log(year, month, today)
			this.currentList.title = '今天'
			this.currentList.list = []
			this.currentList.list.unshift(this.list.filter((item, index) => {
				if (item.year === year && item.month === month && item.today === today) {
					console.log(item)
					return item
				}
			}))
			// console.log("end", this.currentList)
		},
		methods: {
			handoff() {
				this.show = !this.show
			},
			goTo() {
				uni.navigateTo({
					url: '/pages/flashKill/flashKill',
				})
			},
			del() {
				console.log("del")
				this.list = this.list.filter((item, index) => {
					if (item.state === false) {
						console.log(item)
						return item
					}
				})
			},
			allChange() {
				this.alltate = !this.alltate
				// console.log(this.alltate)
				this.list.filter((item) => {
					item.state = this.alltate
				})
				// console.log(this.list)
			},
			onChange(row, index) {
				// console.log(!row.state)
				this.list[index].state = !row.state
				// console.log(this.list[index].state)
			},
			toDetail() {
				uni.navigateTo({
					url: '/pages/flash/flash',
				})
			},
			onOpen(event) {
				const {
					position,
					name
				} = event.detail;
				switch (position) {
					case 'left':
						Notify({
							type: 'primary',
							message: `${name}${position}部分展示open事件被触发`,
						});
						break;
					case 'right':
						Notify({
							type: 'primary',
							message: `${name}${position}部分展示open事件被触发`,
						});
						break;
				}
			},
		}
	}
</script>

<style>
	.cont {
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: flex-end;
	}

	.cont .price {
		color: #cb2e29;
	}

	.cont .price text {
		font-size: 24rpx;
	}

	.cont .preferential {
		height: 22rpx;
		color: #cb2e29;
		border: 1px #cb2e29 solid;
		border-radius: 10rpx;
		font-size: 16rpx;
		line-height: 22rpx;
		padding-left: 8rpx;
		padding-right: 8rpx;
	}

	.cont .btn {
		padding-left: 19rpx;
		padding-right: 19rpx;
		border-radius: 12rpx;
		background-color: #e32c24;
		color: #fff;
	}

	.manage {
		height: 90rpx;
	}

	.manage>view {
		text-align: right;
		line-height: 90rpx;
		padding-right: 10rpx;
	}

	.item {
		display: flex;
		align-items: center;
	}

	.di {
		padding-bottom: 100rpx;
	}

	.bottom {
		border-top: 1px solid #ebebeb;
		width: 100%;
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: space-between;
		left: 0;
		bottom: 0rpx;
		height: 100rpx;
		background-color: #fff;
	}

	.van-checkbox {
		padding-left: 20rpx;
	}

	.bottom .delBtn {
		height: 100rpx;
		background-color: red;
		width: 190rpx;
		background-color: red;
		color: #fff;
		font-size: 46rpx;
		text-align: center;
		line-height: 100rpx;
	}

	.item .left {}

	.item .right {
		width: 100%;
	}

	.title {
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		border-top: 1px solid #ebebeb;
		border-bottom: 1px solid #ebebeb;
	}
</style>