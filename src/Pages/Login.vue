<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();

const form = ref({
  email: "test@example.com",
  password: "password",
});
</script>

<template>
  <section class="bg-[#F4F7FF] h-screen">
    <div class="px-2 h-full text-gray-800">
      <div class="flex justify-center items-center h-full">

        <div class="w-full px-4">
          <div class="
              relative
              mx-auto
              max-w-[525px]
              overflow-hidden
              rounded-lg
              bg-white
              py-16
              px-10
              text-center
              sm:px-12
              md:px-[60px]
            ">
            <div class="mb-10 text-center md:mb-16">SPA Authentication Session Laravel</div>
            <form @submit.prevent="authStore.handleLogin(form)">
              <div class="mb-6">
                <input type="email" v-model="form.email" placeholder="Email" class="
                    bordder-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-3
                    px-5
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  " />
                <div v-if="authStore.errors.email" class="flex">
                  <span class="text-red-400 text-sm mt-2 pt-2">{{
                    authStore.errors.email[0]
                  }}</span>
                </div>
              </div>
              <div class="mb-6">
                <input type="password" v-model="form.password" placeholder="Password" class="
                    bordder-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-3
                    px-5
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  " />
                <div v-if="authStore.errors.password" class="flex">
                  <span class="text-red-400 text-sm mt-2 pt-2">{{
                    authStore.errors.password[0]
                  }}</span>
                </div>
              </div>
              <div class="mb-10">
                <button type="submit" class="
                    w-full
                    px-4
                    py-3
                    bg-indigo-500
                    hover:bg-indigo-700
                    rounded-md
                    text-white
                  ">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>





