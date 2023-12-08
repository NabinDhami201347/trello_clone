import { Footer } from "@/components/marketing/footer";
import { Navbar } from "@/components/marketing/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main className="pt-20 pb-20 bg-slate-100">
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default MarketingLayout;
