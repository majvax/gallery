import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Art Gallery",
  description: "A collection of digital art projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <nav className="fixed top-0 w-full backdrop-blur-lg bg-background/80 z-50 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <a href="/" className="text-xl font-semibold hover:text-accent transition-colors">
                Art Gallery
              </a>
            </div>
          </div>
        </nav>
        <main className="pt-16 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
