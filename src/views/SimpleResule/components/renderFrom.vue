<script lang="ts" setup>
import DynamicFrom from "./DynamicFrom.vue";
import { getFormOptions } from "../utils/index";
import { useFromInfo, resumeData } from "../hooks";
import { InfoGroupMapping } from "../fromOptions";
import draggable from "vuedraggable";

interface IProps {
    infoGroup: string;
    data: any[];
}
const Props = withDefaults(defineProps<IProps>(), {
    infoGroup: "",
    data: () => [],
});

const { addExpriceItem } = useFromInfo();

const curFormOption = getFormOptions(Props.infoGroup);
console.log(Props.infoGroup);
console.log(resumeData.value[InfoGroupMapping[Props.infoGroup].dataKey]);
</script>

<template>
    <div>
        <h1>工作经历</h1>
        <draggable
            group="site"
            animation="300"
            :list="resumeData[InfoGroupMapping[Props.infoGroup].dataKey]"
            item-key="name"
            class="flex flex-col gap-4"
            ghost-class="ghost"
            handle=".mover"
        >
            <template #item="{ element, index }">
                <DynamicFrom
                    :infoGroup="Props.infoGroup"
                    :formOptions="curFormOption"
                    v-model="resumeData[Props.infoGroup][index]"
                />
            </template>
        </draggable>
        <el-button @click="addExpriceItem(Props.infoGroup)"
            >添加新的经历</el-button
        >
    </div>
</template>

<style lang="less" scoped></style>
