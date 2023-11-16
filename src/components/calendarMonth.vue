<script lang="ts" setup>
import { setMonth, yearOptions, inssureYear } from "./calendarMonth";
import { formatMonth } from "./index";
import { computed, ref } from "vue";
const props = defineProps({
    date: {
        type: Object,
        default: () => {},
    },
});
const yearSelectOps = computed(() => {
    return yearOptions(props.date.year);
});
const showYear = ref(true);
const setShowYear = (year: number) => {
    showYear.value = !showYear.value;
    inssureYear(props.date, year);
};
</script>

<template>
    <div class="pt-6 grid grid-cols-4 border">
        <div
            v-if="date.type === 'year'"
            v-for="year in yearSelectOps"
            class="h-16 flex justify-center items-center cursor-pointer hover:bg-gray-400 leading-16 rounded-lg"
            id="year"
            @click="setShowYear(year)"
        >
            {{ year }}
        </div>
        <div
            v-if="date.type === 'month'"
            v-for="i in 12"
            class="h-16 flex justify-center items-center cursor-pointer hover:bg-gray-400 leading-16 rounded-lg"
            @click="setMonth(props.date, i)"
            id="month"
        >
            {{ formatMonth(i) }}
        </div>
    </div>
</template>

<style lang="less" scoped></style>
