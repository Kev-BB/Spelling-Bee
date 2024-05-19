import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spelling Bee",
  description: "Spelling Bee Game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="nav-container">
        <h1 className="title">🐝 Spelling Bee</h1>
        <div className="links">
        <Link href="/">EN /</Link>
        <Link href="/tr"> TR</Link>
        </div>
        </nav>
        {children}
        </body>
    </html>
  );
}
