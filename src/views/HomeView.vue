<script setup lang="ts">
import { onMounted } from 'vue'
import { useWhereStore } from '@/stores/where'
import SettingsCollapse from '@/components/settings/SettingsCollapse.vue'
import APClients from '@/components/clients/APClients.vue'
import ClientHeader from '@/components/clients/ClientsHeader.vue'
import { NDivider } from 'naive-ui'

const whereStore = useWhereStore()

onMounted(async () => {
  await whereStore.login()
  await whereStore.refreshClients()
})
</script>

<template>
  <main>
    <ClientHeader />
    <n-divider />
    <APClients />
    <n-divider />
    <SettingsCollapse />
  </main>
</template>


<style scoped>
main {
  padding: 1rem;
}
</style>
