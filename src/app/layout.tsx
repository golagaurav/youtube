import '../styles/globals.css';

export const metadata = {
  title: 'YouTube',
  description: 'Next.js + Tailwind YouTube',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
