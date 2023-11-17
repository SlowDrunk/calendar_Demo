<script setup lang="ts">
import calendarTest from "./calendar/index.vue";
</script>

<template>
    <div class="mr-auto">
        <!-- <calendar :format="'YYYY/MM/DD'" /> -->
        <calendarTest :format="'YYYY/MM/DD'" />
    </div>
</template>

<style scoped></style>
