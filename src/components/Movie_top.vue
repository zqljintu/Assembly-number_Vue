<template>
	<div id="content" >
       	<div v-for="item in movies">
            <item_movie :item="item"></item_movie>
       	</div>
    	<mt-button class="more_button" size="normal" icon="more" v-on:click="greet" v-if="movies.length!=0">加载更多</mt-button>
    	<h1 class="net_error" v-else>网络可能出现差错^_^</h1>
	</div>
</template>
<script type="text/javascript">
	import item_movie from './Item_movie.vue';
	export default{
		data(){
			return {
				movies:[],
				addmovies:[],//新加载的数据存放在这里
				bottomText: '上拉加载更多...',
				allLoaded:false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
			}
		},
		components:{
			item_movie,
		},
		methods:{
			greet: function () {
			  	this.getTopmoviefromdouban(this.movies.length);
			  },
			getTopmoviefromdouban(start){//获取数据按页
				this.$http.jsonp('http://api.douban.com/v2/movie/top250?start='+start+'&count=20').then(function(response) {
				this.addmovies=response.data.subjects;
				for (var i = 0; i < this.addmovies.length; i++) {
					this.movies.push(this.addmovies[i]);
				}
			  }, function(response) {
			      // 这里是处理错误的回调
			      console.log(response)
			  });
			}
		},
		/**
		获取电影资源
		**/
		created:function(){
			  var id=0;
			  this.$http.jsonp('http://api.douban.com/v2/movie/top250?start='+id+'&count=20').then(function(response) {
			  	this.movies=response.data.subjects;
			  }, function(response) {
			      // 这里是处理错误的回调
			      console.log(response);
			  });
		},
		mounted:function(){
		}
	}
</script>
<style lang="scss" scoped="" type="text/css">
	#content{
		overflow: scroll;
	}
	.more_button{
		height: 30px;
		margin-top: 10px;
		font-size: 14px;
	}
	.net_error{
		font-size: 14px;
		padding: 10px;
		color: red;
	}

</style>