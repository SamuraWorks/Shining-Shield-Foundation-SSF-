import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Founder from "@/components/Founder";
import Activities from "@/components/Activities";
import Impact from "@/components/Impact";
import Media from "@/components/Media";
import SupportProducts from "@/components/SupportProducts";
import Donate from "@/components/Donate";
import GetInvolved from "@/components/GetInvolved";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Founder />
      <Activities />
      <Impact />
      <Media />
      <SupportProducts />
      <Donate />
      <GetInvolved />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
