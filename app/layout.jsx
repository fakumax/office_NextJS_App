// These styles apply to every route in the application
import './globals.css';
import localFont from '@next/font/local';
import { Navigation } from '../components/Navigation';

// Font files can be colocated inside of `app`
const aslang = localFont({
  src: '../assets/font/aslangBary.ttf',
});

const ostrich = localFont({
  src: '../assets/font/ostrich-sans.sans-rounded-medium.ttf',
});

export default function RootLayout({ children }) {
  return (
    <html lang='es' className={`${aslang.className} ${ostrich.className}`}>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
