const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

/**
 * Formats a "YYYY-MM" (or "YYYY-MM-DD") string from me.json as "Nov 2024".
 *
 * It deliberately avoids `new Date("2024-11")`: that string is parsed as
 * midnight UTC, so `toLocaleDateString` shifted every date one month back
 * for visitors west of UTC (and caused a hydration mismatch on top).
 */
export function formatMonth(value: string | null | undefined): string {
  if (!value) return "Present";
  const match = /^(\d{4})-(\d{2})/.exec(value);
  if (!match) return value;
  const month = MONTHS[Number(match[2]) - 1];
  return month ? `${month} ${match[1]}` : value;
}
