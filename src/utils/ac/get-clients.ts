export interface Client {
    ap_name: string;
    connect_date: string;
    connect_time: string;
    encode: string;
    entry_id: string;
    freq_name: string;
    freq_unit: string;
    ip: string;
    mac: string;
    ipv6: string;
    rssi: string;
    ssid: string;
    vlan: string;
}

export async function getClients(endpoint: string, token: string) {
  const apiURL = `${endpoint}/stok=${token}/ds`

  const client_body = {
    method: 'get',
    apmng_client: {
      table: 'client_list',
      filter: [{ group_id: '0' }],
      para: { start: 0, end: 100 }
    }
  }
  const client_response = await fetch(apiURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(client_body)
  })

  const client_list = (await client_response.json())['apmng_client']['client_list']
  const clients = client_list.map((client: any) => Object.values(client)[0])

  return clients
}
