export function cleanObj(obj) {
  for (const key in obj) {
    if (obj[key] === undefined) {
      delete obj[key]
    }
  }
}
