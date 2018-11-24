<template>
	<div>
	<mt-navbar v-model="selected" id="movie_nav">
	  <mt-tab-item id="movie_in">最新热映</mt-tab-item>
	  <mt-tab-item id="movie_top">电影最Top</mt-tab-item>
	</mt-navbar>
	<mt-tab-container  v-model="selected">
      <mt-tab-container-item id="movie_in">
        <movie_in></movie_in>
      </mt-tab-container-item>
      <mt-tab-container-item id="movie_top">
        <movie_top></movie_top>
      </mt-tab-container-item>
    </mt-tab-container>
	</div>
</template>
<script type="text/javascript">
	import movie_in from './Movie_intheather'
	import movie_top from './Movie_top'
	export default{
		components:{
			movie_in,
			movie_top
		},
		data(){
			return {
				selected:"movie_in",
			}
		}
	}
</script>
<style lang="scss" scoped="" type="text/css">
	#movie_nav{
		color: #1DB0B8;
		background: #ebebeb;
		margin-top: -15px;
	}
</style>