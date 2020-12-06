<template>
	<div class="logingapp">
		<div class="left-bottom-sign"></div>
		<div class="back-btn mix-icon icon-guanbi" @click="navBack"></div>
		<div class="right-top-sign"></div>
		<div class="agreement center">
			<span class="mix-icon icon-xuanzhong" :class="{active: agreement}" @click="checkAgreement"></span>
			<span @click="checkAgreement">请认真阅读并同意</span>
			<span class="tit" @click="navToAgreementDetail(1)">《用户服务协议》</span>
			<span class="tit" @click="navToAgreementDetail(2)">《隐私权政策》</span>
		</div>
		<div class="wrapper">
			<div class="left-top-sign">LOGIN</div>
			<div class="welcome">
				欢迎回来！
			</div>
			<div class="input-content">
				<div class="input-item">
					<span class="tit">手机号码</span>
					<div class="row">
						<input
							v-model="username"
							type="number"
							maxlength="11"
							placeholder="请输入手机号码"
							placeholder-style="color: #909399"
						/>
					</div>
				</div>
				<div class="input-item">
					<span class="tit">验证码</span>
					<div class="row">
						<input
							v-model="code"
							type="number"
							maxlength="6"
							placeholder="请输入手机验证码"
							placeholder-style="color: #909399"
						/>
						<!--<mix-code :mobile="username" templateCode="SMS_194050994"></mix-code>-->
					</div>
				</div>
			</div>
			<!--<mix-button ref="confirmBtn" text="登录" marginTop="60rpx" @onConfirm="login"></mix-button>-->

			<!-- #ifdef APP-PLUS || MP-WEIXIN -->
			<div class="other-wrapper">
				<div class="line center">
					<span class="tit">快捷登录</span>
				</div>
				<div class="list row">
					<!--<button open-type="getUserInfo" @getuserinfo="mpWxGetUserInfo">
						<div class="item column center">
							<img class="icon" src="~assets/img/static/icon/login-wx.png" />
						</div>
					</button>

					<div v-if="canUseAppleLogin && false" class="item column center" style="width: 90px;" @click="loginByApple">
						<img class="icon" src="~assets/img/static/icon/apple.png">
						<span>Apple登录</span>
					</div>-->
					<div class="item column center" style="width: 90px;" @click="loginByWxApp">
						<img class="icon" src="~assets/img/static/icon/login-wx.png"/>
						<span>微信登录</span>
					</div>
					<!-- #endif -->
				</div>
			</div>
			<!-- #endif -->
		</div>

		<!--<mix-loading v-if="isLoading"></mix-loading>-->
	</div>
</template>

<script>
	export default{
		data(){
			return {
				canUseAppleLogin: false,
				agreement: true,
				username: '',
				code: '',
			}
		},
		onLoad() {
			console.log(1);
		},
		methods: {
			loginSuccessCallBack(data){

			},
			//手机号登录
			login(){

			},
			navBack(){

			},
			//同意协议
			checkAgreement(){
				this.agreement = !this.agreement;
			},
			//打开协议
			navToAgreementDetail(type){

			}
		}
	}
</script>

<style>
	page{
		background: #fff;
	}
</style>
<style scoped>
  @import url("../../assets/css/common.css");
  @import url("../../assets/css/icon.css");

	.logingapp{
		padding-top: 15vh;
		position:relative;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background: #fff;
	}
	.wrapper{
		position:relative;
		z-index: 90;
		padding-bottom: 20px;
	}
	.back-btn{
		position:absolute;
		left: 10px;
		top: 12px;
		z-index: 90;
		padding: 10px;
		font-size: 16px;
		color: #606266;
	}
	.left-top-sign{
		font-size: 60px;
		color: #f8f8f8;
		position:relative;
		left: -6px;
	}
	.right-top-sign{
		position:absolute;
		top: 40px;
		right: -15px;
		z-index: 95;
	}

		.right-top-sign:before, .right-top-sign:after{
			display:block;
			content:"";
			width: 200px;
			height: 40px;
			background: #b4f3e2;
		}
		.right-top-sign:before{
			transform: rotate(50deg);
			border-top-right-radius: 50px;
		}
		.right-top-sign:after{
			position: absolute;
			right: -99px;
			top: 0;
			transform: rotate(-50deg);
			border-top-left-radius: 50px;
		}

	.left-bottom-sign{
		position:absolute;
		left: -135px;
		bottom: -160px;
		border: 50px solid #d0d1fd;
		border-radius: 50%;
		padding: 90px;
	}
	.welcome{
		position:relative;
		left: 25px;
		top: -45px;
		font-size: 23px;
		color: #555;
		text-shadow: 1px 0px 1px rgba(0,0,0,.3);
	}
	.input-content{
		padding: 0 30px;
	}
	.input-item{
		display:flex;
		flex-direction: column;
		align-items:flex-start;
		justify-content: center;
		padding: 0 15px;
		background: #f8f6fc;
		height: 68px;
		border-radius: 4px;
		margin-bottom: 25px;
	}

  .input-item:last-child{
  	margin-bottom: 0;
  }
  .input-item .row{
  	width: 100%;
  }
  .input-item .tit{
  	height: 25px;
  	line-height: 28px;
  	font-size: 13px;
  	color: #606266;
  }
  .input-item input{
  	flex: 1;
        border: 0;
        outline: none;
  	height: 30px;
  	font-size: 15px;
  	color: #303133;
  	width: 100%;
  }
	/* 其他登录方式 */
	.other-wrapper{
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 10px;
		margin-top: 40px;
	}

  .other-wrapper .line{
  	margin-bottom: 20px;
  }

  .other-wrapper .line .tit{
  	margin: 0 16px;
  	font-size: 12px;
  	color: #606266;
  }
  .other-wrapper .line:before, .other-wrapper .line:after{
  	content: '';
  	width: 80px;
  	height: 0;
  	border-top: 1px solid #e0e0e0;
  }

  .other-wrapper .item{
  	font-size: 12px;
  	color: #606266;
  	background-color: #fff;
  	border: 0;
  }

  .other-wrapper .item:after{
  	border: 0;
  }

  .icon{
  	width: 45px;
  	height: 45px;
  	margin: 0 12px 8px;
  }

	.agreement{
		position: absolute;
		left: 0;
		bottom: 7vh;
		z-index: 1;
		width: 375px;
		height: 45px;
		font-size: 12px;
		color: #999;
	}

  .agreement .mix-icon{
  	font-size: 18px;
  	color: #ccc;
  	margin-right: 4px;
  	margin-top: 1px;
  }

  .agreement .mix-icon.active{
  	color:  #ff536f;
  }

  .agreement .tit{
  	color: #40a2ff;
  }
</style>
