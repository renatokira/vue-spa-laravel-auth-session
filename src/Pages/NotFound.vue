<template>
    <div class="flex min-h-screen items-center overflow-hidden bg-white">
        <div class="mx-auto text-center xl:max-w-7xl">
            <div>
                <div class="text-9xl font-extrabold ">
                    <span> 404 </span>
                </div>
                <h2 class="mb-4 text-3xl font-extrabold md:text-4xl">Not Found</h2>
            </div>

            <router-link :to="{ name: 'Home' }"
                class="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-semibold leading-4 text-gray-700">
                <span>Go Here</span>
            </router-link>
        </div>
    </div>
</template>