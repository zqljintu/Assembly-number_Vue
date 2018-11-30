<template>
	<div>
		<div v-for="item in articles">
			<item_article :item="item"></item_article>
		</div>
		<mt-button class="more_button" size="normal" icon="more" v-on:click="getmoredata" v-if="articles.length!=0">加载更多</mt-button>
		<h1 class="error_net" v-else >网络好像出现了错误^^!!</h1>
	</div>
</template>
<script type="text/javascript">
	import item_article from './Item_article.vue';
	export default{
		data(){
			return {
				articles:[],
				addarticles:[],
				nextpage:'',
			}
		},
		components:{
			item_article,
		},
		methods:{
			getmoredata:function () {
				var page=this.nextpage;
				this.$ajax.get('wpi/article/list/'+page+'/json').then((res) => {
					this.addarticles=res.data.data.datas;
					for (var i = 0; i < this.addarticles.length; i++) {
						this.articles.push(this.addarticles[i]);
					}
					this.nextpage=res.data.data.curPage;
  				})
			}
		},
		created:function(){
				this.$ajax.get('wpi/article/list/0/json').then((res) => {
					this.articles=res.data.data.datas;
					this.nextpage=res.data.data.curPage;
  			})
		},
	}
</script>
<style lang="scss" scoped="" type="text/css">
	.more_button{
		height: 30px;
		margin-top: 10px;
		font-size: 14px;
	}
	.error_net{
		font-size: 14px;
		color: red;
	}
</style>