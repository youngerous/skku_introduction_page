import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Notice from '@/components/Notice'
import Projects from '@/components/Projects'
import qnaHome from '@/components/qna/qnaHome'
import qnaEditor from '@/components/qna/qnaEditor'
import Gallery from '@/components/Gallery'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/notice',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/qna',
      name: 'QnAHome',
      component: qnaHome
    },
    {
      path: '/qna/newqna',
      name: 'QnANew',
      component: qnaEditor
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    }
  ]
})
