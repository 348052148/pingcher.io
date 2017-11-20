import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Host from '@/components/Host'
import Process from '@/components/Process'
import Shell from '@/components/Shell'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Host',
      name: 'Host',
      component: Host
    },
    {
      path: '/Process',
      name: 'Process',
      component: Process
    },
    {
      path: '/Shell',
      name: 'Shell',
      component: Shell
    }
  ]
})
