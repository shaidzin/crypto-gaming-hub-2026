// Article page template
import { articles } from '../../data/articles';
import { getArticleContent } from '../../data/article-contents';
import { getAffiliateLinks } from '../../data/affiliates';

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  const content = getArticleContent(slug);
  const affiliates = getAffiliateLinks();

  if (!article) {
    return (
      <div className="article-not-found">
        <h1>Article not found</h1>
        <p>The article you're looking for doesn't exist.</p>
        <a href="/">← Back to Home</a>
      </div>
    );
  }

  const articleContent = content?.content || `
    <p>This is a placeholder for the full article content.</p>
  `;

  return (
    <div className="article-page">
      <header className="article-header">
        <a href="/" className="back-link">← Back to Articles</a>
        <span className="article-category">{article.category}</span>
      </header>
      
      <article className="article-content">
        <h1>{content?.title || article.title}</h1>
        <div className="article-meta">
          <span>{content?.date || article.date}</span>
          <span>•</span>
          <span>{content?.readTime || article.readTime}</span>
        </div>
        
        <div className="article-body">
          <p className="lead">{article.excerpt}</p>
          
          {content?.content ? (
            <div dangerouslySetInnerHTML={{ __html: articleContent.split('\n').map(p => p.trim()).filter(p => p).map(p => {
              if (p.startsWith('## ')) return `<h2>${p.slice(3)}</h2>`;
              if (p.startsWith('### ')) return `<h3>${p.slice(4)}</h3>`;
              if (p.startsWith('- ')) return `<li>${p.slice(2)}</li>`;
              if (p.match(/^\d+\./)) return `<li>${p.replace(/^\d+\.\s*/, '')}</li>`;
              return `<p>${p}</p>`;
            }).join('') }} />
          ) : (
            <p>Content coming soon...</p>
          )}
        </div>
        
        {/* Affiliate CTA */}
        <div className="affiliate-cta">
          <h3>🎰 Ready to Play?</h3>
          <p>Join these trusted crypto betting platforms:</p>
          <div className="affiliate-buttons">
            {affiliates.slice(0, 3).map(aff => (
              <a key={aff.name} href={aff.url} target="_blank" rel="noopener noreferrer" className="affiliate-button">
                <span className="affiliate-name">{aff.name}</span>
                <span className="affiliate-bonus">{aff.bonus}</span>
              </a>
            ))}
          </div>
          <p className="affiliate-disclaimer">We may earn a commission when you sign up through our links.</p>
        </div>
        
        <div className="article-cta">
          <p>Found this helpful? Check out our other articles!</p>
          <a href="/" className="cta-button">Browse More Articles</a>
        </div>
      </article>
    </div>
  );
}
