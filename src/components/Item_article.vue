<template>
	<div class="div_article" v-on:click="getdetails_code">
		<div class="project_about">
			<h1 class="article_title">{{item.title}}</h1>
		</div>
		<div class="div_about">
			<h2 class="article_author">{{getauthor(item.author)}}</h2>
			<h2 class="article_class">{{getclass(item.superChapterName,item.chapterName)}}</h2>	
		</div>
		<h2 class="article_time">{{gettime(item.niceDate)}}</h2>
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
			getauthor:function (src) {
				// body...
				return '作者：'+src;
			},
			getclass:function(src,src0){
				return '分类：'+src+'/'+src0;
			},
			gettime:function(src){
				return '时间：'+src;
			},
			getdetails_code:function(){
				window.open(this.item.link);
			}
		}
	}
	
</script>
<style lang="scss" scoped="" type="text/css">
	.div_article{
		background: white;
		margin-top: 10px;
    	margin-left: 5px;
    	margin-right: 5px;
		.article_title{
			text-align: left;
			font-size: 15px;
			padding: 8px;
		}
		.div_about{
			text-align: left;
			.article_author{
				word-wrap: break-word;
				margin-left: 10px;
				font-size: 12px;
			}
			.article_class{
				margin-left: 10px;
				font-size: 12px;
			}
		}
		.article_time{
			text-align: right;
			font-size: 12px;
			padding: 10px;
		}
	}
</style>