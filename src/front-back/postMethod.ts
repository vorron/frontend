const getConfig = (): Partial<RequestInit> => {
  return {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Request-Method': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*'
      //Authorization: `Bearer ${token.value}`,
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer' // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  }
}

const dateReviver = (key: string, value: any) => {
  // Checking if a value is a date string
  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(value)) {
    return new Date(value)
  }
  return value
}

const postMethod = async <TResponse>(data: Record<string, unknown>): Promise<TResponse> => {
  const postData: BodyInit = data as unknown as BodyInit
  const url = import.meta.env.VITE_URL
  const options: RequestInit = {
    ...getConfig(),
    body: JSON.stringify(postData)
  }
  const response = await fetch(url, options)
  const json = await response.text()
  return JSON.parse(json, dateReviver) as TResponse
}

export default postMethod
