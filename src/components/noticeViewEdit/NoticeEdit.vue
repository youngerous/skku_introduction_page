<template>
     <v-container>
    <v-layout row wrap justify-center align-center>
      <v-flex xs12>
        <v-text-field label="제목" placeholder="__id title" v-model="editorTitle"></v-text-field>
      </v-flex>
      <v-flex xs12>
        <Editor v-model="editorContent" />
      </v-flex>
      <v-flex xs12 class="my-2">
        <v-divider></v-divider>
      </v-flex>
    </v-layout>

    <v-layout row wrap justify-end>
        <v-flex class="xs12 md4 text-xs-right">
          <v-btn @click="editPost" large :block="$vuetify.breakpoint.xsOnly" class="primary">수정하기</v-btn>
          <v-btn @click="editPost" large :block="$vuetify.breakpoint.xsOnly" class="primary">이전페이지로</v-btn>

        </v-flex>

    </v-layout>
  </v-container>
            
</template>

<script>
import {Editor, Viewer} from './index.js'
import Vue from 'vue'
import Vuetify from 'vuetify'
 
Vue.use(Vuetify)

const eventListenr = [
    'onEditorLoad',
    'onEditorFocus',
    'onEditorBlur',
    'onEditorChange',
    'onEditorStateChange'
].reduce((methods, methodName) => {
    methods[methodName] = function() {
        // eslint-disable-next-line no-console
        console.log(`[editor] ${methodName}`);
    };

    return methods;
}, {});

export default {
    components: {
        Editor,
        Viewer
    },
    data() {
        return {
            message: '',
            methodNames: [
                'focus',
                'getValue',
                'getHtml',
                'getSelectedText',
                'moveCursorToStart',
                'moveCursorToEnd',
                'reset'
            ],
            editorText: 'This is initialValue.',
            editorOptions: {
                hideModeSwitch: false,
                toolbarItems: [
                    'heading',
                    'bold',
                    'italic',
                    'strike',
                    'divider',
                    'hr',
                    'quote',
                    'divider',
                    'ul',
                    'ol',
                    'task',
                    'indent',
                    'outdent',
                    'divider',
                    'table',
                    'image',
                    'link',
                    'divider',
                    'code',
                    'codeblock'
                ]
            },
            editorHeight: '200px',
            editorHtml: '',
            editorMode: 'markdown',
            editorVisible: true,
            editorPreviewStyle: 'vertical'
        };
    },
    methods: Object.assign(eventListenr, {
        methodInvoke(methodName) {
            this.message = this.$refs.tuiEditor.invoke(methodName);
        },
        changeText() {
            this.editorText += 'hihi';
        },
        changeHtml() {
            this.editorHtml = '<h1>Hi</h1>';
        },
        changeMode() {
            this.editorMode = this.editorMode === 'wysiwyg' ? 'markdown' : 'wysiwyg';
        },
        changePreviewStyle() {
            this.editorPreviewStyle = this.editorPreviewStyle === 'tab' ? 'vertical' : 'tab';
        },
        editPost() {
            console.log(this.editorText)
        }
    })
    
};
</script>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.41.0/codemirror.css';
@import 'https://uicdn.toast.com/tui-editor/latest/tui-editor-contents.css';
@import 'https://uicdn.toast.com/tui-editor/latest/tui-editor.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/github.min.css';

.nt-container {
  width: 960px;
}
.nt-editor {
  background-color: white;
}
</style>
