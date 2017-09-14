import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/Register'
// import Upload from '@/components/Upload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
    // {
    //   path: '/upload',
    //   name: 'upload',
    //   component: Upload
    // }
  ]
})
