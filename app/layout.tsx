import type { Metadata } from "next";
import { Inter,IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] ,variable:'--font-inter'});
const iBM_Plex_Serif=IBM_Plex_Serif({
  subsets:["latin"],
  variable:'--font-ibm-plex-serif',
  weight:["400","600","700"]
})

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a modren banking platform for everyone.",
  icons:"/icons/logo.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}${iBM_Plex_Serif.variable}`}>{children}</body>
    </html>
  );
}
