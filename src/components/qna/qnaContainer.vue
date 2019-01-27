<template>
  <v-container class="ma-0 pa-0">
    <v-layout wrap>
      <v-flex class="ma-3 text-xs-center" xs12>
         <h2 class="notice-title" style="  font-size: 30px; font-family: 'Do Hyeon', sans-serif;">Q & A</h2> 
      </v-flex>
    </v-layout>
    <v-layout justify-space-between>
      <v-flex xs12 sm6 lg4 class="my-2 pl-0 text-xs-left">
        <v-text-field
            v-model="search"
            append-icon="search"
            label="제목 검색"
            single-line
            hide-details
            color="#0c8040"
          ></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 lg4 class="my-2 pl-0 text-xs-right">
        <v-btn :to="{name: 'QnANew'}" color="#0c8040" large dark>질문하기</v-btn>
      </v-flex>
    </v-layout>
        
    <v-divider></v-divider>

    <v-layout>
      <v-flex xs12>
        <v-data-table
          :headers="headers"
          :items="filteredFaqs"
          :search="search"
          :loading="loading"
          disable-initial-sort
          class="elevation-0"
        >
          <template slot="items" slot-scope="props">
            <tr @click="clickedRow(props.item)" >
              <td v-if="$vuetify.breakpoint.mdAndUp" class="text-xs-center">{{ props.item.writer }}</td>
              <td class="text-xs-center">{{ props.item.title }}</td>
              <td v-if="$vuetify.breakpoint.mdAndUp" class="text-xs-center">{{ new Date(props.item.createdAt.seconds*1000).toLocaleString() }}</td>
              <td class="text-xs-center">{{ props.item.comments.length }}</td>
              <td v-if="$vuetify.breakpoint.mdAndUp" class="text-xs-center">{{ props.item.likes }}</td>
              <td v-if="$vuetify.breakpoint.mdAndUp" class="text-xs-center">{{ props.item.views }}</td>
            </tr>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import db from '@/firebase/init.js'

export default {
  data() {
    return {
      search: "",
      // headers: [
      //   { text: "글쓴이", align: "center", value: "writer",sortable: true },
      //   { text: "제목", align: "center", value: "title" ,sortable: false},
      //   { text: "등록일", align: "center", value: "createdAt", sortable: true },
      //   { text: "댓글수", align: "center", value: "comments", sortable: true },
      //   { text: "좋아요", align: "center", value: "likes" ,sortable: true},
      //   { text: "조회수", align: "center", value: "views" ,sortable: true},
      //   // { text: "Actions", align: "center", value: "name", sortable: false }
      // ],
      faqs: [],
      // pagination: {descending: true},
      loading: true,
    }
  },
  computed: {
    filteredFaqs() {
      return this.faqs.filter(faq => {
        return faq.title.toLowerCase().indexOf(this.search.toLowerCase() != -1)
      })
    },
    headers () {
      if (this.$vuetify.breakpoint.smAndDown) {
        return [
          { text: "제목", align: "center", value: "title" ,sortable: false},
          { text: "댓글수", align: "center", value: "comments", sortable: true },
        ]
      } else {
        return [
          { text: "글쓴이", align: "center", value: "writer",sortable: true },
          { text: "제목", align: "center", value: "title" ,sortable: false},
          { text: "등록일", align: "center", value: "createdAt", sortable: true },
          { text: "댓글수", align: "center", value: "comments", sortable: true },
          { text: "좋아요", align: "center", value: "likes" ,sortable: true},
          { text: "조회수", align: "center", value: "views" ,sortable: true},
          // { text: "Actions", align: "center", value: "name", sortable: false }
        ]
      }
    }
  },

  watch: {
    // pagination: {
      // handler () {
      //   this.getDataFromApi().then(data => {
      //     this.notices = data.rows;
      //     this.totalNotices = data.total
      //     this.loading = false
      //     console.log(data)
      //   }).catch(err => console.log(err))
      // },
      // deep: true
    // }
  },
  created () {
    db.collection('faqs').orderBy('createdAt','desc').get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        let faq = doc.data()
        faq.id = doc.id
        this.faqs.push(faq)
        this.loading = false
      })
    })
  },

  methods: {
    clickedRow (item) {
      item.views++
      db.collection('faqs').doc(item.id).update({
        views: item.views
      })
      this.$router.push({name: 'QnADetail', params: {id:item.id, item: item}})
    }
    // getDataFromApi() {
    //   this.loading = true;
      
    //   return this.$axios.$post('http://admin.moqa.co.kr/admin/ajax/noticeList.do', {
    //     withCredentials: true,
    //     crossdomain : true,
    //     data: {
    //       pageNum: 1,
    //       pageSize: 10,
    //       limit: 10,
    //       offset: 0
    //     }
    //   })
    // },
  }
};
</script>

<style scoped>
@import url(//fonts.googleapis.com/css?family=Do+Hyeon&amp;subset=korean);
.notice-title {
  display: inline-block;
  border-bottom: 2px solid #0c8040;
}
</style>

