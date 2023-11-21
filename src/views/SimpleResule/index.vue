<script lang="ts" setup>
import { ref } from "vue";
import type { baseInfo, JobExprices } from "./common";
import { JobFormOption, educationOption, infoGroup } from "./fromOptions";
import { createFormData } from "./utils/index";
import BaseFrom from "./components/BaseFrom.vue";
import DynamicFrom from "./components/DynamicFrom.vue";
// 基本信息
const baseInfo = ref<baseInfo>({});
// 工作经历
const jobExprices = ref<JobExprices[]>([]);
// 教育信息
const educationInfos = ref([]);
// 添加经历
const addExprice = (flag) => {
    let defaultInfo = {};
    if (flag === infoGroup.educationInfo) {
        defaultInfo = createFormData(educationOption);
        // @ts-ignore
        educationInfos.value.push(defaultInfo);
    } else if (flag === infoGroup.projectInfo) {
        defaultInfo = createFormData(JobFormOption);
        // @ts-ignore
        jobExprices.value.push(defaultInfo);
    }
};
</script>

<template>
    <div class="">
        <!-- 基本信息表单填写 -->
        <BaseFrom v-model="baseInfo" />
        <!-- 工作经历表单填写 -->
        <div class="flex flex-col gap-4">
            <div>
                <h1>工作经历</h1>
                <div v-for="(item, index) in jobExprices" :key="index">
                    <DynamicFrom
                        :formOptions="JobFormOption"
                        v-model="jobExprices[index]"
                    />
                </div>
                <el-button @click="addExprice(infoGroup.projectInfo)"
                    >添加新的经历</el-button
                >
            </div>

            <div>
                <h1>教育经历</h1>
                <div v-for="(item, index) in educationInfos" :key="index">
                    <DynamicFrom
                        :formOptions="educationOption"
                        v-model="educationInfos[index]"
                    />
                </div>
                <el-button @click="addExprice(infoGroup.educationInfo)"
                    >添加新的经历</el-button
                >
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped></style>
