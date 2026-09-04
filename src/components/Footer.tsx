'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Linkedin, Instagram, Mail, MapPin } from 'lucide-react';
import { getDict } from '@/i18n';
import { BrandLockup } from '@/components/BrandLockup';

// Add an entry here per new /vs/<competitor> page (claude.md §16) — footer-only,
// not linked from the main nav.
const COMPARE_LINKS = [
  { label: 'Biseda vs respond.io', slug: 'respond-io' },
  { label: 'Biseda vs Intercom', slug: 'intercom' },
  { label: 'Biseda vs Crisp', slug: 'crisp' },
  { label: 'Biseda vs Trengo', slug: 'trengo' },
];

// Add an entry here per new /for/<vertical> guide page (VERTICAL-GUIDE-FINAL-SPEC.md
// §N) — footer-only, matches the COMPARE_LINKS pattern above. Slugs differ per
// locale (the vertical noun is translated), unlike competitor names.
const GUIDE_LINKS = [
  { label: { sq: 'Klinikë dentare', en: 'Dental clinic' }, slug: { sq: 'klinike-dentare', en: 'dental-clinic' } },
];

export default function Footer() {
  const pathname = usePathname();
  const isEn = pathname?.startsWith('/en') ?? false;
  const dict = getDict(isEn ? 'en' : 'sq');
  const f = dict.footer;
  const home = isEn ? '/en' : '/';
  const privacyHref = isEn ? '/en/privacy' : '/privatesia';
  const termsHref = isEn ? '/en/terms' : '/kushtet';

  return (
    <footer className="border-t border-border pt-16 pb-10 px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1.4fr] gap-10 mb-12">
          {/* brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href={home} className="flex items-center gap-2 mb-4">
              <BrandLockup size={32} textClassName="text-base" />
            </Link>
            <p className="type-small text-ink-muted max-w-xs mb-5">{f.tagline}</p>
            <p className="type-small text-ink-muted/70 mb-5">Codrix Solutions Albania</p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/codrix.al/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-muted hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={19} />
              </a>
              <a
                href="https://www.linkedin.com/company/codrix-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-muted hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={19} />
              </a>
            </div>
          </div>

          {/* services */}
          <div>
            <p className="text-sm font-medium text-ink mb-4">{f.colServices.title}</p>
            <ul className="space-y-2.5">
              {f.colServices.items.map((item) => (
                <li key={item} className="type-small text-ink-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* company */}
          <div>
            <p className="text-sm font-medium text-ink mb-4">{f.colCompany.title}</p>
            <ul className="space-y-2.5">
              {f.colCompany.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="type-small text-ink-muted hover:text-ink transition-colors link-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* compare + guides */}
          <div>
            <p className="text-sm font-medium text-ink mb-4">{isEn ? 'Compare' : 'Krahaso'}</p>
            <ul className="space-y-2.5">
              {COMPARE_LINKS.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={isEn ? `/en/vs/${item.slug}` : `/vs/${item.slug}`}
                    className="type-small text-ink-muted hover:text-ink transition-colors link-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-sm font-medium text-ink mb-4 mt-6">
              {isEn ? 'Choose your business' : 'Zgjidhni biznesin tuaj'}
            </p>
            <ul className="space-y-2.5">
              {GUIDE_LINKS.map((item) => (
                <li key={item.slug.sq}>
                  <Link
                    href={isEn ? `/en/for/${item.slug.en}` : `/for/${item.slug.sq}`}
                    className="type-small text-ink-muted hover:text-ink transition-colors link-underline"
                  >
                    {isEn ? item.label.en : item.label.sq}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* contact & legal */}
          <div>
            <p className="text-sm font-medium text-ink mb-4">{f.colContact.title}</p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${f.email}`}
                  className="type-small text-ink-muted hover:text-ink transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" /> {f.email}
                </a>
              </li>
              <li className="type-small text-ink-muted inline-flex items-center gap-2">
                <MapPin className="w-4 h-4" /> {f.hours}
              </li>
              <li>
                <Link
                  href={privacyHref}
                  className="type-small text-ink-muted hover:text-ink transition-colors link-underline"
                >
                  {f.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href={termsHref}
                  className="type-small text-ink-muted hover:text-ink transition-colors link-underline"
                >
                  {f.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-border">
          <p className="type-small text-ink-muted">
            © {new Date().getFullYear()} Biseda AI. {f.rights}
          </p>
          <p className="type-small text-ink-muted">{f.builtIn}</p>
        </div>
      </div>
    </footer>
  );
}
