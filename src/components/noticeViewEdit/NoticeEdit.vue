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
          <v-btn large outline color="teal" @click="editPost();
          $router.go(-1)" :block="$vuetify.breakpoint.xsOnly" >수정하기</v-btn>
          <v-btn large outline color="teal" @click="returnToPost(); $router.go(-1)" :block="$vuetify.breakpoint.xsOnly" >이전페이지로</v-btn>
        </v-flex>
    </v-layout>
  </v-container>
            
</template>

<script>
import {Viewer, Editor} from './index.js'
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
 
Vue.use(Vuetify)
Vue.use(VueRouter)

const eventListenr = [
    'onEditorLoad',
    'onEditorFocus',
    'onEditorBlur',
    'onEditorChange',
    'onEditorStateChange'
].reduce((methods, methodName) => {
    methods[methodName] = function() {
        console.log(`[editor] ${methodName}`);
    };
    return methods;
}, {});

// const router = new VueRouter({
//   routes: [
//     // dynamic segments start with a colon
//     { path: '/notice', component: Notice }
//   ]
// })

export default {
    components: {
        Editor,
        Viewer
    },
    data() {
        return {
            editorTitle: 'This is editorTitle',
            editorContent: 'This is editorContent',
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
            editorMode: 'wysiwyg',
            editorVisible: true,
            editorPreviewStyle: 'vertical'
        };
    },
    methods: {
        changePreviewStyle() {
            this.editorPreviewStyle = this.editorPreviewStyle === 'tab' ? 'vertical' : 'tab';
        },
        editPost() {
            console.log(this.editorTitle)
            console.log(this.editorContent)
        }, 
        returnToPost() {
            // router.push('/notice')
        }
    }
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
