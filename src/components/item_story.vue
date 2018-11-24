<template>
	<div class="story_item" v-on:click="getdetails_page">
	   	<div class="story_about" >
			<h2 class="story_title">{{item.title}}</h2>
		</div>
		<div class="story_src" v-for="(imageurl,index) in item.images" v-if="index<1">
			<!--<img id="story_image" class="image" v-lazy=getImageUrl(item.images[0])>-->
			<img id="story_image" class="image"  v-lazy=getImageUrl(imageurl) :key=getImageUrl(imageurl)>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{

			}
		},
		props:['item'],
		methods:{
			getImageUrl:function (url) {
				// body...
				if (url!==undefined) {
					let img_url=url.substring(7);
					return  'https://images.weserv.nl/?url=' + url;
				}
			},
			getdetails_page:function(){
				this.$router.push({
              		name:'details_page',params:{id: this.item.id} });
			}
		}
	}
</script>
<style lang="scss" scoped="" type="text/css">
	.story_item{
				font-size: 10px;
            	margin-top: 10px;
            	margin-left: 5px;
            	margin-right: 5px;
            	min-height: 100px;
                background: white;}
    .story_src{
    	text-align: right;
    }
    .image{
    	width: 80px;
    	padding: 5px;
    }
    .story_about{
    	margin-top: 20px;
    	text-align: left;
    	float: left;
    	width: 70%
    }
    .story_title{
    	font-size: 14px;
    	margin: 5px;
    }

</style>