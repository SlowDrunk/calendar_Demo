<script lang="ts" setup>
import type { FromItem } from "./comon/index";
import { ref, defineProps, withDefaults } from "vue";
import DynamicFrom from "./components/DynamicFrom.vue";
const fromOptions: FromItem[] = [
    {
        label: "用户名",
        prop: "username",
        component: {
            comName: "el-input",
            type: "text",
            placeholder: "请输入用户名",
        },
    },
    {
        label: "密码",
        prop: "passWord",
        component: {
            comName: "el-input",
            type: "text",
            clearable: true,
            placeholder: "请输入密码",
        },
    },
    {
        label: "多选",
        prop: "checked",
        component: {
            comName: "el-checkbox",
            type: "text",
            placeholder: "请输入密码",
        },
    },
    {
        label: "下拉",
        prop: "select",
        component: {
            comName: "el-select",
            placeholder: "请输入密码",
            options: [
                { value: "1", label: "选项1" },
                { value: "2", label: "选项2" },
            ],
        },
    },
    {
        label: "数字输入",
        prop: "number",
        component: {
            comName: "el-input-number",
            placeholder: "请输入密码",
            max: 20,
            min: 0,
            step: 0.5,
        },
    },
    {
        label: "日期选择",
        prop: "time",
        component: {
            comName: "el-date-picker",
            type: "date",
            format: "YYYY/MM/DD",
            valueFormat: "YYYY/MM/DD",
        },
    },
];
const testObj = ref({
    username: "",
    passWord: "",
    checked: false,
    number: 0,
    select:"",
    time: "",
});
const fromRules = {
    passWord: [
        {
            required: true,
            message: "Please input Activity name",
            trigger: "blur",
        },
        { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
    ],
};
</script>

<template>
    <div class="mr-auto">
        <DynamicFrom
            v-model="testObj"
            ref="FromRef"
            :fromOptions="fromOptions"
            :rules="fromRules"
        />
    </div>
    <div>
        {{ testObj.username }}
        {{ testObj.passWord }}
        {{ testObj.checked }}
        {{ testObj.select }}
        {{ testObj.number }}
        {{ testObj.time }}
    </div>
</template>

<style lang="less" scoped></style>
