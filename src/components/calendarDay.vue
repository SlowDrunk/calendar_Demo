<script lang="ts" setup>
import dayjs from "dayjs";
import { getMonthDays } from "./calenderDay";
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
  const endIndex = 35 - getMonthDays(Props.date.year, Props.date.month).endNum;
  return [startIndex, endIndex];
});

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
        class="w-10 h-10 hover:bg-gray-400 text-center"
        v-for="(item, index) in monthDays"
        :style="getCurrentDayStyle(item, index)"
        :key="index"
        >{{ item }}</span
      >
    </div>
  </div>
</template>

<style lang="less" scoped></style>
