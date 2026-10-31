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
            <a href="/" className="logo">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#a78bfa" />
                  </linearGradient>
                </defs>
                <path d="M12 28c0-6 4-10 8-10 2 0 3.5 1 4.5 2.5C26 18 28.5 16 32 16c5 0 9 4.5 9 10s-4 10-9 10c-3 0-5.5-1.5-7-3.5C23.5 34 21 36 18 36c-3.5 0-6-2.5-6-8z" stroke="url(#logoGrad)" strokeWidth="2.5" fill="none"/>
                <path d="M30 18l4-6 2 4 5 1-4 3 1 5-4.5-2.5L29 26l1-5-4-3z" fill="url(#logoGrad)"/>
                <path d="M32 30l1.5 1.5 3-3" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
                <path d="M28 32l6 4 2-2" stroke="url(#logoGrad)" strokeWidth="2" fill="none"/>
              </svg>
              <span className="logo-text">AI Tools Review Hub</span>
            </a>
            <div className="nav-links">
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