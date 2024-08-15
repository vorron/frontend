<script setup lang="ts">
import { ref } from 'vue'
import $ from './front-back/callBack'
import readData from './model/readData.shr'
import writeData from './model/writeData.shr'
import getLocalData from './model/getLocalData'

const data = ref('')

const onWrite = () => $(writeData)('Very important data.')
const onRead = async () => (data.value = await $(readData)())
const onTest = async () => (data.value = getLocalData(1, 2).result)
</script>

<template>
  <div>{{ data }}</div>
  <button @click="onWrite">put</button>
  <button @click="onRead">get</button>
  <button @click="onTest">local get</button>
</template>

<style scoped>
button {
  margin: 5px;
}
div {
  height: 80px;
  border: 1px solid green;
  padding: 5px;
  margin: 5px;
}
</style>
./writeData.shr ./model/readData.shr./model/writeData.shr./model/testData.shr./model/getLocalData
