<script lang="ts" setup>
import { markRaw, ref } from "vue";
import type { ShowOptionMap } from "./common";
import { infoGroup, baseInfoOption, } from "./fromOptions";
import BaseFrom from "./components/BaseFrom.vue";
import Navigation from "./components/navigation.vue";
import JobExp from "./components/jobExp.vue";
import EduExp from "./components/eduExp.vue";
import ModuleManagement from "./components/ModuleManagement.vue";
import { jobExprices, baseInfo, educationInfos } from "./hooks";
import { ElDialog } from "element-plus"

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
    if (!flag) return;
    currentShowOption.value = showOptionMap[flag as keyof ShowOptionMap];
};
const isShowManagement = ref(false);
// 显示模块管理
const showManagement = () => {
    isShowManagement.value = true;
}
</script>

<template>
    <div class="flex mb-8">
        <div class="w-48 px-4">
            <Navigation @changeShowOption="changeShowOption" @showManagement="showManagement"></Navigation>
        </div>
        <div class="w-[100%] flex flex-col gap-y-4">
            <component :is="currentShowOption.components" v-model="currentShowOption.modelValue"
                v-bind="currentShowOption.props"></component>
        </div>
    </div>


    <div class="border-2">
        <div>
            {{ baseInfo }}
        </div>
        <div>
            {{ jobExprices }}</div>
        <div>
            {{ educationInfos }}
        </div>
    </div>
    <ElDialog v-model="isShowManagement" :draggable="true">
        <ModuleManagement></ModuleManagement>
    </ElDialog>
</template>

<style lang="less" scoped></style>
