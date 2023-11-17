<script lang="ts" setup>
import { formatMonth } from "../utiles/index";
import { useDate, dateData } from "../hooks/index";
const { yearSelectOps, inssureYear, setMonth } = useDate();
</script>

<template>
    <div class="pt-6 grid grid-cols-4 border">
        <div
            v-if="dateData.type === 'year'"
            v-for="year in yearSelectOps"
            class="h-16 flex justify-center items-center cursor-pointer hover:bg-gray-400 leading-16 rounded-lg"
            id="year"
            @click="inssureYear(year)"
        >
            {{ year }}
        </div>
        <div
            v-if="dateData.type === 'month'"
            v-for="i in 12"
            class="h-16 flex justify-center items-center cursor-pointer hover:bg-gray-400 leading-16 rounded-lg"
            @click="setMonth(i)"
            id="month"
        >
            {{ formatMonth(i) }}
        </div>
    </div>
</template>

<style lang="less" scoped></style>
