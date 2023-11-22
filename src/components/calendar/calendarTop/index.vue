<script lang="ts" setup>
import { formatMonth } from "../calendarMonthYear/utils/index";
import { myDateInstance as rDate } from "../utils/index"

</script>

<template>
  <div class="container flex gap-20 h-6 border items-center">
    <div class="font-bold cursor-pointer" @click="rDate.subtractYear(10)">
      &lt&lt
    </div>
    <div class="font-bold cursor-pointer" @click="rDate.subtractYear(1)">&lt</div>
    <div class="flex flex-row">
      <span class="cursor-pointer w-10 leading-10 hover:text-[#fff000]" @click="rDate.checkYear()">{{ rDate.getYear()
      }}</span>
      <span class="w-10 leading-10" v-show="rDate.getMonth() > 0">/</span>
      <span class="cursor-pointer w-10 leading-10 hover:text-[#fff000]" v-show="rDate.getMonth() > 0"
        @click="rDate.checkMonth()">{{ formatMonth(rDate.getMonth()) }}</span>
    </div>
    <div class="font-bold cursor-pointer" @click="rDate.addYear(1)">&gt</div>
    <div class="font-bold cursor-pointer" @click="rDate.addYear(10)">
      &gt&gt
    </div>
  </div>
</template>

<style lang="less" scoped></style>
