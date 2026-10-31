import './globals.css';

export const metadata = {
  title: 'AI Tools Review Hub — Honest Reviews from Online Feedback',
  description: 'Clear AI tool reviews and comparisons synthesized from Reddit, G2, forums and published sources. Pros, cons, and who each tool is for.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <a href="/" className="logo">AI Tools Review Hub</a>
            <div>
              <a href="/reviews">Reviews</a>
              <a href="/about">About</a>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>Affiliate disclosure: Some links may earn a commission at no extra cost to you. Reviews synthesize publicly available online feedback.</p>
          <p>&copy; 2026 AI Tools Review Hub</p>
        </footer>
      </body>
    </html>
  );
}