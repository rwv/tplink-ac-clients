<template>
  <n-descriptions label-placement="left" bordered :column="1">
    <n-descriptions-item label="MAC 地址">
      <n-text>{{ client.mac }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="IPV4">
      <n-text>{{ client.ip }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="SSID">
      <n-text>{{ client.ssid }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="AP 名称">
      <n-text>{{ client.ap_name }}</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="信号强度">
      <n-text>{{ client.rssi }} dBm</n-text>
    </n-descriptions-item>
    <n-descriptions-item label="频段">
      <n-space :size="5" align="center" item-style="display: flex;">
        <n-badge dot :type="client.freq_name === '2.4GHz' ? 'warning' : 'success'" /><n-text>{{
          client.freq_name
        }}</n-text>
      </n-space>
    </n-descriptions-item>
    <n-descriptions-item label="连接时间">
      <n-time :time="connectTimestamp" />
      <br />
      <n-time :time="connectTimestamp" type="relative" />
    </n-descriptions-item>
  </n-descriptions>
</template>

<script setup lang="ts">
import type { Client } from '@/utils/ac'
import { NDescriptions, NDescriptionsItem, NText, NTime, NBadge, NSpace } from 'naive-ui'
import { computed } from 'vue'

const props = defineProps<{
  client: Client
}>()

const connectTimestamp = computed(() => {
  const dateDecode = props.client.connect_date.replace(/%2f/g, '/')
  const timeDecode = props.client.connect_time.replace(/%3a/g, ':')
  const connectTimestamp = Date.parse(dateDecode + ' ' + timeDecode)
  return connectTimestamp
})
</script>
