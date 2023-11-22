<script lang="ts" setup>
import { ref } from 'vue';
import { infoGroup } from "../fromOptions";

const navList = ref([
    {
        name: '个人信息',
        id: 1,
        status: 1,
        group: infoGroup.baseInfo
    },
    {
        name: '教育消息',
        id: 2,
        status: 0,
        group: infoGroup.educationInfo
    },
    {
        name: '实践经历',
        id: 3,
        status: 0,
        group: infoGroup.projectInfo
    },
    {
        name: '项目经历',
        id: 4,
        status: 0
    },
    {
        name: '专业技能',
        id: 5,
        status: 0
    },
    {
        name: '自定义模块',
        id: 6,
        status: 0
    },
    {
        name: '预览设计',
        id: 7,
        status: 0
    },
    {
        name: '完成简历',
        id: 8,
        status: 0
    }
])

const emit = defineEmits(["changeShowOption"]);

// 切换组件
const handleSwitch = (item:any) =>{
    item.status = 1
    navList.value.forEach((nav:any) => {
        if(nav.id !== item.id){
            nav.status = 0
        }
    })
    emit('changeShowOption', item.group)
}


</script>

<template>
    <ul class="w-[100%] border-2 flex flex-col gap-4">
        <li v-for="item in navList" :key="item.id" class="cursor-pointer text-center" :class="{ 'bg-slate-300': item.status === 1 }" @click="handleSwitch(item)">{{ item.name }}</li>
    </ul>
</template>

<style lang="less" scoped></style>