<script lang="ts" setup>
import type { baseInfo } from "../common";
import { useVModel } from "@vueuse/core";

interface IProps {
    modelValue: baseInfo;
    baseInfoOption: any;
}
const Props = withDefaults(defineProps<IProps>(), {
    modelValue: () => ({} as baseInfo),
    baseInfoOption: () => ({}),
});
const emit = defineEmits(["update:modelValue"]);
const formData: any = useVModel(Props, "modelValue", emit);

// 添加表单项
const addFormitem = (option:any) => {
    option.status = 1
};

</script>

<template>
    <div class="mb-8">
        <div class="text-lg font-bold">基本信息</div>
        <div class="mb-4">包含你的个人信息及联系方式</div>
        <!-- 基本信息表单 -->
        <el-form :model="formData" label-width="120px">
            <div class="grid grid-cols-2 gap-6">
                <template v-for="option in Props.baseInfoOption" :key="option">
                    <el-form-item :label="option.label" v-if="option.status === 1">
                        <el-input :placeholder="option.component.placeholder" v-model="formData[option.prop]" />
                    </el-form-item>
                </template>
            </div>
        </el-form>
        <!-- 添加表单 -->
        <template v-for="option in Props.baseInfoOption" :key="option">
            <el-button plain v-show="option.status === 0" class="ml-0 mr-[10px]" @click="addFormitem(option)">+ {{
                option.label }}</el-button>
        </template>
    </div>
</template>

<style lang="less" scoped></style>
