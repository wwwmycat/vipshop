<template>
	<div id="f-top">
		<div class="top-pic clear">
			<div>
				<img src="../../assets/img/15329483844014.gif"/>
			</div>
			<div>
				<img src="../../assets/img/15329484566024.gif"/>
			</div>	
		</div>
		<ul class="list">
			<li v-for="(v,i) in list">
				<img :src="v"/>
			</li>
		</ul>
		<img src="../../assets/img/15352006498690.jpg"/>
		<img src="../../assets/img/15407985543667.jpg"/>
		<div class="hotBuy clear">
			<div class="one">
				<img src="../../assets/img/15407986989436.jpg"/>
			</div>
			<div class="one">
				<img src="../../assets/img/15403735533073.jpg"/>
			</div>
			<div v-for="(v,i) in lists">
				<img :src="v"/>
			</div>
		</div>
		<section>
			<p class="center">今日特卖 · 每天早10点 晚8点上新</p>
			<ul>
				<li v-for="(v,i) in myPic">
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
				list:{},
				lists:{},
				myPic:{}
			}
		},
		mounted(){
		   this.$http.get('../../data/fashion.json')
		   .then((response)=> {
		     // handle success
		     console.log(response.data);
		     this.list=response.data.list;
		     this.lists=response.data.lists;
		     this.myPic=response.data.myPic;
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
	.clear{
		zoom: 1;
	}
	.clear::after{
		content: '';
		display: block;
		clear: both;
	}
	#f-top img{
		width: 100%;
	}
	.top-pic div{
		float: left;
	}
	.top-pic div:nth-of-type(1){
		width: 66%;
	}
	.top-pic div:nth-of-type(2){
		width: 34%;
	}
	.top-pic img{
		height: 57px;
	}
	#f-top .list{
		width: 100%;
	}
	#f-top .list li{
		display: inline-block;
		width: 25%;
	}
	.hotBuy .one{
		float: left;
		width: 50%;
	}
    #f-top section>p{
    	margin-bottom: 10px;
    }
    #f-top section ul p{
    	padding-left: 10px;
    	padding-right: 10px;
    	width: 100%;
    	box-sizing: border-box;
    }
    #f-top section .myinfo{
    	line-height: 2.2rem;
    }
    #f-top section ul b{
    	display: inline-block;
    	max-width: 80%;
    	overflow: hidden;
    	text-overflow: ellipsis;
    	white-space: nowrap;
    }
    #f-top section ul span{
    	float: right;
    	color: #98989F;
    	font-size: .5rem;
    }
</style>