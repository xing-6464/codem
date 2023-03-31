// 时间格式化
export function dateTo(date: Date) {
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDay();
  return `${y}/${m}/${d}`;
}
