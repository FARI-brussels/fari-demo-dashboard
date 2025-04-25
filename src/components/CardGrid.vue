<template>
  <div class="card-grid">
    <DemoCard
      v-for="{ title, description, slug } in demos"
      :title="title"
      :key="slug"
      :description="description"
      :value="slug"
    />
  </div>
</template>

<script setup lang="ts">
import { type Demo } from '@/types'

defineProps<{
  demos: Demo[]
}>()
</script>

<style scoped lang="scss">
.card-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}
</style>
