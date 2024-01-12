<script setup lang="ts">
import { onMounted } from 'vue'
import { useWhereStore } from '@/stores/where'
import SettingsCollapse from '@/components/settings/SettingsCollapse.vue'

const whereStore = useWhereStore()

onMounted(async () => {
  whereStore.login()
})
</script>

<template>
  <main>
    <SettingsCollapse />
  </main>
</template>
