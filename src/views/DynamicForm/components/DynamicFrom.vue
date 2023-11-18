<script lang="ts" setup>
import type { FromItem } from "../comon/index";
import { useVModel } from "@vueuse/core";

interface IProps {
    fromOptions: FromItem[];
    modelValue: any;
    rules: any;
}
const Props = withDefaults(defineProps<IProps>(), {
    fromOptions: () => [],
    modelValue: () => {},
    rules: () => {},
});

const emit = defineEmits(["update:modelValue", "upDataFromOptions"]);
const formData = useVModel(Props, "modelValue", emit);
//添加状态
const updateCom = (item: FromItem | any) => {
    item.status = 1;
    emit("upDataFromOptions", item);
};
</script>

<template>
    <div class="w-[100%]">
        <div>
            <h1 class="my-4">基本信息</h1>
            <el-form
                :model="formData"
                label-position="top"
                :rules="rules"
                label-width="100px"
            >
                <div class="grid grid-cols-2 gap-6">
                    <el-form-item
                        v-for="(item, index) in fromOptions.filter(
                            (comIntance:any) => comIntance.status === 1
                        )"
                        :class="item.class"
                        :key="index"
                        :rules="rules[item.prop]"
                        v-bind="item"
                    >
                        <component
                            :is="item.component.comName"
                            v-bind="item.component"
                            v-model="formData[item.prop]"
                            style="width: 100%"
                        >
                            <el-option
                                v-if="item.component.comName === 'el-select'"
                                v-for="op in item.component.options"
                                v-bind="op"
                            />
                            <el-checkbox
                                v-for="op in item.component.options"
                                v-bind="op"
                                v-if="
                                    item.component.comName ===
                                    'el-checkbox-group'
                                "
                            />
                            <el-radio
                                v-for="op in item.component.options"
                                v-bind="op"
                                v-if="
                                    item.component.comName === 'el-radio-group'
                                "
                                >{{ op.label }}</el-radio
                            >
                        </component>
                    </el-form-item>
                </div>
            </el-form>
        </div>
        <div>
            <h1 class="my-4">添加信息</h1>
            <div
                class="flex justify-start is-align-right flex-row flex-wrap gap-1"
            >
                <el-button
                    plain
                    v-for="item in fromOptions.filter(
                        (comIntance:any) => comIntance.status === 0
                    )"
                    @click="updateCom(item)"
                    class="ml-0 mr-[10px]"
                    >+ {{ item.label }}</el-button
                >
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped></style>
