<template>
  <div >
    <h2>공지사항</h2>
    <br>
    <br>
    <br>
    <!-- 데이터테이블이랑 페이지네이션 결합 -->
    <div>
      <v-data-table :headers="headers" :items="documents" :search="search" :pagination.sync="pagination" class="elevation-1">
          <template slot="items" slot-scope="props">
            <!-- onClick="onClick()" 이거를 template 태그에 넣어야 하나..?-->
            <tr @click="$router.push({name: 'NoticeDetail', params: props.item.pid})">
              <td>{{ props.item.pid }}</td>
              <td>{{ props.item.created}}</td>
              <td>{{ props.item.title }}</td>
              <td>{{ props.item.view }} </td>
            </tr>
          </template>
      </v-data-table>
    </div>
    <div class="text-xs-center pt-2">
      <v-pagination v-model="pagination.page" :length="pages" :total-visible="5" circle>
        <!-- 버튼 모양 네모난 게 더 낫다면 circle은 지우겠음-->
      </v-pagination>
    </div>

    <!-- 글쓰기 버튼, 누르면 alert  -->
    <br>
    <div>

      <br>
      <v-alert v-model="alert" dismissible type="success" :value="true" color="info" icon="priority_high" outline>
        죄송합니다. 접근 권한이 없습니다
      </v-alert>

      <div class="text-xs-left">
        <v-btn outline large color="teal" v-if="!alert" @click="alert = true">글쓰기</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
  import db from '../firebase/init.js';

  export default {
    created() {
      db.collection('notice').get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let page = doc.data();
            page.created = new Date(page.created.seconds*1000).toLocaleDateString()
            this.documents.push(page);
          });
        })
    },
    data() {
      return {
        documents: [],
        search: '',
        alert: false,
        pagination: {'sortBy': 'pid', 'descending': true},
        selected: [],
        headers: [{
            text: 'No.',
            value: 'pid',
            align: 'left',
            sortable: false
          },
          {
            text: '등록일',
            value: 'created',
            sortable: false
          },
          {
            text: '제목',
            value: 'title',
            sortable: false
          },
          {
            text: '조회수',
            value: 'clicks',
            sortable: false
          },
        ]
        // 제목을 클릭해서 들어갈 때마다 clicks가 올라가는 방법을 찾아야 함. 
      }
    },
    computed: {
      pages() {
        if (this.pagination.rowsPerPage == null || this.pagination.totalItems == null) return 0
        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      }
    },
    methods: {
      
    }

    //  비번체크 함수 어떻게 만들면 될까요

    //  function tocheckpw1() {
    //     var pw = document.getElementById("Pw").value;
    //     var pwck = document.getElementById("PwCheck").value;
 
    //     if (pw != pwck) {
    //         alert('죄송합니다. 권한이 없습니다');
    //         return false;
    //     }
    // },

    //  조회수 함수 어떻게 만들면 될까요

    // clicks: {
    //   onClick() {
    //       var clicks = 0;

    //       clicks += 1;
    //       document.getElementById("clicks").innerHTML = clicks;
    //       }
    // }


  }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
