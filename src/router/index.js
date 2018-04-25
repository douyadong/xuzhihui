import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Myteacher from '@/components/Myteacher'
import TeacherDetail from '@/components/teacherDetail/teacherDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
			path: '/myteacher',
			name: 'Myteacher',
			component: Myteacher
    },
    {
    	path: '/selectedTeacher',
    	name: 'TeacherDetail',
    	component: TeacherDetail
    }
  ]
})
