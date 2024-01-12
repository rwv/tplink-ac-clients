<template>
  <n-collapse>
    <n-collapse-item title="设置" name="settings">
      <n-form>
        <n-form-item label="Endpoint">
          <n-input v-model:value="whereStore.endpoint" />
        </n-form-item>
        <n-form-item label="Username">
          <n-input v-model:value="whereStore.username" />
        </n-form-item>
        <n-form-item label="Password">
          <n-input v-model:value="whereStore.password" type="password" />
        </n-form-item>
        <n-form-item label="Token">
          <n-input v-model:value="whereStore.token" type="password" />
        </n-form-item>
        <n-button @click="whereStore.login">Login</n-button>
      </n-form>
    </n-collapse-item>
  </n-collapse>
</template>

<script setup lang="ts">
import { NCollapse, NCollapseItem, NForm, NFormItem, NInput, NButton } from 'naive-ui'
import { useWhereStore } from '@/stores/where'

const whereStore = useWhereStore()
</script>
