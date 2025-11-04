import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noorudeen Mustafa Pattasseri - Islamic Studies Scholar",
  description: "Doctoral Fellow at Berlin Institute for Islamic Theology, Humboldt University. Research in Islamic law, legal philosophy, South Asian Islam, and Indian Ocean studies.",
  keywords: ["Islamic Studies", "Islamic Law", "Legal Philosophy", "South Asian Islam", "Indian Ocean", "Humboldt University", "Islamic Theology", "Islamicate Heritage"],
  authors: [{ name: "Noorudeen Mustafa Pattasseri" }],
  openGraph: {
    title: "Noorudeen Mustafa Pattasseri - Islamic Studies Scholar",
    description: "Doctoral Fellow at Berlin Institute for Islamic Theology, Humboldt University of Berlin",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Playfair+Display:wght@600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
