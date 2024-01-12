<template>
  <n-collapse>
    <n-collapse-item
      :title="client.name ?? client.mac"
      :name="client.mac"
      v-for="client in whereStore.clientsFiltered"
      :key="client.mac"
    >
      <template #header-extra>
        {{ client.ap_name }}
      </template>
      <ClientInfo :client="client" />
    </n-collapse-item>
  </n-collapse>
</template>

<script setup lang="ts">
import { NCollapse, NCollapseItem } from 'naive-ui'
import { useWhereStore } from '@/stores/where'
import ClientInfo from './ClientInfo.vue'

const whereStore = useWhereStore()
</script>
