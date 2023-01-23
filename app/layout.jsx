// These styles apply to every route in the application
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html
      lang='es'
      className='h-72 bg-gradient-to-r from-purple-600 to-blue-600'
    >
      <body>{children}</body>
    </html>
  );
}
