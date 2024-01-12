import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import type { Ref } from 'vue'
import { getToken, getClients, type Client } from '@/utils/ac'
import { useIntervalFn } from '@vueuse/core'

export const useWhereStore = defineStore('where', () => {
  const endpoint = useStorage('endpoint', '') as Ref<string>
  const username = useStorage('username', '') as Ref<string>
  const password = useStorage('password', '') as Ref<string>
  const token = useStorage('token', '') as Ref<string>
  const clients = useStorage('clients', []) as Ref<Client[]>
  const lastUpdated = useStorage('lastUpdate', 0) as Ref<number>
  const updateInterval = useStorage('updateInterval', 5000) as Ref<number>

  async function login() {
    if (!endpoint.value) {
      throw new Error('endpoint is empty')
    }
    if (!username.value) {
      throw new Error('username is empty')
    }
    if (!password.value) {
      throw new Error('password is empty')
    }

    const token_ = await getToken(endpoint.value, username.value, password.value)
    console.log(`Login success, token: ${token_}`)
    token.value = token_
  }

  async function refreshClients() {
    if (!token.value) {
      await login()
    }

    const clients_ = await getClients(endpoint.value, token.value)
    console.log(`Refresh clients success, clients count: ${JSON.stringify(clients_.length)}`)
    clients.value = clients_
    lastUpdated.value = Date.now()
    console.log(`Refresh clients Last Update: ${lastUpdated.value}`)
  }

  useIntervalFn(refreshClients, updateInterval.value)

  return { endpoint, username, password, token, login, refreshClients, clients, lastUpdated }
})
