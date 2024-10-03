<script setup>
import { RouterLink } from "vue-router";


</script>

<template>

<div class="shadow-md pb-6">
    <!-- <div
      class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium"
      role="alert"
      v-if="error"
    >
      Oops! Error encountered: {{ error.message }}
    </div> -->
    <table class="table-auto w-full">
      <thead class="bg-slate-600 text-white">
        <tr>
          <th class="py-1">ID</th>
          <th class="py-1">Name</th>
          <th class="py-1">Email</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr>
          <td class="py-2">1</td>
          <td class="py-2">lokraj</td>
          <td class="py-2">lokraj@gmail.com</td>
        </tr>
      </tbody>
    </table>
    <div class="m-8 flex justify-center">
      <RouterLink :to="{ name: 'list' }">
        <button
          type="button"
          class="bg-emerald-700 text-white font-medium p-2 rounded-md hover:bg-emerald-800"
        >
          Back to Home
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>

</style>
