import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Notice from '@/components/Notice'
import NoticeDetail from '@/components/noticeViewEdit/NoticeDetail'
import NoticeEdit from '@/components/noticeViewEdit/NoticeEdit'
import Projects from '@/components/Projects'
import qnaHome from '@/components/qna/qnaHome'
import qnaEditor from '@/components/qna/qnaEditor'
import Gallery from '@/components/Gallery'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' 


Vue.use(Vuetify)
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
      path: '/notice/:id',
      name: 'Notice',
      props: true,
      component: NoticeDetail
    },
    {
      path: '/notice/:id/edit',
      name: 'Notice_Edit',
      component: NoticeEdit
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
