<script lang="ts" setup>
import dayjs from "dayjs";
import { getMonthDays } from "./calendarDay";
import { computed } from "vue";
const Props = defineProps({
  date: {
    type: Object,
    default: () => ({}),
  },
});
// xxxx年x月有多少天
const monthDays = computed(() => {
  return getMonthDays(Props.date.year, Props.date.month).days;
});
const currentMonthSection = computed(() => {
  const startIndex = getMonthDays(Props.date.year, Props.date.month).fontNum;
  const endIndex =
    monthDays.value.length -
    getMonthDays(Props.date.year, Props.date.month).endNum;
  return [startIndex, endIndex];
});

// 周标题
const weekTitles = () => {
  return [...Array(7)].map((_, weekInx) => {
    return dayjs().day(weekInx).format("ddd");
  });
};
const weekTit = weekTitles();
</script>

<template>
  <div class="border" style="padding: 12px">
    <div class="grid grid-cols-7">
      <span class="w-10 h-10" v-for="item in weekTit" :key="item">{{
        item
      }}</span>
    </div>
    <div class="grid grid-cols-7">
      <span
        class="w-10 h-10 text-center leading-10 rounded-[50%]"
        v-for="(item, index) in monthDays"
        :style="{
          background:
            Props.date.day == item &&
            index >= currentMonthSection[0] &&
            index < currentMonthSection[1]
              ? '#fff000'
              : 'transparent',
          color:
            index < currentMonthSection[0] || index >= currentMonthSection[1]
              ? 'gray'
              : 'black',
        }"
        :key="index"
        >{{ item }}</span
      >
    </div>
  </div>
</template>

<style lang="less" scoped></style>
./calendarDay
