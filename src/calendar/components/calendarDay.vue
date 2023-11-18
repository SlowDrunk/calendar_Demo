<script lang="ts" setup>
import dayjs from "dayjs";
import { useDate, dateData } from "../hooks/index";
const { currentMonthSection, setDay, monthDays } = useDate();
const Props = defineProps({
    format: {
        type: String,
        default: "YYYY-MM-DD",
    },
});

// 周标题
const weekTitles = () => {
    return [...Array(7)].map((_, weekInx) => {
        return dayjs().day(weekInx).format("ddd");
    });
};
const weekTit = weekTitles();
const getCurrentDayStyle = (day: string, index: number) => {
    let classes: string[] = [];
    if (
        // @ts-ignore
        dateData.day == day &&
        index >= currentMonthSection.value[0] &&
        index < currentMonthSection.value[1]
    ) {
        classes.push("bg-yellow-400");
    } else {
        classes.push("bg-transparent");
    }
    if (
        index < currentMonthSection.value[0] ||
        index >= currentMonthSection.value[1]
    ) {
        classes.push("text-gray-500");
    } else {
        classes.push("text-black");
    }

    return classes;
};
</script>

<template>
    <div class="border p-3.5">
        <div class="grid grid-cols-7">
            <span class="w-10 h-10" v-for="item in weekTit" :key="item">{{
                item
            }}</span>
        </div>
        <div class="grid grid-cols-7">
            <span
                class="w-10 h-10 hover:bg-yellow-100 text-center leading-10 rounded-[50%] cursor-pointer"
                v-for="(item, index) in monthDays"
                :class="getCurrentDayStyle(item, index)"
                :key="index"
                @click="setDay(Number(item), index, Props.format)"
                >{{ item }}</span
            >
        </div>
    </div>
</template>

<style lang="less" scoped></style>
