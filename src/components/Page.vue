<template>
	<div>
		<div class="div_swipe">
			<mt-swipe  class="swipe" :auto="4000">
	           <mt-swipe-item v-for="item in topstories">
	               <div class="swipe_div">
	               		<item_top_story :item="item"></item_top_story>
	               </div>
	           </mt-swipe-item>
       		</mt-swipe>
		</div>
		<div class="label">
			<h1 class="date_label">{{getDateString(publishdate)}}</h1>
		</div>
		<div v-for="item in stories">
			<item_story :item="item"></item_story>
		</div>
		<div class="button">
	    	<mt-button class="button_pre" size="normal" @click="getPreStory">前一天</mt-button>
	    	<mt-button class="button_next" size="normal" @click="getNextStory">后一天</mt-button>
		</div>
	</div>
</template>
<script type="text/javascript">
	import item_story from './Item_story.vue';
	import item_top_story from './Item_top_story.vue';
	export default{
		components:{
			item_story,
			item_top_story,
		},
		data(){
			return {
				publishdate:'',
				publish_nextdate:'',
				stories:[],
				topstories:[],
			}
		},
		/**
		获取日报资源
		**/
		created:function(){
			this.$ajax.get('api/news/latest').then((res) => {
				this.stories=res.data.stories;
				this.topstories=res.data.top_stories;
				this.publishdate=res.data.date;
  			});
		},
		methods: {
			getStoryfromZhihu:function(date){
				var url='api/news/before/'+date;
				this.$ajax.get(url).then((res) => {
					this.stories=res.data.stories;
					this.publishdate=res.data.date;
					this.publish_nextdate=this.getNextDay(res.data.date);
	  			})
			},
			getTop:function(){
				document.body.scrollTop = 0
				document.documentElement.scrollTop = 0
			},
			getPreStory:function(){
				this.getStoryfromZhihu(this.publishdate);
				this.getTop();
			},
			getNextStory:function(){
				this.getStoryfromZhihu(this.publish_nextdate);
				this.getTop();
			},
			getImageUrl:function (url) {
				// body...
				if (url!==undefined) {
					let img_url=url.substring(7);
					return  'https://images.weserv.nl/?url=' + url;
				}
			},
			getDateString:function(s){
				var y = parseInt(s.substr(0,4), 10);
			    var m = parseInt(s.substr(4,2), 10);
			    var d = parseInt(s.substr(6,2), 10);
			    return y + "年" + m + "月" + d + "日";
			},
			replaceAll:function(str,s1,s2) {
   				 return str.replace(new RegExp(s1,"gm"),s2);
			},
			getCurrentDay:function(){//获取当前时间
				var mydate=new Date();
				return this.replaceAll(mydate.toLocaleDateString(),'/','');
			},
			getPreDay:function(s){//获取某一前一天
			    var y = parseInt(s.substr(0,4), 10);
			    var m = parseInt(s.substr(4,2), 10)-1;
			    var d = parseInt(s.substr(6,2), 10);
			    var dt = new Date(y, m, d-1);
			    y = dt.getFullYear();
			    m = dt.getMonth()+1;
			    d = dt.getDate();
			    m = m>=10?m:"0"+m;
			    d = d>=10?d:"0"+d;
			    return y + "" + m + "" + d;
			},
			getNextDay:function(s){ //获取某一天的后一天
			    var y = parseInt(s.substr(0,4), 10);
			    var m = parseInt(s.substr(4,2), 10)-1;
			    var d = parseInt(s.substr(6,2), 10);
			    var dt = new Date(y, m, d+2);
			    y = dt.getFullYear();
			    m = dt.getMonth()+1;
			    d = dt.getDate();
			    m = m>=10?m:"0"+m;
			    d = d>=10?d:"0"+d;
			    return y + "" + m + "" + d;
			}
		},
	}
</script>
<style lang="scss" scoped="" type="text/css">   
	.button{
		margin-top: 10px;
		.button_pre{
			font-size: 13px;
			height: 30px;
			width: 40%;
			float: left;
			margin-left: 30px;
		}
		.button_next{
			font-size: 13px;
			height: 30px;
			width: 40%;
			float: right;
			margin-right: 30px;
		}
	}
	.label{
		text-align: right;
			.date_label{
				font-size: 15px;
				margin: 10px;
				margin-right: 30px;
		} 
	}
	.div_swipe{
		.swipe{
			height: 200px;
			width: 100%;
			.swipe_div{
				height: 200px;
				width: 100%;
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
			}
		 }
	}
</style>