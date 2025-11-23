// frontend/app/layout.js
import "../styles/globals.css";
import ClientProvider from "./ClientProvider";
import Footer from "../components/Footer";

export const metadata = {
  title: "RafiaShop",
  description: "Next.js eCommerce App",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body>
        <ClientProvider session={session}>
          {children}
        </ClientProvider>
        <Footer />
      </body>
    </html>
  );
}
