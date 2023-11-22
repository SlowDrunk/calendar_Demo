<script lang="ts" setup>
import draggable from "vuedraggable";

const moduleList = [
    {
        id: 1,
        name: '个人信息',

    },
    {
        id: 2,
        name: '教育信息',

    },
    {
        id: 3,
        name: '实践经历',
    },
]

</script>

<template>
    <div class="">
            <draggable group="site" animation="300" :list="moduleList" item-key="name" class="flex flex-col gap-4"
                ghost-class="ghost">
                <template #item="{ element }">
                    <ul class="w-[100%] border-2 flex flex-col gap-4">
                        <li class="cursor-pointer text-center">{{ element.name }}</li>
                    </ul>
                </template>
            </draggable>
    </div>
</template>

<style lang="less" scoped></style>