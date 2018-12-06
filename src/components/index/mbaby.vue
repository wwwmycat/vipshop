<template>
	<div id="mbaby">
		<mt-swipe :auto="5000">
		  <mt-swipe-item><img src="../../assets/img/15421752985057.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../../assets/img/15421753774891.jpg"/></mt-swipe-item>
		</mt-swipe>
		<ul class="makelist">
			<li v-for="(v,i) in bmakeups">
				<img :src="v"/>  
			</li> 
		</ul>
		<img src="../../assets/img/15407944079751.gif"/>
		<div class="changes">
			<img src="../../assets/img/15421761619330.jpg"/>
		</div>
		<ul class="makes makelist">
			<li v-for="(v,i) in bmakesup">  
				<img :src="v"/> 
			</li>
		</ul> 		
		<div v-for="(v,i) in bupdate" class="change">  
			<img :src="v"/> 
		</div>
		<div class="server">
			<div>
				<img src="../../assets/img/15395728563129.jpg"/>
			</div>
			<div>
				<img src="../../assets/img/15395728799626.jpg"/>
			</div>
		</div>
		<ul class="makes makelist">
			<li v-for="(v,i) in bmakes"> 
				<img :src="v"/>
			</li>
		</ul>
		<img src="../../assets/img/15391366707481.gif"/>
		<img src="../../assets/img/15422467304553.jpg"/>
		<div class="my">
			<p class="center">今日特卖 · 每天早10点 晚8点上新</p>
			<div v-for="(v,i) in hot">
				<img :src="v"/>
			</div>
		</div>
		<section>
			<ul class="details">
				<li v-for="(v,i) in detail">
					<img :src="v.picSrc"/>
					<p class="myinfo">
						<b>{{v.intro}}</b>
						<span>{{v.restTime}}</span>
					</p>
					<p class="myimg"><img :src="v.imgs" alt="" />{{v.price}}</p>
				</li>
			</ul>   
		</section>  
	</div>
</template>

<script>
	export default{
		data(){
			return{
				bmakeups:{},
				bmakes:{},
				bupdate:{},
				bmakesup:{},
				hot:{},
				detail:{}
			}
		},
		mounted(){
		   this.$http.get('../../data/mbaby.json')
		   .then((response)=> {
		     // handle success
		     console.log(response.data);
		     this.bmakeups=response.data.bmakeups;
		     this.bmakes=response.data.bmakes;
		     this.bupdate=response.data.bupdate;
		     this.bmakesup=response.data.bmakesup;
		     this.hot=response.data.hot;
		     this.detail=response.data.detail;
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
	#mbaby .mint-swipe-indicators{
		left: 85%;
	}
	#mbaby img{
		width: 100%;
	}
	#mbaby .changes img{
		margin-bottom: -5px;
	}
	#mbaby .server>div{
		width: 49%;
		display: inline-block;
	}
	#mbaby .myMake li{
		width: 25%;
	}
	#mbaby .makes li{
		width: 33.3%;
	}
	#mbaby .my>p{
		margin-top: 10px;
		margin-bottom: 10px;
	}
	#mbaby .change img{
		margin-bottom: -4px;
	}
    #mbaby .details .myimg{
    	color: #5771a8;
    	font-size: .5rem;
    }
    #mbaby .details .myimg img{
    	margin-right: 5px;
    	width: 8%;
    	vertical-align: middle;
    }
</style>