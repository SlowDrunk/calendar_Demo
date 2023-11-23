<script lang="ts" setup>
import { ref } from "vue";
import BaseFrom from "./components/BaseFrom.vue";
import Navigation from "./components/navigation.vue";
import ModuleManagement from "./components/ModuleManagement.vue";
import renderFrom from "./components/renderFrom.vue";
import { infoGroup, optionData } from "./fromOptions";
import { baseInfo, resumeData, useFromInfo } from "./hooks/index";
import { ElDialog } from "element-plus";
const isShowManagement = ref(false);
const showManagement = () => {
    isShowManagement.value = true;
};
</script>

<template>
    <div class="flex mb-8">
        <div class="w-48 px-4">
            <Navigation @showManagement="showManagement"></Navigation>
        </div>
        <div>
            <BaseFrom
                :baseInfoOption="optionData.baseInfoOption"
                v-model="baseInfo"
            />
            <renderFrom
                :infoGroup="infoGroup.educationExp"
                :data="resumeData.eduExp"
            />
        </div>
    </div>

    <ElDialog v-model="isShowManagement" :draggable="true">
        <ModuleManagement></ModuleManagement>
    </ElDialog>
</template>

<style lang="less" scoped></style>
