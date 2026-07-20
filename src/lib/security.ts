/**
 * Shared server-side security helpers for the API route handlers.
 * Keep this file free of client imports — it runs only in `runtime = 'nodejs'`.
 */

/**
 * Escape a value for safe interpolation into an HTML document / email body.
 * Neutralises the five HTML-significant characters so user input can never
 * introduce markup (links, images, tags) into the emails we send ourselves.
 */
export function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function originFromReferer(referer: string | null): string | null {
  if (!referer) return null;
  try {
    return new URL(referer).origin;
  } catch {
    return null;
  }
}

/**
 * Allow-list Origin/Referer check for state-changing POST handlers.
 *
 * Origins are read from the comma-separated `ALLOWED_ORIGINS` env var so
 * preview deployments and the future `codrix.al` domain can be added without a
 * code change. When the var is unset (local development) all requests pass, so
 * `npm run dev` is unaffected. When it is set, a request must carry a matching
 * `Origin` (falling back to the origin parsed from `Referer`).
 */
export function isAllowedOrigin(req: Request): boolean {
  const configured = process.env.ALLOWED_ORIGINS;
  if (!configured) return true; // not configured (dev) — do not block

  const allowed = configured
    .split(',')
    .map((o) => o.trim())
    .filter(Boolean);
  if (allowed.length === 0) return true;

  const origin = req.headers.get('origin') ?? originFromReferer(req.headers.get('referer'));
  if (!origin) return false; // configured but request presents no origin
  return allowed.includes(origin);
}
