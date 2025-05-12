<template>
  <div class="demo-card bg-color-blue rounded-sm" @click="$emit('start', value)">
    <h3 class="font-weight-black title">{{ title }}</h3>
    <p class="color-blue-light description">{{ description }}</p>
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
  position: relative;
  box-sizing: border-box;
  width: 17.5rem;
  height: 17.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
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
  margin-top: auto;
  margin-bottom: 5rem;
  font-size: 1.2rem;
}
</style>
