<script lang="ts" setup>
import { yearDecrease, yearIncrease } from "./claendarTop";
import { computed } from "vue";
const Props = defineProps({
  date: {
    type: Object,
    default: () => ({}),
  },
});
console.log(Props);
const yearNMonth = computed(() => {
  const month = Props.date.month;
  const year = Props.date.year;
  return month > 0 ? `${year}/${month}` : year;
});
</script>

<template>
  <div class="container flex gap-20 h-6 border items-center">
    <div class="font-bold cursor-pointer" @click="yearDecrease(date, 10)">
      &lt&lt
    </div>
    <div class="font-bold cursor-pointer" @click="yearDecrease(date)">&lt</div>
    <div class="flex flex-row">
      <span>{{ date.year }}</span>
      <span v-show="date.month > 0">/{{ date.month }}</span>
    </div>
    <div class="font-bold cursor-pointer" @click="yearIncrease(date)">&gt</div>
    <div class="font-bold cursor-pointer" @click="yearIncrease(date, 10)">
      &gt&gt
    </div>
  </div>
</template>

<style lang="less" scoped></style>
