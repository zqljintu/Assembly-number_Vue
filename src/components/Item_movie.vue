<template>
	<div class="list_item_movie" v-on:click="getdetails_movie">
		<div class="movie_about" id="div_movie_about">
			<div >
				<h1 class="movie_title">{{item.title}}</h1>
				<h2 class="movie_casts">{{getStarNames(item.casts)}}</h2>
			</div>
			<div class="movie_rate">
				<el-rate class="rate" v-model="item.rating.average/2"  disabled></el-rate>
				<h2 id="movie_grade" class="grade">{{item.rating.average}}</h2>
			</div>
			<div v-for="tag in item.genres">
				<el-tag class="movie_tag" size="mini">{{tag}}</el-tag>
			</div>
		</div>
		<div class="movie_src">
			<img id="movie_image" class="image" v-lazy=getImageUrl(item.images.small)>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
			}
		},
		props: ['item'],
		methods:{
			getImageUrl:function (url) {
				// body...
				if (url!==undefined) {
					let img_url=url.substring(7);
					return  'https://images.weserv.nl/?url=' + url;
				}
			},
			getStarNames:function(src){
				var name='主演：';
				for (var i = 0; i < src.length; i++) {
					name=name+src[i].name;
					if (i!==src.length-1) {
						name=name+'/ ';
					}
				}
				return name;
			},
			replaceAll:function(str,s1,s2) {
   				 return str.replace(new RegExp(s1,"gm"),s2);
			},
			getCurrentDay:function(){//获取当前时间
				var mydate=new Date();
				return this.replaceAll(mydate.toLocaleDateString(),'/','');
			},
			getdetails_movie:function(){
				this.$router.push({
              		name:'details_movie',params:{id: this.item.id} });
			}
		},
		created:function(){
		},
	}
</script>
<style lang="scss" scoped="" type="text/css">
	.list_item_movie{
					font-size: 10px;
	            	margin-top: 10px;
	            	margin-left: 5px;
	            	margin-right: 5px;
	            	min-height: 127px;
	                background: white;}
	.movie_src{
		text-align: right;
	}
	.image{
		width: 70px;
		margin: 10px;
		margin-right: 10px;
	}
	.movie_title{
		font-size: 13px;
		padding: 5px;
		word-wrap: break-word;
		text-align: left;
	}
	.movie_casts{
		font-size: 10px;
		word-wrap: break-word;
		text-align: left;
		margin-top: -10px;
		margin-left: 5px;
	}
	.movie_about{
		float: left;
		width: 180px;
	}
	.grade{
		font-size: 13px;
		text-align: left;
		padding: 5px;
		margin-left: 5px;
	}
	.rate{
		float: left;
	}
	.movie_rate{
		margin-top: -5px;
		margin-left: 5px;
	}
	.movie_tag{
		float: left;
		background: #1DB0B8;
		margin-top: -15px;
		margin-left: 5px;
		color: black;
		margin-left: 3px;
		font-size: 7px;
	}

</style>