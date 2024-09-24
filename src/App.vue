<script setup>
import { RouterView } from 'vue-router'





</script>

<template>
  <div
    class="lg:mx-auto w-full lg:w-2/3 md:w-2/3 absolute sm:top-20 lg:left-48 md:mx-auto md:left-24 bg-gray-900 text-white shadow-md shadow-green-800"
  >
    <div class="lg:flex block items-center justify-between bg-cyan-700">
      <router-link
        :to="{ name: 'home' }"
        class="hover:bg-cyan-900 block duration-200 ease-linear py-3 lg:w-1/3 text-center"
        active-class=" bg-cyan-950"
        >Calculatrice</router-link
      >
      <router-link
        :to="{ name: 'equation' }"
        class="hover:bg-cyan-900 block duration-200 ease-linear py-3 lg:w-1/3 text-center"
        active-class=" bg-cyan-950"
        >Equation 2nd degré</router-link
      >
      <router-link
        :to="{ name: 'convert' }"
        class="hover:bg-cyan-900 block duration-200 ease-linear py-3 lg:w-1/3 text-center"
        active-class=" bg-cyan-950"
        >Convertisseur</router-link
      >
    </div>
    <RouterView>
      
    </RouterView>
  </div>
</template>

<style scoped>
.active-link {
  background: #164E63;
}
</style>
