<script lang="ts" setup>
import calendarTop from "./components/calendarTop.vue";
import calendarMonth from "./components/calendarMonth.vue";
import calendarDay from "./components/calendarDay.vue";
import { dateData } from "./hooks/index";

const props = defineProps({
    format: {
        type: String,
        default: "YYYY-MM-DD",
    },
});
</script>

<template>
    <div class="">
        <calendarTop />
        <calendarMonth v-if="dateData.type !== ''" />
        <calendarDay v-else />
    </div>
</template>

<style lang="less" scoped></style>
