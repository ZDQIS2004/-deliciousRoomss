 <template>
	<view class="home ">
		<button @click="toIndex">按钮</button>
	</view>
 
</template>
 
<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
			toIndex() {
				uni.navigateTo({
					url:'/pages/details/shopdetails'
				})
			}
		}
	}
</script>

<style>
</style>