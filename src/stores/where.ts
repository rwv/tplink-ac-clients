import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import type { Ref } from 'vue'
import { getToken } from '@/utils/ac'

export const useWhereStore = defineStore('where', () => {
  const endpoint = useStorage('endpoint', '') as Ref<string>
  const username = useStorage('username', '') as Ref<string>
  const password = useStorage('password', '') as Ref<string>
  const token = useStorage('token', '') as Ref<string>

  async function login() {
    const token_ = await getToken(endpoint.value, username.value, password.value)
    token.value = token_
  }

  return { endpoint, username, password, token, login }
})
