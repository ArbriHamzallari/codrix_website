'use client';

import { useEffect } from 'react';

/**
 * The root layout owns `<html lang="sq">`. App Router can't set a different
 * `<html lang>` per nested route without splitting the root layout, so for the
 * /en subtree we flip the attribute on the client and restore it on unmount.
 * Static crawlers see `sq`; JS-running crawlers and assistive tech get `en`.
 */
export default function SetHtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    const prev = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = prev;
    };
  }, [lang]);
  return null;
}
