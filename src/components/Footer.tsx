'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Linkedin, Instagram, Mail, MapPin } from 'lucide-react';
import { getDict } from '@/i18n';

export default function Footer() {
  const pathname = usePathname();
  const isEn = pathname?.startsWith('/en') ?? false;
  const dict = getDict(isEn ? 'en' : 'sq');
  const f = dict.footer;
  const home = isEn ? '/en' : '/';
  const privacyHref = isEn ? '/en/privacy' : '/privatesia';
  const termsHref = isEn ? '/en/terms' : '/kushtet';

  return (
    <footer className="border-t border-surface-border bg-surface/40 pt-16 pb-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr] gap-10 mb-12">
          {/* brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href={home} className="flex items-center gap-2 mb-4">
              <div className="relative w-9 h-9 overflow-hidden rounded-lg">
                <Image src="/logo.png" alt="Codrix" fill className="object-cover" />
              </div>
              <span className="text-xl font-bold font-heading tracking-tight text-white">Codrix</span>
            </Link>
            <p className="type-small text-tertiary max-w-xs mb-5">{f.tagline}</p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/codrix.al/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/codrix-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* services */}
          <div>
            <p className="text-sm font-semibold text-white mb-4">{f.colServices.title}</p>
            <ul className="space-y-2.5">
              {f.colServices.items.map((item) => (
                <li key={item} className="type-small text-tertiary">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* company */}
          <div>
            <p className="text-sm font-semibold text-white mb-4">{f.colCompany.title}</p>
            <ul className="space-y-2.5">
              {f.colCompany.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="type-small text-tertiary hover:text-white transition-colors link-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* contact & legal */}
          <div>
            <p className="text-sm font-semibold text-white mb-4">{f.colContact.title}</p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${f.email}`}
                  className="type-small text-tertiary hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" /> {f.email}
                </a>
              </li>
              <li className="type-small text-tertiary inline-flex items-center gap-2">
                <MapPin className="w-4 h-4" /> {f.hours}
              </li>
              <li>
                <Link
                  href={privacyHref}
                  className="type-small text-tertiary hover:text-white transition-colors link-underline"
                >
                  {f.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href={termsHref}
                  className="type-small text-tertiary hover:text-white transition-colors link-underline"
                >
                  {f.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-surface-border">
          <p className="type-small text-tertiary">
            © {new Date().getFullYear()} Codrix. {f.rights}
          </p>
          <p className="type-small text-tertiary">{f.builtIn}</p>
        </div>
      </div>
    </footer>
  );
}
