<template>
	<div class="div_details_page">
		<mt-header fixed title="日报">
		  	<router-link to="/" slot="left">
		    	<mt-button icon="back" @click="handleClose">返回</mt-button>
		 	 </router-link>
		  	<mt-button icon="more" slot="right" @click="more"></mt-button>
		</mt-header>
		<div class="div_src">
			<img class="image" v-lazy=getImageUrl(story.images[0])>	
		</div>
		<div class="body" v-html="story.body"></div>
	</div>	
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				story:[],
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
		},
		created:function(){
			this.$ajax.get('api/news/'+this.$route.params.id).then((res) => {
				this.story=res.data;
  			});
		}
	}
</script>
<style lang="scss" scoped="" type="text/css">
	.div_details_page{
		width: 100%;
		word-wrap:break-word;
	}
	.div_src{
		width: 100%;
		.image{
			width: 100%;
			height: 200px;
		}
	}
	.body{
		background: white;
		margin: 5px;
	}
</style>