<script lang="ts" setup>
import calendarTop from "./calendarTop.vue";
import calendarMonth from "./calendarMonth.vue";
import calendarDay from "./calendarDay.vue";
import { setYear } from "./index";
const date = setYear({});
</script>

<template>
  <div class="">
    <calendarTop :date="date" />
    <calendarDay :date="date" />
    <calendarMonth :date="date"/>  
  </div>
</template>

<style lang="less" scoped></style>
