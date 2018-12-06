<template>
  <div id="app">
  	<div id="top" v-show="shows" class="change mytop">
  		<div class="banner" v-if="myshow">
  			<span @click="ahide()">×</span>
  			<p>新会员满38元包邮</p>
  			<p>品牌特卖，天天都有3折封顶</p>
  		</div>
  		  {{hide()}}
  		  <div class="seacher">
		  		  <router-link to="/login">登录</router-link>
		  		  <input type="search" name="" id="" value="" placeholder="搜索品牌或商品" @click="mysearch()"/>
		  		  <router-link to="/list"><img src="./assets/img/down.png"/></router-link>		  	
		  	</div>
		  	<nav id="mynav">
		  		  <div class="one">
		  			   <ul>
				        	<li><router-link to="/recommend">今日推荐</router-link></li>
				        	<li><router-link to="/snatch">最后疯抢</router-link></li>
				        	<li><router-link to="/fashion">时尚</router-link></li>
				        	<li><router-link to="/makeups">美妆</router-link></li>
				        	<li><router-link to="/mbaby">母婴</router-link></li>
				        	<li><router-link to="/device">家电</router-link></li>
				        	<li><router-link to="/home">家居</router-link></li>
				        	<li><router-link to="/international">国际</router-link></li>
				        	<li><router-link to="/life">生活</router-link></li>
				       </ul>
		  	  	</div>
		        <div class="right">
		       	
		        </div>
		  	</nav>
  	</div>
  	<div id="back">
    	<i></i>
    </div>
    <div id="goTop">
      <div class="goTop" v-show="goTopShow" @click="goTop"><i class="goTopIcon">↑</i></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
 name: "goTop",
		data(){
			return{
				scrollTop: '',
        goTopShow:false,
        shows:true,
        myshow:true
      }
    },
		methods:{
	        handleScroll () {
	          this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
	          if(this.scrollTop>500){
	            this.goTopShow=true
	          }
	        },
	        goTop(){
	          let timer=null,_that=this;
	          cancelAnimationFrame(timer)
	          timer=requestAnimationFrame(function fn(){
	            if(_that.scrollTop>0){
	              _that.scrollTop-=50;
	              document.body.scrollTop = document.documentElement.scrollTop = _that.scrollTop;
	              timer=requestAnimationFrame(fn)
	            }else {
	              cancelAnimationFrame(timer);
	              _that.goTopShow=false;
	            }
	          })
	        },
	        hide(){
	        	if(this.$route.fullPath=='/login'||this.$route.fullPath=='/list'||this.$route.fullPath=='/details'){
	        		this.shows=false;
	        	}else{
	        		this.shows=true
	        	}	
	        },
	        ahide(){
	        	this.myshow=false;
	        }
	      },
	  mounted() {
	        window.addEventListener('scroll', this.handleScroll);
	        $(window).scroll(function(){
				 		var st=$(window).scrollTop();
				 		if(st>200){
				 			$('.mytop').removeClass('change');
				 			$('.mytop').addClass('mychange');
				 		}else if(st<200){
				 			$('.mytop').removeClass('mychange');
				 			$('.mytop').addClass('change');
				 		}
				 	})
	  },
	  destroyed(){
	        window.removeEventListener('scroll', this.handleScroll)
	  }


}
</script>

<style>
	::-webkit-scrollbar {/*隐藏滚轮*/
		display: none;
	}
	#top.change{
		position: static;
	}
	#top.mychange{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999999;
		width: 100%;
	}
	#top .banner{
		position: relative;
		padding-top: 20px;
		padding-bottom: 20px;		
		background: url(assets/img/05fc1148.download-banner.png) no-repeat;
		background-size: 100% 100%;
		color: #fff;
	}
	#top .banner p{
		margin-bottom: 5px;
		text-align: center;
		font-size: 1.5rem;
	}
	#top .banner>span{
    position: absolute;
    top: 4px;
    left: 10px;
	}
	#top .banner p:nth-of-type(2){
		font-size: .5rem;
	}
	#app a{
		color: #585c64;
		text-decoration: none;
		font-size: .8rem;
	}
	#top .seacher input{
		outline: none;
	}
	#top{
		box-sizing: border-box;
		background: #f9f9fa;
	}
	#mynav{
		overflow: auto;
	}
	#mynav .one>ul{
		width: 90%;
	}
	.seacher{
		margin: 0 10px 10px;
		padding-top: 10px;
	}
	.seacher input{
		padding-left: 15px;
		 width: 285px;
		 height: 30px;
		 border-radius: 15px;
		 border: 1px solid gainsboro;
		 background: #f3f4f5;
	}
	.seacher img{
		width: 24px;
		height: 24px;
		vertical-align: middle;
	}
	#mynav ul{
		display: table;
		white-space: nowrap;
		width: 100%;
	}
	#mynav li{
		display: table-cell;
		box-sizing: border-box;
	}
	#mynav li a{
		display: block;
		padding-bottom: 10px;
		margin:0 10px;
		text-align: center;
	}
	#mynav .router-link-active{
		color: #d34ba8;
		border-bottom: 3px solid #D34BA8;
	}
	#back i{
		position: fixed;
		bottom: 20px;
		left: 20px;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: rgba(34,34,34,.9);
		z-index: 9999;
	}
	.goTop{
	    position: fixed;
	    right: 20px;
	    bottom: 20px;
	    z-index: 99999;
	}
	.goTopIcon{
	    display: block;
	    width: 50px;
	    height: 50px;
	    border-radius: 50%;
	    background: rgba(34,34,34,.9);
	    color: white;
	    text-align: center;
	    font-style: normal;
	    font-size: 1.5rem;
	    line-height: 3rem;
	}
</style>
    