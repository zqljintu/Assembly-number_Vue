<template>
	<div class="div_details_page">
		<h4 class="div_title">影片速达:</h4>
		<mt-header fixed title="电影">
		  	<router-link to="/" slot="left">
		    	<mt-button icon="back" @click="handleClose">返回</mt-button>
		 	 </router-link>
		  	<mt-button icon="more" slot="right" @click="more"></mt-button>
		</mt-header>
		<div class="div_movie_list">
			<div class="movie_about">
			<div >
				<h1 class="movie_title">{{movie.title}}</h1>
				<h2 class="movie_casts">{{getStarNames(movie.casts)}}</h2>
				<h2 class="movie_counries">{{getCountriesNames(movie.countries)}}</h2>
				<h2 class="movie_counries">上映时间:{{" "+movie.year+" "}}年</h2>
			</div>
			<div class="movie_rate">
				<el-rate class="rate" v-model="movie.rating.average/2"  disabled></el-rate>
				<h2 id="movie_grade" class="grade">{{movie.rating.average}}</h2>
			</div>
			<div v-for="tag in movie.genres">
				<el-tag class="movie_tag" size="mini">{{tag}}</el-tag>
			</div>
			</div>
			<div class="movie_src">
				<img id="movie_image" class="image" v-lazy=getImageUrl(movie.images.small)>
			</div>
		</div>
		<h4 class="div_title">影片概述:</h4>
		<div class="div_summary">
			<h1 class="movie_summary">{{movie.summary}}</h1>
		</div>
	</div>	
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				movie:[],
			}
		},
		methods:{
			handleClose:function () {
				// body...
			},
			more:function(){

			},
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
			getCountriesNames:function(src){
				var name='国家：';
				for (var i = 0; i < src.length; i++) {
					name=name+src[i];
					if (i!==src.length-1) {
						name=name+'/ ';
					}
				}
				return name;
			},
		},
		created:function(){
				this.$http.jsonp('http://api.douban.com/v2/movie/subject/'+this.$route.params.id, {}, {
			      headers: {
			      },
			      emulateJSON: true
			  	}).then(function(response) {
			  	this.movie=response.data;
			  	}, function(response) {
			      // 这里是处理错误的回调
			      console.log(response)
			  });
		}
	}
</script>
<style lang="scss" scoped="" type="text/css">
	.div_details_page{
		width: 100%;
		word-wrap:break-word;
	}
	.div_title{
		font-size: 13px;
		text-align: left;
		margin-left: 20px;
	}
	.div_movie_list{
		background: white;
			.movie_src{
				text-align: right;
			}
			.image{
				width: 90px;
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
			.movie_counries{
				font-size: 10px;
				word-wrap: break-word;
				text-align: left;
				margin-top: -3px;
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
			.movie_rate{
				margin-top: -5px;
				margin-left: 5px;
				.rate{
					float: left;
				}
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
	}
	.div_summary{
		background: white;
		padding: 10px; 
		.movie_summary{
				font-size: 13px;
				line-height: 20px;
				word-wrap: break-word;
				text-align: left;
		}

	}
	.div_src{
		width: 100%;
		.image{
			width: 100%;
			height: 200px;
		}
	}
</style>