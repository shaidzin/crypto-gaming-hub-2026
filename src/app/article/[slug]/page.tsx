// Article page template
import { articles } from '../data/articles';

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="article-not-found">
        <h1>Article not found</h1>
        <p>The article you're looking for doesn't exist.</p>
        <a href="/">← Back to Home</a>
      </div>
    );
  }

  return (
    <div className="article-page">
      <header className="article-header">
        <a href="/" className="back-link">← Back to Articles</a>
        <span className="article-category">{article.category}</span>
      </header>
      
      <article className="article-content">
        <h1>{article.title}</h1>
        <div className="article-meta">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>
        
        <div className="article-body">
          <p className="lead">{article.excerpt}</p>
          
          <p>
            This is a placeholder for the full article content. In production, 
            this would be fetched from a CMS or markdown file. The AI agent 
            would generate comprehensive, SEO-optimized content for each article.
          </p>
          
          <h2>Key Points</h2>
          <ul>
            <li>Comprehensive analysis of the topic</li>
            <li>Expert insights and recommendations</li>
            <li>Up-to-date information for 2025</li>
            <li>Actionable strategies and tips</li>
          </ul>
          
          <h2>Conclusion</h2>
          <p>
            Stay tuned for more in-depth analysis. Our AI-powered content 
            generation system creates fresh articles daily, ensuring you 
            always have the latest information on crypto gaming and betting.
          </p>
        </div>
        
        <div className="article-cta">
          <p>Found this helpful? Check out our other articles!</p>
          <a href="/" className="cta-button">Browse More Articles</a>
        </div>
      </article>
    </div>
  );
}
