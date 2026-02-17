import './globals.css';

export const metadata = {
  title: 'CryptoContent Hub | Best Crypto Reviews & Guides',
  description: 'Expert reviews and guides for crypto gaming, betting platforms, and cryptocurrency. Find the best USDT casinos, dice games, and earning opportunities.',
  keywords: 'crypto gambling, USDT betting, crypto casino, dice game, cryptocurrency',
  openGraph: {
    title: 'CryptoContent Hub | Best Crypto Reviews & Guides',
    description: 'Expert reviews and guides for crypto gaming and betting.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
        
        {/* AdSense - Replace ca-pub-XXXXXXXXXX with your actual publisher ID */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
     crossOrigin="anonymous"></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
