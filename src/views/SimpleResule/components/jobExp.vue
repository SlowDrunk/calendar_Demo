<script lang="ts" setup>
import DynamicFrom from "./DynamicFrom.vue";
import type { JobExprices } from "../common";
import { JobFormOption, infoGroup } from "../fromOptions";
import { useFromInfo } from "../hooks";

const { addExprice } = useFromInfo();
interface IProps {
    jobExprices: JobExprices[];
}
const Props = withDefaults(defineProps<IProps>(), {
    jobExprices: () => [],
});

const emit = defineEmits(["addExprice", "deleteExprice"]);
</script>

<template>
    <div>
        <h1>工作经历</h1>
        <div v-for="(item, index) in Props.jobExprices" :key="index">
            <DynamicFrom
                :infoGroup="infoGroup.projectInfo"
                :formOptions="JobFormOption"
                v-model="jobExprices[index]"
            />
        </div>
        <el-button @click="addExprice(infoGroup.projectInfo)"
            >添加新的经历</el-button
        >
    </div>
</template>

<style lang="less" scoped></style>
