// These styles apply to every route in the application
import './globals.css';
import { Navigation } from '../components/Navigation';

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
