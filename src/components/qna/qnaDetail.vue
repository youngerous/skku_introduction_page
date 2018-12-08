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
      <v-card class="pa-4" style="min-height: 500px;">
        <h2 class="display-1">{{id.title}}</h2>
        <p class="my-2 text-xs-right subheading">작성자 : {{id.writer}}</p>
        <v-flex xs12>
          <v-divider></v-divider>
        </v-flex>
        <v-flex class="xs12 text-xs-left pa-3">
          <p class="qa-idcontent subheading">{{id.content}}</p>

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
import 'codemirror/lib/codemirror.css';
import Editor from '@toast-ui/vue-editor/src/editor.vue'
import db from '@/firebase/init.js'

export default {
  props: ['id'],
  components:{
    Editor
  },
  created () {
    console.log(id)
  },
  data () {
    return {
      commentContent: ''
    }
  },
  methods:{
    addComment(){
      console.log('addComment');            
    }            
  }
}
</script>

<style>
.qa-border{
border-left: 2px solid rgb(77, 126, 77);  
border-right: 2.5px solid rgb(77, 126, 77); 
border-top: 2.5px solid rgb(77, 126, 77);
border-bottom: 2.5px solid rgb(77, 126, 77);  
}

.qa-btn-back{
  border: 1.5px solid #0c8040;
  border-radius: 8px;  
}
.qa-idcontent{
  
}

</style>

