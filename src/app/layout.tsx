import "./globals.css";

export const metadata = {
  title: "SkyCode | L’innovation de demain",
  description: "Découvrez le futur technologique avec SkyCode.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  );
}
