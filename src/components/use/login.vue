<template>
	<div id="login" v-show="show">
		<div class="top">
			<img src="../../assets/img/newlogo.85329d50.png"/>
			<div class="clicks" @click="behide()">
				<span></span>
			    <span></span>
			</div>
		</div>
		<div class="tel">
			<label for="tel">手机号</label><input type="text" id="tel" placeholder="请输入手机号"/>
		</div>
		<div class="pass">
			<label for="pass">验证码</label><input type="text" id="pass" placeholder="请输入验证码"/>
			<button>获取验证码</button>
		</div>
		<div class="btn">
			<button class="logins" @click="go()">手机号注册登录</button>
			<p>
				<i @click="change()"></i>同意
			    <span>《唯品会服务条款》、《隐私条款》、《唯品支付用户服务协议》、《唯品信用服务协议》</span>
			</p> 
		</div>
		<div class="bottom">
			<p class="line">或</p>
		    <router-link to="/recommend">密码登录</router-link>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				show:true
			}
		},
		methods:{
			behide(){
				this.$router.push('/recommend');
			},
			go(){
				if($('imput').eq(0).val()==''){
							
				}else{

					this.$router.push('/recommend');
				}
			},
			change(){
				$(this).css('background-position-x','-30px')
			}
		},
		mounted(){
			
			
		}
	}
</script>

<style>
	#login{
		position: fixed;
		width: 100%;
		height: 100%;
	}
	#login .top{
		height: 170px;
		line-height: 170px;
		background: url(../../assets/img/login_bg.3a93a8bf.jpg) no-repeat;
		text-align: center;
	}
	#login .top img{
		width: 125px;
		height: 50px;
	}
    #login .top{
    	position: relative;
    }
    #login .clicks>span{
    	display: block;
    	position: absolute;
    	top: 20px;
    	right: 20px;
    	width: 2px;
    	height: 20px;
    	background: #222;
    	transform: rotate(45deg) translateY(-3px);
    }
    #login .clicks>span:nth-of-type(2){
    	right: 16px;
    	transform: rotate(-45deg) translateY(-3px);
    }
    #login input{
    	padding-left: 10px;
    	height: 52px;
    	color: #98989f;
    	border: 0;
    	outline: none;
    }
    #login .tel,.pass{
    	box-sizing: border-box;
    	padding-left: 10px;
    	border-bottom: 1px solid #e7e7e7;
    }
    #login .pass>button{
    	padding-left: 10px;
    	height: 52px;
    	border: 0;
    	border-left: 1px solid #e7e7e7;
    	background: white;
    	color: #98989f;
    }
    #login .btn>.logins{
    	display: inline-block;
    	margin-bottom: 20px;
    	width: 100%;
    	height: 44px;
    	line-height: 44px;
    	background: #de3d96;
    	border-radius: 3px;
    	border: none;
    	color: white;
    }
    #login .btn{
    	margin: 30px auto;
    	width: 90%;
    	text-align: center;
    }
    #login a{
    	color: #ee9eca;    	
    }
    #login .btn p{
    	width: 100%;
    	color: #98989F;
    	font-size: .8rem;
    }
    #login .btn i{
    	display: inline-block;
    	margin-right: 10px;
    	width: 21px;
    	height: 22px;
    	background: url(../../assets/img/rectangle.5d636f59.png) no-repeat ;
    	background-size: 100%;
    	vertical-align: middle;
    }
    #login .btn span{
    	color: #157efa;
    }
    #login .line{
    	position: relative;
    	text-align: center;
    }
    #login .line::before{
    	content: '';
    	display: block;
    	width: 170px;
    	height: 2px;
    	position: absolute;
    	top: 10px;
    	left: 0;
    	background: #DBDBDB;
    }
    #login .line::after{
    	content: '';
    	display: block;
    	width: 170px;
    	height: 2px;
    	position: absolute;
    	top: 10px;
    	right: 0;
    	background: #dbdbdb;
    }
    #login .bottom a{
    	display: block;
    	width: 20%;
    	margin: 20px auto;
    	padding: 0 14px;
    	height: 36px;
    	line-height: 36px;
    	border-radius: 3px;
    	border: 2px solid #e4007f;
        color: #e4007f;
        text-align: center;
    }
</style>