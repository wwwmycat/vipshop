<template>
	<div id="device">
		<mt-swipe :auto="5000">
		  <mt-swipe-item><img src="../../assets/img/15421796515621.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../../assets/img/15420074696765.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../../assets/img/15421774690469.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../../assets/img/15410368233218.jpg"/></mt-swipe-item>
		</mt-swipe> 
		<div class="changes">
			<img src="../../assets/img/15422628878511.gif"/>
		</div>
		<ul class="makes">
			<li v-for="(v,i) in dmakesup">  
				<img :src="v"/> 
			</li>
		</ul> 
		<ul class="makelist">
			<li v-for="(v,i) in dmakeups">
				<img :src="v"/>
			</li>   
		</ul>
		<img src="../../assets/img/15419848248124.gif"/>
		<img src="../../assets/img/15276796780601.jpg"/>
		<div class="changes">
			<img src="../../assets/img/15421884154322.jpg"/> 
		</div>
		<ul class="makes">
			<li v-for="(v,i) in dmakes">  
				<img :src="v"/> 
			</li>  
		</ul> 
		<div class="changes">
			<img src="../../assets/img/15421629128404.gif"/> 
		</div>
		<ul class="makes">
			<li v-for="(v,i) in dprice">  
				<img :src="v"/> 
			</li>
		</ul> 
		<img src="../../assets/img/15276832035027.jpg"/>
		<div class="changes">
			<img src="../../assets/img/15420047971604.gif"/> 
		</div>
		<ul class="makes myPrice">
			<li v-for="(v,i) in buy">  
				<img :src="v"/> 
			</li>
		</ul>  
        <img src="../../assets/img/15275874022170.jpg"/>
        <section>
        	<p class="center">今日特卖 · 每天早10点 晚8点上新</p>
        	<ul class="details">
				<li v-for="(v,i) in devices">
					<img :src="v.picSrc"/>
					<p class="myinfo">
						<b>{{v.intro}}</b>
						<span>{{v.restTime}}</span>
					</p>
				</li>
			</ul>   
			<img src="../../assets/img/15234422804182.jpg"/>
			<img src="../../assets/img/15335553009317.gif"/>
			<div class="computer">
				<div class="first">
					<img src="../../assets/img/15416461383121.gif"/>
				</div>
				<div class="first">
					<img src="../../assets/img/15416462463715.gif"/>					
				</div>
				<ul class="makes">
					<li v-for="(v,i) in computer">
						<img :src="v"/>
					</li>
				</ul>
				<img src="../../assets/img/15047674327704.jpg"/>
			</div> 
			<div class="">
				<ul class="details">
					<li>
						<img src="../../assets/img/ias_154114279058507_604x290_80.jpg"/>
						<p class="myinfo">
							<b>1.8折起  荣耀手机专场</b>
							<span>剩14小时</span>
						</p>
					</li>
					<li>
						<img src="../../assets/img/ias_154174652557751_604x290_80.jpg"/>
						<p class="myinfo">
							<b>7折起  小米手机专场</b>
							<span>剩6天</span>
						</p>
					</li>
				</ul> 
				<img src="../../assets/img/15390778331092.jpg"/>
				<div class="changes">
					<img src="../../assets/img/15421866737549.gif"/>
					<ul class="makes">
						<li v-for="(v,i) in mydev">
							<img :src="v"/>
						</li>
					</ul>   
					<img src="../../assets/img/15047674327704.jpg"/>
				</div>
				<div class="">
					<img src="../../assets/img/15311887896102.jpg"/>
					<ul class="details">
						<li>
							<img src="../../assets/img/ias_154114279058507_604x290_80.jpg"/>
							<p class="myinfo">
								<b>1.8折起  荣耀手机专场</b>
								<span>剩14小时</span>
							</p>
						</li>
						<li>
							<img src="../../assets/img/ias_154174652557751_604x290_80.jpg"/>
							<p class="myinfo">
								<b>7折起  小米手机专场</b>
								<span>剩6天</span>
							</p>
						</li>
					</ul> 
					<img src="../../assets/img/15381869340842.jpg"/>
					<ul class="eat">
						<li v-for="(v,i) in eat" class="changes">
							<img :src="v"/>
						</li>
					</ul>
					<img src="../../assets/img/15047674327704.jpg"/>
				</div>
				<ul class="details">
					<li v-for="(v,i) in devices">
						<img :src="v.picSrc"/>
						<p class="myinfo">
							<b>{{v.intro}}</b>
							<span>{{v.restTime}}</span>
						</p>
						<p class="myimg"><img :src="v.imgs" alt="" />{{v.price}}</p>
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
			    dmakesup:{},
			    dmakeups:{},
			    dmakes:{},
			    dprice:{},
			    buy:{},
			    devices:{},
			    computer:{},
			    mydev:{},
			    eat:{}
			}
		},
		mounted(){
		   this.$http.get('../../data/device.json')
		   .then((response)=> {
		     // handle success
		     console.log(response.data);
		     this.dmakesup=response.data.dmakesup;
		     this.dmakeups=response.data.dmakeups;
		     this.dmakes=response.data.dmakes;
		     this.dprice=response.data.dprice;
		     this.buy=response.data.buy;
		     this.devices=response.data.devices;
		     this.computer=response.data.computer;
		     this.mydev=response.data.mydev;
		     this.eat=response.data.eat;
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
	#device .mint-swipe-indicators{
		left: 80%;
	}
	#device img{
		width: 100%;
	}
	#device .changes img{
		margin-bottom: -5px;
	}
	#device .makes li{
		display: inline-block;
		width: 33.3%;
	}
	#device .myPrice li{
		width: 25%;
	}
	#device section>.center{
		margin-top: 10px;
		margin-bottom: 10px;
	}
    #device .first{
    	display: inline-block;
    	width: 49%;
    }
    #device .eat li{
    	width: 50%;
    	display: inline-block;
    }
</style>