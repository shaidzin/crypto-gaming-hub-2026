// Articles data - Expanded for SEO
const articles = [
  {
    id: '1',
    title: 'Best Crypto Dice Games in 2025',
    excerpt: 'A comprehensive guide to the top crypto dice platforms for 2025. Compare odds, bonuses, and security features across the leading platforms.',
    category: 'Reviews',
    date: 'Feb 17, 2026',
    readTime: '8 min read',
    slug: 'best-crypto-dice-games-2025'
  },
  {
    id: '2', 
    title: 'USDT Betting: Complete Beginner\'s Guide',
    excerpt: 'Learn how to bet with USDT safely. From wallet setup to choosing the right platform, we cover everything you need to get started.',
    category: 'Guide',
    date: 'Feb 16, 2026',
    readTime: '12 min read',
    slug: 'usdt-betting-beginners-guide'
  },
  {
    id: '3',
    title: 'Crypto Ludo vs Traditional Ludo',
    excerpt: 'What makes Crypto Ludo different? We compare gameplay, earning potential, user experience, and provably fair mechanics.',
    category: 'Comparison',
    date: 'Feb 15, 2026',
    readTime: '6 min read',
    slug: 'crypto-ludo-vs-traditional-ludo'
  },
  {
    id: '4',
    title: 'Maximizing Wins: Advanced Betting Strategies',
    excerpt: 'Professional betting strategies that can improve your odds. Risk management, bankroll tips, and proven systems for long-term success.',
    category: 'Strategy',
    date: 'Feb 14, 2026',
    readTime: '15 min read',
    slug: 'advanced-betting-strategies'
  },
  {
    id: '5',
    title: 'TRON vs Ethereum for Gaming: Which is Better?',
    excerpt: 'Comparing TRON and Ethereum for crypto gaming. Analysis of fees, speed, ecosystem, and which blockchain is best for gaming dApps.',
    category: 'Tech',
    date: 'Feb 13, 2026',
    readTime: '10 min read',
    slug: 'tron-vs-ethereum-gaming'
  },
  {
    id: '6',
    title: 'Top 10 USDT Casinos Reviewed',
    excerpt: 'Our expert picks for the best USDT casinos. We analyze bonuses, game selection, security, and withdrawal speeds.',
    category: 'Reviews',
    date: 'Feb 12, 2026',
    readTime: '14 min read',
    slug: 'top-usdt-casinos-reviewed'
  },
  {
    id: '7',
    title: 'Best Crypto Betting Sites in 2025',
    excerpt: 'The most trusted crypto sportsbooks and betting platforms. Compare odds, live betting, and cryptocurrency options.',
    category: 'Reviews',
    date: 'Feb 11, 2026',
    readTime: '11 min read',
    slug: 'best-crypto-betting-sites'
  },
  {
    id: '8',
    title: 'Crypto Gambling Legal Guide',
    excerpt: 'Understanding the legal landscape of crypto gambling. Which countries allow it? What licenses to look for?',
    category: 'Guide',
    date: 'Feb 10, 2026',
    readTime: '9 min read',
    slug: 'crypto-gambling-legal-guide'
  },
  {
    id: '9',
    title: 'Bitcoin vs USDT Betting: Pros and Cons',
    excerpt: 'Should you bet with BTC or USDT? We break down the advantages of each cryptocurrency for online betting.',
    category: 'Comparison',
    date: 'Feb 9, 2026',
    readTime: '7 min read',
    slug: 'bitcoin-vs-usdt-betting'
  },
  {
    id: '10',
    title: 'Provably Fair Gaming Explained',
    excerpt: 'How provably fair algorithms work and why they matter. Verify game outcomes yourself with blockchain technology.',
    category: 'Tech',
    date: 'Feb 8, 2026',
    readTime: '8 min read',
    slug: 'provably-fair-explained'
  },
  {
    id: '11',
    title: 'Crypto Casino Bonuses: Maximizing Your Value',
    excerpt: 'Understanding welcome bonuses, reload offers, and VIP programs. How to read the fine print and actually profit.',
    category: 'Strategy',
    date: 'Feb 7, 2026',
    readTime: '10 min read',
    slug: 'crypto-casino-bonuses-guide'
  },
  {
    id: '12',
    title: 'Best Wallet for Crypto Betting',
    excerpt: 'The top cryptocurrency wallets for betting. Security features, ease of use, and which ones support betting sites.',
    category: 'Guide',
    date: 'Feb 6, 2026',
    readTime: '9 min read',
    slug: 'best-wallet-crypto-betting'
  }
];

export default function Home() {
  return (
    <div className="wrapper">
      {/* Header */}
      <header className="header">
        <div className="container header-inner">
          <a href="/" className="logo">
            <div className="logo-icon">C</div>
            <span className="logo-text">CryptoContent</span>
          </a>
          <nav className="nav">
            <a href="/" className="nav-link">Home</a>
            <a href="/reviews" className="nav-link">Reviews</a>
            <a href="/guides" className="nav-link">Guides</a>
            <a href="/strategy" className="nav-link">Strategy</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Updated Daily
          </div>
          <h1>
            Your Guide to <span className="hero-gradient">Crypto Gaming</span>
          </h1>
          <p className="hero-subtitle">
            Expert reviews, in-depth guides, and winning strategies for crypto betting and gaming platforms. Make informed decisions.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="articles-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Latest Articles</h2>
          </div>
          
          <div className="articles-grid">
            {articles.map(article => (
              <article key={article.id} className="article-card">
                <div className="article-meta">
                  <span className="article-category">{article.category}</span>
                  <span className="article-read-time">{article.readTime}</span>
                </div>
                <h3>{article.title}</h3>
                <p className="article-excerpt">{article.excerpt}</p>
                <div className="article-footer">
                  <span className="article-date">{article.date}</span>
                  <a href={`/article/${article.slug}`} className="article-link">
                    Read more →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            © 2026 CryptoContent Hub • Built with AI, running 24/7
          </p>
        </div>
      </footer>
    </div>
  );
}
