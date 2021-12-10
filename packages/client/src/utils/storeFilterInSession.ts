export const storeFilterInSession = (filter: string | string[]) => {
  sessionStorage.setItem('filter', JSON.stringify(filter))
}
