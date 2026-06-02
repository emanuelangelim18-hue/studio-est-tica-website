/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import AboutStylist from "./components/AboutStylist";
import Testimonials from "./components/Testimonials";
import BookingCTA from "./components/BookingCTA";
import Footer from "./components/Footer";
import { CONTACT_INFO } from "./data";

export default function App() {
  const [showFloatingBtns, setShowFloatingBtns] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowFloatingBtns(true);
      } else {
        setShowFloatingBtns(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen bg-white text-neutral-800 font-sans selection:bg-pink-100 selection:text-[#F15E7B]">
      {/* Top Header */}
      <Header />

      {/* Main Sections */}
      <main>
        <Hero />
        <Services />
        <Gallery />
        <AboutStylist />
        <Testimonials />
        <BookingCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <div 
        className={`fixed bottom-6 right-6 z-40 flex flex-col gap-3 transition-all duration-300 transform ${
          showFloatingBtns ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Scroll to top button */}
        <button
          onClick={handleScrollToTop}
          className="w-12 h-12 rounded-full bg-white text-[#F15E7B] hover:bg-[#FFF4F6] border border-pink-100 flex items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          aria-label="Voltar ao Topo"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        {/* Floating WhatsApp Quick Action */}
        <a
          href={CONTACT_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white hover:bg-[#20ba59] flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-300 animate-bounce cursor-pointer"
          aria-label="Falar conosco no WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-white" />
        </a>
      </div>
    </div>
  );
}
