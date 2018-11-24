<template>
	<div>
		<div class="waterfall-wrapper">
		    <ul class="left-waterfall" ref="left">
		      <li class="item" v-for="(item, index) in leftItems">
		      	 <img class="image" v-lazy=getImageUrl(item.url)>
		      </li>
		    </ul>
		    <ul class="right-waterfall" ref="right">
		      <li class="item" v-for="(item, index) in rightItems">
		      	<img class="image" v-lazy=getImageUrl(item.url)>
		      </li>
		    </ul>
		</div>
		<div class="div_button">
			<mt-button class="more_button" size="large" icon="more" v-on:click="getgankdata">加载更多</mt-button>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				data: [],
				adddata:[],
		        leftItems: [],
		        rightItems: [],
			}
		},
		components:{
		},
		mounted () {
  		},
  		created:function(){
  			this.$ajax.get('gpi/api/data/福利/10/1').then((res) => {
					this.data=res.data.results;
					for (var i = 0; i < this.data.length; i++) {
					if (i%2==0) {
							this.leftItems.push(this.data[i]);
						}else{
							this.rightItems.push(this.data[i]);
						}
					}
	  		})
  		},
		methods:{
			getgankdata:function () {
				// body...
				var page=Number(this.data.length)/Number(10)+1;
				this.$ajax.get('gpi/api/data/福利/10/'+page+'').then((res) => {
					this.adddata=res.data.results;
					for (var i = 0; i < this.adddata.length; i++) {
						this.data.push(this.adddata[i]);
						if (i%2==0) {
							this.leftItems.push(this.adddata[i]);
						}else{
							this.rightItems.push(this.adddata[i]);
						}
					}
	  			})
			},
			updateWaterfall:function() {
			      const leftHeight = this.$refs.left.clientHeight
			      const rightHeight = this.$refs.right.clientHeight
			      let item = this.data.shift();
			      console.log(leftHeight);
			      console.log(rightHeight);
			      if (item == null) {
			        return
			      }
			      if (leftHeight <= rightHeight) {
			        this.leftItems.push(item)
			      }else {
			        this.rightItems.push(item)
			      }
			      this.$nextTick(function () {
			        this.updateWaterfall();
			      })
			},
			getImageUrl:function (url) {
				// body...
				if (url!==undefined) {
					let img_url=url.substring(7);
					return  'https://images.weserv.nl/?url=' + url;
				}
			},
			gettest:function(){
				this.$router.push({
              		name:'details_page',params:{id:'6666'} });
			}
		}
	}
</script>
<style lang="scss" scoped="" type="text/css">
	  .waterfall-wrapper{
	  	margin-top: 0px;
	  	.image{
	  		width: 100%
	  	}
	  }
	  ul {
	    width: 49%;
	    padding: 0;
	    margin: 0;
	    list-style: none;
	    position: all;
	  }

	  ul.left-waterfall {
	    float: left;
	    display: block; 
	  }

	  ul.right-waterfall {
	    float: right;
	    display: block; 
	  }

	  li.item {
	    width: 100%;
	    margin: 5px;
	  }
	  .div_button{
	  	width: 100%;
	  	text-align: center;
	  	.more_button{
	  		height: 30px;
			margin-top: 10px;
			font-size: 14px;
	  	}
	  }
</style>