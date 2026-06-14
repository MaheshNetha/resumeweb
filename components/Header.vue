<template>
  <header class="site-header container">
    <div class="brand">
      <h1 class="name">{{ name }}</h1>
      <p class="role">{{ role }}</p>
    </div>
    <nav class="top-nav">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <button @click="toggleTheme" aria-label="Toggle theme">{{ themeIcon }}</button>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({ name: String, role: String })
const theme = ref(localStorage.getItem('theme') || 'light')
const themeIcon = computed(() => theme.value === 'dark' ? '☀️' : '🌙')
function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', theme.value)
  localStorage.setItem('theme', theme.value)
}
</script>
