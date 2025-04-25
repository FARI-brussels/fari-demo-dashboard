<template>
  <DemoView :initial-demo="initialDemo" :fullscreen="fullscreen" />
</template>

<script setup lang="ts">
import DemoView from './components/DemoView.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const initialDemo = computed(() => route.path.split('/').pop() || undefined)
const fullscreen = computed(() => route.query.fullscreen === 'true')
</script>
