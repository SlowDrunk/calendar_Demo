<script lang="ts" setup>
import { ref, computed } from "vue";
import type { JobExprices, FromItem } from "../common";
import { infoGroup } from "../fromOptions";
import { useVModel } from "@vueuse/core";
import MyEditor from "../../DynamicForm/components/MyEditor.vue";
import { c } from "vitest/dist/reporters-5f784f42.js";
import { useFromInfo } from "../hooks";
const { deleteExprice } = useFromInfo();
interface IProps {
    modelValue: any;
    formOptions: FromItem[];
    infoGroup: string;
}
const Props = withDefaults(defineProps<IProps>(), {
    modelValue: () => ({}),
    formOptions: () => [],
    infoGroup: " ",
});
const emit = defineEmits(["update:modelValue"]);
const formData = useVModel(Props, "modelValue", emit);
// 编辑&删除
const isShowFrom = ref(false);
const showForm = () => {
    isShowFrom.value = true;
};
const hideForm = () => {
    isShowFrom.value = false;
};
// 根据分组计算头部数据
const renderDefaultTitle = computed(() => {
    switch (Props.formOptions[0].infoGroup) {
        case infoGroup.educationInfo:
            return `${formData.value.schoolName} ${formData.value.level} ${formData.value.schoolTag} ${formData.value.startTime}-${formData.value.endTime}`;
        case infoGroup.projectInfo:
            return `${formData.value.companyName} ${formData.value.roleName} ${formData.value.startTime}-${formData.value.endTime}`;
    }
});
// 删除数据
const deleteItem = () => {
    deleteExprice(Props.infoGroup, Props.modelValue);
};
</script>

<template>
    <div class="border p-3">
        <!-- 默认展示部分 -->
        <div class="flex flex-row items-center p-[16px]" v-if="!isShowFrom">
            <div
                class="w-[25px] h-[100%] flex items-center justify-center mr-2"
            >
                <span
                    class="w-[25px] h-[25px] bg-slate-400 cursor-pointer"
                ></span>
            </div>
            <div class="flex flex-col h-[100%] justify-between">
                <div class="font-bold">{{ renderDefaultTitle }}</div>
                <div class="text-[#ccc]">
                    <span>{{ formData.jobCity }}</span>
                    <span>{{ formData.jobTimeRange }}</span>
                </div>
            </div>
            <div class="ml-[auto]">
                <el-button type="primary" @click="showForm">编辑</el-button>
                <el-button type="danger" @click="deleteItem">删除</el-button>
            </div>
        </div>
        <div v-if="isShowFrom">
            <!-- 表单 -->
            <div class="">
                <el-form :model="formData" label-width="120px">
                    <div class="grid grid-cols-2 gap-6">
                        <el-form-item
                            v-for="(item, index) in formOptions"
                            :key="index"
                            v-bind="item"
                        >
                            <component
                                :is="item.component.comName"
                                v-bind="item.component"
                                v-model="formData[item.prop]"
                                style="width: 100%"
                            >
                                <!-- 下拉框配置项 -->
                                <el-option
                                    v-if="
                                        item.component.comName === 'el-select'
                                    "
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
                                        item.component.comName ===
                                        'el-radio-group'
                                    "
                                    >{{ op.label }}</el-radio
                                >
                            </component>
                        </el-form-item>
                    </div>
                </el-form>
            </div>
            <!-- 富文本 -->
            <div class="editor">
                <MyEditor v-model="formData.jobDesc" />
            </div>
            <el-button type="success" @click="hideForm">关闭并继续</el-button>
        </div>
    </div>
</template>

<style lang="less" scoped></style>
