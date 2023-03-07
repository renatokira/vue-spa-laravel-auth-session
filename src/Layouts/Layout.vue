<script setup>
import NavLayout from "./NavLayout.vue";
</script>

<template>
    <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
        <NavLayout />
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <slot></slot>
        </main>
    </div>
</template>