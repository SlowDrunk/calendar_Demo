<script lang="ts" setup>
import { ref } from 'vue';
import { infoGroup } from "../fromOptions";

const navList = ref([
    {
        name: '个人信息',
        id: 1,
        group: infoGroup.baseInfo
    },
    {
        name: '教育消息',
        id: 2,
        group: infoGroup.educationInfo
    },
    {
        name: '实践经历',
        id: 3,
        group: infoGroup.projectInfo
    },
    {
        name: '项目经历',
        id: 4,
    },
    {
        name: '专业技能',
        id: 5,
    },
    {
        name: '自定义模块',
        id: 6,
    },
    {
        name: '预览设计',
        id: 7,
    },
    {
        name: '完成简历',
        id: 8,
    }
])

const emit = defineEmits(["changeShowOption","showManagement"]);

// 当前选中项
const currentItem = ref(navList.value[0])

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
            <li v-for="item in navList" :key="item.id" class="cursor-pointer text-center"
                :class="{ 'bg-slate-300': isAciive(item) }" @click="handleSwitch(item)">{{ item.name }}</li>
        </ul>
        <div class="mt-4">
            <el-button @click="handleManagement">管理模块</el-button>
        </div>
    </div>
</template>

<style lang="less" scoped></style>