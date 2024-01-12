<script setup lang="ts">
import { onMounted } from 'vue'
import { useWhereStore } from '@/stores/where'
import SettingsCollapse from '@/components/settings/SettingsCollapse.vue'

const whereStore = useWhereStore()

onMounted(async () => {
  await whereStore.refreshClients()
})
</script>

<template>
  <main>
    <SettingsCollapse />
  </main>
</template>


<style scoped>
main {
  padding: 1rem;
}
</style>
