<script setup>
import {
  EyeIcon,
  PencilIcon,
  TrashIcon,
  UserPlusIcon,
} from "@heroicons/vue/24/solid";
import { RouterLink } from "vue-router";
import { onMounted } from "vue";

import useStudent from "../../composables/studentApi";

const { getAllStudent,error,studentData,destroyStudent,statusCode,delError }=useStudent();

onMounted(getAllStudent);

const deleteStudent = async(id)=>{
    if(!window.confirm("Are you sure you want to delete this student?")){
        return;
    }
    await destroyStudent(id);
    await getAllStudent();

}

</script>

<template>
  <div>
    <div class="bg-orange-600 p-4 grid grid-cols-9">
      <div class="col-span-6 md:col-span-8">
        <h1 class="text-3xl font-bold text-center mt-3 text-white">
          Student List
        </h1>
      </div>
      <div class="text-right">
        <RouterLink :to="{name: 'add'}">
          <button
            class="text-white text-md bg-green-700 hover:bg-green-800 font-medium rounded-lg p-2 px-6"
          >
            <UserPlusIcon /> Add
          </button>
        </RouterLink>
      </div>
    </div>
    <div v-if="error" class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium"
    role="alert">
      Oops! Error encountered: {{ error.message }}
    </div>

    <table class="table-auto w-full" v-else-if="studentData.length > 0">
      <thead class="bg-slate-600 text-white">
        <tr>
          <th class="py-1">ID</th>
          <th class="py-1">Name</th>
          <th class="py-1">Email</th>
          <th class="py-1">Action</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr v-for="({ id, name, email }, i) in studentData" :key="id">
          <td class="py-2">{{++i}}</td>
          <td class="py-2">{{ name }}</td>
          <td class="py-2">{{ email }}</td>
          <td class="py-2">
            <RouterLink :to="{name: 'view', params:{id: id}}">
                 <EyeIcon class="text-blue-500 h-6 w-6 inline" />
            </RouterLink>
            <RouterLink :to="{name: 'edit', params:{id: id}}">
                <PencilIcon class="text-emerald-500 h-6 w-6 inline mx-6" />
            </RouterLink>
           
            <TrashIcon class="text-red-500 h-6 w-6 inline cursor-pointer" @click="deleteStudent(id)" />

        
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="delError" class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium"
    role="alert">
      unable to delete student: {{ error.message }}
    </div>
    <div 
    class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium"
    role="alert" v-if="statusCode===200">
      student deleted successfully

    </div>
  </div>
</template>

<style scoped></style>
