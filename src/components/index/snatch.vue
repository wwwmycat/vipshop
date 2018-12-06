<template>
	<div id="snatch">
		<div class="bannerTop">
			<img src="../../assets/img/05fc1148.download-banner.png"/>
			<p><span>今日疯抢</span><span class="next" @click="nexts()">下期预告</span></p>
		</div>
		<section>
			<div class="sbuy" v-for="(v,i) in slist">
				<div id="arrow"><img :src="v.one"/></div>
				<ul>
					<li v-for="a in v.two">
						<div class="small">
							<img :src="a.my"/>
							<p class="out">{{a.info}}</p>
							<span>{{a.sprice}}</span>
							<del>{{a.old}}</del>	
						</div>
					</li>
				</ul>
				<div class="mybottom" v-for="b in v.fors">
					{{b.first}}<span>{{b.second}}</span>{{b.third}}
				</div>
			</div> 
			<div class="nextInfo">
				<p class="center nexts">下期预告</p>
				<div class="shops">
					<div class="shop" v-for="(v,i) in shop">
						<div class="myshop">
							<img :src="v.url"/>
						    <p class="intop">
						    	<span>今日</span>
						    	<em class="ones">{{v.time}}</em>
						    	<em class="twos">:</em>
						    	<em class="ones">00</em>
						    	<span>开售</span>
						    	<button>抢先收藏</button>
						    </p>
						</div>
					</div>
				</div>
			</div>
		</section> 
		<div class="down">
			<h4>
				<span id="sprite" @click="change()">
					
				</span>
			</h4>
			<div class="informations">
				<p class="information">
					 1、本次活动所有持有有效账户的注册用户均可参与；<br />
					 2、支持本次活动的平台包括移动端APP、电脑端和微信小程序端；<br />
					 3、活动优惠：最后疯抢栏目内的活动商品折扣力度以专场页面显示为准，最高3折封顶。<br />
					 4、支持7天无理由退货的活动商品均可正常退货，参与活动的订单如产生退货，退款金额以商品的小计金额为准；<br />
					 5、本次活动所有商品不支持货到付款；<br />
					 6、凡以违反法律法规、《唯品会服务条款》、活动规则等方式（包括但不限于作弊、虚假交易、扰乱系统、扰乱活动秩序、实施网络攻击等）参与本次活动的用户，无论是否成功购买“最后疯抢”的活动商品，唯品会均有权终止其参与活动的资格。<br />
					 7、如出现不可抗力或情势变更情形（包括但不限于重大自然灾害、活动受政府机关指令影响需要停止举办或调整的、活动遭受严重网络攻击或因系统故障需要暂停举办的），则唯品会有权根据相关法律法规的规定主张免责。<br />
					 8、请您在认真阅读并清楚理解相关活动规则后自主决定是否参加，如您参加，则视为您已清楚了解活动规则并同意遵守。 <br />
				</p>
			</div>
		</div>
		<footer>
			<ul>
				<li><router-link to="/recommend">唯品会首页</router-link></li>
				<li class="come"><router-link to="/recommend">关于我们</router-link></li>
				<li><router-link to="/login">登录</router-link></li>
				<li><router-link to="/recommend">注册</router-link></li>
			</ul>
			<p class="center">Copyright © 2008-2017 m.vip.com, All Rights Reserved 粤ICP备08114786号</p>
			<p class="center"><i></i><span>粤公网安备 44010302000068号</span></p>
		</footer>
	</div>
</template>

<script>
	export default{
        data(){
        	return{
        		slist:{},
        		shop:{}
        	}
        },
        methods:{
        	change(){
        		if($('.informations').css('display')=='none'){
        			$('.informations').show();
        			$('span').css('background-position-x','-30px')
        		}else{
        			$('.informations').hide();
        			$('span').css('background-position-x','0')
        		}
        	}
        },
        mounted(){
        	
		   this.$http.get('../../data/one.json')
		   .then((response)=> {
		     // handle success
		     console.log(response.data);
		     this.slist=response.data.slist;
		     this.shop=response.data.shop;
		   })
		   .catch(function (error) {
		     // handle error
		     console.log(error);
		   })
		   .then(function () {
		     // always executed
		   });
		  
		}
	}
</script>

<style>
	#snatch{
		background: #f1f2f3;
	}
	#snatch img{
		width: 100%;
	}
	#snatch .bannerTop>p{
		width: 100%;
		line-height: 2rem;
		text-align: center;
		background: white;
	}
	#snatch .bannerTop span{
		display: inline-block;
		width: 50%;
	}
	#snatch .sbuy{
		width: 90%;
		margin:10px auto;
		background: white;
		border-radius: 10px;
		font-size: .3rem;
	}
	#snatch .out{
		overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 2;
	    margin-bottom: 6px;
	}
	#snatch .sbuy li{
		width: 33.3%;
		display: inline-block;
	}
	#snatch .sbuy .mybottom{
		padding-left: 10px;
		height: 2rem;
		line-height: 2rem;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		border-top: 1px solid gainsboro;
	}
	#snatch #arrow img{
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}
	#snatch .sbuy .small{
		width: 80%;
		margin:10px auto 15px;
	}
	#snatch .sbuy #arrow{
		position: relative;
	}
	#snatch .sbuy #arrow::after{
		content: '';
		display: block;
		position: absolute;
		top: 130px;
		left: 50%;
		width: 10px;
		height: 10px;
		background: white;
		transform: rotate(45deg);
		z-index:9999;
	}
	#snatch del{
		color: #9c9ba0;
	}
	#snatch .mybottom span{
		color: #e03d96;
        font-weight: 600;
	}
	#snatch .shop{
		width: 100%;
	}
	#snatch .myshop{
		position: relative;
		margin: 10px auto;
	}
	#snatch .myshop img{
		border-radius: 10px;		
	}
	#snatch .intop{
		position: absolute;
		bottom: 20px;
		left: 0;
		width: 100%;
		text-align: center;
		color: white;
		font-weight: bold;
	}
	#snatch .intop em,button{
		display: inline-block;	
		font-style: normal;	
		font-weight: normal;
	}
	#snatch .ones{
		background: #000000;
	}
	#snatch .twos{
		background: grey;
		width: 8px;
        font-style: normal;
	}
	#snatch .intop button{
		height: 22px;
		width: 80px;
		line-height: 22px;
		border-radius: 11px;
		background: #000;
		color: white;
		border: 0;
	}
	#snatch .down,footer ul,.myshop{
		width: 90%;
	}
	#snatch .down{
		margin: 100px auto;
	}
	#snatch .down h4{
		position: relative;
		height: 2rem;
		background: url("../../assets/img/title-white.png") no-repeat;
		border: 1px solid black;
		background-size: 100%;
	}
	#snatch #sprite{
		position: absolute;
		top: 1px;
		right: 8px;
		width: 30px;
		height: 30px;
		background: url("../../assets/img/switch-btn-white.png") no-repeat;
		background-size: auto 100%;
	}
	#snatch .information{
		height: 300px;
		font-size: .3rem;
		color: #424242;
		line-height: 2;
		box-sizing: border-box;
		padding: 10px;
	}
	#snatch .informations{
		display: none;
		overflow: auto;
		border-left: 1px solid black;
		border-right: 1px solid black;
		border-bottom: 1px solid black;
	}
	footer{
		width: 100%;
		padding: 10px 0 20px;
		border-top: 1px solid gainsboro;
	}
	footer ul{
		margin: 0 auto;
	}
	footer ul li{
		display: inline-block;
		margin-right: 20px;
		font-size: .3rem;
	}
	footer ul .come{
		margin-right: 30px;
	}
	#snatch footer .center{
		color: #ccc;
		margin-top: 10px;
		font-size: .3rem;
	}
	#snatch footer>a{
		font-size: 1rem;
	}
	#snatch i{
		display: inline-block; 
		width: 30px;
		height: 30px;
		background: url("../../assets/img/a.png") no-repeat;
		vertical-align: middle;
	}
</style>