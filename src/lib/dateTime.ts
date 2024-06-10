export function toISOTimeStrapi(date) {
  if (!date) return date;

  return date.toISOTime().substring(0, 8);
}
