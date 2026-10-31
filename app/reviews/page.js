import Link from 'next/link';

const tools = [
  { slug: 'jasper-ai', name: 'Jasper AI', category: 'Writing' },
  { slug: 'adcreative-ai', name: 'AdCreative.ai', category: 'Ads' },
  { slug: 'elevenlabs', name: 'ElevenLabs', category: 'Voice' },
  { slug: 'copy-ai', name: 'Copy.ai', category: 'Writing' },
];

export default function Reviews() {
  return (
    <div>
      <h1>All AI Tool Reviews</h1>
      <ul style={{listStyle: 'none', padding: 0}}>
        {tools.map(tool => (
          <li key={tool.slug} style={{marginBottom: '1rem'}}>
            <Link href={`/reviews/${tool.slug}`} style={{fontSize: '1.2rem'}}>{tool.name}</Link>
            <span style={{color: '#666', marginLeft: '0.5rem'}}>({tool.category})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}