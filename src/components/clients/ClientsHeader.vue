<template>
  <n-flex justify="space-between" align="center">
    <n-button quaternary circle @click="whereStore.refreshClients">
      <template #icon>
        <n-icon><ArrowClockwise16Regular /></n-icon>
      </template>
    </n-button>

    <span> <n-time :time="whereStore.lastUpdated" :to="now" type="relative" />更新 </span>
  </n-flex>
</template>

<script setup lang="ts">
import { NTime, NFlex, NButton, NIcon } from 'naive-ui'
import { useWhereStore } from '@/stores/where'
import { useNow } from '@vueuse/core'
import { ArrowClockwise16Regular } from '@vicons/fluent'

const whereStore = useWhereStore()
const now = useNow()
</script>
