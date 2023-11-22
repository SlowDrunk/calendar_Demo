<script lang="ts" setup>
import DynamicFrom from "./DynamicFrom.vue";
import { JobFormOption, infoGroup } from "../fromOptions";
import { useFromInfo, jobExprices } from "../hooks";
import draggable from "vuedraggable";

const { addExprice } = useFromInfo();

</script>

<template>
    <div>
        <h1>工作经历</h1>
        <draggable
            group="site"
            animation="300"
            :list="jobExprices"
            item-key="name"
            class="flex flex-col gap-4"
            ghost-class="ghost"
            handle=".mover"
        >
            <template #item="{ element, index }">
                <DynamicFrom
                    :infoGroup="infoGroup.educationInfo"
                    :formOptions="JobFormOption"
                    v-model="jobExprices[index]"
                />
            </template>
        </draggable>
        <el-button @click="addExprice(infoGroup.projectInfo)">添加新的经历</el-button
        >
    </div>
</template>

<style lang="less" scoped></style>
