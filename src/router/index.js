import Vue from 'vue'
import Router from 'vue-router'
import page from '@/components/Page'
import movie from '@/components/Movie'
import code from '@/components/Code'
import happy from '@/components/Happy'
import foot from '@/components/Foot'
import itemmovie from '@/components/Item_movie'
import movie_intheather from '@/components/Movie_intheather'
import movie_top from '@/components/Movie_top'
import details_page from '@/components/Details_page'
import details_movie from '@/components/Details_movie'
import details_code from '@/components/Details_code'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
   {
    path:'/',
    component:foot,
     meta: {
        keepAlive: true // 需要缓存
     }
   },
   {
      path:'/page',
      component:page
    },
    {
    	path:'/movie',
    	component:movie
    },
    {
    	path:'/code',
    	component:code
    },
    {
    	path:'/happy',
    	component:happy
    },
    {
      path:'/itemmovie',
      component:itemmovie
    },
    {
      path:'/movie_intheather',
      component:movie_intheather
    },
    {
      path:'/movie_top',
      component:movie_top
    },
    {
      name:'details_page',
      path:'/details_page',
      component:details_page,
      meta: {
        keepAlive: false // 不需要缓存
     }
    },
    {
      name:'details_movie',
      path:'/details_movie',
      component:details_movie,
       meta: {
        keepAlive: false // 不需要缓存
     }
    },
    {
      name:'details_code',
      path:'/details_code',
      component:details_code,
       meta: {
        keepAlive: false // 不需要缓存
     }
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
