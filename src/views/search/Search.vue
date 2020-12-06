<template>
	<div class="app column">
		<div class="search-wrap center">
			<div class="input-box row">
				<span class="mix-icon icon-sousuo"></span>
				<input
					class="input"
					type="text"
					placeholder="请输入搜索关键字"
					maxlength="20"
					v-model="keyword"
					@confirm="search"
					confirm-type="search"
				/>
				<span v-if="keyword" class="mix-icon icon-guanbi2" @click="clearInput"></span>
			</div>
			<div class="search-btn center" @click="search">
				<span>搜索</span>
			</div>
		</div>

		<div class="content">
			<div class="s-header row">
				<span class="tit">历史搜索</span>
				<span class="mix-icon icon-lajitong" @click="showPopup('mixModal')"></span>
			</div>
			<div class="list" style="margin-bottom: 20rpx;">
				<div class="item center" @click="search()">
					<span>VIP</span>
				</div>
				<div class="item center" @click="search()">
					<span>VIP2</span>
				</div>
				<div class="item center" @click="search()">
					<span>VIP5</span>
				</div>
			</div>
			<div class="s-header row">
				<span class="tit">热门搜索</span>
			</div>
			<div class="list">
				<div class="item center" @click="search()">
					<span>衬衫</span>
				</div>
				<div class="item center" @click="search()">
					<span>西裤</span>
				</div>
				<div class="item center" @click="search()">
					<span>职业装</span>
				</div>                
			</div>
		</div>
		<!--<mix-modal ref="mixModal" text="您确定要清除搜索历史吗" @onConfirm="delHistory"></mix-modal>-->
	</div>
</template>

<script>
  	export default {
  		data() {
  			return {
  				keyword: '',
  				hotList: [],
  				historyList: []
  			}
  		},
  		methods: {
  			//加载热搜关键词
  			async loadHotKeywords(){

  			},
  			//加载历史搜索
  			loadHistory() {

  			},
  			//执行搜索
  			search(keyword) {

  			},
  			//保存关键字到历史记录
  			saveKeyword() {
  				if(!list){
  					list = [];
  				}
  				const index = list.findIndex(item=>item === this.keyword);
  				if(index > -1){
  					list.splice(index, 1);
  				}
  				list.unshift(this.keyword);
  				//只保存30条记录
  				if(list.length > 30){
  					list.length = 30;
  				}
  				this.historyList = list;

  			},
  			//清除历史搜索
  			delHistory() {
  				this.historyList = [];
  			},
  			//清空输入框
  			clearInput(){
  				this.keyword = '';
  			}
  		}
  	}
</script>

<style scoped>
  @import url("../../assets/css/common.css");
  @import url("../../assets/css/icon.css");

	.search-wrap{
    padding-top: 10px;
		padding-left: 12px;
		height: 50px;
	}

  .search-wrap .icon-sousuo{
  	padding: 0 6px 0 10px;
  	font-size: 20px;
  	color: #999;
  }
  .search-wrap .input-box {
  	width: 302px;
  	height: 40px;
  	border-radius: 50px;
  	background: #f5f6f7;
  }
  .search-wrap .input{
  	outline: none;
    border: 0;
    width: 80%;
    background-color: #f5f6f7;
  	font-size: 15px;
  	color: #333;
  }
  .search-wrap .icon-guanbi2{
  	padding: 5px 10px;
  	font-size: 16px;
  	color: #999;
  }
  .search-wrap .search-btn {
  	flex-shrink: 0;
  	padding: 0 12px 0 10px;
  	font-size: 16px;
  	color: #007aff;
  }

	.content {
		flex: 1;
		padding-top: 24rpx;
		border-radius: 28rpx 28rpx 0 0;
		background-color: #fff;
	}
	.s-header{
		height: 40px;
		padding: 0 16px 0 20px;
	}

  .s-header .tit{
  	flex: 1;
  	font-size: 15px;
  	color: #333;
  	font-weight: 700;
  }
  .s-header .icon-lajitong{
  	padding: 5px;
  	font-size: 12px;
  	color: #333;
  }


	.list{
		display: flex;
		flex-wrap: wrap;
		padding: 5px 0 0 18px;
	}
  .list .item{
  	min-width: 30px;
  	height:29px;
  	padding: 0 12px;
  	margin: 0 12px 12px 0;
  	border-radius: 550px;
  	background-color: #f5f6f7;
  	font-size: 13px;
  	color: #666;
  }
</style>
