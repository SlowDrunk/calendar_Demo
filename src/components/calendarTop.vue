<script lang="ts" setup>
import { yearDecrease, yearIncrease } from "./claendarTop";
import { selectYear } from "./index";
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
        class="cursor-pointer w-10 text-right hover:text-yellow-400"
        @click="selectYear(date, 2022)"
        >{{ date.year }}</span
      >
      <span
        class="cursor-pointer w-10 hover:text-yellow-400"
        v-show="date.month > 0"
        >{{ date.month }}</span
      >
    </div>
    <div class="font-bold cursor-pointer" @click="yearIncrease(date)">&gt</div>
    <div class="font-bold cursor-pointer" @click="yearIncrease(date, 10)">
      &gt&gt
    </div>
  </div>
</template>

<style lang="less" scoped></style>
