<template>
	<div v-on:click="getdetails_page">
		<img class="image" v-lazy=getImageUrl(item.image)>
	    <h1 class="top_title">{{item.title}}</h1>
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
<style type="text/css">
	.image{
		width: 100%;
		position: relative;
		align-self: center;
	}
	.top_title{
		color: white;
		font-size: 15px;
		position: absolute;
		text-align: left;
		top: 130px;
		left: 10px;
	}
</style>