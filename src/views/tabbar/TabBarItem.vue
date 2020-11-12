<template>
	<div class="tab-bar-item" @click="clickitem">
		<div v-if="!isActive"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-icon-active"></slot></div>
		<div :style="activeStyle"><slot name="item-text"></slot></div>
	</div>	
</template>

<script>
	export default {
		name:'TabBarItem',
		props:{
			path:{
				type:String
			},
			activeColor:{
				type:String
			}
		},
		data(){
			return {
				//sActive:false
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path) !== -1
			},
			activeStyle(){
				return this.isActive ? {color:this.activeColor} :{}
			}
		},
		methods:{
			clickitem(){
				this.$router.replace(this.path)
			}
		}
	}	
</script>

<style scoped>
	.tab-bar-item{
		height: 3.0625rem;
		flex: 1;
		text-align: center;
	}
	
	.tab-bar-item img{
		width: 1.5rem;
		height: 1.5rem;
		margin-top: 0.1875rem;
		vertical-align: middle;
	}
</style>
