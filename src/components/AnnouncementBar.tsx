'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { getDict } from '@/i18n';

export default function AnnouncementBar() {
  const pathname = usePathname();
  const isEn = pathname?.startsWith('/en') ?? false;
  const dict = getDict(isEn ? 'en' : 'sq');
  const a = dict.announcement;

  return (
    <div className="border-b border-border bg-[#F5F3EE] px-4">
      <div className="max-w-[1400px] mx-auto flex items-center justify-center gap-2 h-10 text-center">
        <p className="type-small text-ink-muted truncate">
          {a.text}{' '}
          <Link href={a.href} className="inline-flex items-center gap-1 text-ink font-medium hover:text-primary transition-colors">
            {a.cta}
            <ArrowRight className="w-3 h-3" />
          </Link>
        </p>
      </div>
    </div>
  );
}
