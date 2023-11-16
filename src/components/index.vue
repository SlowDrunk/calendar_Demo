<script lang="ts" setup>
import calendarTop from "./calendarTop.vue";
import calendarMonth from "./calendarMonth.vue";
import calendarDay from "./calendarDay.vue";
import { setYear } from "./index";

const props = defineProps({
  format: {
    type: String,
    default: 'YYYY-MM-DD'
  }
})

const date = setYear({});
</script>

<template>
  <div class="">
    <calendarTop :date="date" />
    <calendarMonth :date="date" v-if="date.month === 0" />
    <calendarDay :date="date" v-else :format="props.format"/>
  </div>
</template>

<style lang="less" scoped></style>
