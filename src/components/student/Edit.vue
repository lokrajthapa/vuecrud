<script setup>

import { RouterLink } from "vue-router";
import useStudent from "@/composables/studentApi";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const { studentData, error, getSingleStudent, updateStudent, statusCode } = useStudent();

const { params } = useRoute();

onMounted(()=>{
  getSingleStudent( params.id );
})


function handleUpdateStudentForm() {
  updateStudent (params.id, studentData.value);
}

</script>

<template>
<div class="shadow-md pb-6">
    <div class="bg-indigo-600 p-4">
      <h1 class="text-3xl font-bold text-center text-white">Edit Student</h1>
    </div>
 
    <form
      @submit.prevent="handleUpdateStudentForm"
      class="w-full"
      v-if="studentData"
      
    >
      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="stuid"> ID : </label>
        </div>
        <div class="w-4/5">
          <input
            type="text"
            id="stuid"
            class="border-2 border-gray-200 w-full py-2 px-4"
            readonly
            disabled
            v-model.trim="studentData.id"
          
          />
        </div>
      </div>
      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="stuname"> Name : </label>
        </div>
        <div class="w-4/5">
          <input
            type="text"
            id="stuname"
            class="border-2 border-gray-200 w-full py-2 px-4"
            required
            v-model.trim="studentData.name"
       
          />
        </div>
      </div>
      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="email"> Email : </label>
        </div>
        <div class="w-4/5">
          <input
            type="email"
            id="email"
            class="border-2 border-gray-200 w-full py-2 px-4"
            required
            v-model.trim="studentData.email"
          
          />
        </div>
      </div>

      <div class="m-8 flex justify-center">
        <button
          type="submit"
          class="bg-purple-700 text-white font-medium py-2 px-6 rounded-md hover:bg-purple-800 mr-5"
        >
          Save
        </button>
        <RouterLink :to="{ name: 'list' }">
          <button
            type="button"
            class="bg-emerald-700 text-white font-medium p-2 rounded-md hover:bg-emerald-800"
          >
            Back to Home
          </button>
        </RouterLink>
      </div>
    </form>
    <div
      v-if="error"
      class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium"
      role="alert"
    >
      Oops! Error encountered: {{ error.message }}
    </div>

    <div
      class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium"
      role="alert"
      v-if="statusCode === 200"
    >
      student Update successfully
    </div>

    
  </div>
</template>

<style scoped>

</style>
