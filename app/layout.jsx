// These styles apply to every route in the application
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body>{children}</body>
    </html>
  );
}
