import { sq } from './sq';
import { en } from './en';
import type { Dict, Locale } from './types';

export type { Dict, Locale, CaseStudy, PricingTier, DemoBusiness } from './types';

export const WHATSAPP_NUMBER = '355682061862';

export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getDict(locale: Locale): Dict {
  return locale === 'en' ? en : sq;
}
