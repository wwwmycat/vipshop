<template>
	<div id="details">
		<div class="change tops">
			<div class="dtop">
				<span @click="back()" class="back"></span>
				<p class="center">斐乐FILA男女运动专场</p>
			</div>
			<ul class="selectPro">
				<li v-for="(v,i) in mylist">{{v}}</li>
			</ul>
		</div>
		
		<section>
			<p>
				<span class="left">全场8.5折</span>
				<span class="right">剩2天</span>
			</p>
		    <ul class="dinfo">
				<li v-for="(v,i) in dinfo">
					<div class="small">
						<img :src="v.my"/>
						<p class="out">{{v.info}}</p>
						<span class="price">{{v.sprice}}</span>
						<del>{{v.old}}</del>
						<span class="discount">{{v.discount}}</span>
					</div>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				mylist:{},
				dinfo:{}	
			}
		},
        mounted(){
		   this.$http.get('../../data/data.json')
		   .then((response)=> {
		     // handle success
		     console.log(response.data);
		     this.mylist=response.data.mylist;
		     this.dinfo=response.data.dinfo;
		   })
		   .catch(function (error) {
		     // handle error
		     console.log(error);
		   })
		   .then(function () {
		     // always executed
		   });
		   $(window).scroll(function(){
		 		var st=$(window).scrollTop();
		 		if(st>200){
		 			$('.tops').removeClass('change');
		 			$('.tops').addClass('mychange');
		 		}else if(st<200){
		 			$('.tops').removeClass('mychange');
		 			$('.tops').addClass('change');
		 		}
		 	})
		},
		methods:{
			back(){
				this.$router.push("/recommend")
			}
		}
	}
</script>

<style>
	#details img{
		width: 100%;
	}
	#details .tops{
		width: 100%;
		background: white;
	}
	#details .change{
		position: static;
	}
	#details .mychange{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
	}
	#details .dtop{
		margin: 15px 0;
	}
	#details .dtop .back{
		display: inline-block;
		margin-left: 20px;
		width: 15px;
		height: 15px;
		border-bottom: 2px solid gray;
		border-left: 2px solid gray;
		transform: rotate(45deg);
	}
	#details .dtop p{
		display: inline-block;
		width: 70%;
		font-size: 1.2rem;
		color: #000;
	}
	#details .selectPro{
		display: flex;
		border-top: 1px solid gainsboro;
		border-bottom: 1px solid gainsboro;
		text-align: center;
	}
	#details .selectPro li{
		flex: 1;	
		padding: 10px;
	}
	#details .selectPro li:nth-of-type(2){
		border-right: 1px solid gainsboro;
		border-left: 1px solid gainsboro;
	}
	#details .selectPro li:nth-of-type(3){
		border-right: 1px solid gainsboro;
	}
	#details section>p{
		overflow: hidden;
		width: 100%;
		margin: 10px 0;
		box-sizing: border-box;
		padding-left: 10px;
		padding-right: 10px;
		font-size: .3rem;
	}
	#details .left{
		float: left;
		color: #e80080;
	}
	#details .right{
		float: right;
		color: #999;
	}
	#details .dinfo{
		display: flex;
		flex-wrap: wrap;
	}
	#details .dinfo img{
		border: 1px solid #efefef;
	}
	#details .dinfo li{
		margin: 0 2% 30px;
		width: 45%;
	}
	#details .out{
		overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 2;
	    margin-bottom: 6px;
	    font-size: .32rem;
	}
	#details .price{
		color: #e80080;
	}
	#details del{
		color: #888;
	}
	#details .discount{
		float: right;
		margin-top: 4px;
		padding: 0 5px;
		background: #000;
		color: white;
		font-size: .2rem;
	}
</style>