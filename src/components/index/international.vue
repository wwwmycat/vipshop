<template>
	<div id="inter">
		<img src="../../assets/img/15409831112490.jpg"/>
		<ul class="makelist">
			<li v-for="(v,i) in imakeups">
				<img :src="v"/>  
			</li>  
		</ul>
		<div>
			<img src="../../assets/img/15423584755214.jpg"/>
			<img src="../../assets/img/15323344710174.jpg"/>
			<div class="buies">
				<div v-for="v in buies">
					<img :src="v"/>
				</div>
			</div>
		</div>
		<section>
			<p class="center">今日特卖 · 每天早10点 晚8点上新</p>
			<img src="../../assets/img/15425086386190.jpg"/>
			<ul class="details">
				<li v-for="(v,i) in inters">
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
			    imakeups:{},
			    inters:{},
			    buies:{}
			}
		},
		mounted(){
		   this.$http.get('../../data/inter.json')
		   .then((response)=> {
		     // handle success
		     console.log(response.data);
		     this.imakeups=response.data.imakeups;
		     this.inters=response.data.inters;
		     this.buies=response.data.buies;
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
	#inter img{
		width: 100%;
	}
	#inter .buies{
		display: flex;
		flex-direction: row;
	}
	#inter .buies>div{
		flex: 1;
	}
	#inter .center{
		margin: 10px 0;
	}
</style>