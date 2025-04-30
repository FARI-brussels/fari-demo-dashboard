<template>
  <div class="demo-card bg-color-blue rounded-sm" @click="$emit('start', value)">
    <div class="demo-card__header">
      <h3 class="font-weight-black title">{{ title }}</h3>
      <p class="color-green">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  value: string
}>()
</script>

<style scoped lang="scss">
.demo-card {
  box-sizing: border-box;
  width: 17.5rem;
  height: 17.5rem;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  &:hover {
    filter: brightness(1.1);
  }

  transition: all 0.2s ease-in-out;
}

.title {
  font-size: 1.5rem;
  text-transform: uppercase;
}
.description {
  font-size: 1.2rem;
}
</style>
