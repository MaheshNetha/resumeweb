<template>
  <div class="project card">
    <h4>{{ title }}</h4>
    <p class="muted">{{ tech }}</p>
    <button class="toggle" @click="open = !open">{{ open ? 'Hide' : 'Details' }}</button>
    <div v-if="open" class="details"><slot /></div>
  </div>
</template>

<script setup>
const props = defineProps({ title: String, tech: String })
const open = ref(false)
</script>
