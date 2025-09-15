import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Khalid AG Mohamed Aly — Backend Engineer & AI Diplomacy Architect",
  description:
    "Building resilient systems for scalable tech and cultural equity. 87+ certifications. AI for Tamasheq language. AWS, Spring Boot, Kafka.",
  keywords: [
    "Java", "Spring Boot", "AWS", "Microservices", "AI Diplomacy",
    "Tamasheq AI", "Cultural Technology", "Backend Engineer", "Morocco"
  ],
  authors: [{ name: "Khalid AG Mohamed Aly" }],
  openGraph: {
    type: "website",
    url: "https://khalid-ag-mohamed-aly.com",
    title: "Khalid AG Mohamed Aly — Silent Excellence in Tech",
    description:
      "A portfolio where code meets culture. Building AI that speaks Tamazight. 87+ certifications. AWS, Java, Kafka.",
    images: [
      {
        url: "https://khalid-ag-mohamed-aly.com/images/portfolio-preview.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrains.variable} bg-[#0d1117] text-[#c9d1d9] font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
