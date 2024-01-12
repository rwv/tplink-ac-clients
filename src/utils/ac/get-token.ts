export async function getToken(
  endpoint: string,
  username: string,
  password: string
): Promise<string> {
  const body = {
    method: 'do',
    login: { username, password }
  }

  const response = await fetch(`${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })

  const json = await response.json()

  return json.stok
}
