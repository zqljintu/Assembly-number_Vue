<template>
	<div class="movie_in_load">
		<div v-for="item in movies">
		  <item_movie :item="item"></item_movie>
		</div>
		<h1 class="movie_end" v-if="movies.length!=0">没有更多了^^</h1>
		<h1 class="net_error" v-else>网络可能出现差错^_^</h1>
	</div>
</template>
<script  type="text/javascript" >
	import item_movie from './Item_movie.vue';
	export default{
		components:{
			item_movie,
		},
		data(){
			return {
				movies:[],
			}
		},
		methods:{

		},
		/**
		获取电影资源
		**/
		created:function(){
			  this.$http.jsonp('http://api.douban.uieee.com/v2/movie/in_theaters', {}, {
			      headers: {
			      },
			      emulateJSON: true
			  }).then(function(response) {
			  	this.movies=response.data.subjects;
			  }, function(response) {
			      // 这里是处理错误的回调
			      console.log(response)
			  });
		}
	}
</script>
<style lang="scss" scoped=""  type="text/css">
	.movie_in_load{
		overflow: scroll;
		.net_error{
			color: red;
			font-size: 14px;
			padding: 10px;
		}
	}
	.movie_end{
		font-size: 14px;
	}
</style>