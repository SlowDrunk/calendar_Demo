<script lang="ts" setup>
import { useVModel } from "@vueuse/core";
import { computed } from "vue";

interface IProps {
    modelValue: any;
    baseInfoOption: any;
}
const Props = withDefaults(defineProps<IProps>(), {
    modelValue: () => ({} as any),
    baseInfoOption: () => ({}),
});
const emit = defineEmits(["update:modelValue"]);
const formData: any = useVModel(Props, "modelValue", emit);

// 添加表单项
const addFormitem = (option: any) => {
    option.status = 1
};
// 标题映射
const titleMap: any = {
    "personInfo": "基本信息",
    "jobHunting": "求职意向",
    "addOptions": "添加项"
}
// 个人信息
const personInfo = computed(() => Props.baseInfoOption['personInfo'])
// 求职意向
const jobHunting = computed(() => Props.baseInfoOption['jobHunting'])
// 添加项
const addOptions = computed(() => {
    const result = []
    for (const key in Props.baseInfoOption) {
        if (Object.prototype.hasOwnProperty.call(Props.baseInfoOption, key)) {
            const element = Props.baseInfoOption[key];
            result.push(...element.filter((item: any) => item.status === 0))
        }
    }
    return result
})

</script>

<template>
    <div class="">
        <!-- 个人信息 -->
        <el-form :model="formData" label-width="120px">
            <h3 class="title">{{ titleMap['personInfo'] }}</h3>
            <div class="grid grid-cols-2 gap-6">
                <template v-for="option in personInfo" :key="option">
                    <el-form-item :label="option.label" v-if="option.status === 1">
                        <component :is="option.component.comName" v-bind="option.component.props"
                            v-model="formData[option.prop]"></component>
                    </el-form-item>
                </template>
            </div>
        </el-form>

        <!--求职意向-->
        <el-form :model="formData" label-width="120px">
            <h3 class="title">{{ titleMap['jobHunting'] }}</h3>
            <div class="grid grid-cols-2 gap-6">
                <template v-for="option in jobHunting" :key="option">
                    <el-form-item :label="option.label" v-if="option.status === 1">
                        <component :is="option.component.comName" v-bind="option.component.props"
                            v-model="formData[option.prop]"></component>
                    </el-form-item>
                </template>
            </div>
        </el-form>
        
        <!-- 添加项 -->
        <h3 class="title">{{ titleMap['addOptions'] }}</h3>
        <template v-for="option in addOptions" :key="option">
            <el-button plain v-show="option.status === 0" class="ml-0 mr-[10px]" @click="addFormitem(option)">+ {{
                option.label }}</el-button>
        </template>
    </div>
</template>

<style lang="less" scoped>
.title {
    @apply text-xl font-bold mb-6;
}
</style>
