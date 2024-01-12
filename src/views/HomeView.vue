<script setup lang="ts">
import { onMounted } from 'vue'
import { useWhereStore } from '@/stores/where'
import SettingsCollapse from '@/components/settings/SettingsCollapse.vue'

const whereStore = useWhereStore()

onMounted(async () => {
  const clients = await whereStore.refreshClients()
  console.log(clients)
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
