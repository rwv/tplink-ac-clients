export async function getToken(
  endpoint: string,
  username: string,
  password: string
): Promise<string> {
  const body = {
    method: 'do',
    login: { username, password: orgAuthPwd(password) }
  }

  const response = await fetch(`${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })

  const json = await response.json()

  return json.stok
}

function orgAuthPwd(a: string): string {
  return securityEncode(
    a,
    'RDpbLfCPsJZ7fiv',
    'yLwVl0zKqws7LgKPRQ84Mdt708T1qQ3Ha7xv3H7NyU84p21BriUWBU43odz3iP4rBL3cD02KZciXTysVXiV8ngg6vL48rPJyAUw0HurW20xqxv9aYb4M9wK1Ae0wlro510qXeU07kV57fQMc8L6aLgMLwygtc0F10a0Dg70TOoouyFhdysuRMO51yY5ZlOZZLEal1h0t9YQW0Ko7oBwmCAHoic4HYbUyVeU3sfQ1xtXcPcf1aT303wAQhv66qzW'
  )
}

function securityEncode(a: string, b: string, d: string) {
  let e = '',
    l = 187,
    t = 187
  const g = a.length
  const m = b.length
  const k = d.length
  const h = g > m ? g : m
  for (let f = 0; f < h; f++)
    (t = l = 187),
      f >= g
        ? (t = b.charCodeAt(f))
        : f >= m
          ? (l = a.charCodeAt(f))
          : ((l = a.charCodeAt(f)), (t = b.charCodeAt(f))),
      (e += d.charAt((l ^ t) % k))
  return e
}
