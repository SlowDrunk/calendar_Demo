<script lang="ts" setup>
import { markRaw, ref } from "vue";
import type { baseInfo, JobExprices, ShowOptionMap } from "./common";
import { JobFormOption, educationOption, infoGroup, baseInfoOption } from "./fromOptions";
import { createFormData } from "./utils/index";
import BaseFrom from "./components/BaseFrom.vue";
import Navigation from "./components/navigation.vue";
import JobExp from "./components/jobExp.vue";
import EduExp from "./components/eduExp.vue";

// 基本信息
const baseInfo = ref<baseInfo>({});
// 工作经历
const jobExprices = ref<JobExprices[]>([]);
// 教育信息
const educationInfos = ref([]);
// 添加经历
const addExprice = (flag) => {
    console.log(flag)
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

// 组件映射
const showOptionMap: ShowOptionMap = {
    [infoGroup.baseInfo]: {
        components: markRaw(BaseFrom),
        modelValue: baseInfo,
        props: {
            baseInfoOption: baseInfoOption,
        },
    },
    [infoGroup.projectInfo]: {
        components: markRaw(JobExp),
        props: {
            jobExprices: jobExprices,
        },
    },
    [infoGroup.educationInfo]: {
        components: markRaw(EduExp),
        props: {
            educationInfos: educationInfos,
        },
    },
};
// 当前显示组件
const currentShowOption = ref(showOptionMap[infoGroup.baseInfo]);
// 切换组件
const changeShowOption = (flag: string) => {
    currentShowOption.value = showOptionMap[flag as keyof ShowOptionMap];
};

// 删除经历
const deleteExprice = (flag: string, item: any) => {
    if (flag === infoGroup.projectInfo) {
        const index = jobExprices.value.indexOf(item);
        if (index >= 0) {
            jobExprices.value.splice(index, 1);
        }
    } else if (flag === infoGroup.educationInfo) {
        const index = educationInfos.value.indexOf(item);
        if (index >= 0) {
            educationInfos.value.splice(index, 1);
        }
    }
};
</script>

<template>
    <div class="w-48 px-4">
        <Navigation @changeShowOption="changeShowOption"></Navigation>
    </div>
    <div class="flex flex-col gap-y-4">
        <component :is="currentShowOption.components" v-model="currentShowOption.modelValue"
            v-bind="currentShowOption.props" @addExprice="addExprice" @deleteExprice="deleteExprice"></component>

        <div>{{ baseInfo }}</div>
        <div>{{ jobExprices }}</div>
        <div>{{ educationInfos }}</div>
    </div>
</template>

<style lang="less" scoped></style>
