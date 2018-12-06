<template>
	<div id="life">
		<mt-swipe :auto="5000">
		  <mt-swipe-item><img src="../../assets/img/15417215974192.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../../assets/img/15424697970056.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../../assets/img/15424698571741.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../../assets/img/15424699482414.jpg"/></mt-swipe-item>
		</mt-swipe> 
		<ul class="makelist">
			<li v-for="(v,i) in lifes">
				<img :src="v"/>  
			</li>  
		</ul>
		<div>
			<div class="buies">
				<div v-for="v in lbuy">
					<img :src="v"/>
				</div>
			</div>
			<div class="pic" v-for="a in pic">
				<img :src="a"/>
			</div>
			<p class="center">今日特卖 · 每天早10点 晚8点上新</p>
		</div>
		<section>
			<ul class="details">
				<li v-for="(v,i) in life">
					<img :src="v.picSrc"/>
					<p class="myinfo">
						<b>{{v.intro}}</b>
						<span>{{v.restTime}}</span>
					</p>
				</li>
			</ul>  
		</section>
	</div>
</template>

<script>

	export default{
	   data(){
	   	return{
	   	      lifes:{},
	   	      lbuy:{},
	   	      pic:{},
	   	      life:{}
	   	    }
	   },
	   mounted(){
		   this.$http.get('../../data/life.json')
		   .then((response)=> {
		     // handle success
		     console.log(response.data);
		     this.lifes=response.data.lifes;
		     this.lbuy=response.data.lbuy;
		     this.pic=response.data.pic;
		     this.life=response.data.life;
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
	#life{
		background: #f3f4f5;
	}
	#life img{
		margin-bottom: -4px;
		width: 100%;
	}
	#life .mint-swipe-indicators{
		left: 80%;
	}
/*	#life .buies{
		display: flex;
		flex-direction: row;
	}
	#life .buies>div{
		flex: 1;
	}*/
	#life .center{
		padding-bottom: 10px;
		margin-bottom: 10px;
	}
	#life p{
		background: white;
	}
</style>