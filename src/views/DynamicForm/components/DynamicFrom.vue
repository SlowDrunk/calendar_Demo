<script lang="ts" setup>
import { computed } from "vue";
import type { FromItem } from "../comon/index";
import { useVModel } from '@vueuse/core'

interface IProps {
    fromOptions: FromItem[];
    modelValue: any;
}
const Props = withDefaults(defineProps<IProps>(), {
    fromOptions: () => [],
    modelValue: () => {},
});
const emit = defineEmits(["update:modelValue"]);
const formData = useVModel(Props, 'modelValue', emit)
</script>

<template>
    <div class="">
        <el-form :model="formData" label-width="180px">
            <el-form-item v-for="item in Props.fromOptions" v-bind="item">
                <component
                    :is="item.component.comName"
                    v-bind="item.component"
                    v-model="formData[item.prop]"
                >
                    <el-option
                        v-if="item.component.comName === 'el-select'"
                        v-for="op in item.component.options"
                        :key="op.value"
                        :label="op.label"
                        :value="op.value"
                    />
                </component>
            </el-form-item>
        </el-form>
    </div>
</template>

<style lang="less" scoped></style>
