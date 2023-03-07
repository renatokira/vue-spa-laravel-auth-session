<script setup>
import { ref } from 'vue'
import { useAuthStore } from "../stores/auth";
const authStore = useAuthStore();

const openMenu = ref(false);
</script>

<template>
  <nav class="
        bg-white
        border-gray-200
        px-2
        sm:px-4
        py-2.5
        rounded
        dark:bg-gray-900
      ">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <button type="button">
        <span class="
                  self-center
                  text-xl
                  font-semibold
                  whitespace-nowrap
                  dark:text-white
                ">
          <router-link :to="{ name: 'Home' }">
            <p class="truncate max-w-xs md:max-w-sm lg:max-w-lg">Vue 3 + Vite SPA Authentication Session Laravel</p>
          </router-link>
        </span>
      </button>

      <button @click="openMenu = !openMenu" data-collapse-toggle="navbar-default" type="button" class="
            inline-flex
            items-center
            p-2
            ml-3
            text-sm text-gray-500
            rounded-lg
            md:hidden
            hover:bg-gray-100
            focus:outline-none focus:ring-2 focus:ring-gray-200
            dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
          " aria-controls="navbar-default" aria-expanded="false">

        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
      <div :class="{ 'hidden': !openMenu }" class=" w-full md:block md:w-auto" id="navbar-default">
        <ul class="
              flex flex-col
              p-4
              mt-4
              border border-gray-100
              rounded-lg
              bg-gray-50
              md:flex-row
              md:space-x-8
              md:mt-0
              md:text-sm
              md:font-medium
              md:border-0
              md:bg-white
              dark:bg-gray-800
              md:dark:bg-gray-900
              dark:border-gray-700
            ">
          <template v-if="authStore.autenticated">
            <li>
              <router-link :to="{ name: 'Home' }" class="
                block
                    py-2
                    pl-3
                    pr-4
                    text-gray-700
                    rounded
                    hover:bg-gray-100
                    md:hover:bg-transparent
                    md:border-0
                    md:hover:text-blue-700
                    md:p-0
                    dark:text-gray-400
                    md:dark:hover:text-white
                    dark:hover:bg-gray-700 dark:hover:text-white
                    md:dark:hover:bg-transparent
                  " aria-current="page">Home</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'About' }" class="
                    block
                    py-2
                    pl-3
                    pr-4
                    text-gray-700
                    rounded
                    hover:bg-gray-100
                    md:hover:bg-transparent
                    md:border-0
                    md:hover:text-blue-700
                    md:p-0
                    dark:text-gray-400
                    md:dark:hover:text-white
                    dark:hover:bg-gray-700 dark:hover:text-white
                    md:dark:hover:bg-transparent
                  ">About</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Profile' }" class="
                    block
                    py-2
                    pl-3
                    pr-4
                    text-gray-700
                    rounded
                    hover:bg-gray-100
                    md:hover:bg-transparent
                    md:border-0
                    md:hover:text-blue-700
                    md:p-0
                    dark:text-gray-400
                    md:dark:hover:text-white
                    dark:hover:bg-gray-700 dark:hover:text-white
                    md:dark:hover:bg-transparent
                  "> {{ authStore.user?.name }}</router-link>
            </li>
            <button @click="authStore.handleLogout" class="
                    block
                    py-2
                    pl-3
                    pr-4
                    text-gray-700
                    text-left
                    rounded
                    hover:bg-gray-100
                    md:hover:bg-transparent
                    md:border-0
                    md:hover:text-blue-700
                    md:p-0
                    dark:text-gray-400
                    md:dark:hover:text-white
                    dark:hover:bg-gray-700 dark:hover:text-white
                    md:dark:hover:bg-transparent
                ">
              Logout
            </button>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>


