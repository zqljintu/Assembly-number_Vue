<template>
	<div>
		<div v-for="item in projects">
			<item_project :item="item"></item_project>
		</div>
		<mt-button class="more_button" size="normal" icon="more" v-on:click="getmoredata" v-if="projects.length!=0">加载更多</mt-button>
		<h1 class="error_net" v-else >网络好像出现了错误^^!!</h1>
	</div>
</template>
<script type="text/javascript">
	import item_project from './Item_project.vue';
	export default{
		data(){
			return {
				projects:[],
				addprojects:[],
				nextpage:'',
			}
		},
		components:{
			item_project,
		},
		methods:{
			getmoredata:function () {
				var page=this.nextpage;
				this.$ajax.get('wpi//article/listproject/'+page+'/json').then((res) => {
					this.addprojects=res.data.data.datas;
					for (var i = 0; i < this.addprojects.length; i++) {
						this.projects.push(this.addprojects[i]);
					}
					this.nextpage=res.data.data.curPage;
  				})
			}
		},
		created:function(){
				this.$ajax.get('wpi//article/listproject/0/json').then((res) => {
					this.projects=res.data.data.datas;
					this.nextpage=res.data.data.curPage;
  				})
		}
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