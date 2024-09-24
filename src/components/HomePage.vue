<script setup>
import { ref } from 'vue'

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0]
const sign = ['/', '*', '-', '+']
const charClicked = ref('')
const results = ref(0)
const sld = ref(false)

function setChar(e) {
  let char = e.originalTarget.innerHTML
  charClicked.value += char
  sld.value = true
}

const calculate = () => {
  sld.value = true
  try {
    results.value = eval(charClicked.value)
  } catch (error) {
    alert('Math error')
    charClicked.value = ''
    results.value = 0
  }
}
window.addEventListener('keyup', function (e) {
  if (e.key === 'Backspace') {
    let lenghtChar = charClicked.value.length
    charClicked.value = charClicked.value.replace(charClicked.value.charAt(lenghtChar - 1), '')
    sld.value = false
  }
  number.forEach((num) => {
    if (e.key == num) {
      charClicked.value += num
    }
  })
  sign.forEach((sig) => {
    if (e.key == sig) {
      charClicked.value += sig
    }
  })
  if (e.key == 'Enter') {
    sld.value = true
    results.value = eval(charClicked.value)
  }
})
</script>

<template>
  <div class="">
    <div class="flex">
      <div class="w-full overflow-x-hidden">
        <div class="border-2 border-white h-40 py-3 text-right pr-4">
          <span class="mb-0 text-4xl">{{ charClicked }}</span>
          <transition name="slide">
            <p class="mb-0 mt-3 text-2xl" v-if="sld">{{ results }}</p>
          </transition>
        </div>
      </div>
    </div>
    <div class="flex justify-center my-3">
      <div
        @click="
          charClicked = '';
          results = 0;
          sld = false
        "
        class="bg-red-700 w-full select-none cursor-pointer text-center hover:bg-red-800 duration-300 ease-linear py-3"
      >
        Supprimer tous
      </div>
    </div>
    <div class="mt-3">
      <div class="flex sm:items-center justify-center">
        <div class="grid sm:grid-cols-3 sm:basis-3/4 grid-cols-2 basis-3/4">
          <div v-for="(numbers, key) in number" :key="key" class="col-span-1">
            <button
              @click="setChar"
              class="bg-gray-700 text-center hover:bg-gray-800 duration-300 ease-linear sm:px-16 px-12 py-3 mb-4"
            >
              {{ numbers }}
            </button>
          </div>
          <div class="col-span-1">
            <button
              @click="calculate"
              class="bg-gray-700 hover:bg-gray-800 duration-300 ease-linear sm:px-16 px-12 py-3 mb-4"
            >
              =
            </button>
          </div>
        </div>
        <div class="grid grid-cols-1">
          <div v-for="(signs, key) in sign" :key="key">
            <button
              @click="setChar"
              class="bg-blue-950 hover:bg-gray-800 block duration-300 ease-linear sm:px-16 px-12 py-3 mb-4"
            >
              {{ signs }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.w-310 {
  width: 310px;
}

.w-378 {
  width: 378px;
}
</style>
