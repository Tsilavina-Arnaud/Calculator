<script setup>
import { ref } from 'vue'

const solution = ref(false)
const a = ref('')
const b = ref('')
const c = ref('')
const delta = ref('')
const deltaRoot = ref('')
const x1 = ref('')
const x2 = ref('')
const error = ref('')
const emptyS = ref('')

//---------Resolve equation
const resolve = () => {
  if (a.value == '' || b.value == '' || c.value == '') {
    error.value = 'Saisissez la valeur de a, b et c pour resoudre une équation.'
  } else {
    error.value = ''
    delta.value = b.value * b.value - 4 * a.value * c.value
    if (delta.value > 0) {
      x1.value = ((-b.value - Math.sqrt(delta.value)) / 2) * a.value
      x2.value = ((-b.value + Math.sqrt(delta.value)) / 2) * a.value
      deltaRoot.value = Math.sqrt(delta.value)
      solution.value = true
    } else if (delta.value == 0) {
      x1.value = x2.value = (-b.value / 2) * a.value
      solution.value = true
    } else {
      emptyS.value = 'Solution vide'
      solution.value = true
    }
  }
}

const deleteAll = () => {
  solution.value = false
  a.value = ''
  b.value = ''
  c.value = ''
  document.getElementById('a').value = ''
  document.getElementById('b').value = ''
  document.getElementById('c').value = ''
}

function checkType(event) {
  let value = event.target.value
  const regex = /^[\-(0-9)]*$/g
  if (regex.test(value)) {
    const id = event.target.id
    switch (id) {
      case 'a':
        a.value = value
        break
      case 'b':
        b.value = value
        break
      default:
        c.value = value
        break
    }
  } else {
    event.target.value = ''
  }
}

window.addEventListener('keyup', (e) => {
  if (e.key === 'Backspace' || e.key === 'Delete') {
    deleteAll();
  }
  if(e.key === 'Enter') {
    resolve();
  }
})
</script>

<template>
  <div class="flex">
    <div class="w-full overflow-x-hidden">
      <div class="border-2 border-white h-64 py-3 text-right px-4">
        <div class="flex items-center">
          <span>
            <input
              type="text"
              @keyup="checkType"
              autofocus
              class="w-14 focus:outline-none text-black py-3 text-xl active:border-none border-2 border-purple-700 rounded-lg text-center"
              id="a"
            />
            <span class="pr-4 pl-1">X² +</span>
          </span>
          <span>
            <input
              type="text"
              @keyup="checkType"
              autofocus
              class="w-14 focus:outline-none text-black py-3 text-xl active:border-none border-2 border-purple-700 rounded-lg text-center"
              id="b"
            />
            <span class="pr-4 pl-1">X + </span>
          </span>
          <span class="pr-2">
            <input
              type="text"
              @keyup="checkType"
              autofocus
              class="w-14 focus:outline-none text-black py-3 text-xl active:border-none border-2 border-purple-700 rounded-lg text-center"
              id="c"
            />
          </span>
          <span> = 0 </span>
        </div>
        <p class="text-red-600 text-left">{{ error }}</p>
        <transition name="slide">
          <div class="my-4 text-left" v-if="solution">
            L' équation est: {{ a }} x² + {{ b }} x + {{ c }} = 0
            <p>----- Resultat du résolution: -----</p>
            <p class="text-cyan-500">
              Delta: <span class="text-white">{{ delta }}</span>
            </p>
            <p class="text-cyan-500">
              Racine de delta:
              <span class="text-white">{{
                delta > 0 ? deltaRoot : 'On ne peut pas calculer la racine de delta'
              }}</span>
            </p>
            <div v-if="delta == 0">
              <p class="text-cyan-500">
                Solution: <span class="text-white">x1 et x2 = {{ x1 }}</span>
              </p>
            </div>
            <div v-else-if="delta > 0">
              <p class="text-cyan-500">
                Solution: <span class="text-white">x1 = {{ x1 }} , et x2 = {{ x2 }}</span>
              </p>
            </div>
            <div v-else>
              <p class="text-cyan-500">{{ emptyS }}</p>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
  <div class="flex justify-between my-3 px-3">
    <button
      @click="deleteAll"
      class="bg-red-700 flex justify-end hover:bg-red-800 duration-300 ease-linear px-14 py-3"
    >
      Supprimer
    </button>
    <button
      @click="resolve"
      class="bg-blue-700 flex justify-end hover:bg-blue-800 duration-300 ease-linear px-14 py-3"
    >
      Resoudre
    </button>
  </div>
</template>

<style scoped></style>
