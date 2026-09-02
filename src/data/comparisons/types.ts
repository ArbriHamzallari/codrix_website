/**
 * Shared shape for every /vs/<competitor> comparison page. One `ComparisonData`
 * object is a single, fully-resolved locale — headline, table, FAQ, everything
 * in one language. Each comparison data file exports a `ComparisonSet`
 * (`Record<'sq' | 'en', ComparisonData>`), mirroring the pattern this repo
 * already uses for bilingual per-locale data (see the `Dict`/`getDict` split
 * in `src/i18n`).
 *
 * This split matters: an earlier version of these files kept the table
 * (`comparisonTable`) as a single shared array reused by both locales while
 * everything else was per-locale — so the page title/FAQ/pillars localized
 * correctly but the feature table stayed stuck in one language regardless of
 * which locale route rendered it. Keeping `comparisonTable` inside
 * `ComparisonData` (not lifted out beside it) makes that bug structurally
 * impossible to reintroduce.
 */

/** `'soon'` renders a distinct "in beta / coming soon" state — not a ✓, not a —. */
export type FeatureStatus = boolean | 'soon';

export interface ComparisonRow {
  feature: string;
  biseda: FeatureStatus;
  competitor: FeatureStatus;
  note?: string;
}

export interface ComparisonGroup {
  category: string;
  rows: ComparisonRow[];
}

export interface ComparisonData {
  slug: string;
  competitorName: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  pillars: { title: string; description: string }[];
  tableTitle: string;
  comparisonTable: ComparisonGroup[];
  chooseUs: { title: string; points: string[] };
  chooseThem: { title: string; points: string[] };
  faqTitle: string;
  faq: { q: string; a: string }[];
  ctaLabel: string;
  /** Label for the 'soon' feature-status cell, e.g. "Soon" / "Së shpejti". */
  soonLabel: string;
}

export type ComparisonSet = Record<'sq' | 'en', ComparisonData>;
