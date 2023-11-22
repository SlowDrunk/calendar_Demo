<script lang="ts" setup>
import { ref } from 'vue';
import {moduleList} from '../hooks'

const emit = defineEmits(["changeShowOption","showManagement"]);

// 当前选中项
const currentItem = ref(moduleList.value[0])

// 切换组件
const handleSwitch = (item: any) => {
    currentItem.value = item
    emit('changeShowOption', item.group)
}

// 是否选中
const isAciive = ((item: any) => {
    return currentItem.value.id === item.id
})

// 管理模块
const handleManagement = () => {
    emit('showManagement')
}


</script>

<template>
    <div class="flex flex-col items-center border-2 pb-4">
        <ul class="w-[100%] border-2 flex flex-col gap-4">
            <li v-for="item in moduleList" :key="item.id" class="cursor-pointer text-center"
                :class="{ 'bg-slate-300': isAciive(item) }" @click="handleSwitch(item)">{{ item.name }}</li>
        </ul>
        <div class="mt-4">
            <el-button @click="handleManagement">管理模块</el-button>
        </div>
    </div>
</template>

<style lang="less" scoped></style>