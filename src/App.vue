<script setup lang="ts">
import { RouterView } from 'vue-router'
import {
  useOsTheme,
  darkTheme,
  NConfigProvider,
  NGlobalStyle,
  NMessageProvider,
  zhCN,
  dateZhCN
} from 'naive-ui'
import { computed } from 'vue'

const osThemeRef = useOsTheme()
const theme = computed(() => (osThemeRef.value === 'dark' ? darkTheme : null))
</script>

<template>
  <n-config-provider :theme="theme" :locale="zhCN" :date-locale="dateZhCN">
    <n-global-style />
    <n-message-provider>
      <RouterView />
    </n-message-provider>
  </n-config-provider>
</template>
