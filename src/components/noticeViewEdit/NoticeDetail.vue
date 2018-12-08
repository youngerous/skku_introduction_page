<template>
<v-container>
  <div class="nt-detail" xs12 md5>
    <div class="nt-detail-main">
      <h1 class="nt-title">{{page.title}}</h1>
      <hr>
      <h5 class="nt-created">{{page.created}}</h5>
      <hr>
      <p>
        <viewer
        class="nt-viewer"
        :value="page.content"
        />
      </p>
    </div>
 </div>

  <div class="text-xs-right">
    <v-btn fab dark color="teal" to="/notice">
      <v-icon dark class="backBtn">list</v-icon>
    </v-btn>
    
                
    <v-dialog v-model="dialog" persistent max-width="600px">
        <v-btn slot="activator" fab dark color="red">
            <v-icon dark>delete</v-icon>
        </v-btn>
        <v-card>
            <v-card-title>
                <span class="headline">비밀번호를 입력하세요</span>
            </v-card-title>
            <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>    
                        <v-flex xs12>
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

    
  </div>
  
</v-container>  
</template>


<script>
// import {Editor, Viewer} from './index.js';
import db from '@/firebase/init.js';

import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'highlight.js/styles/github.css';
import 'codemirror/lib/codemirror.css';

import Editor from '@toast-ui/vue-editor/src/editor.vue';
import Viewer from '@toast-ui/vue-editor/src/Viewer.vue';

// const eventListenr = [
//     'onEditorLoad',
//     'onEditorFocus',
//     'onEditorBlur',
//     'onEditorChange',
//     'onEditorStateChange'
// ].reduce((methods, methodName) => {
//     methods[methodName] = function() {
//         // eslint-disable-next-line no-console
//         console.log(`[editor] ${methodName}`);
//     };

//     return methods;
// }, {});

export default {
    props: {
        id: String,
        page: {
            type: Object,
            default: null
        },

    },
    components: {
        Editor,
        Viewer
    },
    created() {
        if(!this.page){
            db.collection('notices').where('pid', '==', (this.id*1)).get()
                .then((snap) => {
                    snap.forEach((doc) => {
                        console.log(doc.data())
                        this.page = doc.data()
                        this.page.id = doc.id
                        this.page.created = new Date(this.page.created.seconds*1000).toLocaleDateString()
                    })
                }
            )
        }
    },
    data() {
        return {
            dialog: false,
            message: '',
            // methodNames: [
            //     'focus',
            //     'getValue',
            //     'getHtml',
            //     'getSelectedText',
            //     'moveCursorToStart',
            //     'moveCursorToEnd',
            //     'reset'
            // ],
            // viewerText: '',
            // editorText: 'This is initialValue.',
            // editorOptions: {
            //     hideModeSwitch: false,
            //     toolbarItems: [
            //         'heading',
            //         'bold',
            //         'italic',
            //         'strike',
            //         'divider',
            //         'hr',
            //         'quote',
            //         'divider',
            //         'ul',
            //         'ol',
            //         'task',
            //         'indent',
            //         'outdent',
            //         'divider',
            //         'table',
            //         'image',
            //         'link',
            //         'divider',
            //         'code',
            //         'codeblock'
            //     ]
            // },
            // editorHeight: '200px',
            // editorHtml: '',
            // editorMode: 'markdown',
            // editorVisible: true,
            // editorPreviewStyle: 'vertical'
        };
    },
    methods: {
        // methodInvoke(methodName) {
        //     this.message = this.$refs.tuiEditor.invoke(methodName);
        // },
        // changeText() {
        //     this.editorText += 'hihi';
        // },
        // changeHtml() {
        //     this.editorHtml = '<h1>Hi</h1>';
        // },
        // changeMode() {
        //     this.editorMode = this.editorMode === 'wysiwyg' ? 'markdown' : 'wysiwyg';
        // },
        // changePreviewStyle() {
        //     this.editorPreviewStyle = this.editorPreviewStyle === 'tab' ? 'vertical' : 'tab';
        // },


        checkPassword(){
            var pw = document.getElementById("password").value;
            var pwck = 12345
            if (pw != pwck) {
                alert('죄송합니다. 권한이 없습니다');
            } else {
                 db.collection('notices').doc(this.page.id).delete()
                .then(() => {
                    // this.notices = this.notices.filter((page) => {
                    // return page.id != id
                    // })
                    this.$router.push({path: '/notice'});
                })
                .catch((err) => {
                    console.log(err)
                })
        }}
    }

    
    
    
};
</script>

<style scoped>
/* @import 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.41.0/codemirror.css';
@import 'https://uicdn.toast.com/tui-editor/latest/tui-editor-contents.css';
@import 'https://uicdn.toast.com/tui-editor/latest/tui-editor.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/github.min.css'; */
.nt-viewer {
  background-color: white;
}

.nt-title {
    margin-top: 1.5rem;
    font-size: 2.5rem;
}
.nt-created{
    font-size: 1rem;
}
.p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.nt-detail{
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 30px;
    padding-left: 30px;
}
.text-xs-right{
    padding-right: 30px;
}

</style>

