<script setup>
import { storeToRefs } from 'pinia'
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";
import axios from "axios";
import Swal from 'sweetalert';
import Layout from "../Layouts/Layout.vue";

const authStore = useAuthStore();
const { user } = storeToRefs(authStore)

const name = ref(user.value.name);
const profileErrors = ref([]);

async function handleEditUser() {

  profileErrors.value = [];


  try {
    const response = await axios.post("/api/user/edit", {
      name: name.value,
    });

    user.value.name = name.value

    Swal({
      title: 'Success!',
      text: response.data.status,
      icon: 'success'
    })

  } catch (error) {
    if (error.response?.status === 422) {
      profileErrors.value = error.response.data.errors;
    } else {
      Swal({
        title: error.response?.status,
        icon: 'error'
      })
    }
  }

};
</script>

<template>
  <Layout>

    <form @submit.prevent="handleEditUser" class="max-w-xl mx-auto">
      <h2 class="font-semibold text-3xl mb-5">Change</h2>
      <div class="mb-6">
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
        <input type="text" id="first_name" v-model="name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John" required>
        <div v-if="profileErrors.name" class="flex">
          <span class="text-red-400 text-sm mt-2 pt-2">{{
            profileErrors.name[0]
          }}</span>
        </div>
      </div>
      <div class="mb-6">
        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-00 dark:text-white">Email</label>
        <span
          class="bg-gray-200 border border-gray-300 text-gray-600 text-sm rounded-lg  block w-full p-2.5 dark:text-white ">{{
  user?.email
          }}</span>
      </div>

      <button type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>


  </Layout>
</template>