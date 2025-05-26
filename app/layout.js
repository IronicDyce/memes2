
import "./globals.css";

export const metadata = {
  title: "Glory Hole Coin",
  description: "You don’t need to see it to feel the pump",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
