<template>
	<div>
		<mt-header fixed title="开发">
		  	<router-link to="/" slot="left">
		    	<mt-button icon="back" @click="handleClose">返回</mt-button>
		 	 </router-link>
		  	<mt-button icon="more" slot="right" @click="more"></mt-button>
		</mt-header>
		<div class="code_body" v-html=this.$route.params.id>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				url:'',
			}
		},
		methods:{

		},
		created:function(){
			this.url=this.$route.params.id;
		}
	}
</script>
<style lang="scss" scoped="" type="text/css">
	
</style>