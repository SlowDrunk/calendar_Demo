<script lang="ts" setup>
import { setDay } from './calendarDay';

const props = defineProps({
    date: {
        type: Object,
        default: () => { }
    }
})

console.log(props.date);
</script>

<template>
    <div class="mt-16 grid grid-cols-4 ">
       
    </div>
</template>

<style lang="less" scoped></style>