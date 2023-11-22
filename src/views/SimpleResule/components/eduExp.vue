<script lang="ts" setup>
import DynamicFrom from "./DynamicFrom.vue";
import { educationOption, infoGroup } from "../fromOptions";

interface IProps {
    educationInfos: any[];
}

const Props  = withDefaults(defineProps<IProps>(),{
    educationInfos: () => ([]),
})

const emit = defineEmits(["addExprice", "deleteExprice"]);

</script>

<template>
    <div class="">
        <div>
            <h1>教育经历</h1>
            <div v-for="(item, index) in Props.educationInfos" :key="index">
                <DynamicFrom :formOptions="educationOption" v-model="Props.educationInfos[index]" />
            </div>
            <el-button @click="emit('addExprice',infoGroup.educationInfo)">添加新的经历</el-button>
        </div>
    </div>
</template>

<style lang="less" scoped>
</style>