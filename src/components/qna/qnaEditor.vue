<template>
  <v-container>
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
        <v-flex xs12 md4 class="text-xs-right">
          <v-text-field v-model="editorPassword" outline hint="수정/삭제시 필요" persistent-hint label="비밀번호"></v-text-field>
        </v-flex>
        <v-flex class="xs12 md4 text-xs-right">
          
          <v-btn @click="writeqna" large :block="$vuetify.breakpoint.xsOnly" class="primary">글쓰기</v-btn>
        </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'codemirror/lib/codemirror.css';
import Editor from '@toast-ui/vue-editor/src/editor.vue'

export default {
  components: {
    Editor
  },
  data () {
    return {
      editorTitle: '',
      editorContent: '',
      editorPassword: ''
    }
  },
  methods: {
    writeqna () {
      console.log(this.editorContent)
    }
  }
}
</script>

