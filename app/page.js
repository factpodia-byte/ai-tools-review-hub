import Link from 'next/link';

const featured = [
  { slug: 'jasper-ai', name: 'Jasper AI', category: 'Writing', summary: 'Strong brand-voice marketing content at scale.' },
  { slug: 'copy-ai', name: 'Copy.ai', category: 'Writing', summary: 'Affordable templates for short-form copy and ads.' },
  { slug: 'adcreative-ai', name: 'AdCreative.ai', category: 'Ads', summary: 'Fast AI ad creatives with performance scores.' },
  { slug: 'elevenlabs', name: 'ElevenLabs', category: 'Voice', summary: 'Natural TTS and voice cloning for video & podcasts.' },
  { slug: 'writesonic', name: 'Writesonic', category: 'Writing', summary: 'All-in-one AI writer with SEO and chatbot features.' },
  { slug: 'gamma', name: 'Gamma', category: 'Presentations', summary: 'AI that turns prompts into polished decks and docs.' },
];

export default function Home() {
  return (
    <div>
      <h1>AI Tools Reviews & Comparisons</h1>
      <p className="subtitle">Honest summaries from online user feedback, forums, and published reviews. Clear verdicts so you can decide faster.</p>
      <div className="grid">
        {featured.map(tool => (
          <div key={tool.slug} className="card">
            <span className="category">{tool.category}</span>
            <h2><Link href={`/reviews/${tool.slug}`}>{tool.name}</Link></h2>
            <p>{tool.summary}</p>
            <Link href={`/reviews/${tool.slug}`} className="btn">Read review</Link>
          </div>
        ))}
      </div>
      <p style={{marginTop: '2.5rem', textAlign: 'center'}}>
        <Link href="/reviews" className="btn">View all reviews</Link>
      </p>
    </div>
  );
}