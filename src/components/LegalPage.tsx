type LegalDoc = { title: string; updated: string; body: string[] };

export default function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <section className="section-y px-4 sm:px-6 pt-32 md:pt-40">
      <div className="max-w-3xl mx-auto">
        <h1 className="type-h2 font-bold font-heading text-white mb-2">{doc.title}</h1>
        <p className="type-small text-tertiary mb-10">{doc.updated}</p>
        <div className="space-y-5">
          {doc.body.map((p) => (
            <p key={p.slice(0, 32)} className="type-body text-secondary">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
