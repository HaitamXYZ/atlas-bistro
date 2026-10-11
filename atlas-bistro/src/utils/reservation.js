export function formatLocalDate(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function validateReservation(form, today = formatLocalDate()) {
  if (!form.name?.trim() || form.name.trim().length < 2) return false;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email?.trim() || '')) return false;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(form.date || '') || form.date < today) return false;
  if (!['19:00', '19:30', '20:00', '20:30', '21:00', '21:30'].includes(form.time)) return false;
  if (!Number.isInteger(Number(form.guests)) || Number(form.guests) < 1 || Number(form.guests) > 8) return false;
  return true;
}
