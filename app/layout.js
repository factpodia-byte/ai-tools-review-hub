import './globals.css';

export const metadata = {
  title: 'AI Tools Review Hub',
  description: 'Honest AI tools reviews and comparisons based on online user feedback, pros, cons, and affiliate recommendations.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{padding: '1rem', borderBottom: '1px solid #eee', background: '#fff'}}>
          <nav style={{maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <a href="/" style={{fontWeight: 'bold', fontSize: '1.25rem', textDecoration: 'none', color: '#111'}}>AI Tools Review Hub</a>
            <div>
              <a href="/reviews" style={{marginLeft: '1rem', textDecoration: 'none', color: '#333'}}>Reviews</a>
              <a href="/about" style={{marginLeft: '1rem', textDecoration: 'none', color: '#333'}}>About</a>
            </div>
          </nav>
        </header>
        <main style={{maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem'}}>
          {children}
        </main>
        <footer style={{textAlign: 'center', padding: '2rem', borderTop: '1px solid #eee', marginTop: '2rem', color: '#666'}}>
          <p>Affiliate disclosure: Some links may earn us a commission at no extra cost to you. Reviews are based on publicly available online feedback.</p>
          <p>&copy; 2026 AI Tools Review Hub</p>
        </footer>
      </body>
    </html>
  );
}