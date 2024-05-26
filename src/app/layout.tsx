import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const font = Inter({ subsets: ["latin"] });
//Orbitron
export const metadata: Metadata = {
  title: "Generativet",
  description: "Generativets podcast, föreläsningar och workshops",
  openGraph: {
    title: 'Generativet',
    description: 'Podcast, föreläsningar och workshops.'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
