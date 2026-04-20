import type { Metadata } from "next";
import "@/styles/globals.scss";
import GeneralLayout from "@/components/layout/GeneralLayout";

export const metadata: Metadata = {
  title: "Reclaim Rewards",
  description: "Reclaim and manage your rewards efficiently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_forward" />
      </head>
      <body className="antialiased"><GeneralLayout>{children}</GeneralLayout></body>
    </html>
  );
}
