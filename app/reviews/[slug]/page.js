import { notFound } from 'next/navigation';

const reviews = {
  'jasper-ai': {
    name: 'Jasper AI',
    verdict: 'Worth it for teams needing consistent brand voice and marketing content at scale. Overkill for solo beginners.',
    pros: ['Strong brand voice controls', 'Good for long-form marketing', 'Integrations with SEO tools', 'Reliable output quality based on user reports'],
    cons: ['Higher price than alternatives', 'Learning curve for advanced features', 'Some users report occasional generic outputs'],
    onlineSummary: 'Aggregated from Reddit, G2, and review sites: users praise content quality and collaboration features; complaints focus on cost and occasional need for heavy editing.',
    affiliateNote: 'Affiliate link available — we may earn a commission.',
  },
  'adcreative-ai': {
    name: 'AdCreative.ai',
    verdict: 'Strong for marketers who need fast ad variations. Best for Meta/Google ads teams.',
    pros: ['Fast creative generation', 'Performance prediction scores', 'Good for testing many variants'],
    cons: ['Results vary by input quality', 'Subscription cost adds up', 'Less flexible for non-ad content'],
    onlineSummary: 'Users on forums note high conversion lifts in some campaigns; others say it needs good prompts and human selection.',
    affiliateNote: 'Affiliate link available.',
  },
  'elevenlabs': {
    name: 'ElevenLabs',
    verdict: 'Excellent for realistic voiceover and cloning. Top choice for video creators and podcasters.',
    pros: ['Very natural voices', 'Easy cloning', 'Multiple languages', 'Fast generation'],
    cons: ['Usage limits on free/cheap plans', 'Some ethical concerns around cloning', 'Pricing scales with volume'],
    onlineSummary: 'Widely praised on YouTube and Reddit for voice quality; common note is watching credit usage.',
    affiliateNote: 'Affiliate link available.',
  },
  'copy-ai': {
    name: 'Copy.ai',
    verdict: 'Good entry-level AI writer with solid templates. Better value than Jasper for many individuals.',
    pros: ['Affordable plans', 'Many templates', 'Easy to use', 'Good for short-form copy'],
    cons: ['Less advanced brand controls than Jasper', 'Output can feel formulaic'],
    onlineSummary: 'Frequently compared favorably on price in review roundups; users like speed for social and ads.',
    affiliateNote: 'Affiliate link available.',
  },
};

export default function ReviewPage({ params }) {
  const review = reviews[params.slug];
  if (!review) return notFound();

  return (
    <article>
      <h1>{review.name} Review</h1>
      <p><strong>Verdict:</strong> {review.verdict}</p>
      <h2>What online reviews say</h2>
      <p>{review.onlineSummary}</p>
      <h2>Pros</h2>
      <ul className="pros">
        {review.pros.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
      <h2>Cons</h2>
      <ul className="cons">
        {review.cons.map((c, i) => <li key={i}>{c}</li>)}
      </ul>
      <div className="card" style={{marginTop: '2rem', background: '#f0f7ff'}}>
        <p><strong>Try it:</strong> [Affiliate CTA placeholder — replace with real tracked link]</p>
        <p style={{fontSize: '0.9rem', color: '#666'}}>{review.affiliateNote}</p>
      </div>
      <p style={{marginTop: '2rem'}}><a href="/reviews">← All reviews</a></p>
    </article>
  );
}

export function generateStaticParams() {
  return Object.keys(reviews).map(slug => ({ slug }));
}