<template>
	<div id="reco">
		<div class="imgs">
	    	 <img src="../../assets/img/15357080385839.jpg"/>
	    </div> 
	    <div class="lists">
	    	<ul>
	    		<li v-for="(v,i) in msg">
	    			<img :src="v"/>
	    		</li>
	    	</ul>
	    </div>
	    <section>
	    	<div class="one" v-for="(v,i) in pics">
	    		 <img :src="v"/>
	    	</div>
	    	<div class="one two">
	    		<ol>
	    			 <li v-for="(v,i) in imgs"><img :src="v"/></li>
	    		</ol>
	    		<ol>
	    			 <li><img src="../../assets/img/15166130613202.jpg"/></li>
	    			 <li><img src="../../assets/img/15259435950257.jpg"/></li>
	    		</ol>
	    		<p class="center">今日特卖 · 每天早10点 晚8点上新</p>
	    		<div class="imgs my">
	    			<img src="../../assets/img/15294792899457.jpg"/>
	    		</div> 
	    		<ul class="picList">
	    			<li v-for="(v,i) in piclist">
	    				<router-link to="/details">
	    					<img :src="v.imgsrc" alt="" />
	    				</router-link>
	    				<div class="infos">
	    					<b>{{v.info}}</b>
	    					<span>{{v.time}}</span>
	    				</div>
	    				<p><img :src="v.imgs" alt="" />{{v.price}}</p>
	    			</li>
	    		</ul>
	    	</div>
	    	<div class="sock">
	    		<img src="../../assets/img/15413869286600.jpg"/>
	    		<ul id="sock">
	    			<li v-for="(v,i) in mypic"><img :src="v" alt="" /></li>
	    		</ul>
	    		<ul class="picList">
	    			<li v-for="(v,i) in piclists">
	    				<router-link to="/details">
	    				    <img :src="v.imgsrc" alt="" />
	    				</router-link>
	    				<div class="infos">
	    					<b>{{v.infos}}</b>
	    					<span>{{v.times}}</span>
	    				</div>
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
				msg:{},
				pics:{},
				imgs:{},
				piclist:{},
				mypic:{},
				piclists:{}
			}
		},
		mounted(){
		   this.$http.get('../../data/one.json')
		   .then((response)=> {
		     // handle success
		     console.log(response.data);
		     this.msg=response.data.msg;
		     this.pics=response.data.pics;
		     this.imgs=response.data.imgs;
		     this.piclist=response.data.piclist;
		     this.mypic=response.data.mypic;
		     this.piclists=response.data.piclists;
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
	#reco img{
		width: 100%;
	}
	#reco .my img{
		margin-bottom: -3px;
	}
	#reco .list ul{
		width: 100%;
	}
	#reco .lists li{
		display: inline-block;
		width: 20%;
	}
	#reco .lists li img{
		width: 100%;
		height: 100%;
	}
	#reco .two>ol,#sock{
		display: flex;
		flex-wrap: nowrap;
	}
	#reco .two li,#sock li{
		flex: 1;
	}
	#reco .two>p{
		margin: 10px 0;
		font-size: .9rem;
	}
	#reco .picList b{
		display: inline-block;
		max-width: 80%;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		font-size: .9rem;	
	}
	#reco .infos{
		margin:5px 10px;
		line-height: 2rem;
	}
	#reco .picList p{
		margin: 5px 10px;
		color: #5771a8;
		font-size: .5rem;
	}
	#reco .picList p img{
		margin-right: 5px;
		width: 8%;
		vertical-align: middle;
	}
	#reco .infos span{
		float: right;
		font-size: .5rem;
        color: #98989f;
	}
	#reco .sock>img{
		margin-bottom: -4px;
	}
	
</style>