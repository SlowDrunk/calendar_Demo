<script lang="ts" setup>
import {
  yearDecrease,
  yearIncrease,
  checkYear,
  checkMonth,
} from "./claendarTop";
import { formatMonth } from "./index";

const Props = defineProps({
  date: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div class="container flex gap-20 h-6 border items-center">
    <div class="font-bold cursor-pointer" @click="yearDecrease(date, 10)">
      &lt&lt
    </div>
    <div class="font-bold cursor-pointer" @click="yearDecrease(date)">&lt</div>
    <div class="flex flex-row">
      <span
        class="cursor-pointer w-10 leading-10 hover:text-[#fff000]"
        @click="checkYear(date)"
        >{{ date.year }}</span
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
