<template>
	<view class="flashKill">
		<view class="top">
			<view class="exclusive">
				<view class="title">
					<view class="left">专属补贴</view>
					<view class="right">></view>
				</view>
				<view class="cont" v-for="item in exclusive" :key="item.id">
					<image :src="'/static' + item.pic" mode="" />
					<view class="price">
						<view>补贴价<text>￥</text></view><text>{{item.price}}</text>起
					</view>
				</view>
			</view>
			<view class="regiment">
				<view class="title">
					<view class="left">万人团</view>
					<view class="right">2亿人拼单></view>
				</view>
				<swiper id="swiper" indicator-active-color="cyan">
					<swiper-item class="item" v-for="item in regiment" :key="item.id">
						<view>
							<image :src="'/static' + item.pic" mode="" />
							<view class="price">￥<text>{{item.price}}</text>起</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<van-tabs active="1" @change="onChange">
			<van-tab title="22:00 开抢中" name='1'>
				<view v-for="item in list1" @click='toetail' class="item" :key='item.id'>
					<van-card desc="描述信息" title="商品标题" :thumb="'/static'+ item.pic">
						<view slot="price-top" class="num">
							<van-progress :percentage="'50'" />
						</view>
						<view slot="price" class='price'>
							<view class="current">秒杀价￥{{}}</view>
							<view class="concessionary">直降{{}}元</view>
						</view>
						<view slot="origin-price">
							即将恢复{{ }}元
						</view>
					</van-card>
				</view>
			</van-tab>
			<van-tab title="23:00 开抢中" name='2'>
				<view v-for="item in list2" @click='toetail' class="item" :key='item.id'>
					<van-card desc="描述信息" title="商品标题" :thumb="'/static'+item.pic">
						<view slot="price-top" class="num">
							<van-progress :percentage="'50'" />
						</view>
						<view slot="price" class='price'>
							<view class="current">秒杀价￥{{}}</view>
							<view class="concessionary">直降{{}}元</view>
						</view>
						<view slot="origin-price">
							即将恢复{{ }}元
						</view>
					</van-card>
				</view>
			</van-tab>
			<van-tab title="明天00:00 开抢中" name='3'>
				<view class="list">
					<view v-for="item in list3" @click='toetail' class="item" :key='item.id'>
						<van-card desc="描述信息" title="商品标题" :thumb="'/static'+item.pic">
							<view slot="price-top" class="num">
								<van-progress :percentage="'50'" />
							</view>
							<view slot="price" class='price'>
								<view class="current">秒杀价￥{{}}</view>
								<view class="concessionary">直降{{}}元</view>
							</view>
							<view slot="origin-price">
								即将恢复{{ }}元
							</view>
						</van-card>
					</view>
				</view>
			</van-tab>
		</van-tabs>
	</view>
</template>

<script>
	export default {
		name: 'FlashKill',
		data() {
			return {
				active: 1,
				imageURL: '111',
				exclusive: [{
					id: 'exclusive01',
					pic: '/types/types_pro_01.jpg',
					price: '4.9'
				}],
				regiment: [{
						id: 'regiment01',
						pic: '/types/types_pro_02.jpg',
						name: '品质名酒',
						num: 1400,
						price: '9.9'
					},
					{
						id: 'regiment02',
						pic: '/types/types_pro_03.jpg',
						name: '海信大牌',
						num: 3457,
						price: '599'
					},
					{
						id: 'regiment03',
						pic: '/types/types_pro_04.jpg',
						name: '海信小牌',
						num: 3571,
						price: ''
					},
					{
						id: 'regiment04',
						pic: '/types/types_pro_05.jpg',
						name: '劣质名酒',
						num: 0,
						price: '99999'
					},
					{
						id: 'regiment05',
						pic: '/types/types_pro_06.jpg',
						name: '钛金手机',
						num: 999,
						price: '19'
					}
				],
				list: [{
						id: 1,
						pic: '/types/types_pro_09.jpg',
						state: '22:00',
						name: '康师傅|经典康师傅老坛酸菜',
						current: '39',
						price: '10.99',
						concessionary: '28.01'
					},
					{
						id: 2,
						pic: '/types/types_pro_10.jpg',
						state: '22:00',
						name: '康师傅|经典康师傅老坛酸菜',
						num: 0,
						current: '39',
						price: '10.99',
						concessionary: '28.01'
					},
					{
						id: 3,
						pic: '/types/types_pro_11.jpg',
						state: '23:00',
						name: '康师傅|经典康师傅老坛酸菜',
						num: 0,
						current: '39',
						price: '10.99',
						concessionary: '28.01'
					},
					{
						id: 4,
						pic: '/types/types_pro_12.jpg',
						state: '00:00',
						name: '康师傅|经典康师傅老坛酸菜',
						num: 0,
						current: '39',
						price: '10.99',
						concessionary: '28.01'
					}
				]
			}
		},
		computed: {
			list1: {
				get() {
					console.log(this.list)
					var newArr = this.list.filter((item) => item.state === '22:00')
					console.log(newArr)
					return newArr
				},
				set(val) {
					console.log(val)
					// this.$store.state.password = newArr
				}
			},
			list2: {
				get() {
					var newArr = this.list.filter((item) => item.state === '23:00')
					console.log(newArr)
					return newArr
				},
				set(val) {
					console.log(val)
					// this.$store.state.password = newArr
				}
			},
			list3: {
				get() {
					var newArr = this.list.filter((item) => item.state === '00:00')
					console.log(newArr)
					return newArr
				},
				set(val) {
					console.log(val)
					// this.$store.state.password = newArr
				}
			}
		},
		methods: {
			toDetail() {
				uni.navigateTo({
					url: '/pages/flash/flash',
				})
			},
			onChange(event) {
				wx.showToast({
					title: `切换到标签 ${event.detail.name}`,
					icon: 'none',
				});
			},
		}
	}
</script>

<style>
	.price {
		display: flex;
	}

	.price .current {
		color: red;
	}

	.price .concessionary {
		padding-left: 12rpx;
		padding-right: 12rpx;
		height: 34rpx;
		border-radius: 17rpx;
		background-color: #fed78c;
		color: #783500;
		line-height: 34rpx;
		text-align: center;
	}

	.top {
		display: flex;
		height: 344rpx;
		padding-top: 18rpx;
		justify-content: space-between;
		background-color: #e02e24;
	}

	.exclusive {
		width: 206rpx;
		margin-left: 20rpx;
		border-radius: 6rpx;
		/* background-color: #ffcbc3; */
		margin-bottom: 20rpx;
		background: -webkit-linear-gradient(top, #f7dacf, #f5f5f5, #fefef9);
	}

	.exclusive .cont image {
		width: 100%;
		height: 210rpx;
	}

	.exclusive .cont .price {
		display: flex;
		justify-content: center;
		align-items: center;
		color: red;
		font-size: 26rpx;
	}

	.exclusive .cont .price text {
		font-weight: 600;
	}

	.exclusive .title .left {
		font-size: 30rpx;
	}

	.regiment {
		width: 480rpx;
		margin-right: 20rpx;
		border-radius: 6rpx;
		margin-bottom: 20rpx;
		background-color: #fe3e3d;
	}

	.regiment .title {
		color: #fff;
	}

	.regiment .left {
		margin-left: 12rpx;
		font-weight: 600;
		font-size: 30rpx;
	}

	.regiment .right {
		margin-right: 12rpx;
	}

	.title {
		height: 70rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 20rpx;
	}


	#swiper .item {
		width: 196rpx !important;
		height: 240rpx !important;
		padding: 0;
		padding-right: 12rpx;
		border-radius: 8rpx !important;

	}

	#swiper .item>view {
		background-color: #fff;
	}

	#swiper .item>view .price {
		display: flex;
		justify-content: center;
		align-items: center;
		color: red;
	}

	#swiper .item image {
		width: 196rpx;
		height: 190rpx;
	}

	.item {
		padding-left: 24rpx;
		padding-right: 24rpx;
		height: 314rpx;
		/* background-color: #ffffff; */
		border-bottom: 1rpx solid #f0f0f0;
	}

	.item .van-card {
		padding: 0;
		height: 314rpx;
	}

	.item .van-card__thumb {
		width: 282rpx;
		height: 282rpx;
	}

	.item .van-card__title {
		padding-top: 50rpx;
		color: #141414;
	}

	.item .van-card__bottom .num {
		/* display: flex */
	}

	.num {
		padding-bottom: 20rpx;
	}
</style>