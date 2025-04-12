// this layout is different from other layouts in the Nextjs apps
// it is required to render the app
// however, it can be used as a layout for modifying the entire app, specially the <html> and <body> tags (e.g., for adding metadata)

import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
