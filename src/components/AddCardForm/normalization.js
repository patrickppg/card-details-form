export function normalizeNumber(value) {
  if (!value) return value
  const nums = value.replace(/[^\d]/g, "")

  if (nums.length <= 4) return nums
  if (nums.length <= 8) return `${nums.slice(0, 4)} ${nums.slice(4)}`
  if (nums.length <= 12) return `${nums.slice(0, 4)} ${nums.slice(4, 8)} ${nums.slice(8)}`
  if (nums.length <= 16) return `${nums.slice(0, 4)} ${nums.slice(4, 8)} ${nums.slice(8, 12)} ${nums.slice(12)}`
  if (nums.length > 16) return `${nums.slice(0, 4)} ${nums.slice(4, 8)} ${nums.slice(8, 12)} ${nums.slice(12, 16)}`
}

export function normalizeExp(value) {
  if (!value) return value
  const nums = value.replace(/[^\d]/g, "")

  if (nums.length <= 2) return nums
  if (nums.length <= 4) return `${nums.slice(0, 2)}/${nums.slice(2)}`
  if (nums.length > 4) return `${nums.slice(0, 2)}/${nums.slice(2, 4)}`
}

export function normalizeCvc(value) {
  if (!value) return value
  const nums = value.replace(/[^\d]/g, "")

  return nums.slice(0, 3)
}