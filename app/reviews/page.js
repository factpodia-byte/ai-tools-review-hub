import Link from 'next/link';

const tools = [
  { slug: 'jasper-ai', name: 'Jasper AI', category: 'Writing' },
  { slug: 'copy-ai', name: 'Copy.ai', category: 'Writing' },
  { slug: 'writesonic', name: 'Writesonic', category: 'Writing' },
  { slug: 'rytr', name: 'Rytr', category: 'Writing' },
  { slug: 'adcreative-ai', name: 'AdCreative.ai', category: 'Ads' },
  { slug: 'elevenlabs', name: 'ElevenLabs', category: 'Voice' },
  { slug: 'heygen', name: 'HeyGen', category: 'Video' },
  { slug: 'synthesia', name: 'Synthesia', category: 'Video' },
  { slug: 'gamma', name: 'Gamma', category: 'Presentations' },
  { slug: 'midjourney', name: 'Midjourney', category: 'Image' },
];

export default function Reviews() {
  return (
    <div>
      <h1>All AI Tool Reviews</h1>
      <p className="subtitle">Click any tool for the synthesized online consensus, pros, cons, and verdict.</p>
      <div className="grid">
        {tools.map(tool => (
          <div key={tool.slug} className="card">
            <span className="category">{tool.category}</span>
            <h2><Link href={`/reviews/${tool.slug}`}>{tool.name}</Link></h2>
            <Link href={`/reviews/${tool.slug}`} className="btn">View review</Link>
          </div>
        ))}
      </div>
    </div>
  );
}