<template>
	<view class="container">
		<!--  评价 -->
		<view class="evaluate"> 
			<view class="evaluateCenter">  
				<view class="evaluateItem" v-for="(item, index) in list" :key="index">
					<view class="evaluateTip dfsb">
						<view class="img"><image :src="item.image" mode="widthFix"></image></view>
						<view class="right">
							<view class="righttip">{{ item.name}}</view>
							<view class="bottom dfsb">
								<view class="star">
									<text>4.5分</text> 
									<uni-rate size='12' activeColor='#fd9130' :is-fill="false" readonly disabledColor='' allow-half :value="item.score|| 3.5" /> 
								</view>	
								<view class="time">{{item.time}}</view>
							</view>
						</view>
					</view>
					<view class="evaluateText" :class="{lineclamp3:item.contentAll}"> {{item.content}} </view>
					<view class="" v-if="item.isMore">						
						<view class="rightText" v-if="item.contentAll" @click="changeAllFun(item, index)">全部</view>
						<view class="rightText" v-else  @click="changeAllFun(item, index)">收起</view>
					</view>
					<view class="evaluateListImg"> 
						<view class="evaluateListImgItem " v-for="(itm, ind) in item.imageList" :key="ind">	

						</view>
					</view>
					<view class="bottomImg">
						<text>{{item.title}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name:"evaluateList",
	data() {
		return {
			list:[
					{	
						name: '好吃好吃好吃好吃',
						title: '年度无污染快捷方便食品',
						image: '',
						score: 4.5,
						time: '2021.06.06',
						content:'性价比超高，味道不错，包装完好，正品，物美价廉物美价廉，料很足，都吃了好多包了，经典国货，白象牌方便面值得拥有，强烈推荐哦!',
						imageList:[
							{ url:'https://slzh-oss.oss-cn-beijing.aliyuncs.com/usercenter/template/2c94809a787cec070179e0234e7902ab.png' },
							{ url:'https://slzh-oss.oss-cn-beijing.aliyuncs.com/usercenter/template/2c94809a787cec070179e0234e7902ab.png' },
							{ url:'https://slzh-oss.oss-cn-beijing.aliyuncs.com/usercenter/template/2c94809a787cec070179e0234e7902ab.png' },
							{ url:'https://slzh-oss.oss-cn-beijing.aliyuncs.com/usercenter/template/2c94809a787cec070179e0234e7902ab.png' },
							{ url:'https://slzh-oss.oss-cn-beijing.aliyuncs.com/usercenter/template/2c94809a787cec070179e0234e7902ab.png' },
							{ url:'https://slzh-oss.oss-cn-beijing.aliyuncs.com/usercenter/template/2c94809a787cec070179e0234e7902ab.png' },
							{ url:'https://slzh-oss.oss-cn-beijing.aliyuncs.com/usercenter/template/2c94809a787cec070179e0234e7902ab.png' },
						]
					},
					{	
						name:'好吃',
						title: '1999年无污染',
						image:'', 
						score:4.5,
						time:'2021.06.06',
						content:'服务好服务好服务好服务好，景色好，山河锦绣，树木茂盛树木茂盛树木茂盛树木茂盛树木茂盛树木茂盛树木茂盛树木茂盛树木茂盛树木茂盛树木茂盛树木茂盛，空气清新，鸟语花香，人杰地灵',
						imageList:[
							{ url:'https://slzh-oss.oss-cn-beijing.aliyuncs.com/usercenter/template/2c94809a787cec070179e0234e7902ab.png' },
							{ url:'https://slzh-oss.oss-cn-beijing.aliyuncs.com/usercenter/template/2c94809a787cec070179e0234e7902ab.png' },
							{ url:'https://slzh-oss.oss-cn-beijing.aliyuncs.com/usercenter/template/2c94809a787cec070179e0234e7902ab.png' },
							{ url:'https://slzh-oss.oss-cn-beijing.aliyuncs.com/usercenter/template/2c94809a787cec070179e0234e7902ab.png' },
							{ url:'https://slzh-oss.oss-cn-beijing.aliyuncs.com/usercenter/template/2c94809a787cec070179e0234e7902ab.png' },
							{ url:'https://slzh-oss.oss-cn-beijing.aliyuncs.com/usercenter/template/2c94809a787cec070179e0234e7902ab.png' },
							{ url:'https://slzh-oss.oss-cn-beijing.aliyuncs.com/usercenter/template/2c94809a787cec070179e0234e7902ab.png' },
						]
					},
				]
			};
		},
		created() {
			this.getlist()
		},
		onLoad() {
			this.getlist()
		},
		methods:{
			getlist(){
				this.list.forEach(item=>{
					if(item.content.length > 60){
						item.isMore = true
						item.contentAll = true
					}else{
						item.isMore = false
						item.contentAll = false
					}
				})
			},
			changeAllFun(item, index){
				let list = JSON.parse(JSON.stringify(this.list));	
				list.forEach((elem,ind)=>{
					if(index === ind){
						elem.contentAll = !elem.contentAll
					} 
				})
				this.list  =  list 
			}
		}
		
}
</script>

<style lang="scss" scoped>
	
	.evaluateItem  {
		height: 500px;
	}

.container {
  width: 100vw;
  font-size:12px;
  min-height: 100vh; 
  display: inline-block;
  color: #1d1d1d;
  position: relative;
  background:#F1F1F1;
}
// 游客评价
.evaluate .evaluateCenter .evaluateItem{
	display: inline-block;
}
.rightText{
	color: #4399FC;
	text-align: right;
}
.evaluate{
	.tip{
		padding: 15px;
		.left{
			font-size: 14px;
			font-weight: 500;
			color: #0c1317;
		}
		.right{
			color: #0f9efa;font-weight: bold;
			image{
				margin-left: 6px;
				width: 16px;
				height: 16px;
			}
		}
	}
	.evaluateCenter{
		overflow-x: auto;
		.evaluateItem{
			background-color: #FFFFFF;
			padding: 15px;
			border-radius: 10px; 
			margin:  10px 15px 0 15px;
			.evaluateTip{
				.img{
					width: 42px;
					height: 42px; 
					display: table;
					image{
						border-radius: 50%;
					}
				}
				.right{
					width: 100%;
					padding-left: 15px;
					.righttip{
						font-size: 13px;
						font-family: PingFang SC;
						font-weight: bold;
						color: #0C1317;
						padding-bottom: 5px;
					}
					.bottom{
						.star{
							display: flex;
							color: #fd9130;
							text{
								padding-right: 4px;
								font-size: 11px;
								color: #0f9efa;
								font-weight: bold;
							}
						}
						.time{
							color: #969899;
						}
					}
				}
			}
			.evaluateText{
				margin: 10px 0 0 0;
				letter-spacing: 0.5px;
				line-height: 20px;
			}
			.lineclamp3{				
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 3; 
				-webkit-box-orient: vertical;
				white-space: normal;
			}
			.evaluateListImg{
				width: 100%;
				.evaluateListImgItem{ 
					width: 66px;
					height: 20px;
					float: left;
					margin-right: 6px;
					image{
						border-radius: 5px;
					}
				}
			}
			.bottomImg{
				display: flex;
				width: 100%;
				padding-top: 15px;
				image{
					width:18px ;
					height: 18px;
					border-radius: 50%;
				}
				text{
					padding-left: 6px;
					margin-top: -30px;
					font-size: 14px;
					color: #787B7C;
					font-weight: bold;
				}
			}
		}
	}
} 
</style>

