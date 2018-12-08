import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Notice from '@/components/Notice'
import NoticeDetail from '@/components/noticeViewEdit/NoticeDetail'
import NoticeEdit from '@/components/noticeViewEdit/NoticeEdit'
import Projects from '@/components/Projects'
import qnaHome from '@/components/qna/qnaHome'
import qnaEditor from '@/components/qna/qnaEditor'
import qnaDetail from '@/components/qna/qnaDetail'
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
      path: '/notice/:id',
      name: 'NoticeDetail',
      props: true,
      component: NoticeDetail
    },
    {
      path: '/notice/:id/edit',
      name: 'NoticeEdit',
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
      path: '/qna/qnadetail',
      name: 'QnADetail',
      component: qnaDetail
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
