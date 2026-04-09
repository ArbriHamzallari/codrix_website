export default function PlatformStrip() {
  const platforms = [
    { name: 'WhatsApp', color: '#25D366' },
    { name: 'Instagram', color: '#E1306C' },
    { name: 'Facebook Messenger', color: '#0084FF' },
    { name: 'Web Chat', color: '#6366F1' },
    { name: 'Email', color: '#94A3B8' },
  ];

  return (
    <div className="py-6 border-b border-white/[0.06] bg-background">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-4">
        <p className="text-white/40 text-sm whitespace-nowrap">Works on:</p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {platforms.map((p) => (
            <span key={p.name} className="text-sm font-medium" style={{ color: p.color }}>
              {p.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
