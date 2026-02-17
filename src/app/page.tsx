// Articles data - imports from data file
import { articles } from './data/articles';

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
            <a href="/reviews" className="nav-link"> Reviews</a>
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
