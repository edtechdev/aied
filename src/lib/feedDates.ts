/**
 * feedDates.ts - RSS <pubDate> in RFC-822 with the site's own UTC offset kept.
 *
 * @astrojs/rss re-formats a Date to UTC, which shifts an Eastern-evening timestamp
 * to the next calendar day. A feed item dated tomorrow morning is a small lie the
 * reader sees in their feed app, so the string is injected through customData (or
 * written by hand) exactly as authored, offset included.
 */
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function toRfc822Local(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})([+-]\d{2}:?\d{2}|Z)?/.exec(iso);
  if (!m) return iso;
  const [, y, mo, d, hh, mi, ss, offset] = m;
  const tz = !offset || offset === 'Z' ? 'GMT' : offset.replace(':', '');
  const weekday = DAYS[new Date(+y, +mo - 1, +d).getDay()];
  return `${weekday}, ${String(d).padStart(2, '0')} ${MONTHS[+mo - 1]} ${y} ${hh}:${mi}:${ss} ${tz}`;
}

/** Minimal XML text escaping for the hand-written feed. */
export function xmlEscape(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
