<template>
	<div class="div_project">
		<div class="project_about">
			<h1 class="project_title">{{item.title}}</h1>
			<h2 class="project_dcs">{{getDescstring(item.desc)}}</h2>
		</div>
		<div class="project_src">
			<img class="project_image" v-lazy=getImageUrl(item.envelopePic)>
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
			getDescstring:function(src){
				if (src.length>75) {
					return src.substr(0,75)+'...';
				}
				return src;
			}
		}
	}
	
</script>
<style lang="scss" scoped="" type="text/css">
	.div_project{
		background: white;
		margin-top: 10px;
    	margin-left: 5px;
    	margin-right: 5px;
    	.project_about{
    		text-align: left;
    		float: left;
    		width: 60%;
    		.project_title{
    			float: left;
    			text-align: left;
				font-size: 15px;
				word-wrap: break-word;
				padding: 5px;
			}
			.project_dcs{
				float: left;
				text-align: left;
				font-size: 12px;
				word-wrap: break-word;
				padding: 5px;
				margin-top: -10px;
			}
    	}
		.project_src{
			text-align: right;
			.project_image{
				width: 30%;
				max-width: 100px;
				min-height: 200px;
				padding: 5px;
			}
		}
	}
</style>