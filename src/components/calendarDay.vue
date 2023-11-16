<script lang="ts" setup>
import dayjs from "dayjs";
import { getMonthDays } from "./calendarDay";
import { computed } from "vue";
const Props = defineProps({
    date: {
        type: Object,
        default: () => ({}),
    },
    format: {
        type: String,
        default: 'YYYY-MM-DD'
    }
});
// xxxx年x月有多少天
const monthDays = computed(() => {
    return getMonthDays(Props.date.year, Props.date.month).days;
});
const currentMonthSection = computed(() => {
    const startIndex = getMonthDays(Props.date.year, Props.date.month).fontNum
    const endIndex = monthDays.value.length - getMonthDays(Props.date.year, Props.date.month).endNum
    return [startIndex, endIndex]
})

// 周标题
const weekTitles = () => {
    return [...Array(7)].map((_, weekInx) => {
        return dayjs().day(weekInx).format("ddd");
    });
};
const weekTit = weekTitles();
const getCurrentDayStyle = (day: string, index: number) => {
    let style = {
        background: "",
        color: "",
    };
    if (
        Props.date.day == day &&
        index >= currentMonthSection.value[0] &&
        index < currentMonthSection.value[1]
    ) {
        style.background = "#fff000";
    } else {
        style.background = "transparent";
    }
    if (
        index < currentMonthSection.value[0] ||
        index >= currentMonthSection.value[1]
    ) {
        style.color = "#999999";
    } else {
        style.color = "#000000";
    }
    return style;
};

const selectDay = (item: string, index: number) => {
    if (index < currentMonthSection.value[0]) {
        Props.date.month += 1
    } else if (index >= currentMonthSection.value[1]) {
        Props.date.month -= 1
    }
    Props.date.day = item;
    console.log(dayjs(`${Props.date.year}-${Props.date.month}-${Props.date.day}`).format(Props.format))
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
            <span class="w-10 h-10 hover:bg-gray-400 text-center leading-10 rounded-[50%] cursor-pointer"
                v-for="(item, index) in monthDays" :style="getCurrentDayStyle(item, index)" :key="index"
                @click="selectDay(item, index)">{{ item }}</span>
        </div>
    </div>
</template>

<style lang="less" scoped></style>
