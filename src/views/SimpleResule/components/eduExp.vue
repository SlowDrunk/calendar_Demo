<script lang="ts" setup>
import DynamicFrom from "./DynamicFrom.vue";
import { educationOption, infoGroup } from "../fromOptions";
import { useFromInfo, educationInfos } from "../hooks";
import draggable from "vuedraggable";

const { addExprice } = useFromInfo();
</script>

<template>
    <div class="">
        <div>
            <h1>教育经历</h1>
            <draggable
                group="site"
                animation="300"
                :list="educationInfos"
                item-key="name"
                class="flex flex-col gap-4"
                ghost-class="ghost"
                handle=".mover"
            >
                <template #item="{ element, index }">
                    <DynamicFrom
                        :infoGroup="infoGroup.educationInfo"
                        :formOptions="educationOption"
                        v-model="educationInfos[index]"
                    />
                </template>
            </draggable>
            <el-button @click="addExprice(infoGroup.educationInfo)"
                >添加新的经历</el-button
            >
        </div>
    </div>
</template>

<style lang="less" scoped></style>
