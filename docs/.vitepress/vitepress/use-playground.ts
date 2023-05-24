const MAIN_FILE_NAME = 'App.vue'

export function utoa(data: string): string {
  return btoa(unescape(encodeURIComponent(data)))
}

export const usePlayground = (source: string) => {
  const code = decodeURIComponent(source)
  const originCode = {
    [MAIN_FILE_NAME]: code,
  }

  const encoded = utoa(JSON.stringify(originCode))
  return {
    encoded,
  }
}
