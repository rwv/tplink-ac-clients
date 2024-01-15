import { defineStore } from 'pinia'
import { useStorage, useTimestamp } from '@vueuse/core'
import type { Ref } from 'vue'
import { getToken, getClients, type Client } from '@/utils/ac'
import { useIntervalFn } from '@vueuse/core'
import { ref, computed } from 'vue'
import { useMessage } from 'naive-ui'

export const useWhereStore = defineStore('where', () => {
  const endpoint = useStorage('endpoint', '') as Ref<string>
  const username = useStorage('username', '') as Ref<string>
  const password = useStorage('password', '') as Ref<string>
  const token = useStorage('token', '') as Ref<string>
  const clients = useStorage('clients', []) as Ref<Client[]>
  const lastUpdated = useStorage('lastUpdate', 0) as Ref<number>
  const updateInterval = useStorage('updateInterval', 10000) as Ref<number>
  const lastInterval = ref(Date.now())
  const now = useTimestamp()
  const timeToNextUpdate = computed(() => {
    return Math.max(0, updateInterval.value - (now.value - lastInterval.value))
  })
  const timeToNextUpdatePercent = computed(() => {
    return Math.round((100 * timeToNextUpdate.value) / updateInterval.value)
  })
  const showHidden = useStorage('showHidden', false) as Ref<boolean>
  const loginInfoComplete = computed(() => {
    return endpoint.value && username.value && password.value
  })


  const clientsFiltered = computed(() => {
    return clients.value.filter((client) => {
      return showHidden.value || !client?.name?.startsWith('.')
    })
  })

  const message = useMessage()

  async function login() {
    try {
      if (!loginInfoComplete.value) {
        return
      }

      const token_ = await getToken(endpoint.value, username.value, password.value)
      console.log(`Login success, token: ${token_}`)
      token.value = token_
    } catch (e) {
      message.error(`${e}`)
    }
  }

  async function refreshClients() {
    try {
      if (!loginInfoComplete.value) {
        return
      }

      if (!token.value) {
        await login()
      }

      const clients_ = await getClients(endpoint.value, token.value)
      console.log(`Refresh clients success, clients count: ${JSON.stringify(clients_.length)}`)
      clients.value = clients_
      lastUpdated.value = Date.now()
      console.log(`Refresh clients Last Update: ${lastUpdated.value}`)
    } catch (e) {
      message.error(`${e}`)
      await login()
    }
  }

  async function updateClientsIntervalFn() {
    lastInterval.value = Date.now()
    await refreshClients()
  }

  useIntervalFn(updateClientsIntervalFn, updateInterval.value)

  return {
    endpoint,
    username,
    password,
    token,
    login,
    refreshClients,
    clients,
    lastUpdated,
    lastInterval,
    updateInterval,
    timeToNextUpdate,
    timeToNextUpdatePercent,
    showHidden,
    clientsFiltered,
    loginInfoComplete
  }
})
