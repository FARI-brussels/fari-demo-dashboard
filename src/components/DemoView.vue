<template>
  <div class="main p-xl bg-color-primary">
    <div v-if="demos?.length" class="card-grid">
      <DemoCard
        v-for="{ title, description, slug } in demos"
        :title="title.en"
        :key="slug"
        :description="description.en"
        :value="slug"
        @start="openDialog"
      />
    </div>

    <Teleport to="body" v-if="isClient">
      <Transition name="dialog">
        <div v-if="isDialogOpen" class="dialog-backdrop">
          <div
            class="dialog"
            ref="dialogRef"
            :class="{
              'is-maximized': isMaximized,
            }"
          >
            <div class="iframe-container" :class="{ 'rounded-sm': !isMaximized }">
              <Transition name="slide" mode="out-in">
                <div v-if="selectedDemoUrl" :key="selectedDemoUrl" class="iframe-wrapper">
                  <button v-if="!isFullscreenMode" class="close-button" @click="closeDialog">
                    ✕
                  </button>
                  <button
                    v-else
                    class="home-button rounded-sm p-xs bg-color-blue-light color-white font-weight-black"
                    @click="closeDialog"
                  >
                    home
                  </button>
                  <iframe
                    :src="selectedDemoUrl"
                    class="demo-iframe"
                    :class="{
                      'demo-iframe-active': selectedDemoUrl,
                      'rounded-sm': !isMaximized,
                    }"
                    frameborder="0"
                  ></iframe>
                </div>
              </Transition>
            </div>
            <div class="gallery">
              <div
                v-for="demo in demos"
                :key="demo.slug"
                class="gallery-item rounded-sm"
                :class="{ 'border-color-secondary active': selectedDemoUrl === demo.url }"
                @click="selectDemo(demo.slug)"
              >
                <img
                  v-if="demo.image"
                  :src="demo.image"
                  class="gallery-image rounded-sm demo-thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import DemoCard from './DemoCard.vue'
import { type Demo } from '@/types'

interface Props {
  initialDemo?: string
  fullscreen?: boolean
  demos?: Demo[]
}

const props = defineProps<Props>()
const isClient = ref(false)
const isFullscreenMode = import.meta.env.VITE_FULLSCREEN === 'true'
const isDialogOpen = ref(false)
const selectedDemoUrl = ref<string | null>(null)
const isMaximized = ref(false)
const dialogRef = ref<HTMLElement | null>(null)

onMounted(() => (isClient.value = true))

const openDialog = (slug: string) => {
  if (!selectDemo(slug)) return
  isDialogOpen.value = true
  isMaximized.value = isFullscreenMode
}

const closeDialog = () => {
  isDialogOpen.value = false
  selectedDemoUrl.value = null
  isMaximized.value = false
}

function selectDemo(slug: string) {
  const demo = props?.demos?.find((d) => d.slug === slug)
  if (!demo) return false

  selectedDemoUrl.value = demo.url
  isMaximized.value = isFullscreenMode
  return true
}

watch(
  () => props.initialDemo,
  (slug) => slug && openDialog(slug),
  { immediate: true },
)
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  height: 100%;
  position: relative;
}

.card-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.dialog-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.dialog {
  background: transparent;
  position: relative;
  border-radius: 8px;
  width: min(90%, 1920px);
  max-height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
}

.dialog.is-maximized {
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  border-radius: 0;
  margin: 0;
}

.home-button {
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0.8rem;
  left: 10.5rem;
  z-index: 1001;
}

.iframe-container {
  position: relative;
  flex: 1;
  overflow: hidden;
  background: transparent;
}

.demo-iframe {
  width: 100%;
  height: 100%;
  zoom: 0.8;
  width: 1920px;
  height: 1080px;
  transform: scale(0.6);
  opacity: 0;
  &-active {
    opacity: 1;
  }
  transition: all 1s ease;
}

.gallery {
  display: flex;
  overflow-x: auto;
  padding: 10px;
  background: transparent;
  gap: 10px;
  justify-content: center;
  min-height: 120px;
}

.gallery-item {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  height: fit-content;
  border: 2px solid transparent;
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.gallery-item.active {
  border-color: #64d8bf;
}

.gallery-item:hover {
  background: #f0f0f0;
}

.gallery-image {
  width: 160px;
  height: 90px;
  object-fit: cover;
}

.iframe-wrapper {
  position: relative;
  width: fit-content;
  height: fit-content;
}

.is-maximized {
  .demo-iframe {
    transform: scale(1);
    width: 100%;
    height: 100%;
  }
  .iframe-container {
    .iframe-wrapper {
      width: 100%;
      height: 100%;
    }
  }

  .gallery {
    display: none;
  }
}

.close-button {
  background: #ff4d4f;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10rem;
  right: 18rem;
  z-index: 1001;
  &:hover {
    background: #d9363e;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from {
  transform: translateX(100%) scale(0.6);
}

.slide-leave-to {
  transform: translateX(-100%) scale(0.6);
}

.dialog-enter-active,
.dialog-leave-active {
  transition: opacity 0.3s ease;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
}

.dialog-enter-active .dialog,
.dialog-leave-active .dialog {
  transition: transform 0.3s ease;
}

.dialog-enter-from .dialog,
.dialog-leave-to .dialog {
  transform: scale(0.8);
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from {
  transform: scale(0.1);
  transform: translateX(100%) scale(0.6);
}

.slide-leave-to {
  transform: translateX(-100%) scale(0.6);
}
</style>
