import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "DMR Apartment",
  description: "Affordable Apartment for Rent",
  icons: {
    icon: "/icon.jpg",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}


