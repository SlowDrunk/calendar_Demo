<script lang="ts" setup>
import { yearDecrease, yearIncrease } from "./claendarTop";
const Props = defineProps({
  date: {
    type: Object,
    default: () => ({}),
  },
});
console.log(Props);
</script>

<template>
  <div class="container flex gap-20 h-6 border items-center">
    <div class="font-bold cursor-pointer" @click="yearDecrease(date, 10)">
      &lt&lt
    </div>
    <div class="font-bold cursor-pointer" @click="yearDecrease(date)">
      &lt
    </div>
    <div class="sele">{{ date.year }}</div>
    <div class="font-bold cursor-pointer" @click="yearIncrease(date)">
      &gt
    </div>
    <div class="font-bold cursor-pointer" @click="yearIncrease(date, 10)">
      &gt&gt
    </div>
  </div>
</template>

<style lang="less" scoped></style>
