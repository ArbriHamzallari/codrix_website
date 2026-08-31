'use client';

import Script from 'next/script';

declare global {
  interface Window {
    chatwootSDK?: { run: (config: { websiteToken: string; baseUrl: string }) => void };
  }
}

const BASE_URL = 'https://ops.biseda.app';
const WEBSITE_TOKEN = 'NoSRBeKTqDqXQzTwQFNbQ2yQ';

/**
 * Live chat widget. `next/script` (`afterInteractive`) instead of a raw
 * `<script>` tag so it loads after hydration rather than blocking it — same
 * async/non-blocking behavior as the original snippet, just through Next's
 * loading strategy instead of manual DOM insertion.
 */
export default function ChatWidget() {
  return (
    <Script
      src={`${BASE_URL}/packs/js/sdk.js`}
      strategy="afterInteractive"
      onLoad={() => {
        window.chatwootSDK?.run({ websiteToken: WEBSITE_TOKEN, baseUrl: BASE_URL });
      }}
    />
  );
}
