<script lang="ts" setup>
import dayjs from "dayjs";
import { getMonthDays } from "./utils/index";
import { computed } from "vue";
import { myDateInstance as rDate } from "../utils/index"

// 周标题
const weekTit = [...Array(7)].map((_, weekInx) => dayjs().day(weekInx).format("ddd"));
// 根据年月计算月天数
const monthDays = computed(() => getMonthDays(rDate.getYear(), rDate.getMonth()).days);
// 当前月份的第一天和最后一天的索引
const currentMonthSection = computed(() => {
    const { fontNum, endNum } = getMonthDays(rDate.getYear(), rDate.getMonth());
    return [fontNum, monthDays.value.length - endNum];
})
// 获取当前日期样式
const getCurrentDayStyle = (day: string, index: number) => {
    const isCurrentDay = rDate.getDay() === Number(day) && index >= currentMonthSection.value[0] && index < currentMonthSection.value[1];
    const isCurrentMonth = index >= currentMonthSection.value[0] && index < currentMonthSection.value[1];
    return [
        "w-10 h-10 hover:bg-[#fff888] text-center leading-10 rounded-[50%] cursor-pointer",
        isCurrentDay ? "bg-[#fff000]" : "bg-[transparent]",
        isCurrentMonth ? "text-[#000000]" : "text-[#999999]"
    ].join(' ');
};
// 选择日期
const selectDay = (item: string, index: number) => {
    if (index < currentMonthSection.value[0]) {
        rDate.addMonth(1)
    } else if (index >= currentMonthSection.value[1]) {
        rDate.subtractMonth(1)
    }
    rDate.setDay(Number(item));
    console.log(dayjs(`${rDate.getYear()}-${rDate.getMonth()}-${rDate.getDay()}`).format('YYYY-MM-DD'))
};

</script>

<template>
    <div class="border p-3.5">
        <div class="grid grid-cols-7">
            <span class="w-10 h-10" v-for="item in weekTit" :key="item">{{ item }}</span>
        </div>
        <div class="grid grid-cols-7">
            <span :class="getCurrentDayStyle(item, index)" v-for="(item, index) in monthDays" :key="index"
                @click="selectDay(item, index)">{{ item }}</span>
        </div>
    </div>
</template>

<style lang="less" scoped></style>