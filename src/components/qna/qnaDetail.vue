<template>
<v-container>
  <v-layout wrap>
    <v-flex>
      <v-btn exact flat :to="{name:'QnAHome'}" class="green--text ml-0 mb-3 qa-btn-back" :ripple="false">
        << 목록으로
      </v-btn>
    </v-flex>
    
    <v-flex xs12>
        <div class="qa-border">
      <v-card class="pa-4" style="min-height: 100px;">
        <h2 class="display-1">{{item.title}}</h2>
        <p class="my-2 text-xs-right subheading">작성자 : {{item.writer}}</p>
        <v-flex xs12>
          <v-divider></v-divider>
        </v-flex>
        <v-flex class="xs12 text-xs-left pa-3">
          
          <viewer
            class="nt-viewer"
            :value="item.content"
            />

        </v-flex>
      </v-card>
       </div> 
    </v-flex>

    <v-flex class="my-3" xs12 v-if="item.comments" v-for="(comment,index) in item.comments" :key="index" >
      <div class="qa-border-comment">
        <v-card class="pa-4" style="min-height: 100px;">
          <p class="my-2 text-xs-right subheading">작성자 : {{comment.writer}}</p>
          <v-flex xs12>
            <v-divider></v-divider>
          </v-flex>
          <v-flex class="xs12 text-xs-left pa-3">
            <!-- <p class="qa-idcontent subheading">{{comment.content}}</p> -->
            <viewer
            class="nt-viewer"
            :value="comment.content"
            />
          </v-flex>
        </v-card>
      </div> 
    </v-flex>
    
    <v-flex xs12>
      <v-card class="my-3 pa-4">
        <h3>Your Answer</h3>
        <Editor v-model="commentContent" />
        <v-layout row wrap justify-end class="mt-4">
          <v-flex xs12 md4 class="pr-3 text-xs-right">
            <v-text-field :rules="[() => !!name || 'This field is required']" color="#0c8040" v-model="writer" outline hint="실명/익명" persistent-hint label="작성자"></v-text-field>
          </v-flex>
          <v-flex xs12 md4 class="pr-3  text-xs-right">
            <v-text-field :rules="[() => !!name || 'This field is required']" color="#0c8040" v-model="password" outline hint="수정/삭제시 필요" persistent-hint label="비밀번호"></v-text-field>
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
import 'codemirror/lib/codemirror.css';
import Editor from '@toast-ui/vue-editor/src/editor.vue'

import {Viewer} from '@/components/noticeViewEdit/index.js';


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
  computed: {
    // loadedData () {
    //   if (this.item) {
    //     return this.item
    //   } else {
    //     console.log('직접왔어')
    //     return db.collection('faqs').doc(this.id).get()
    //     .then((doc) => {
    //       console.log(doc.data())
    //       let question = doc.data()
    //       return question
    //     })
    //   }
    // }
  },
  created () {
    if (!this.item) {
      console.log('직접왔어')
      db.collection('faqs').doc(this.id).get()
      .then((doc) => {
        console.log(doc.data())
        this.item = doc.data()
      })
    }
    console.log(this.id)
  },
  mounted () {

  },
  data () {
    return {
      commentContent: '',
      password: null,
      writer: null,
    }
  },
  methods:{
    addComment(){
      console.log('addComment');          
      let comment = {
        writer: this.writer, 
        content: this.commentContent, 
        password: this.password,
        createdAt: new Date(),
        likes: 0
      }
      this.item.comments.push(comment)
      db.collection('faqs').doc(this.id).update({
        comments: this.item.comments
      })
      .then(() => {
        this.writer = null
        this.commentContent = null
        this.password = null
      });
    }            
  }
}
</script>

<style scoped>
.qa-border{
  border-left: 2px solid rgb(77, 126, 77);  
  border-right: 2.5px solid rgb(77, 126, 77); 
  border-top: 2.5px solid rgb(77, 126, 77);
  border-bottom: 2.5px solid rgb(77, 126, 77);  
}

.qa-border-comment{
  background-color: rgba(77, 126, 77, 0.2) !important;
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
</style>

