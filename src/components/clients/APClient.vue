<template>
  <n-collapse-item :title="client.name ?? client.mac" :name="client.mac">
    <template #header-extra>
      {{ client.ap_name }}
    </template>
    <ClientInfo :client="client" />
  </n-collapse-item>
</template>

<script setup lang="ts">
import { NCollapseItem } from 'naive-ui'
import ClientInfo from './ClientInfo.vue'
import type { Client } from '@/utils/ac'

defineProps<{
  client: Client
}>()
</script>
