import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


import "./reset.css"
import "./globals.css";

export default function Layout({ children }) {
  return (
    <html lang="vi">
      <body cz-shortcut-listen="true">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
