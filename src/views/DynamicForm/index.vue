<script lang="ts" setup>
import type { FromItem } from "./comon/index";
import { ref } from "vue";
import DynamicFrom from "./components/DynamicFrom.vue";
import { baseOptions, createFormData, infoGroup } from "./formOptions";

// 判断是否显示管道分隔符
const generateAttribute = (...values: any) =>
    values.filter(Boolean).join(" | ");
// 设置添加状态的回调
const setFromOptions = (data: any) => {
    const foundElement = fromOptions.value.find(
        (ele) => ele.prop === data.prop
    );

    if (foundElement) {
        Object.assign(foundElement, data);
    } else {
        fromOptions.value.push(data);
    }
};
// 表单配置
const fromOptions = ref<FromItem[]>(baseOptions);
// 校验规则
const fromRules = ref({
    phoneNumber: [
        { required: true, message: "请输入电话号码", trigger: "blur" },
        {
            pattern: /^1[3-9]\d{9}$/, // 以1开头，后面跟3-9的数字，共11位
            message: "请输入正确的电话号码",
            trigger: "blur",
        },
    ],
    email: [
        { required: true, message: "请输入邮箱", trigger: "blur" },
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
});
const optionFlag = ref<string>("baseInfo");
// 切换表单项
const handleFromOptions = (flag: string) => {
    optionFlag.value = flag;
};
const formData = ref<any>(createFormData(baseOptions));
</script>

<template>
    <!-- 动态表单 -->
    <div class="mr-auto w-[579px] border p-3">
        <DynamicFrom
            v-model="formData"
            ref="FromRef"
            @upDataFromOptions="setFromOptions"
            :fromOptions="fromOptions"
            :rules="fromRules"
            :infoGroup="optionFlag"
        />
    </div>
    <!-- 信息展示 -->
    <div class="text-left flex flex-col gap-8 w-[600px] border p-3.5">
        <!-- 基本信息 -->
        <div
            class="flex flex-col items-center gap-2"
            @click="handleFromOptions(infoGroup.baseInfo)"
        >
            <div class="name text-2xl font-bold">
                {{ formData.username ? formData.username : "姓名" }}
            </div>
            <div v-if="formData.phoneNumber || formData.email">
                {{ generateAttribute(formData.phoneNumber, formData.email) }}
            </div>
            <div>
                {{
                    generateAttribute(
                        formData.birth,
                        formData.sex,
                        formData.city,
                        formData.location,
                        formData.nation,
                        formData.height,
                        formData.city,
                        formData.politicalStatus,
                        formData.marrayed
                    )
                }}
            </div>
            <div>
                {{ generateAttribute(formData.wechat, formData.website) }}
            </div>
            <div v-if="formData.currentStatus || formData.wantCity">
                {{
                    generateAttribute(formData.currentStatus, formData.wantCity)
                }}
            </div>
        </div>
        <!-- 教育信息 -->
        <div
            class="flex flex-col items-center gap-2"
            @click="handleFromOptions(infoGroup.educationInfo)"
        >
            <h1>教育经历</h1>
            <!-- 学校名称 -->
            <div
                v-if="formData.schoolName"
                class="flex flex-row items-start justify-start font-bold"
            >
                <span>{{ formData.schoolName }}</span>
                <div class="tags">
                    <el-tag
                        v-for="item in formData.schoolTag"
                        :key="item"
                        class="ml-2"
                        >{{ item }}</el-tag
                    >
                </div>
            </div>
            <!-- 学校信息 -->
            <div
                v-if="
                    formData.profession ||
                    formData.level ||
                    formData.college ||
                    formData.schoolCity
                "
                class="w-[100%] flex flex-row justify-between"
            >
                <span>
                    {{
                        `${formData.profession} ${formData.level} ${formData.college}`
                    }}</span
                >
                <span>{{ formData.schoolCity }}</span>
            </div>
            <!-- 校园经历 -->
            <div></div>
        </div>
        <!-- 项目信息 -->
        <div
            class="flex flex-col items-center gap-2"
            @click="handleFromOptions(infoGroup.projectInfo)"
        >
            <h1>开源作品及项目</h1>
        </div>
    </div>
</template>

<style lang="less" scoped></style>
