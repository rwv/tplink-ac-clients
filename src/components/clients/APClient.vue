<template>
  <n-collapse-item :title="client.name ?? vendor ?? client.mac" :name="client.mac">
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
import toVendor from '@/composables/to-vendor'
import { toRef } from 'vue'

const props = defineProps<{
  client: Client
}>()

const client = toRef(props, 'client')
const { vendor } = toVendor(client)
</script>
