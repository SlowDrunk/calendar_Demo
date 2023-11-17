<script lang="ts" setup>
import { formatMonth } from "../utiles/index";
import { computed } from "vue";
import { useDate, dateData } from "../hooks/index";
const { increaseYear, decreaseYear, yearSelectOps } = useDate();
// 中间渲染内容 年份范围或具体日期
const yearStr = computed(() => {
    if (dateData.type === "year") {
        return `${yearSelectOps.value[0]} -${
            yearSelectOps.value[yearSelectOps.value.length - 1]
        }`;
    } else {
        return dateData.year;
    }
});
const checkMonth = ()=>{
    dateData.type = "month"
    dateData.month = 0
}
const checkYear = ()=>{
    dateData.type = "year"
    dateData.month = 0
}
</script>

<template>
    <div class="container flex gap-20 h-6 border items-center p-3.5">
        <div class="font-bold cursor-pointer" @click="decreaseYear(10)">
            &lt&lt
        </div>
        <div class="font-bold cursor-pointer" @click="decreaseYear()">&lt</div>
        <div class="flex flex-row">
            <span
                class="cursor-pointer leading-10 hover:text-[#fff000]"
                @click="checkYear()"
                >{{ yearStr }}</span
            >
            <span class="w-10 leading-10" v-show="dateData.month > 0">/</span>
            <span
                class="cursor-pointer w-10 leading-10 hover:text-[#fff000]"
                v-show="dateData.month > 0"
                @click="checkMonth()"
                >{{ formatMonth(dateData.month) }}</span
            >
        </div>
        <div class="font-bold cursor-pointer" @click="increaseYear()">&gt</div>
        <div class="font-bold cursor-pointer" @click="increaseYear(10)">
            &gt&gt
        </div>
    </div>
</template>

<style lang="less" scoped></style>
