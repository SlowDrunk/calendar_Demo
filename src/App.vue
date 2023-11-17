<script setup lang="ts">
import { RouterView } from "vue-router";
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
    <div class="flex flex-row justify-betwee gap-40 h-[800px] w-[1038px]">
        <div class="flex flex-col gap-6 w-28">
            <button
                @click="() => router.push('/')"
                class="w-[100%] bg-slate-500"
            >
                日历
            </button>
            <button
                @click="() => router.push('/dynamicFrom')"
                class="w-[100%] bg-slate-500"
            >
                动态表单
            </button>
        </div>
        <RouterView />
    </div>
</template>

<style scoped></style>
