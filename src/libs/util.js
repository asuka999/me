export function cleanObj(obj) {
  const rs = {...obj}
  for (const key in rs) {
    if (rs[key] === undefined) {
      delete rs[key]
    }
  }
  return rs
}

export function noCallback(fn) {
  return () => {
    let result
    fn((...args) => { result = args })
    return result || []
  }
}
