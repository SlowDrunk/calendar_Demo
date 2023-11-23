<script lang="ts" setup>
import DynamicFrom from "./DynamicFrom.vue";
import { projectExperienceOption, infoGroup } from "../fromOptions";
import { useFromInfo, projectExprices } from "../hooks";
import draggable from "vuedraggable";

const { addExprice } = useFromInfo();
</script>

<template>
    <div class="">
        <div>
            <h1>项目经历</h1>
            <draggable
                group="site"
                animation="300"
                :list="projectExprices"
                item-key="name"
                class="flex flex-col gap-4"
                ghost-class="ghost"
                handle=".mover"
            >
                <template #item="{ element, index }">
                    <DynamicFrom
                        :infoGroup="infoGroup.projectInfo"
                        :formOptions="projectExperienceOption"
                        v-model="projectExprices[index]"
                    />
                </template>
            </draggable>
            <el-button @click="addExprice(infoGroup.projectInfo)"
                >添加新的经历</el-button
            >
        </div>
    </div>
</template>

<style lang="less" scoped></style>
