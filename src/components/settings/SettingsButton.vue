<template>
  <n-button quaternary circle @click="showModal = true">
    <template #icon>
      <n-icon :component="Icon"> </n-icon>
    </template>
  </n-button>
  <n-modal v-model:show="showModal">
    <n-card title="设置" :bordered="false" role="dialog" aria-modal="true" style="width: 90vw">
      <n-form>
        <n-form-item label="AC 地址">
          <n-input v-model:value="whereStore.endpoint" />
        </n-form-item>
        <n-form-item label="账户名">
          <n-input v-model:value="whereStore.username" />
        </n-form-item>
        <n-form-item label="密码">
          <n-input v-model:value="whereStore.password" type="password" />
        </n-form-item>
        <n-form-item label="更新间隔">
          <n-input-number
            v-model:value="whereStore.updateInterval"
            style="width: 100%"
            :show-button="false"
          >
            <template #suffix> ms </template>
          </n-input-number>
        </n-form-item>
        <n-form-item label="显示隐藏客户端">
          <n-switch v-model:value="whereStore.showHidden" />
        </n-form-item>
      </n-form>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
import {
  NCard,
  NForm,
  NFormItem,
  NInput,
  NButton,
  NSwitch,
  NModal,
  NIcon,
  NInputNumber
} from 'naive-ui'
import { useWhereStore } from '@/stores/where'
import { ref } from 'vue'
import { Settings16Regular as Icon } from '@vicons/fluent'

const showModal = ref(false)

const whereStore = useWhereStore()
</script>
