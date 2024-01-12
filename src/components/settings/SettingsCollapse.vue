<template>
  <n-collapse>
    <n-collapse-item title="设置" name="settings">
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
        <n-form-item label="显示隐藏客户端">
          <n-switch v-model:value="whereStore.showHidden" />
        </n-form-item>
        <n-button @click="whereStore.login">Login</n-button>
      </n-form>
    </n-collapse-item>
  </n-collapse>
</template>

<script setup lang="ts">
import { NCollapse, NCollapseItem, NForm, NFormItem, NInput, NButton, NSwitch } from 'naive-ui'
import { useWhereStore } from '@/stores/where'

const whereStore = useWhereStore()
</script>
