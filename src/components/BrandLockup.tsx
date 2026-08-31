import Image from 'next/image';
import { cn } from '@/lib/utils';

/**
 * The full lockup: icon + wordmark, "Biseda" in the default foreground color,
 * "AI" in the brand purple (REBRAND-BISEDA-AI.md locked spec). Mirrors
 * codrix-panel's components/brand-lockup.tsx so both surfaces render the
 * same identity.
 */
export function BrandLockup({
  size = 36,
  textClassName,
  className,
}: {
  size?: number;
  textClassName?: string;
  className?: string;
}) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <Image
        src="/brand/logo-mark.svg"
        alt=""
        width={size}
        height={size}
        className="shrink-0"
      />
      <span className={cn('font-bold font-heading tracking-tight text-ink', textClassName)}>
        Biseda <span className="text-primary">AI</span>
      </span>
    </span>
  );
}
