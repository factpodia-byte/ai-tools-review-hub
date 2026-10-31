import { notFound } from 'next/navigation';

const reviews = {
  'jasper-ai': {
    name: 'Jasper AI',
    category: 'Writing',
    verdict: 'Worth it for marketing teams that need consistent brand voice and longer content at scale. Overkill and expensive for most solo users.',
    pros: ['Excellent brand voice and style controls', 'Strong for long-form marketing and blog posts', 'Good team collaboration features', 'Reliable quality reported across G2 and Reddit'],
    cons: ['Premium pricing compared with Copy.ai or Rytr', 'Steeper learning curve for advanced features', 'Some users still edit heavily for originality'],
    onlineSummary: 'Aggregated from Reddit, G2, and review roundups: teams love the consistency and integrations; individuals often prefer cheaper alternatives unless they need the brand controls.',
  },
  'copy-ai': {
    name: 'Copy.ai',
    category: 'Writing',
    verdict: 'Solid, affordable choice for individuals and small teams who want fast short-form copy, ads, and social posts.',
    pros: ['Lower price point with useful free tier', 'Large template library', 'Easy onboarding', 'Good speed for marketing copy'],
    cons: ['Less sophisticated brand-voice tools than Jasper', 'Output can feel formulaic on longer pieces', 'Fewer advanced SEO features'],
    onlineSummary: 'Frequently recommended in “Jasper vs Copy.ai” threads for value. Users praise templates and speed; complaints focus on depth for long content.',
  },
  'writesonic': {
    name: 'Writesonic',
    category: 'Writing',
    verdict: 'Strong all-rounder for content marketers who want writing + SEO + chatbot in one place.',
    pros: ['Combines writing, SEO tools, and chat', 'Good for blog and landing page drafts', 'Multiple model options', 'Competitive pricing'],
    cons: ['Interface can feel busy', 'Quality varies by use case', 'Some features require higher tiers'],
    onlineSummary: 'Review sites and forums note it as a flexible Jasper alternative with extra SEO features. Users like the breadth; power users sometimes prefer specialized tools.',
  },
  'rytr': {
    name: 'Rytr',
    category: 'Writing',
    verdict: 'Best budget option for simple, short-form writing needs. Great starter tool.',
    pros: ['Very affordable', 'Simple and fast', 'Decent templates for emails and social', 'Low learning curve'],
    cons: ['Limited advanced controls', 'Output quality lower than premium tools', 'Fewer integrations'],
    onlineSummary: 'Often recommended on budget-tool lists. Users appreciate the price; many upgrade once volume or quality needs grow.',
  },
  'adcreative-ai': {
    name: 'AdCreative.ai',
    category: 'Ads',
    verdict: 'Excellent for performance marketers who need many ad variations quickly and want built-in scoring.',
    pros: ['Fast generation of ad creatives', 'Performance prediction scores', 'Supports multiple platforms', 'Good for testing at scale'],
    cons: ['Results depend heavily on input quality', 'Subscription cost adds up for heavy use', 'Less useful outside advertising'],
    onlineSummary: 'Marketers on forums report strong results for Meta and Google ads when combined with human selection. Common tip: iterate on winning prompts.',
  },
  'elevenlabs': {
    name: 'ElevenLabs',
    category: 'Voice',
    verdict: 'Top choice for realistic voiceovers and cloning. Ideal for video creators, podcasters, and course makers.',
    pros: ['Industry-leading natural voices', 'Easy and high-quality cloning', 'Multiple languages and voices', 'Fast generation'],
    cons: ['Credits can run out quickly on busy projects', 'Ethical considerations around cloning', 'Pricing scales with volume'],
    onlineSummary: 'Widely praised on YouTube, Reddit, and creator communities for voice quality. Main complaint is monitoring usage limits.',
  },
  'heygen': {
    name: 'HeyGen',
    category: 'Video',
    verdict: 'Strong for AI avatar videos and talking-head content without filming. Good for marketing and training videos.',
    pros: ['Realistic AI presenters', 'Easy script-to-video workflow', 'Multilingual support', 'Templates for common use cases'],
    cons: ['Avatar quality varies by plan', 'Can look slightly synthetic on close inspection', 'Higher cost for commercial use'],
    onlineSummary: 'Creators and marketers highlight speed for explainer and social videos. Users note that best results come from good scripts and lighting-style settings.',
  },
  'synthesia': {
    name: 'Synthesia',
    category: 'Video',
    verdict: 'Enterprise-friendly AI video platform with polished avatars. Better for teams and professional training content.',
    pros: ['High production quality avatars', 'Strong for corporate and training use', 'Collaboration features', 'Wide language support'],
    cons: ['More expensive than lighter tools', 'Less flexible for casual creators', 'Customization has limits on lower plans'],
    onlineSummary: 'Frequently compared with HeyGen; Synthesia often wins on polish and enterprise features, HeyGen on speed and price for smaller users.',
  },
  'gamma': {
    name: 'Gamma',
    category: 'Presentations',
    verdict: 'Best AI tool for turning ideas into clean presentations and documents quickly.',
    pros: ['Beautiful default designs', 'Fast prompt-to-deck workflow', 'Easy editing and sharing', 'Good for proposals and pitches'],
    cons: ['Limited deep customization', 'Export options vary by plan', 'Can feel template-like on complex decks'],
    onlineSummary: 'Users on Product Hunt and review sites love the speed and visual quality. Common use: client proposals, internal decks, and content outlines.',
  },
  'midjourney': {
    name: 'Midjourney',
    category: 'Image',
    verdict: 'Still one of the highest-quality AI image generators for artistic and marketing visuals, especially via Discord.',
    pros: ['Exceptional artistic quality', 'Strong community and styles', 'Consistent improvements', 'Great for concept art and ads'],
    cons: ['Discord-based workflow can feel clunky', 'No free tier', 'Prompting skill affects results heavily'],
    onlineSummary: 'Creators continue to rate Midjourney highly for aesthetics. Competitors (Flux, Ideogram, etc.) are closing the gap, but Midjourney remains a top pick for visual quality.',
  },
};

export default function ReviewPage({ params }) {
  const review = reviews[params.slug];
  if (!review) return notFound();

  return (
    <article>
      <span className="category">{review.category}</span>
      <h1>{review.name} Review</h1>
      <div className="verdict">
        <strong>Verdict:</strong> {review.verdict}
      </div>
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
      <div className="cta-box">
        <p><strong>Ready to try {review.name}?</strong></p>
        <p>Replace this with your affiliate link. Commission may be earned at no extra cost to you.</p>
        <a href="#" className="btn">Get started (affiliate)</a>
      </div>
      <p style={{marginTop: '2rem'}}><a href="/reviews">← All reviews</a></p>
    </article>
  );
}

export function generateStaticParams() {
  return Object.keys(reviews).map(slug => ({ slug }));
}