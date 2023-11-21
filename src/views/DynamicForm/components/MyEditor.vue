<template>
    <div>
        <div style="border: 1px solid #ccc; margin-top: 10px">
            <Toolbar
                :editor="editorRef"
                :defaultConfig="toolbarConfig"
                :mode="mode"
                style="border-bottom: 1px solid #ccc"
            />
            <Editor
                :defaultConfig="editorConfig"
                :mode="mode"
                v-model="valueHtml"
                style="height: 300px; overflow-y: hidden; text-align: left"
                @onCreated="handleCreated"
                @onChange="handleChange"
                @onDestroyed="handleDestroyed"
                @onFocus="handleFocus"
                @onBlur="handleBlur"
                @customAlert="customAlert"
                @customPaste="customPaste"
            />
        </div>
    </div>
</template>

<script>
import "@wangeditor/editor/dist/css/style.css";
import { onBeforeUnmount, ref, shallowRef, onMounted } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";

export default {
    components: { Editor, Toolbar },
    props: {
        modelValue: {
            type: String,
            default: "",
        },
    },
    setup(props, { emit }) {
        // 编辑器实例，必须用 shallowRef，重要！
        const editorRef = shallowRef();
        // 内容 HTML
        const valueHtml = ref("");

        const toolbarConfig = {};
        toolbarConfig.excludeKeys = [
            "header1",
            "header2",
            "header3",
            "header4",
            "header5",
            "fontSize", // 字号
            "fontName", // 字体
            "italic", // 斜体
            "strikeThrough", // 删除线
            "foreColor", // 文字颜色
            "backColor", // 背景颜色
            "justify", // 对齐方式
            "tableHeader",
            "uploadImage",
            "editVideoSize",
            "uploadVideo",
            "insertVideo",
            "insertTable",
            "fullScreen",
            "code",
            "codeBlock",
            "divider",
            "color",
            "justifyLeft",
            "justifyRight",
            "justifyCenter",
            "insertImage",
            "bgColor",
            "emotion",
            "insertImage",
            "editImage",
            "deleteImage",
            "divider",
            "emotion",
            "group-more-style",
            "group-image",
            "blockquote",
        ];
        const editorConfig = { placeholder: "请输入内容..." };

        // 组件销毁时，也及时销毁编辑器，重要！
        onBeforeUnmount(() => {
            const editor = editorRef.value;
            if (editor == null) return;

            editor.destroy();
        });

        // 编辑器回调函数
        const handleCreated = (editor) => {
            editorRef.value = editor; // 记录 editor 实例，重要！
        };
        const handleChange = (editor) => {
            emit("update:modelValue", editor.getHtml());
        };
        const handleDestroyed = (editor) => {
            console.log("destroyed", editor);
        };
        const handleFocus = (editor) => {
            console.log("focus", editor);
        };
        const handleBlur = (editor) => {
            console.log("blur", editor);
        };
        const customAlert = (info, type) => {
            alert(`【自定义提示】${type} - ${info}`);
        };
        const customPaste = (editor, event, callback) => {
            // 自定义插入内容
            editor.insertText("xxx");
            //callback(false); // 返回 false ，阻止默认粘贴行为
            callback(true); // 返回 true ，继续默认的粘贴行为
        };

        const insertText = () => {
            const editor = editorRef.value;
            if (editor == null) return;
            editor.insertText("hello world");
        };

        const printHtml = () => {
            const editor = editorRef.value;
            if (editor == null) return;
        };

        const disable = () => {
            const editor = editorRef.value;
            if (editor == null) return;
            editor.disable();
        };

        return {
            editorRef,
            mode: "simple",
            valueHtml,
            toolbarConfig,
            editorConfig,
            handleCreated,
            handleChange,
            handleDestroyed,
            handleFocus,
            handleBlur,
            customAlert,
            customPaste,
            insertText,
            printHtml,
            disable,
        };
    },
};
</script>
