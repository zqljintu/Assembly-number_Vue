# Assembly-number_Vue
集结号vue版//Assembly-number_Vue,集结号，一个集结了各种资源的的阅读App!
该vue版本是对Android版本的模仿，具体样式和Android版本的非常相似。

预览Android版本，请点击：[集结号（Android版）](https://github.com/zqljintu/Assembly-number)

项目简介（Vue版本/chrome调试）
====
网上有各种各样的免费API,在众里寻找后，最后发现何不将这些API集合在一个App中呢，鉴于个人能力有限，就选取了部分的API来创作。
感谢知乎日报的Api，提供了App中的日报板块。
感谢豆瓣的Api，提供了App中的电影板块。
感谢WanAndroid的Api，提供了开发板块。
感谢Gank.io的Api，提供了娱乐版块。
以上的板块都取了一部分，如有侵权请联系删除。

    第二次更新：
    1、完善了日报详情页，完全遵从知乎日报。
    2、完善了电影详情页。
    3、对于开发板块，采取跳转到原页面来显示详情。
    4，详情页内提供了分享和跳转页面的功能。
    5，优化了界面，解决了一部分bug。
    
    Assembly-number(v1.00).
    1，提供了四个板块。。
    2，项目使用vue2+vue-router+vuex+axios+mint-ui等来构建。
    3，项目中的api获取采用的跨域来实现，详细请自行搜索（使用http-proxy-middleware 代理解决（项目使用vue-cli脚手架搭建））。
    4，项目中的知乎日报详情有些问题，不能加载图片，（没有解决）。
    5，娱乐板块的瀑布流布局采用的列表方法进行构建。
    6，加载更多采用的按键点击解决，知乎日报采取的前后天。
    7，跳转详情界面通过每个item内部的点击来解决。（采用this.$router.push，利用router传值时注意传name不要传path）。
    8，返回主界面不是点击前的界面，尚未解决。
        
 
 ![](https://github.com/zqljintu/Assembly-number_Vue/blob/master/image/ji_vue.jpg)
 
#Build Setup：

    # install dependencies
    npm install
    
    # serve with hot reload at localhost:8080
    npm run dev

    # build for production with minification
    npm run build

    # build for production and view the bundle analyzer report
    npm run build --report

    # webpack打包后使用http-server后端快速启动查看项目
    npm run start
    
    
新手所写，还有诸多不足之处，如果喜欢，欢迎给个Star,若有什么问题，欢迎issue。
联系请关注知乎账号：番茄炒蛋不要蛋
    
    
