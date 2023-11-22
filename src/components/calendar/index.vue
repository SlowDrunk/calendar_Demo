<script lang="ts" setup>
import calendarTop from "./calendarTop/index.vue";
import calendarMonthYear from "./calendarMonthYear/index.vue";
import calendarDay from "./calendarDay/index.vue";
import { myDateInstance as rDate } from "./utils/index"
</script>

<template>
  <div class="">
    <calendarTop />
    <calendarMonthYear v-if="rDate.showType === 'year' || 'month'" />
    <calendarDay v-if="rDate.showType === 'day'" />
  </div>
</template>

<style lang="less" scoped></style>
