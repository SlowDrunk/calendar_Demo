<script setup lang="ts">
import { RouterView } from "vue-router";
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
    <div class="flex flex-row justify-betwee gap-40">
        <div class="w-20 flex flex-col gap-6">
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
            <button
                @click="() => router.push('/simpleResume')"
                class="w-[100%] bg-slate-500"
            >
                简单简历
            </button>
        </div>
        <RouterView />
    </div>
</template>

<style scoped></style>
