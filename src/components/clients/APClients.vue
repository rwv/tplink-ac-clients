<template>
  <n-collapse>
    <APClient v-for="client in whereStore.clientsFiltered" :key="client.mac" :client="client" />
  </n-collapse>
</template>

<script setup lang="ts">
import { NCollapse } from 'naive-ui'
import { useWhereStore } from '@/stores/where'
import APClient from './APClient.vue'

const whereStore = useWhereStore()
</script>
