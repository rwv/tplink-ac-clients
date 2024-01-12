import type { Client } from '@/utils/ac'
import { computed } from 'vue'
import type { Ref } from 'vue'
import { searchAssignments } from '@/utils/mac-address'
import { computedAsync, get } from '@vueuse/core'

export default function toVendor(client_: Client | Ref<Client>) {
  const client = computed(() => get(client_))

  const vendor = computedAsync(async () => {
    const vendors = await searchAssignments(normalizeAssignment(client.value.mac), {
      blocks: {
        'MA-L': true,
        'MA-M': true,
        'MA-S': true,
        IAB: true,
        CID: true
      }
    })

    if (vendors.length === 0) {
      return undefined
    } else {
      return vendors[0]['Organization Name']
    }
  })

  function normalizeAssignment(assignment: string) {
    const upper = assignment.toUpperCase()
    // keep only 0-9 and A-F

    return upper.replace(/[^0-9A-F]/g, '')
  }

  return { vendor, normalizeAssignment }
}
