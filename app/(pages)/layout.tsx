import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16 md:pt-[72px]">{children}</main>
      <Footer />
    </div>
  );
}
