<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-btn exact flat :to="{name:'QnAHome'}" class="green--text ml-0 mb-3" :ripple="false">
          << 목록으로
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-center align-center>
      <v-flex xs12>
        <v-text-field label="제목" placeholder="제목을 입력하세요!" v-model="editorTitle"></v-text-field>
      </v-flex>
      <v-flex xs12>
        <Editor v-model="editorContent" />
      </v-flex>
      <v-flex xs12 class="my-2">
        <v-divider></v-divider>
      </v-flex>
    </v-layout>

    <v-layout row wrap justify-end>
        <v-flex xs12 md4 class="pr-3 text-xs-right">
          <v-text-field v-model="writer" outline hint="실명/익명" persistent-hint label="작성자"></v-text-field>
        </v-flex>
        <v-flex xs12 md4 class="pr-3  text-xs-right">
          <v-text-field v-model="password" outline hint="수정/삭제시 필요" persistent-hint label="비밀번호"></v-text-field>
        </v-flex>
        <v-flex xs12 md4 class="text-xs-right">
          <v-btn large color="#0c8040" dark @click.stop="uploadQuestion">글 올리기</v-btn>
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
  components: {
    Editor
  },
  data () {
    return {
      editorTitle: '',
      editorContent: '',
      password: '',
      writer: ''
    }
  },
  methods: {
    uploadQuestion () {
      if (this.editorTitle && this.editorContent && this.password && this.writer) {
        db.collection('faqs').add({
          title: this.editorTitle,
          content: this.editorContent,
          writer: this.writer,
          password: this.password,
          createdAt: new Date(),
          likes: 0,
          views: 0,
          comments: []
        })
        .then((result) => {
          console.log(result)
          alert('작성이 완료되었습니다')
          this.$router.push({name:'QnAHome'})
        })
        .catch((err)=> {
          alert('죄송해요 문제가 있네요 ㅠㅠ')
        })
      } else {
        alert('빈칸을 모두 채워주어야 합니다.')
      }
    }
  }
}
</script>

