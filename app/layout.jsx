export default function RootLayout({ students }) {
  return (
    <html lang="en">
      <body>{students}</body>
    </html>
  );
}
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
