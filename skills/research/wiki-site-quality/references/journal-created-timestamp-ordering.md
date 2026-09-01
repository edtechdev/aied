# Journal ordering: `created` frontmatter timestamps, not journal.md order

## Symptom (2026-08-25)
User: "Why aren't the new articles listed first on the journal page?" The just-ingested
batch appeared BELOW other pages added the same day, even though they were the most
recent wiki additions.

## Root cause
The Astro journal page (`src/pages/journal.astro`) does **NOT** read journal.md's line order.
It rebuilds everything from each page's frontmatter `created` field:

```js
const dates = Object.keys(byDate).sort().reverse();            // day-level, reverse-chron
Object.values(byDate).forEach(list => {
  list.sort((a, b) => (b.data.created || '').localeCompare(a.data.created || ''));  // within-day
});
```

So the displayed order is a reverse-chronological sort of the `created` **timestamps**.
If any page has a `created` timestamp AHEAD of the current wall-clock (future-dated), it
sorts ABOVE pages that were actually ingested more recently — "new articles not first."

## How the future-dating happened
While creating several pages by hand in one session, I stamped `created` values that were
several hours ahead of the real clock (e.g. `11:30` when `date` said `09:52`), because I was
assigning timestamps relative to the other pages in the batch rather than the actual time.
Those future-dated pages then out-sorted the genuine, honest-timestamp ingestions.

## Fix / prevention
1. **Never hand-set `created` ahead of the wall clock.** Stamp `created` from the real
   current time (`date "+%Y-%m-%dT%H:%M:%S%z"`), or bump to a real `now` when re-touching.
   Full ISO with `-04:00` offset, never date-only (date-only breaks within-day tie order).
2. When a freshly-ingested batch must appear first, set its `created` to the REAL current
   time (which is by definition the newest), and **audit every sibling page** for
   accidentally future-dated `created` values, correcting them to honest times.
3. **Verify by re-deriving the order**, not by trusting a green build:
   ```
   collect `created:` from all .md under articles/ + concepts/ + faqs/, sort descending
   ```
   Confirm the target batch is at the top of its day group before committing.

## Why green build ≠ correct order
`npm run build` succeeds regardless of `created` ordering — the build does not validate
that timestamps are honest or that the journal shows the intended "newest first" sequence.
Always re-derive the reverse-chron order after changing timestamps.
