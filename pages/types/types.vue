<template>
	<div class="types">
		<van-sidebar :active-key="activeKey" @change="onChange">
			<van-sidebar-item title="手机壳" />
			<van-sidebar-item title="耳机" />
			<van-sidebar-item title="帆布鞋" />
		</van-sidebar>
		<div class="content">
			<div class="items" v-if='activeKey===0'>
				<ul class="list">
					<li class="item" @click='toTypesPro(item)' v-for="item in store.state.sortData" :key="item.id">
						<div class='picText' v-if="item.id === 1">
							<image :src="item.pic" mode="widthFix"></image>
							<text>{{item.name}}</text>
						</div>
					</li>
				</ul>
			</div>
			<div class="items" v-if='activeKey===1'>
				<ul class="list">
					<li class="item" @click='toTypesPro(item)' v-for="item in store.state.sortData" :key="item.id">
						<div class='picText' v-if="item.id === 2">
							<image :src="item.pic" mode="widthFix"></image>
							<text>{{item.name}}</text>
						</div>
					</li>
				</ul>
			</div>
			<div class="items" v-if='activeKey===2'>
				<ul class="list">
					<li class="item" @click='toTypesPro(item)' v-for="item in store.state.sortData" :key="item.id">
						<div class='picText' v-if="item.id === 3">
							<image :src="item.pic" mode="widthFix"></image>
							<text>{{item.name}}</text>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useStore } from 'vuex'
	import { ref } from 'vue'
	const activeKey = ref(0)
	const store = useStore()
	console.log(store.state.sortData)

	const onChange = (event) => {
		activeKey.value = event.detail
	}

	const toTypesPro = (val) => {
		uni.navigateTo({
			url: `/subPages/typesPro/typesPro?id=${val.id}&title=${val.name}`
		});
	}
</script>

<style lang="less" scoped>
	.types {
		display: flex;

		.content {
			margin: 20rpx;

			.list {
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;

				.item {
					text-align: center;
					font-size: 24rpx;

					.picText {
						width: 120rpx;
						margin: 10rpx;

						image {
							width: 120rpx;
						}
					}
				}
			}
		}
	}
</style>