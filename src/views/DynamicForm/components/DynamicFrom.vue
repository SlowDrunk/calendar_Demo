<script lang="ts" setup>
import { ref, watch } from "vue";
import type { FromItem } from "../comon/index";
import { useVModel } from "@vueuse/core";
import MyEditor from "../components/MyEditor.vue";

interface IProps {
    fromOptions: FromItem[];
    modelValue: any;
    rules: any;
    infoGroup: string;
}

const Props = withDefaults(defineProps<IProps>(), {
    fromOptions: () => [],
    modelValue: () => {},
    rules: () => {},
    infoGroup: () => "baseInfo",
});

const emit = defineEmits([
    "update:modelValue",
    "upDataFromOptions",
    "setEditorContent",
]);

const formData = useVModel(Props, "modelValue", emit);

// 修改表单项状态
const updateCom = (item: FromItem | any) => {
    item.status = 1;
    emit("upDataFromOptions", item);
};
// 富文本内容
const editorContent = ref("");
watch(
    () => editorContent.value,
    (value) => {
        if (value) {
            emit("setEditorContent", value);
        }
    }
);
</script>

<template>
    <div class="w-[100%]">
        <div>
            <h1 class="my-4">基本信息</h1>
            <el-form
                :model="formData"
                label-position="top"
                :rules="rules"
                label-width="100px"
            >
                <div class="grid grid-cols-2 gap-6">
                    <el-form-item
                        v-for="(item, index) in fromOptions"
                        :class="item.class"
                        :key="index"
                        :rules="rules[item.prop]"
                        v-bind="item"
                        v-show="
                            item.infoGroup === infoGroup && item.status === 1
                        "
                    >
                        <component
                            :is="item.component.comName"
                            v-bind="item.component"
                            v-model="formData[item.prop]"
                            style="width: 100%"
                        >
                            <!-- 下拉框配置项 -->
                            <el-option
                                v-if="item.component.comName === 'el-select'"
                                v-for="op in item.component.options"
                                v-bind="op"
                            />
                            <!-- 多选框组 -->
                            <el-checkbox
                                v-for="op in item.component.options"
                                v-bind="op"
                                v-if="
                                    item.component.comName ===
                                    'el-checkbox-group'
                                "
                            />
                            <!-- 单选框组 -->
                            <el-radio
                                v-for="op in item.component.options"
                                v-bind="op"
                                v-if="
                                    item.component.comName === 'el-radio-group'
                                "
                                >{{ op.label }}</el-radio
                            >
                        </component>
                    </el-form-item>
                </div>
            </el-form>
        </div>
        <div
            v-if="fromOptions.filter(
                        (comIntance:any) => comIntance.status === 0 && comIntance.infoGroup === infoGroup
                    ).length >0"
        >
            <h1 class="my-4">添加信息</h1>
            <div
                class="flex justify-start is-align-right flex-row flex-wrap gap-1"
            >
                <el-button
                    plain
                    v-for="item in fromOptions.filter(
                        (comIntance:any) => comIntance.status === 0 && comIntance.infoGroup === infoGroup
                    )"
                    @click="updateCom(item)"
                    class="ml-0 mr-[10px]"
                    >+ {{ item.label }}</el-button
                >
            </div>
        </div>
        <!-- 富文本框 -->
        <div
            class="editor"
            v-show="
                Props.infoGroup === 'educationInfo' ||
                Props.infoGroup === 'projectInfo'
            "
        >
            <MyEditor v-model="editorContent" />
        </div>
    </div>
</template>

<style lang="less" scoped></style>
