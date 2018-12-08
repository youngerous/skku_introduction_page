<template>
  <v-container>
    <div class="text-xs-center">
      <h2 class="my-3 ntc-title" style="  font-size: 30px; font-family: 'Do Hyeon', sans-serif;" >공지사항</h2>
    </div>
    <br>
    <br>
    <br>
    <!-- 데이터테이블이랑 페이지네이션 결합 -->
    <div>
      <v-data-table :headers="headers" :items="notices" :search="search" :pagination.sync="pagination" class="elevation-1">
          <template slot="items" slot-scope="props">
            <tr @click="
            updateViews(props.item);
            $router.push({name: 'NoticeDetail', params: {id : props.item.pid, page: props.item}});">
              <td class="pid">{{ props.item.pid }}</td>
              <td class="created">{{ props.item.created}}</td>
              <td class="title">{{ props.item.title }}</td>
              <td class="view">{{ props.item.view }} </td>
            </tr>
          </template>
      </v-data-table>
    </div>
    <div class="text-xs-center pt-2">
      <v-pagination v-model="page" :length="3" :total-visible="5" circle>
          <!-- 버튼 모양 네모난 게 더 낫다면 circle은 지우겠음 -->
      </v-pagination>
    </div>

   
 <!-- 글쓰기 팝업 다시 만들어보는중 -->
 
    <!-- <div>

      <br>
      <v-alert v-model="alert" dismissible type="success" :value="true" color="info" icon="priority_high" outline >
        죄송합니다. 접근 권한이 없습니다
      </v-alert>

      <div class="text-xs-left">
        <v-btn outline large color="teal"   @click="showPopup()"  >글쓰기</v-btn>
         </div> 
    </div>
         -->
    <!-- v-if="!alert" @click="alert = true" -->
     
<v-layout row justify-left>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-btn slot="activator" large outline color="teal" dark>글쓰기</v-btn>
      
      <v-card>
        <v-card-title>
          <span class="headline">비밀번호를 입력하세요</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
                            
              <v-flex xs12  >
                <v-text-field label="Password*" type="password" required  id="password" name="password" minlength="3" color="#0c8040"></v-text-field>
              </v-flex>                             
              
            </v-layout>
          </v-container>
          <small>   *   3자 이상 입력하세요  </small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#0c8040" flat @click="checkPassword"  >제출</v-btn>
          <v-btn color="#0c8040" flat @click="dialog = false"  >취소</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>

  <!-- 글쓰기 팝업 다시 만들어보는중 -->

        
     
   
  </v-container>
</template>

<script>
  import db from '../firebase/init.js';
  import VueRouter from 'vue-router'
  
  const router = new VueRouter({

  })

  export default {
    created() {
      db.collection('notices').get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let page = doc.data();
            page.id = doc.id
            page.created = new Date(page.created.seconds*1000).toLocaleDateString()
            this.notices.push(page);
          });
        })
    },
    data() {
      return {
        
        dialog: false,
        notices: [],
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
     
      }
    },
       // 제목을 클릭해서 들어갈 때마다 clicks가 올라가는 방법을 찾았따! 

     methods: {
      updateViews : function(item){
        item.view += 1
       db.collection('notices').doc(item.id).update({
         view: item.view
       })
      }

      // 비밀번호 체크 해서 넘어가는 함수

      , checkPassword:function(){

        var pw = document.getElementById("password").value;
        var pwck = 12345
        if (pw != pwck) {
            alert('죄송합니다. 권한이 없습니다');
            // return false;
            
            } else {
              this.$router.push('notice/noticenew')
            }
                                
    }

   }



  }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url(//fonts.googleapis.com/css?family=Do+Hyeon&amp;subset=korean);
.ntc-title{
  border-bottom: 2px solid #0c8040;
  display: inline-block;
}

.pid{ 
  width:15%; 
  /* text-align: center; */
 }
.created{ 
  width:20%; 
  /* text-align: center;  */
}
.title{ 
  width:50%; 
  /* text-align: center;  */
}
.view{  
  width:15%; 
  /* text-align: center;  */
}




</style>
