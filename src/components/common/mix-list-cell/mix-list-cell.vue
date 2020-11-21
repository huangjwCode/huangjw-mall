<template>
	<div class="content">
		<div class="mix-list-cell" :class="border" @click="onClick" hover-class="cell-hover"  :hover-stay-time="50">
			<span
				v-if="icon"
				class="cell-icon mix-icon"
				:style="[{
					color: iconColor,
				}]"

				:class="icon"
			></span>
			<span class="cell-tit clamp">{{ title }}</span>
			<span v-if="tips" class="cell-tip" :style="{color: tipsColor}">{{ tips }}</span>
			<span class="cell-more mix-icon"
				:class="typeList[navigateType]"
			></span>
		</div>
	</div>
</template>

<script>
	/**
	 *  简单封装了下， 应用范围比较狭窄，可以在此基础上进行扩展使用
	 *  比如加入image， iconSize可控等
	 */
	export default {
		data() {
			return {
				typeList: {
					left: 'icon-zuo',
					right: 'icon-you',
					up: 'icon-shang',
					down: 'icon-xia'
				},
			}
		},
		props: {
			icon: {
				type: String,
				default: ''
			},
			title: {
				type: String,
				default: '标题'
			},
			tips: {
				type: String,
				default: ''
			},
			tipsColor: {
				type: String,
				default: '#999'
			},
			navigateType: {
				type: String,
				default: 'right'
			},
			border: {
				type: String,
				default: 'b-b'
			},
			hoverClass: {
				type: String,
				default: 'cell-hover'
			},
			iconColor: {
				type: String,
				default: '#333'
			}
		},
		methods: {
			onClick(){
				this.$emit('onClick');
			}
		},
	}
</script>

<style scoped>
	.mix-list-cell{
		display:flex;
		align-items: center;
		height: 48px;
		padding: 0 12px;
		position:relative;
	}

  .mix-list-cell.cell-hover{
  	background:#fafafa;
  }

  .mix-list-cell:after{
  	left: 15px;
  	border-color: #f0f0f0;
  }

  .mix-list-cell.b-b:after{
  		left: 15px;
  		border-color: #f0f0f0;
  }

  .cell-icon{
  	align-self: center;
  	width: 30px;
  	font-size: 19px;
  }

  .cell-more{
  	align-self: center;
  	font-size: 12px;
  	color: #999;
  	margin-left: 8px;
  }
  .cell-tit{
  	flex: 1;
  	font-size: 15px;
  	color: #333;
  	margin-right:5px;
  }
  .cell-tip{
  	font-size: 13px;
  }
</style>
