<script lang="ts" setup>
import { setYear } from "./claendarTop";
import { reactive } from "vue";
interface DataV {
  year: number;
  month: number;
  day: number;
}
const data = reactive(setYear({}));
</script>

<template>
  <div class="container flex gap-20 h-6 border items-center">
    <div class="font-bold cursor-pointer">&lt&lt</div>
    <div class="font-bold cursor-pointer">&lt</div>
    <div class="sele">{{ data.year }}</div>
    <div class="font-bold cursor-pointer">&gt</div>
    <div class="font-bold cursor-pointer">&gt&gt</div>
  </div>
</template>

<style lang="less" scoped></style>
