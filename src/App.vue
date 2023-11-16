<script setup lang="ts">
import calendar from "./components/index.vue";
</script>

<template>
  <div class="mr-auto">
    <calendar :format="'YYYY/MM/DD'" />
  </div>
</template>

<style scoped></style>
