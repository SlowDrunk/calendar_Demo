<script lang="ts" setup>
import draggable from "vuedraggable";;
import { moduleList } from '../hooks'

</script>

<template>
    <div class="">
        <draggable group="site" animation="300" :list="moduleList" item-key="id" class="flex flex-col gap-4"
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