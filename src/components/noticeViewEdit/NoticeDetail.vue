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
    
    <v-card-actions class="nt-next-prev-list">
        <v-btn flat  @click.stop="prevList()" large outline color="teal" dark>
            <v-icon right dark>chevron_left</v-icon>
            Prev</v-btn>
        <v-spacer></v-spacer>
        <v-btn flat @click.stop="nextList()"  large outline color="teal" dark>
            Next<v-icon right dark>chevron_right</v-icon>
        </v-btn>
    </v-card-actions>
  </div>

  <div class="text-xs-right">
    <v-btn fab dark color="teal" to="/notice">
      <v-icon dark class="backBtn">list</v-icon>
    </v-btn>

    <div>
        <v-btn to="./:id/edit" fab dark color="cyan">
        <v-icon dark>edit</v-icon>
        </v-btn>
    </div>
    
    <v-btn fab dark color="red">
      <v-icon dark @click.stop="deleteItem(page.pid)">delete</v-icon>
    </v-btn>   
  </div>
  
</v-container>  
</template>


<script>
import {Editor, Viewer} from './index.js';

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
    props: ['page'],
    components: {
        Editor,
        Viewer
    },
    created() {
        viewerText = page.content
    },
    data() {
        return {
            dialog: false,
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
            viewerText: '',
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
        }
    }),

    deleteReview (id) {
        db.collection('notices').doc(id).delete()
        .then(() => {
            this.notices = this.notices.filter((page) => {
            return page.pid != id
            })
            alert('삭제되었습니다!')
        })
    },
    nextList(){

    },
    prevList(){

    },
    checkPassword(){
        var pw = document.getElementById("password").value;
        var pwck = 12345
        if (pw != pwck) {
            alert('죄송합니다. 권한이 없습니다');
        
        } else {
            this.$router.push('notice/:id/edit')
        }}

};
</script>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.41.0/codemirror.css';
@import 'https://uicdn.toast.com/tui-editor/latest/tui-editor-contents.css';
@import 'https://uicdn.toast.com/tui-editor/latest/tui-editor.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/github.min.css';

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

