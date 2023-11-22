<script lang="ts" setup>
import { markRaw, ref } from "vue";
import type { baseInfoType, JobExprices, ShowOptionMap } from "./common";
import {
    JobFormOption,
    educationOption,
    infoGroup,
    baseInfoOption,
} from "./fromOptions";
import { createFormData } from "./utils/index";
import BaseFrom from "./components/BaseFrom.vue";
import Navigation from "./components/navigation.vue";
import JobExp from "./components/jobExp.vue";
import EduExp from "./components/eduExp.vue";
import { jobExprices, baseInfo, educationInfos } from "./hooks";

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
            infoGroup: infoGroup.projectInfo,
            jobExprices: jobExprices,
        },
    },
    [infoGroup.educationInfo]: {
        components: markRaw(EduExp),
        props: {
            infoGroup: infoGroup.educationInfo,
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
</script>

<template>
    <div class="w-48 px-4">
        <Navigation @changeShowOption="changeShowOption"></Navigation>
    </div>
    <div class="flex flex-col gap-y-4">
        <component
            :is="currentShowOption.components"
            v-model="currentShowOption.modelValue"
            v-bind="currentShowOption.props"
        ></component>

        <div>{{ baseInfo }}</div>
        <div>{{ jobExprices }}</div>
        <div>{{ educationInfos }}</div>
    </div>
</template>

<style lang="less" scoped></style>
