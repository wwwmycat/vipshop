<template>
	<div id="slide">
		<mt-swipe :auto="5000">
		  <mt-swipe-item><img src="../../assets/img/15421980533110.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../../assets/img/15421821675164.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../../assets/img/15378580663511.jpg"/></mt-swipe-item>
		</mt-swipe>
		<ul class="makelist">
			<li v-for="(v,i) in makeups">
				<img :src="v"/>
			</li> 
		</ul>
		<ul class="one">
			<li v-for="(v,i) in makeList">
				<img :src="v"/>
			</li>
		</ul>
		<ul class="makelist myMake">
			<li v-for="(v,i) in uplists">
				<img :src="v"/>
			</li>
		</ul>
		<div class="server">
			<div>
				<img src="../../assets/img/15337039367108.jpg"/>
			</div>
			<div>
				<img src="../../assets/img/15337040029454.jpg"/>
			</div>
		</div>
		<img src="../../assets/img/15421835908716.jpg" class="differ"/>
		<ul class="makes makelist">
			<li v-for="(v,i) in makes">
				<img :src="v"/>
			</li>
		</ul>
		<section>
			<p class="center">今日特卖 · 每天早10点 晚8点上新</p>
			<div v-for="(v,i) in update" class="change">
				<img :src="v"/> 
			</div>
			<ul class="makes makelist">
				<li v-for="(v,i) in makesup">
					<img :src="v"/> 
				</li>
			</ul>
			<ul class="details">
				<li v-for="(v,i) in details">
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
				makeups:{},
				makeList:{},
				uplists:{},
				makes:{},
				update:{},
				makesup:{},
				details:{}
				
			}
		},
		mounted(){
		   this.$http.get('../../data/makeups.json')
		   .then((response)=> {
		     // handle success
		     console.log(response.data);
		     this.makeups=response.data.makeups;
		     this.makeList=response.data.makeList;
		     this.uplists=response.data.uplists;
		     this.makes=response.data.makes;
		     this.update=response.data.update;
		     this.makesup=response.data.makesup;
		     this.details=response.data.details;
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
	#slide .mint-swipe-items-wrap{
		padding-bottom: 40%;
		height: 0;
	}
	#slide .mint-swipe-indicators{
		left: 85%;
	}
	#slide .mint-swipe-indicator{
		background: gray;
		opacity: 1;
		border: 1px solid white;
	}
	#slide .is-active{
		background: black;
	}
	#slide img{
		width: 100%;
	}
	#slide .makelist{
		width: 100%;
	}
	#slide .makelist li{
		display: inline-block;
		width: 20%;
	}
	#slide .differ{
		margin-bottom: -4px;
	}
	#slide .one img{
		margin-bottom: -4px;
	}
	#slide .server>div{
		width: 49%;
		display: inline-block;
	}
	#slide .myMake li{
		width: 25%;
	}
	#slide .makes li{
		width: 33.3%;
	}
	#slide .change img{
		margin-bottom: -4px;
	}
    #slide .details .myimg{
    	color: #5771a8;
    	font-size: .5rem;
    }
    #slide .details .myimg img{
    	margin-right: 5px;
    	width: 8%;
    	vertical-align: middle;
    }
</style>