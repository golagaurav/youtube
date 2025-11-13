import '../styles/globals.css';

export const metadata = {
  title: 'YouTube Clone',
  description: 'Next.js + Tailwind YouTube Clone',
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
