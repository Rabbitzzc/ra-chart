/**
 * 判断两个数组是否相等
 */

export default function equal(arr1, arr2) {
  if (arr1 === arr2) return true;
  if (arr1.length !== arr2.length) return false;
  // eslint-disable-next-line no-restricted-syntax
  for (const i in arr1) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
