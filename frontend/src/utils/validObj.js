export const validObj = (obj) => {
  return obj === undefined || obj === null || Object.keys(obj).length === 0
    ? false
    : true
}
