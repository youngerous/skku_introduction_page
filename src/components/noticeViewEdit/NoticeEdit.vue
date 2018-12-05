<template>
  <div class="container">
    <h1>Edit Page: __id</h1>
    <editor
    ref="tuiEditor"
    v-model="editorText"
    :options="editorOptions"
    :html="editorHtml"
    :mode="editorMode"
    :previewStyle="editorPreviewStyle"
    @load="onEditorLoad"
    @focus="onEditorFocus"
    @blur="onEditorBlur"
    @change="onEditorChange"
    @stateChange="onEditorStateChange"
    />
    
  </div>
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
            viewerText: '# TOAST UI Markdown Viewer + Vue\n This is Viewer.',
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
    })
};
</script>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.41.0/codemirror.css';
@import 'https://uicdn.toast.com/tui-editor/latest/tui-editor-contents.css';
@import 'https://uicdn.toast.com/tui-editor/latest/tui-editor.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/github.min.css';

.container {
  width: 960px;
}
.viewer {
  background-color: lightpink
}
</style>
