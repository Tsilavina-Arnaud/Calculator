<script setup>
import convert from 'convert'
import { ref } from 'vue'
const units = [
  { name: 'seconds', symbol: 'seconde' },
  { name: 'minutes', symbol: 'minute' },
  { name: 'hours', symbol: 'heure' },
  { name: 'meters', symbol: 'mètre' },
  { name: 'kilometers', symbol: 'kilomètre' }
]
const inputTyped = ref('seconds')
const outputTyped = ref('hours')
const inP = ref('')
const outP = ref('')


function setUnit() {
  if (inP.value != "" && /^[0-9]*$/g.test(inP.value)) {
    try {
      outP.value = convert(inP.value, inputTyped.value).to(outputTyped.value)
    } catch(err) {
      alert('Conversion invalide')
      outP.value = ''
    }
  }
}
</script>

<template>
  <div class="flex">
    <div class="p-4">
      <label class="text-sm">Type d'entée</label>
      <div class="sm:flex items-center justify-between">
        <div>
          <div class="flex">
            <input
              v-model="inP"
              autofocus
              @input="setUnit"
              autocomplete="off"
              type="text"
              class="block focus:outline-none border-2 border-purple-700 text-lg text-black py-1 pl-1 rounded-tl-md rounded-bl-md shadow-md"
            />
            <select
              class="bg-gray-600 px-4 rounded-tr-md rounded-br-md"
              v-model="inputTyped" @change="setUnit"
            >
              <option
                v-for="(unit, index, key) in units"
                :value="unit.name"
                :key="key"
                class="text-white hover:bg-gray-800 cursor-pointer"
              >
                {{ unit.symbol }}
              </option>
            </select>
          </div>
          <div class="mt-5">
            <label class="text-sm">Type de sortie</label>
            <div class="flex">
              <input
                v-model="outP"
                autofocus
                autocomplete="off"
                type="text" readonly
                class="block focus:outline-none border-2 border-purple-700 text-lg text-black py-1 pl-1 rounded-tl-md rounded-bl-md shadow-md"
              />
              <select class="bg-gray-600 px-4 rounded-tr-md rounded-br-md" v-model="outputTyped" @change="setUnit">
                <option
                  v-for="(unit, index, key) in units"
                  :value="unit.name"
                  :key="key"
                  class="text-white hover:bg-gray-800 cursor-pointer"
                >
                  {{ unit.symbol }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="pl-5">
          <h3 class="uppercase font-bold">conversion</h3>
          <hr />
          <div v-if="inputTyped == 'seconds' || inputTyped == 'minutes' || inputTyped == 'hours'">
            <p class="pt-6 text-xl">1 minutes = 60 secondes</p>
          </div>
          <div v-else>
            <p class="pt-6 text-xl">1 kilomètre = 1000 mètres</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
