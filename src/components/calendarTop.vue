<script lang="ts" setup>
import {
  yearDecrease,
  yearIncrease,
  checkYear,
  checkMonth,
} from "./claendarTop";
import { yearOptions } from "./calendarMonth";
import { formatMonth } from "./index";
import { computed } from "vue";
const Props = defineProps({
  date: {
    type: Object,
    default: () => ({}),
  },
});
const yearSelectOps = computed(() => {
  return yearOptions(Props.date.year);
});
const yearStr = computed(() => {
  if (Props.date.type === "year") {
    return `${yearSelectOps.value[0]} -${
      yearSelectOps.value[yearSelectOps.value.length - 1]
    }`;
  } else {
    return Props.date.year;
  }
});
</script>

<template>
  <div class="container flex gap-20 h-6 border items-center p-3.5">
    <div class="font-bold cursor-pointer" @click="yearDecrease(date, 10)">
      &lt&lt
    </div>
    <div class="font-bold cursor-pointer" @click="yearDecrease(date)">&lt</div>
    <div class="flex flex-row">
      <span
        class="cursor-pointer leading-10 hover:text-[#fff000]"
        @click="checkYear(date)"
        >{{ yearStr }}</span
      >
      <span class="w-10 leading-10" v-show="date.month > 0">/</span>
      <span
        class="cursor-pointer w-10 leading-10 hover:text-[#fff000]"
        v-show="date.month > 0"
        @click="checkMonth(date)"
        >{{ formatMonth(date.month) }}</span
      >
    </div>
    <div class="font-bold cursor-pointer" @click="yearIncrease(date)">&gt</div>
    <div class="font-bold cursor-pointer" @click="yearIncrease(date, 10)">
      &gt&gt
    </div>
  </div>
</template>

<style lang="less" scoped></style>
