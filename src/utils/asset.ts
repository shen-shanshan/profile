// Resolve a file under public/ against the deploy base (/profile/).
export function asset(path: string): string {
  return import.meta.env.BASE_URL + path.replace(/^\//, '')
}
