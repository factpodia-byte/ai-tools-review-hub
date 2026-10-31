import Link from 'next/link';

const featured = [
  { slug: 'jasper-ai', name: 'Jasper AI', category: 'Writing', summary: 'Popular AI writing tool with strong brand voice features.' },
  { slug: 'adcreative-ai', name: 'AdCreative.ai', category: 'Ads', summary: 'AI for generating ad creatives quickly.' },
  { slug: 'elevenlabs', name: 'ElevenLabs', category: 'Voice', summary: 'High-quality AI voice cloning and TTS.' },
];

export default function Home() {
  return (
    <div>
      <h1>AI Tools Reviews & Comparisons</h1>
      <p>Independent reviews synthesized from online user feedback, forums, Reddit, and published reviews. We highlight real pros, cons, and who each tool is for.</p>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem', marginTop: '2rem'}}>
        {featured.map(tool => (
          <div key={tool.slug} className="card">
            <h2><Link href={`/reviews/${tool.slug}`}>{tool.name}</Link></h2>
            <p><strong>{tool.category}</strong></p>
            <p>{tool.summary}</p>
            <Link href={`/reviews/${tool.slug}`}>Read full review →</Link>
          </div>
        ))}
      </div>
      <p style={{marginTop: '2rem'}}><Link href="/reviews">View all reviews</Link></p>
    </div>
  );
}