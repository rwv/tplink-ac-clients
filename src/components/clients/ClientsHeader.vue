<template>
  <n-flex justify="space-between" align="center">
    <n-flex size="small">
      <n-button quaternary circle @click="whereStore.refreshClients" class="refresh-icon">
        <template #icon>
          <n-icon><IndicatorSVG :percentage="whereStore.timeToNextUpdatePercent" /></n-icon>
        </template>
      </n-button>
      <SettingsButton />
    </n-flex>

    <span>
      <span v-if="time - whereStore.lastUpdated > 30 * 1000">
        <n-time :time="whereStore.lastUpdated" :to="time" type="relative" />更新
      </span>
    </span>
  </n-flex>
</template>

<script setup lang="ts">
import { NTime, NFlex, NButton, NIcon } from 'naive-ui'
import { useWhereStore } from '@/stores/where'
import { useTimestamp } from '@vueuse/core'
import IndicatorSVG from './IndicatorSVG.vue'
import SettingsButton from '@/components/settings/SettingsButton.vue'

const whereStore = useWhereStore()
const time = useTimestamp()
</script>

<style scoped>
.refresh-icon {
  margin-right: 0.5rem;
}
</style>
