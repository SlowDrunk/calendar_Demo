<script lang="ts" setup>
import type { baseInfo } from "../common";
import { useVModel } from "@vueuse/core";

interface IProps {
    modelValue: baseInfo;
}
const Props = withDefaults(defineProps<IProps>(), {
    modelValue: () => ({} as baseInfo),
});
const emit = defineEmits(["update:modelValue"]);
const formData = useVModel(Props, "modelValue", emit);
</script>

<template>
    <div class="">
        <div class="text-lg font-bold">基本信息</div>
        <div class="mb-4">包含你的个人信息及联系方式</div>
        <!-- 基本信息表单 -->
        <el-form :model="formData" label-width="120px">
            <div class="grid grid-cols-2 gap-6">
                <el-form-item label="职位名称">
                    <el-input
                        placeholder="请填写职位名称"
                        v-model="formData.roleName"
                    />
                </el-form-item>
                <el-form-item label="个人头像">
                    <img src="" alt="" />
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input
                        placeholder="请填写姓名"
                        v-model="formData.name"
                    />
                </el-form-item>
                <el-form-item label="手机号码">
                    <el-input
                        placeholder="请填写手机号码"
                        v-model="formData.phoneNumber"
                    />
                </el-form-item>
                <el-form-item label="出生日期">
                    <el-date-picker
                        v-model="formData.birth"
                        type="date"
                        placeholder="请选择出生年月"
                        format="YYYY-MM"
                        value-format="YYYY-MM"
                        clearable
                    />
                </el-form-item>
                <el-form-item label="工作地点">
                    <el-input
                        placeholder="请填写工作地点"
                        v-model="formData.jobCity"
                    />
                </el-form-item>
                <el-form-item label="电子邮箱">
                    <el-input
                        placeholder="请填写电子邮箱"
                        v-model="formData.email"
                    />
                </el-form-item>
                <el-form-item label="微信号">
                    <el-input
                        placeholder="请填写微信号"
                        v-model="formData.wechat"
                    />
                </el-form-item>
            </div>
        </el-form>
    </div>
</template>

<style lang="less" scoped></style>
