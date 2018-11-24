<template>
  <div id="tab-bar">
    <mt-header class="main_ji" id="header_ji" fixed title="集结号">
    </mt-header>
    <mt-tab-container class="mt_tab_main" v-model="selected">
      <mt-tab-container-item id="page">
        <page></page>
      </mt-tab-container-item>
      <mt-tab-container-item id="movie">
        <movie></movie>
      </mt-tab-container-item>
      <mt-tab-container-item id="code">
        <coder></coder>
      </mt-tab-container-item>
      <mt-tab-container-item id="happy">
        <happy></happy>
      </mt-tab-container-item>
    </mt-tab-container>
  	<mt-tabbar class="main_ji" id="footer_ji" fixed=true; v-model="selected">
  		<mt-tab-item id="page">
  			<img slot="icon" src="../assets/page_select.png" v-if="this.selected == 'page' ">
        <img slot="icon" src="../assets/page_normal.png" v-else>
  			日报
  		</mt-tab-item>
  			<mt-tab-item id="movie">
  			<img slot="icon" src="../assets/movie_select.png" v-if="this.selected == 'movie' ">
        <img slot="icon" src="../assets/movie_normal.png" v-else>
  			电影
  		</mt-tab-item>
  			<mt-tab-item id="code">
  			<img slot="icon" src="../assets/code_select.png" v-if="this.selected == 'code' ">
        <img slot="icon" src="../assets/code_normal.png" v-else>
  			开发
  		</mt-tab-item>
  			<mt-tab-item id="happy">
  			<img slot="icon" src="../assets/huo_select.png" v-if="this.selected == 'happy' ">
        <img slot="icon" src="../assets/huo_normal.png" v-else>
  			娱乐
  		</mt-tab-item>
  	</mt-tabbar>
  </div>
</template>
<script type="text/javascript">
  import page from './Page'
  import movie from './Movie'
  import coder from './Code'
  import happy from './Happy'
	export default{
		data(){
			return {
        selected:"page",
			}
		},
    components:{
      page,
      movie,
      coder,
      happy
    },
    methods:{
      sendViewPage:function(pageid){
          this.$emit('pageinfo',pageid);
      },
      getTop:function(){
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      },
    },
    watch: {
      selected: function (val, oldVal) {
         this.getTop();
        /*switch(val){
          case "page":
           this.$router.push({
              path:'/page'});
           break;
           case "movie":
           this.$router.push({
              path:'/movie'});
           break;
           case "code":
           this.$router.push({
              path:'/code'});
           break;
           case "happy":
           this.$router.push({
              path:'/happy'});
           break;
           default:
           break;
        }*/
      }
    }
	}
</script>
<style lang="scss" scoped="" type="text/css">
  .main_ji{color:#ffffff;
          background: #1DB0B8}
  #tab_bar{overflow: scroll;}
  #header_ji{background: #1DB0B8}
  #footer_ji{}
  .mt_tab_main{
    margin-bottom: 60px;
  }
</style>