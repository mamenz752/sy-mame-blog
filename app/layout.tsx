import './globals.css';
import Footer from './components/Footer';
import Header from './components/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="mx-auto w-2/3 font-noto-jp">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
