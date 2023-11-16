<script lang="ts" setup>
import calendarTop from "./calendarTop.vue";
import { setYear } from "./index";
const date = setYear({});
</script>

<template>
  <div class="">
    <calendarTop :date="date" />
  </div>
</template>

<style lang="less" scoped></style>
