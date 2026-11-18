import { MotionProvider } from "@/components/MotionProvider";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Social from "@/components/Social";
import BeautyBar from "@/components/BeautyBar";
import MediaKit from "@/components/MediaKit";
import Inquiry from "@/components/Inquiry";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <MotionProvider>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Portfolio />
        <Social />
        <BeautyBar />
        <MediaKit />
        <Inquiry />
      </main>
      <Footer />
    </MotionProvider>
  );
}
