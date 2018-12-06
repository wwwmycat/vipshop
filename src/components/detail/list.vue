<template>
	<div id="list">
		<div class="mytop">
			<nav>
				<span class="forward" @click="forward()"></span>
				<p><span>分类</span><span>品牌</span></p>
			</nav>
			<div class="inputs">
				<input type="text" placeholder="搜索品牌或商品" />
			</div>
		</div>
		<div class="listTable">
			<mt-navbar v-model="selected">
				<div class="aa">
				  <mt-tab-item id="1">为你推荐</mt-tab-item>
				  <mt-tab-item id="2">女装</mt-tab-item>
				  <mt-tab-item id="3">男装</mt-tab-item>
				  <mt-tab-item id="4">男女内衣</mt-tab-item>
				  <mt-tab-item id="5">女鞋</mt-tab-item>
				  <mt-tab-item id="6">男鞋</mt-tab-item>
				  <mt-tab-item id="7">箱包皮具</mt-tab-item>
				  <mt-tab-item id="8">手表配饰</mt-tab-item>
				  <mt-tab-item id="9">护肤彩妆</mt-tab-item>
				  <mt-tab-item id="10">个人护理</mt-tab-item>
				  <mt-tab-item id="11">母婴</mt-tab-item>
				  <mt-tab-item id="12">运动户外</mt-tab-item>
				  <mt-tab-item id="13">手机数码</mt-tab-item>
				  <mt-tab-item id="14">家用电器</mt-tab-item>
				  <mt-tab-item id="15">家居家纺</mt-tab-item>
				  <mt-tab-item id="16">家居家装</mt-tab-item>
				  <mt-tab-item id="17">生活超市</mt-tab-item>
				  <mt-tab-item id="18">唯品国际</mt-tab-item>
				  <mt-tab-item id="19">唯品优选</mt-tab-item>
				  <mt-tab-item id="20">唯品.奢</mt-tab-item>
				  <mt-tab-item id="21">唯品金融</mt-tab-item>
				  <mt-tab-item id="22">唯品医药</mt-tab-item>
				  <mt-tab-item id="23">图书文娱</mt-tab-item>
				</div>
			</mt-navbar>
			
			<!-- tab-container -->
			<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="1">
			  	<div class="product" v-for="(v,i) in list">
			  		<p class="current">{{v.title}}</p>
				  	<ul class="listItem">
					    <li v-for="a in v.info">
					    	<div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
			  	<img src="../../assets/img/15422683498111.jpg" class="img"/>
			  	<div class="product" v-for="(v,i) in list2">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="a in v.info">
					    	<div class="pic">
						       <img :src="a.imgSrc"/>					    		
					    	</div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="3">
			    <div class="product" v-for="(v,i) in list3">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="a in v.info">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			   <mt-tab-container-item id="4">
			   	<img src="../../assets/img/15423692251976.jpg" class="img"/>
			    <div class="product" v-for="(v,i) in list4">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="a in v.info">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="5">
			    <div class="product" v-for="(v,i) in list5">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="a in v.info">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="6">
			    <div class="product" v-for="(v,i) in list6">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="a in v.info">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="7">
			    <div class="product" v-for="(v,i) in list7">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="a in v.info">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="8">
			    <div class="product" v-for="(v,i) in list8">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="a in v.info">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="9">
			    <div class="product" v-for="(v,i) in list9">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="a in v.info">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="10">
			    <div class="product" v-for="(v,i) in list10">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="a in v.info">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="11">
			    <div class="product" v-for="(v,i) in list11">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="a in v.info">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			   <mt-tab-container-item id="12">
			    <div class="product" v-for="(v,i) in list12">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="a in v.info">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			   <mt-tab-container-item id="13">
			    <div class="product" v-for="(v,i) in list13">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="a in v.info">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			   <mt-tab-container-item id="14">
			    <div class="product" v-for="(v,i) in list14">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="a in v.info">
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="15">
			    <div class="product" v-for="(v,i) in list15">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="a in v.info">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			   <mt-tab-container-item id="16">
			    <div class="product" v-for="(v,i) in list16">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="a in v.info">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			   <mt-tab-container-item id="17">
			    <div class="product" v-for="(v,i) in list17">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="a in v.info">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			   <mt-tab-container-item id="18">
			    <div class="product" v-for="(v,i) in list18">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="a in v.info">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			   <mt-tab-container-item id="19">
			    <div class="product" v-for="(v,i) in list19">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="a in v.info">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			   <mt-tab-container-item id="20">
			    <div class="product" v-for="(v,i) in list20">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="a in v.info">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			   <mt-tab-container-item id="21">
			    <div class="product" v-for="(v,i) in list21">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="a in v.info">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			   <mt-tab-container-item id="22">
			    <div class="product" v-for="(v,i) in list22">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="a in v.info">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="23">
			    <div class="product" v-for="(v,i) in list23">
			  		<p class="current">{{v.title}}<span class="foright">热销榜></span></p>
				  	<ul class="listItem">
					    <li v-for="a in v.info">
						    <div class="pic">
						       <img :src="a.imgSrc"/>
						    </div>
						    <p>{{a.name}}</p>
					    </li>
				  	</ul>
			  	</div>
			  </mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:{},
				list2:{},
				list3:{},
				list4:{},
				list5:{},
				list6:{},
				list7:{},
				list8:{},
				list9:{},
				list10:{},
				list11:{},
				list12:{},
				list13:{},
				list14:{},
				list15:{},
				list16:{},
				list17:{},
				list18:{},
				list19:{},
				list20:{},
				list21:{},
				list22:{},
				list23:{},
				selected:"1"
		
			}
		},
		methods:{
			forward(){
				this.$router.push('/recommend');
			}
		},
		 mounted(){
		 	
		   this.$http.get('../../data/data.json')
		   .then((response)=> {
		     // handle success
		     console.log(response.data);
		     this.list=response.data.list;
		     this.list2=response.data.list2;
		     this.list3=response.data.list3;
		     this.list4=response.data.list4;
		     this.list5=response.data.list5;
		     this.list6=response.data.list6;
		     this.list7=response.data.list7;
		     this.list8=response.data.list8;
		     this.list9=response.data.list9;
		     this.list10=response.data.list10;
		     this.list11=response.data.list11;
		     this.list12=response.data.list12;
		     this.list13=response.data.list13;
		     this.list14=response.data.list14;
		     this.list15=response.data.list15;
		     this.list16=response.data.list16;
		     this.list17=response.data.list17;
		     this.list18=response.data.list18;
		     this.list19=response.data.list19;
		     this.list20=response.data.list20;
		     this.list21=response.data.list21;
		     this.list22=response.data.list22;
		     this.list23=response.data.list23;
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
	#list{
		background: #f3f4f5;
	}
	#list img{
		width: 100%;
	}
	#list .mytop{
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
	}
	/*#list .change{
		position: static;
	}*/
	/*#list .mychange{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
	}*/
	#list nav{
		position: relative;
		background: #fbfbfa;
		padding-top: 10px;
		padding-bottom: 10px;
		box-sizing: border-box;
	}
	#list nav>p{
		width: 50%;
		margin: 0 auto;
		box-sizing: border-box;
        border: 1px solid #d8d8d8;
		color: #585c64;
		border-radius: 8px;
	}
	#list nav p>span{
		display: inline-block;
		width: 48%;
		height: 35px;
		line-height: 35px;
		text-align: center;
	}
	#list nav p>span:nth-of-type(1){
		border-right: 1px solid #d8d8d8;
		color: white;
		background: #585c64;
	}
	#list .forward{
		position: absolute;
		top: 18px;
		left: 20px;
		width: 20px;
		height: 20px;
		border-left: 1px solid #585c64;
		border-bottom: 1px solid #585c64;
		transform: rotate(45deg);
	}
	#list .inputs{
		width: 100%;
		padding-top: 10px;
		padding-bottom: 10px;
		background: #f3f4f5;
		text-align: center;
	}
	#list .inputs input{
		width: 80%;
		height: 35px;
		border: 1px solid #d8d8d8;
		color: #D8D8D8;
		text-align: center;
		border-radius: 3px;
		outline: none;
	}
	#list .aa{
		height: 520px;
	}
	#list .listTable{
		display: flex;
		margin-top: 114px;
	}
	#list .mint-navbar{
		position: fixed;
		left: 0;
		display: block;
		width: 22%;  
		overflow: auto;
	}
	#list .mint-tab-item{
		display: block;
		background: #f3f4f5;
	}
	#list .mint-tab-container{
		width: 78%;
		margin-left: 22%;
		padding-left: 5%; 
		padding-right: 5%;
		background: white;
		box-sizing: border-box;
	}
	#list .mint-navbar .mint-tab-item.is-selected {
	    border-left: 4px solid #E80080;
	    border-bottom: 0;
	    color: #222;
	    margin-bottom: -3px;
	    background: white;
    }
    #list .mint-tab-item-label{
    	font-size: 16px;
    }
    #list .listItem{
    	display: flex;
    	flex-wrap: wrap;
    }
    #list .listItem li{
    	margin-bottom: 30px;
    	margin-right: 1%;
    	width: 32%;
    	text-align: center;
    	font-size: 14px;
    }
    #list .listItem .pic{
    	width: 83%;
    	margin: 0 auto;
    }
    #list .listItem p{
    	text-overflow: ellipsis;
    	overflow: hidden;
    	white-space: nowrap;
    	font-size: .5rem;
    }
    #list .current{
    	margin: 20px 0 25px;
    	font-size: 14px;
    	font-weight: 600;
    }
    #list .product{
    	margin-bottom: 20px;
    	border-bottom: 1px solid #dedede;
    }
    #list .img{
    	margin-top: 20px;
    }
    #list .foright{
    	float: right;
    	color: #98989F;
    	font-weight: normal;
    }
</style>