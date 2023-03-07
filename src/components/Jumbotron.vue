<script setup>

const props = defineProps({
    titlePage: {
        type: String,
        required: true
    },
})

</script>

<template>
    <div class="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700">
        <h2 class="font-semibold text-3xl mb-5">{{ titlePage }}</h2>
        <slot></slot>

        <button type="button" v-if="$slots.button"
            class="inline-block px-6 py-2.5 mt-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            data-mdb-ripple="true" data-mdb-ripple-color="light">
            <slot name="button"></slot>
        </button>

    </div>
</template>