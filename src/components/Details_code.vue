<template>
	<div>
		<mt-header fixed title="开发">
		  	<router-link to="/" slot="left">
		    	<mt-button icon="back" @click="handleClose">返回</mt-button>
		 	 </router-link>
		  	<mt-button icon="more" slot="right" @click="more"></mt-button>
		</mt-header>
		<iframe class="iframe_article" id="article_if" onload="this.height=ifd.document.body.scrollHeight"></iframe>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
			}
		},
		methods:{
	        frameauto:function() {
				var ifm = document.getElementById("adlistpage");
				var subWeb = document.frames ? document.frames["adlistpage"].document : ifm.contentDocument;
				if (ifm != null && subWeb != null) {
					ifm.height = subWeb.body.scrollHeight;
				}
			}
		},
		created:function(){
		},
		mounted () {
			window.frames["article_if"].src=this.$route.params.id;
  		},
	}
</script>
<style    scoped="" type="text/css">
	.iframe_article{
		width: 100%;
		height: 100%;
		frameborder:"0"; 
		scrolling:"no";
	}
</style>