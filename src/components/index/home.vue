<template>
	<div id="home">
		<mt-swipe :auto="5000">
		  <mt-swipe-item><img src="../../assets/img/15422759578870.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../../assets/img/15423376595240.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../../assets/img/15423360026550.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../../assets/img/15422745487683.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../../assets/img/15417291344740.jpg"/></mt-swipe-item>
		</mt-swipe> 
		<img src="../../assets/img/15267195250789.jpg"/>
		<ul class="makelist">
			<li v-for="(v,i) in hmakeups">
				<img :src="v"/>  
			</li>  
		</ul>
		<img src="../../assets/img/15287222317044.jpg"/>
		<section class="select">
			<img src="../../assets/img/15423626491984.gif"/>
			<div class="selectCon">
				<div class="selectLeft" v-for="v in select">
				   <img :src="v"/>
				</div>
			</div>
			<ul class="mySelect">
				<li v-for="(v,i) in selects">
					<img :src="v"/>
				</li>
			</ul>
			<img src="../../assets/img/15402866475361.jpg"/>
			<div class="car">
				<img src="../../assets/img/15423519052748.jpg"/>
				<ul class="mySelect">
					<li v-for="(v,i) in myselect">
						<img :src="v"/>
					</li>
				</ul>
			</div> 
			<div class="cookCon">
				<img src="../../assets/img/15287231214075.jpg"/>
				<div class="cook">
					<div class="cookLeft">
						<img src="../../assets/img/15407763038034.jpg"/>
					</div>
					<div class="cookRight">
						<img src="../../assets/img/15325078404247.jpg"/>
						<img src="../../assets/img/15423342365760.jpg"/>
					</div>
				</div>
			</div>
			<div class="newInfo">
				<img src="../../assets/img/15287212338479.jpg"/>
				<img src="../../assets/img/15423596083984.jpg"/>
				<ul class="newinfo">
					<li v-for="v in newinfo">
						<img :src="v"/>
					</li>
				</ul>
			</div>
			<div v-for="(v,i) in fashion" class="hfashion">
				<div class="fashion" v-for="b in v.hone">
					<img :src="b"/>
				</div>
				<ul class="fashions">
					<li v-for="a in v.twin">
					    <img :src="a"/>
					</li>
				</ul>
				<p class="center">{{v.hinfo}}</p>
			</div>
			<ul class="details">
				<li v-for="(v,i) in home">
					<img :src="v.picSrc"/>
					<p class="myinfo">
						<b>{{v.intro}}</b>
						<span>{{v.restTime}}</span>
					</p>
				</li>
			</ul>
			<div class="bedding" v-for="v in bed">
				<img :src="v.quilt"/>
				<div class="pillow">
					<div v-for="h in v.pillow">
					    <img :src="h"/>						
					</div>
				</div>
				<ul class="bag">
					<li v-for="item in v.bag">
						<img :src="item"/>
					</li>
				</ul>
				<ul class="details">
					<li v-for="s in v.lhome">
						<img :src="s.picSrc"/>
						<p class="myinfo">
							<b>{{s.intro}}</b>
							<span>{{s.restTime}}</span>
						</p>
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				hmakeups:{},
				select:{},
				selects:{},
				myselect:{},
				newinfo:{},
				fashion:{},
				home:{},
				bed:{}
			}
		},
		mounted(){
		   this.$http.get('../../data/home.json')
		   .then((response)=> {
		     // handle success
		     console.log(response.data);
		     this.hmakeups=response.data.hmakeups;
		     this.select=response.data.select;
		     this.selects=response.data.selects;
		     this.myselect=response.data.myselect;
		     this.newinfo=response.data.newinfo;
		     this.fashion=response.data.fashion;
		     this.home=response.data.home;
		     this.bed=response.data.bed;
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
	#home{
		background: #f3f4f5;
	}
	#home img{
		width: 100%;
		margin-bottom: -5px;
	}
	#home .mint-swipe-indicators{
	   left: 77%;	
	}
	#home .selectCon,.mySelect{
		width: 100%;
	}
	#home .selectCon .selectLeft{
		display: inline-block;
		width: 49%;
	}
	#home .mySelect{
		display: flex;
		flex-wrap: nowrap;
	}
	#home .cook,.fashions,.bag{
		display: flex;
	}
	#home .cook>div,.fashions li,.mySelect li{
		flex: 1;
	}
	#home .cook .cookRight{
		display: flex;
		flex-direction: column;
	}
	#home .cookRight img{
		flex: 1;
	}
	#home .newinfo li{
		display: inline-block;
		width: 50%;
	}
	#home .center{
		padding-bottom: 10px;
		text-align: center;
	}
	#home .hfashion{
		background: white;
	}
	#home .myinfo{
		background: white;
	}
	#home .bedding,.bag{
		width: 100%;
	}
	#home .bag li,.pillow>div{
		display: inline-block;
		width: 50%;
	}
    #home .details{
    	margin-top: 20px;
    }
</style>