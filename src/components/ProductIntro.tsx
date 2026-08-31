'use client';

import type { Dict } from '@/i18n';
import Reveal from '@/components/ui/Reveal';
import ProductConversation from '@/components/ProductConversation';

/**
 * The product, introduced immediately after the hero establishes the brand
 * and message — not crammed into the hero itself.
 */
export default function ProductIntro({ dict }: { dict: Dict }) {
  return (
    <section id="product" className="section-y px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        <Reveal className="text-center mb-14">
          <h2 className="type-h2 font-heading font-medium text-ink text-balance">
            {dict.productIntro.title}
          </h2>
        </Reveal>

        <ProductConversation dict={dict} />
      </div>
    </section>
  );
}
