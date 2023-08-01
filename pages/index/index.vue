<template>
	<view class="content">
		<view class="cont top_tab">
			<view class="icon_box">
				<van-icon class-prefix="iconfont icon-shangpinshoucang" name="hot" color="red" info="秒" size="30px" />
				<view>限时秒杀</view>
			</view>
			<view class="icon_box">
				<van-icon class-prefix="iconfont icon-duanmaqingcang" name="hot" color="orange" size="30px" />
				<view>断码清仓</view>
			</view>
			<view class="icon_box">
				<van-icon class-prefix="iconfont icon-fushi-nvzhuang" name="hot" color="#e76ecd" size="30px" />
				<view>宝藏女装</view>
			</view>
			<view class="icon_box">
				<van-icon class-prefix="iconfont icon-lingquanzhongxin" name="hot" color="orange" size="30px" />
				<view>领券中心</view>
			</view>
			<view class="icon_box">
				<van-icon class-prefix="iconfont icon-shengqianyueka" name="hot" color="orange" size="30px" />
				<view>省钱月卡</view>
			</view>
		</view>

		<view class="bd_cont">
			<van-tabs :active-key="active" @change="onChange">
				<van-tab title="热门" name="1" class="shop_tab">
					<view class="shop_item_box" v-for="(item,index) in data.hot_list" :key="index">
						<view class="image_box">
							<image :src="item.imageUrl" mode="widthFix"></image>
						</view>
						<view class="body_box">
							<view class="shop_name">{{item.name}}</view>
							<view class="shop_payment">
								<label class="pay" for="">{{item.payment}}</label>
								<label class="eve" for="">{{item.Events}}</label>
							</view>
							<view class="shop_money">
								<label class="eve" for=""><label for="">￥</label><label class="money"
										for="">{{item.money}}</label></label>
								<label class="spe" for="">已拼{{item.SpellIt}}件</label>
							</view>
						</view>
					</view>
				</van-tab>
				<van-tab title="手机壳" name="2" class="shop_tab">
					<view class="shop_item_box" v-for="(item,index) in data.phone_list" :key="index">
						<view class="image_box">
							<image :src="item.imageUrl" mode="widthFix"></image>
						</view>
						<view class="body_box">
							<view class="shop_name">{{item.name}}</view>
							<view class="shop_payment">
								<label class="pay" for="">{{item.payment}}</label>
								<label class="eve" for="">{{item.Events}}</label>
							</view>
							<view class="shop_money">
								<label class="eve" for=""><label for="">￥</label><label class="money"
										for="">{{item.money}}</label></label>
								<label class="spe" for="">已拼{{item.SpellIt}}件</label>
							</view>
						</view>
					</view>
				</van-tab>
				<van-tab title="耳机" name="3" class="shop_tab">
					<view class="shop_item_box" v-for="(item,index) in data.err_list" :key="index">
						<view class="image_box">
							<image :src="item.imageUrl" mode="widthFix"></image>
						</view>
						<view class="body_box">
							<view class="shop_name">{{item.name}}</view>
							<view class="shop_payment">
								<label class="pay" for="">{{item.payment}}</label>
								<label class="eve" for="">{{item.Events}}</label>
							</view>
							<view class="shop_money">
								<label class="eve" for=""><label for="">￥</label><label class="money"
										for="">{{item.money}}</label></label>
								<label class="spe" for="">已拼{{item.SpellIt}}件</label>
							</view>
						</view>
					</view>
				</van-tab>
				<van-tab title="男鞋" name="4" class="shop_tab">
					<view class="shop_item_box" v-for="(item,index) in data.xie_list" :key="index">
						<view class="image_box">
							<image :src="item.imageUrl" mode="widthFix"></image>
						</view>
						<view class="body_box">
							<view class="shop_name">{{item.name}}</view>
							<view class="shop_payment">
								<label class="pay" for="">{{item.payment}}</label>
								<label class="eve" for="">{{item.Events}}</label>
							</view>
							<view class="shop_money">
								<label class="eve" for=""><label for="">￥</label><label class="money"
										for="">{{item.money}}</label></label>
								<label class="spe" for="">已拼{{item.SpellIt}}件</label>
							</view>
						</view>
					</view>
				</van-tab>
			</van-tabs>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref, reactive } from 'vue'
	const active = ref(1)
	const data = reactive({
		hot_list: [
			{
				"id": "sortChild-15",
				"name": "iphone14 pro max 炫酷发光手机壳",
				"payment": "先用后付",
				"Events": "关注立减6元",
				"imageUrl": "../../static/images/types/types_pro_03.jpg",
				"state": false,
				"money": 3.9,
				"SpellIt": 1677,
			},
			{
				"id": "sortChild-13",
				"name": "红米k50 k50pro手机壳液态",
				"imageUrl": "../../static/images/types/types_pro_01.jpg",
				"payment": "先用后付",
				"Events": "立减5元",
				"state": false,
				"money": 1.9,
				"SpellIt": 604,
			},
			{
				"id": "sortChild-7",
				"name": "华强北新款五代真无线蓝牙耳机",
				"payment": "先用后付",
				"Events": "立减5元",
				"imageUrl": "../../static/images/types/types_pro_05.jpg",
				"state": false,
				"money": 23.73,
				"SpellIt": 10,
			},
			{
				"id": "sortChild-6",
				"name": "卡帝乐鳄鱼男鞋夏季休闲白塔运动高帮板鞋青少年潮流百搭帆布鞋男",
				"payment": "先用后付",
				"Events": "旗舰店",
				"imageUrl": "../../static/images/types/types_pro_09.jpg",
				"state": false,
				"money": 59,
				"SpellIt": 10,
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
				"SpellIt": 604,
			},
			{
				"id": "sortChild-14",
				"name": "红米k50 k50pro手机壳液态",
				"payment": "先用后付",
				"imageUrl": "../../static/images/types/types_pro_02.jpg",
				"Events": "快点每200减30",
				"state": false,
				"money": 25.46,
				"SpellIt": 1688,
			},
			{
				"id": "sortChild-15",
				"name": "iphone14 pro max 炫酷发光手机壳",
				"payment": "先用后付",
				"Events": "关注立减6元",
				"imageUrl": "../../static/images/types/types_pro_03.jpg",
				"state": false,
				"money": 3.9,
				"SpellIt": 1677,
			},
			{
				"id": "sortChild-16",
				"name": "OPPOa5手机壳男潮流炫酷r",
				"payment": "先用后付",
				"Events": "一年低价",
				"imageUrl": "../../static/images/types/types_pro_04.jpg",
				"money": 2.97,
				"state": false,
				"SpellIt": 2140,
			},
			{
				"id": "sortChild-17",
				"name": "Redmi红米K50 K50pro枫叶冰若雨",
				"payment": "先用后付",
				"Events": "关注立减6元",
				"imageUrl": "../../static/images/types/types_pro_01.jpg",
				"state": false,
				"money": 3.9,
				"SpellIt": 1688,
			},
			{
				"id": "sortChild-18",
				"name": "红米k50 k50pro手机壳液态",
				"payment": "先用后付",
				"Events": "立减5元",
				"imageUrl": "../../static/images/types/types_pro_02.jpg",
				"state": false,
				"money": 4.9,
				"SpellIt": 604,
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
				"SpellIt": 10,
			},
			{
				"id": "sortChild-8",
				"name": "数显蓝牙耳机真无限入耳式运动降噪2023新款",
				"payment": "先用后付",
				"Events": "立减5元",
				"imageUrl": "../../static/images/types/types_pro_06.jpg",
				"state": false,
				"money": 38.8,
				"SpellIt": 2735,
			},
			{
				"id": "sortChild-9",
				"name": "适用于苹果13pro/12pro/11x/xr/xs新款蓝牙耳机",
				"payment": "先用后付",
				"Events": "旗舰店",
				"imageUrl": "../../static/images/types/types_pro_07.jpg",
				"state": false,
				"money": 25.5,
				"SpellIt": 10,
			},
			{
				"id": "sortChild-10",
				"name": "无线蓝牙耳机高音质双耳入迷听音乐",
				"payment": "先用后付",
				"Events": "旗舰店",
				"imageUrl": "../../static/images/types/types_pro_08.jpg",
				"state": false,
				"money": 39.8,
				"SpellIt": 10,
			},
			{
				"id": "sortChild-11",
				"name": "华强北新款四代真无线蓝牙耳机",
				"payment": "先用后付",
				"Events": "立减6元",
				"imageUrl": "../../static/images/types/types_pro_05.jpg",
				"state": false,
				"money": 19.77,
				"SpellIt": 10,
			},
			{
				"id": "sortChild-12",
				"name": "四代五无线蓝牙耳机入耳",
				"payment": "先用后付",
				"Events": "立减10元",
				"imageUrl": "../../static/images/types/types_pro_06.jpg",
				"state": false,
				"money": 25.8,
				"SpellIt": 10,
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
				"SpellIt": 10,
			},
			{
				"id": "sortChild-2",
				"name": "回力帆布鞋男低帮板鞋女鞋正品回力男鞋帆布鞋运动百搭学生情侣鞋",
				"payment": "先用后付",
				"Events": "30天低价",
				"imageUrl": "../../static/images/types/types_pro_10.jpg",
				"state": false,
				"money": 69,
				"SpellIt": 10,
			},
			{
				"id": "sortChild-3",
				"name": "帆布鞋男帮学生情侣男鞋潮百搭布鞋春夏季球鞋迷",
				"payment": "先用后付",
				"Events": "退货包运费",
				"imageUrl": "../../static/images/types/types_pro_11.jpg",
				"state": false,
				"money": 39.9,
				"SpellIt": 10,
			},
			{
				"id": "sortChild-4",
				"name": "环球男鞋子2023新款绿色帆布鞋夏季百搭国潮鞋子学生低帮平底板鞋",
				"payment": "先用后付",
				"Events": "历史低价",
				"imageUrl": "../../static/images/types/types_pro_12.jpg",
				"state": false,
				"money": 69,
				"SpellIt": 10,
			},
			{
				"id": "sortChild-5",
				"name": "回力经典帆布鞋高帮男2023夏季新款休闲帆布鞋ins",
				"payment": "先用后付",
				"Events": "品质险",
				"imageUrl": "../../static/images/types/types_pro_10.jpg",
				"state": false,
				"money": 75,
				"SpellIt": 10,
			},
			{
				"id": "sortChild-6",
				"name": "卡帝乐鳄鱼男鞋夏季休闲白塔运动高帮板鞋青少年潮流百搭帆布鞋男",
				"payment": "先用后付",
				"Events": "旗舰店",
				"imageUrl": "../../static/images/types/types_pro_09.jpg",
				"state": false,
				"money": 59,
				"SpellIt": 10,
			}
		]
	})

	// uni.request({
	// 	url:'../../static/images/types/json/data.json',
	// 	method:'GET',
	// 	success:(res)=>{
	// 		console.log(123);
	// 	}
	// })

	const onChange = (event) => {
		// uni.showToast({
		// 	title: `切换到标签 ${event.detail.name}`,
		// 	icon: 'succes',
		// });
		console.log(event);
	}
</script>

<style>
	.content {
		/* padding: 20rpx; */
		background-color: #f4f4f4;
	}

	.cont {
		background-color: #fff;
		padding: 20rpx;
		margin-bottom: 20rpx;
	}

	.bd_cont {
		padding: 20rpx;
		margin-bottom: 20rpx;
	}

	.van-tab__pane {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		margin-top: 10rpx;
	}

	.shop_item_box {
		background-color: #fff;
		width: 45%;
		overflow: hidden;
		margin-bottom: 20rpx;
		border-radius: 10rpx;
	}

	.image_box {
		width: 100%;
		overflow: hidden;
	}

	.image_box image {
		width: 100%;
	}

	.body_box {
		padding: 10rpx 20rpx;
	}

	.shop_name {
		font-size: 30rpx;
		white-space: nowrap;
		overflow: hidden;
	}

	.shop_payment {
		font-size: 24rpx;
		line-height: 50rpx;
	}

	.pay {
		color: green;
		margin-right: 10rpx;
	}

	.eve {
		color: red;
		margin-right: 10rpx;
	}

	.shop_money {
		font-size: 20rpx;
	}

	.money {
		font-size: 30rpx;
	}

	.spe {
		color: #9f9f9f;
		margin-right: 10rpx;
	}

	.top_tab {
		padding-top: 20rpx;
		display: flex;
		justify-content: space-around;
	}

	.icon_box>view {
		font-size: 24rpx;
		margin-top: 10rpx;
		color: #545454;
	}

	.icon_box {
		text-align: center;
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
		content: "\e624";
	}

	.icon-fushi-nvzhuang:before {
		content: "\e602";
	}

	.icon-lingquanzhongxin:before {
		content: "\e619";
	}

	.icon-duanmaqingcang:before {
		content: "\e61e";
	}

	.icon-shengqianyueka:before {
		content: "\e611";
	}
</style>