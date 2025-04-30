<template>
  <DemoView :initial-demo="initialDemo" :fullscreen="fullscreen" :demos="demos" />
</template>

<script setup lang="ts">
import DemoView from './components/DemoView.vue'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { fetchDemos } from '../backend/server.ts'
import type { Demo } from '@/types'
const route = useRoute()

const initialDemo = computed(() => route.path.split('/').pop() || undefined)
const fullscreen = computed(() => route.query.fullscreen === 'true')

const demos = ref<Demo[]>([])

onMounted(async () => {
  const res = await fetchDemos()
  if (Array.isArray(res)) {
    demos.value = res as Demo[]
  } else {
    console.error('Unexpected response format:', res)
    demos.value = []
  }
})
</script>
