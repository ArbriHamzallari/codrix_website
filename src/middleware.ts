import { NextRequest, NextResponse } from 'next/server';

// Matches any crawler UA that should see / and /en exactly as they are —
// content decisions for bots are made by robots.txt/sitemap.ts, not here.
const BOT_UA_PATTERN =
  /bot|crawl|spider|slurp|googlebot|bingbot|gptbot|claudebot|perplexitybot|facebookexternalhit|whatsapp|telegrambot/i;

const ALBANIAN_SPEAKING_COUNTRIES = new Set(['AL', 'XK']);

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  if (BOT_UA_PATTERN.test(userAgent)) {
    return NextResponse.next();
  }

  // Vercel sets this header at the edge; there is no `request.geo` in this Next.js version.
  const country = request.headers.get('x-vercel-ip-country');
  if (country && !ALBANIAN_SPEAKING_COUNTRIES.has(country)) {
    return NextResponse.redirect(new URL('/en', request.url));
  }

  return NextResponse.next();
}

// Only the bare root — /en (and every other route) must stay directly
// reachable with no redirect, for both humans and crawlers.
export const config = {
  matcher: '/',
};
