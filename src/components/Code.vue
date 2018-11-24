<template>
	<div>
		<mt-navbar v-model="selected" id="code_nav">
			  <mt-tab-item id="code_article">最新博文</mt-tab-item>
			  <mt-tab-item id="code_project">最新项目</mt-tab-item>
		</mt-navbar>
		<mt-tab-container  v-model="selected">
		      <mt-tab-container-item id="code_article">
		        <code_article></code_article>
		      </mt-tab-container-item>
		      <mt-tab-container-item id="code_project">
		        <code_project></code_project>
		      </mt-tab-container-item>
	    </mt-tab-container>
	</div>
</template>
<script type="text/javascript">
	import code_article from './Code_Article'
	import code_project from './Code_Project'
	export default{
		components:{
			code_article,
			code_project
		},
		data(){
			return {
				msg:'我是Code组件',
				selected:'code_article',
				msg0:'前一天',
				msg1:'后一天',
			}
		},
		methods:{
			getdate:function () {
				// body...
				var mydate=new Date();
				this.msg=this.getCurrentDay();
				this.msg0=this.getPreDay(this.msg);
				this.msg1=this.getNextDay(this.msg);
			}
		},
		created:function(){
		},
        mounted:function(){
        	    document.body.scrollTop = 0
        		document.documentElement.scrollTop = 0
		}
	}
</script>
<style lang="scss" scoped="" type="text/css">
	#code_nav{
		color: #1DB0B8;
		background: #ebebeb;
		margin-top: -15px;
	}
</style>