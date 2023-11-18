<script lang="ts" setup>
import type { FromItem } from "./comon/index";
import { ref } from "vue";
import DynamicFrom from "./components/DynamicFrom.vue";
const fromOptions = ref<FromItem[]>([
    {
        label: "姓名",
        prop: "username",
        status: 1,
        class: "col-span-2",
        component: {
            comName: "el-input",
            type: "text",
            placeholder: "请输入姓名",
        },
    },
    {
        label: "电话",
        prop: "phoneNumber",
        status: 1,
        component: {
            comName: "el-input",
            type: "text",
            clearable: true,
            placeholder: "请输入电话",
        },
    },
    {
        label: "邮箱",
        prop: "email",
        status: 1,
        component: {
            comName: "el-input",
            type: "text",
            placeholder: "请输入邮箱",
        },
    },
    {
        label: "现居城市",
        prop: "city",
        status: 1,
        component: {
            comName: "el-input",
            type: "text",
            placeholder: "请输入现居城市",
        },
    },
    {
        label: "个人网站",
        prop: "website",
        status: 0,
        component: {
            comName: "el-input",
            type: "text",
            placeholder: "请输入个人网站",
        },
    },
    {
        label: "微信",
        prop: "wechat",
        status: 0,
        component: {
            comName: "el-input",
            type: "text",
            placeholder: "请输入个人微信",
        },
    },
    {
        label: "年龄或生日",
        prop: "birth",
        status: 1,
        component: {
            comName: "el-date-picker",
            format: "YYYY/MM/DD",
            valueFormat: "YYYY/MM/DD",
        },
    },
    {
        label: "当前状态",
        prop: "currentStatus",
        status: 1,
        component: {
            comName: "el-select",
            multiple: true,
            placeholder: "请选择当前状态",
            options: [
                { label: "离职", value: "离职" },
                { label: "在职", value: "在职" },
                { label: "待入职", value: "待入职" },
                { label: "在校生", value: "在校生" },
                { label: "应届生", value: "应届生" },
            ],
        },
    },
    {
        label: "意向城市",
        prop: "wantCity",
        status: 1,
        component: {
            comName: "el-input",
            type: "text",
            placeholder: "请输入个人意向城市",
        },
    },
    {
        label: "性别",
        prop: "sex",
        status: 0,
        component: {
            comName: "el-radio-group",
            options: [
                { label: "男", value: "男" },
                { label: "女", value: "女" },
            ],
        },
    },
    {
        label: "身高",
        prop: "height",
        status: 0,
        component: {
            comName: "el-input",
            type: "text",
            placeholder: "如：160cm",
        },
    },
    {
        label: "民族",
        prop: "nation",
        status: 0,
        component: {
            comName: "el-input",
            type: "text",
            placeholder: "如：汉族",
        },
    },
    {
        label: "籍贯",
        prop: "location",
        status: 0,
        component: {
            comName: "el-input",
            type: "text",
            placeholder: "请输入籍贯",
        },
    },
    {
        label: "婚姻状况",
        prop: "marrayed",
        status: 0,
        component: {
            comName: "el-radio-group",
            options: [
                { label: "已婚", value: "已婚" },
                { label: "未婚", value: "未婚" },
            ],
        },
    },
    {
        label: "政治面貌",
        prop: "politicalStatus",
        status: 0,
        component: {
            comName: "el-select",
            options: [
                { label: "党员", value: "党员" },
                { label: "预备党员", value: "预备党员" },
                { label: "群众", value: "群众" },
            ],
        },
    },
]);

const fromRules = {
    phoneNumber: [
        { required: false, message: "请输入电话号码", trigger: "blur" },
        {
            pattern: /^1[3-9]\d{9}$/, // 以1开头，后面跟3-9的数字，共11位
            message: "请输入正确的电话号码",
            trigger: "blur",
        },
    ],
    email: [
        { required: false, message: "请输入邮箱", trigger: "blur" },
        {
            type: "email",
            message: "请输入正确的邮箱格式",
            trigger: "blur",
        },
    ],
    website: [
        { required: false, message: "请输入网站", trigger: "blur" },
        {
            type: "url",
            message: "请输入正确的网站格式",
            trigger: "blur",
        },
    ],
};
const testObj = ref({
    username: "张三",
    phoneNumber: "13289338674",
    email: "",
    city: "",
    website: "",
    wechat: "",
    birth: "",
    currentStatus: [],
    wantCity: "",
});
const setFromOptions = (data: any) => {
    const index = fromOptions.value.findIndex((ele) => ele.prop == data.prop);
    fromOptions.value[index] = data;
};
</script>

<template>
    <div class="mr-auto w-[579px] border p-3">
        <DynamicFrom
            v-model="testObj"
            ref="FromRef"
            @upDataFromOptions="setFromOptions"
            :fromOptions="fromOptions"
            :rules="fromRules"
        />
    </div>
    <div class="text-left flex flex-col gap-8 w-[600px] border p-3.5">
        <div>姓名：{{ testObj.username }}</div>
        <div>电话：{{ testObj.phoneNumber }}</div>
        <div>邮箱：{{ testObj.email }}</div>
        <div>个人网站：{{ testObj.website }}</div>
        <div>微信：{{ testObj.wechat }}</div>
        <div>生日：{{ testObj.birth }}</div>
        <div>当前状态：{{ testObj.currentStatus.join("、") }}</div>
        <div>意向城市：{{ testObj.wantCity }}</div>
    </div>
</template>

<style lang="less" scoped></style>
