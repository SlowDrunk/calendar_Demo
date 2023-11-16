<script lang="ts" setup>
import { setMonth } from './calendarMonth'

const props = defineProps({
    date: {
        type: Object,
        default: () => { }
    }
})

</script>

<template>
    <div class="mt-16 grid grid-cols-4 ">
        <div v-for="i in 12" class="h-16 flex justify-center items-center cursor-pointer" @click="setMonth(props.date, i)"
            id="month">{{ i
            }}</div>
    </div>
</template>

<style lang="less" scoped></style>