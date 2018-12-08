<template>
<v-container>
  <v-layout wrap>
    <v-flex>
      <v-btn exact flat :to="{name:'QnAHome'}" class="green--text ml-0 mb-3 qa-btn-back" :ripple="false"  style=" font-family:  'Do Hyeon', sans-serif;">
        << 목록으로
      </v-btn>
    </v-flex>
    
    <!-- 게시글 -->
    <v-flex xs12>
      <div class="qa-border">
        <v-card class="pa-4" style="min-height: 100px;">
          <h2 class="display-1">{{loaded_article.title}}</h2>
          <p class="my-2 text-xs-right subheading">작성자 : {{loaded_article.writer}}</p>
          <v-btn class="qa-btn-delete" flat outline right small @click.stop="dialog_article = !dialog_article"> 삭제 </v-btn>
          <v-dialog
              v-model="dialog_article"
              max-width="290"
            >
              <v-card>
                <v-card-title class="headline">비밀번호</v-card-title>
                  
                <v-card-text>
                  <v-text-field label="비밀번호" type="password" v-model="pw_article" required></v-text-field>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" flat="flat" @click="dialog_article = false">
                    취소
                  </v-btn>
                  <v-btn color="green darken-1" flat="flat" @click="deleteArticle">
                    확인
                  </v-btn>
                </v-card-actions>

              </v-card>
            </v-dialog>
          <v-flex xs12>
            <v-divider></v-divider>
          </v-flex>
          <v-flex class="xs12 text-xs-left pa-3">
            <viewer
              class="nt-viewer"
              :value="loaded_article.content"
              />
          </v-flex>
        </v-card>
      </div> 
    </v-flex>

    <!-- 답변 -->
    <v-flex  >
      <div class="my-3" xs12 v-if="loaded_article.comments" v-for="(comment,index) in loaded_article.comments" :key="index">
        <v-card class="pa-4 qa-border-comment" style="min-height: 100px;">
          <p class="my-2 text-xs-right subheading">작성자 : {{comment.writer}}</p>
          <v-btn class="qa-btn-delete" flat outline right small @click.stop="selectComment(comment)"> 삭제 </v-btn>
          <v-dialog
            v-model="dialog_comment"
            max-width="290"
          >
            <v-card>
              <v-card-title class="headline">비밀번호</v-card-title>

              <v-card-text>
                <v-text-field label="비밀번호" type="password" required v-model="pw_comment"></v-text-field>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  color="green darken-1"
                  flat="flat"
                  @click="dialog_comment = false"
                >
                  취소
                </v-btn>

                <v-btn
                  color="green darken-1"
                  flat="flat"
                  @click.stop="deleteComment"
                >
                  확인
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-flex xs12>
            <v-divider></v-divider>
          </v-flex>
          <v-flex class="xs12 text-xs-left pa-3">
            <!-- <p class="qa-idcontent subheading">{{comment.content}}</p> -->
            <viewer
            
            class="nt-viewer qa-border-comment"
            :value="comment.content"

            />
          </v-flex>
        </v-card>
      </div> 
    </v-flex>
    
    <!-- 작성자/비밀번호 -->
    <v-flex xs12>
      <v-card class="my-3 pa-4">
        <h3>Your Answer</h3>
        <Editor :options="editorOptions" mode="wysiwyg" v-model="commentContent" />
        <v-layout row wrap justify-end class="mt-4">
          <v-flex xs12 md4 class="pr-3 text-xs-right">
            <v-text-field color="#0c8040" v-model="writer" outline hint="실명/익명" persistent-hint label="작성자"></v-text-field>
          </v-flex>
          <v-flex xs12 md4 class="pr-3  text-xs-right">
            <v-text-field color="#0c8040" v-model="password" outline hint="수정/삭제시 필요" persistent-hint label="비밀번호"></v-text-field>
          </v-flex>
          <v-flex xs12 md4 class="text-xs-right">
            <v-btn large color="#0c8040" dark @click="addComment">답변 올리기</v-btn>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>  

</template>
<script>
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'highlight.js/styles/github.css';
import 'codemirror/lib/codemirror.css';

import Editor from '@toast-ui/vue-editor/src/editor.vue'
import Viewer from '@toast-ui/vue-editor/src/Viewer.vue'


import db from '@/firebase/init.js'

export default {
  props: {
    id: String,
    item: {
      type: Object,
      default: null
    },
  },
  components:{
    Editor,
    Viewer
  },
  // watch: {
  //   item () {
  //     console.log('실행은 됨')
  //     if (this.item) {
  //       console.log(this.item)
  //       this.loaded_article = this.item
  //     } else {
  //       console.log('직접왔어')
  //       db.collection('faqs').doc(this.id).get()
  //       .then((doc) => {
  //         console.log(doc.data())
  //         let question = doc.data()
  //         this.loaded_article = question
  //       })
  //     }
  //   }
  // },
  created () {
    if (!this.item) {
      // console.log('직접왔어')
      db.collection('faqs').doc(this.id).get()
      .then((doc) => {
        // console.log(doc.data())
        this.loaded_article = doc.data()
        // console.log(this.loaded_article.comments)
      })
    } else {
      this.loaded_article = this.item
    }
    
  },
  
  data () {
    return {
      commentContent: '',
      password: null,
      writer: null,
      editorOptions: {
        hideModeSwitch: true
      },
      dialog_comment: false,
      dialog_article: false,
      pw_article: null,
      pw_comment: null,
      loaded_article: null,
      selectedComment: null
    }
  },
  methods:{
    deleteArticle () {
      if (this.pw_article == this.loaded_article.password) {
        db.collection('faqs').doc(this.$route.params.id).delete()
        .then(()=> {
          alert('삭제완료')
          this.$router.go(-1)

        })
        .catch(err => {
          console.log(err)
        })
      }else{
        alert('비밀번호가 다릅니다.');
      }
    },
    addComment(){
      if(this.writer && this.password){
        let comment = {
          writer: this.writer,
          content: this.commentContent, 
          password: this.password,
          createdAt: new Date(),
          likes: 0
        }
        this.loaded_article.comments.push(comment)
        db.collection('faqs').doc(this.id).update({
          comments: this.loaded_article.comments
        })
        .then(() => {
          this.writer = null
          this.commentContent = null
          this.password = null
        });
      }else{
        alert('작성자 이름과 비밀번호를 모두 입력해야 합니다.');
      }
    },
    selectComment(comment){
      this.selectedComment = comment
      this.dialog_comment = true
    },
    
    deleteComment(){
      // 댓글 삭제
      // console.log('실행은 됨')
      if (this.pw_comment == this.selectedComment.password) {
        // console.log('조건문 작동은 함')
        this.loaded_article.comments = this.loaded_article.comments.filter(commentA => {
          // console.log("commentA : "+commentA.createdAt);
          // console.log("comment: "+comment.createdAt);
          return commentA.createdAt != this.selectedComment.createdAt
        })
        db.collection('faqs').doc(this.id).update({
          comments: this.loaded_article.comments
        })
        .then(() => {
          alert('댓글 삭제 완료')
          this.dialog_comment = false        
          this.pw_comment = null  
        })
        .catch(err => {
          console.log('에러발생')
        })
      } else{
        alert('비밀번호가 다릅니다');
        this.pw_comment = null
        this.dialog_comment = false
        //TODO: comment 삭제 시 비밀번호 input 창에서 비밀번호가 변경되는 오류
        //TODO: 만든 이 이름 삽입
      }



      // if(this.pw_article == this.item.password){
      //   console.log('뭔가 잘못됨')
      //   db.collection('faqs').doc(this.id).delete()
      //   .then(()=>{
      //     console.log('글 삭제 완료')
      //   })
      //   .catch(err =>{
      //     console.log('에러발생')
      //   })
      // }
      
    }
  }
}
</script>

<style>
@import url(//fonts.googleapis.com/css?family=Do+Hyeon&amp;subset=korean);
.qa-border{
  border-left: 2px solid rgb(77, 126, 77);  
  border-right: 2.5px solid rgb(77, 126, 77); 
  border-top: 2.5px solid rgb(77, 126, 77);
  border-bottom: 2.5px solid rgb(77, 126, 77);  
}

.qa-border-comment{
  background-color: rgba(77, 126, 77, 0.1) !important;
}

.qa-btn-back{
  border: 1.5px solid #0c8040;
  border-radius: 8px;  
}
.qa-idcontent{
  
}

.nt-viewer {
  background-color: white;
}
.tui-editor-contents {
  font-size: 16px;
}
</style>

