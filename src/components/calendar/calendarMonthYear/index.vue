<script lang="ts" setup>
import { yearOptions } from "./utils/index";
import { formatMonth } from "./utils/index";
import { computed } from "vue";
import { myDateInstance as rDate } from "../utils/index"

// 生成年份范围
const yearSelectOps = computed(() => {
  return yearOptions(rDate.getYear());
});
// 点击年份 显示月份
const showMonth = () => {
  rDate.showType = 'month'
}
// 点击月份 显示日期
const showDay = (i: number) => {
  rDate.setMonth(i)
  rDate.showType = 'day'
}
</script>

<template>
  <div class="pt-6 grid grid-cols-4 border">
    <template v-if="rDate.showType === 'year'">
      <div v-for="year in yearSelectOps"
        class="h-16 flex justify-center items-center cursor-pointer hover:bg-gray-400 leading-16 rounded-lg" id="year"
        @click="showMonth">
        {{ year }}
      </div>
    </template>
    <template v-if="rDate.showType === 'month'">
      <div v-for="i in 12"
        class="h-16 flex justify-center items-center cursor-pointer hover:bg-gray-400 leading-16 rounded-lg"
        @click="showDay(i)">
        {{ formatMonth(i) }}
      </div>
    </template>

  </div>
</template>

<style lang="less" scoped></style>
