<template>
  <v-container>
    <v-layout wrap>
      <v-flex class="ma-3 text-xs-center" xs12>
         <h2 class="notice-title">Q & A</h2> 
      </v-flex>
      <v-flex xs12 sm6 lg4 class="my-2 pl-0 text-xs-left">
        <v-text-field
            v-model="search"
            append-icon="search"
            label="검색"
            single-line
            hide-details
          ></v-text-field>
      </v-flex>
    </v-layout>
        
    <v-divider></v-divider>

    <v-layout>
      <v-flex xs12>
        <v-data-table
          :headers="headers"
          :items="faqs"
          :search="search"
          :pagination.sync="pagination"
          :loading="loading"
          :rows-per-page-items="[10,25,50,100]"
          class="elevation-0"
        >
          <template slot="items" slot-scope="props">
            <tr @click="$router.push({name: 'QnADetail', params: props.item})" >
              <td class="text-xs-center">{{ props.item.writer }}</td>
              <td class="text-xs-center">{{ props.item.title }}</td>
              <td class="text-xs-center">{{ new Date(props.item.createdAt.seconds*1000).toLocaleString() }}</td>
              <td class="text-xs-center">{{ props.item.comments.length }}</td>
              <td class="text-xs-center">{{ props.item.likes }}</td>
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
      headers: [
        { text: "ID", align: "center", value: "writer",sortable: true },
        { text: "제목", align: "center", value: "title" ,sortable: false},
        { text: "등록일", align: "center", value: "createdAt", sortable: true },
        { text: "댓글수", align: "center", value: "comments", sortable: true },
        { text: "좋아요", align: "center", value: "likes" ,sortable: true}
        // { text: "Actions", align: "center", value: "name", sortable: false }
      ],
      faqs: [],
      pagination: {descending: true},
      loading: true,
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
    db.collection('faqs').get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        this.loading = false
        this.faqs.push(doc.data())
        console.log(doc.data())
      })
    })
  },

  methods: {
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
.notice-title {
  display: inline-block;
  border-bottom: 2px solid #1976d2;
}
</style>

