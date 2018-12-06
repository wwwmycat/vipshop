import vueRouter from 'vue-router'

import recommend from '../../components/index/recommend.vue'
import snatch from '../../components/index/snatch.vue'
import fashion from '../../components/index/fashion.vue'
import makeups from '../../components/index/makeups.vue'
import mbaby from '../../components/index/mbaby.vue'     
import device from '../../components/index/device.vue'
import home from '../../components/index/home.vue'
import international from '../../components/index/international.vue'
import life from '../../components/index/life.vue'
import login from '../../components/use/login.vue'
import pass from '../../components/use/pass.vue'
import details from '../../components/detail/details.vue'
import list from '../../components/detail/list.vue'

export default new vueRouter({
	routes:[
	  {
	  	path:"/recommend",
	  	component:recommend
	  },
	  {
	  	 path:"/details",
	  	 component:details
	  },
	  {
	  	path:"/snatch",
	  	component:snatch
	  },
	  {
	  	path:"/fashion",
	  	component:fashion
	  },
	  {
	  	path:"/makeups",
	  	component:makeups
	  },
	  {
	  	path:"/mbaby",
	  	component:mbaby
	  },
	  {
	  	path:"/device",
	  	component:device
	  },
	  {
	  	path:"/home",
	  	component:home
	  },
	  {
	  	path:"/international",
	  	component:international
	  },
	  {
	  	path:"/life",
	  	component:life
	  },
	  {
	  	path:"/list",
	  	component:list
	  },
	  {
	  	path:"/login",
	  	component:login,
	  	children:[
	  	   {
	  	   	 path:'/pass',
	  	   	 component:pass
	  	   }
	  	]
	  },
	  {
	  	path:"/",
	  	redirect:"/recommend"
	  },
	]
})
