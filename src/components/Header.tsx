import { useState, useEffect } from "react";
import { Scissors, Menu, X, MapPin, Calendar } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-pink-100 py-3"
          : "bg-transparent py-4"
      }`}
    >
      {/* Top mini-bar for location announcement */}
      {!isScrolled && (
        <div className="hidden sm:flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 text-xs text-neutral-600 font-medium tracking-wide">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#F15E7B]" />
            <span>Atendimento em Teresina - PI e Parnarama - MA</span>
          </div>
          <div>Atendimento sob agendamento prévio</div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group cursor-pointer text-left"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border border-pink-200 bg-white group-hover:scale-105 transition-transform flex items-center justify-center">
              <img
                src={CONTACT_INFO.logoUrl}
                alt="Studio Gracielys Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="block font-sans text-xl font-bold tracking-tight text-neutral-800">
                Studio <span className="text-[#F15E7B]">Gracielys</span>
              </span>
              <span className="block text-[10px] uppercase font-mono tracking-widest text-[#F15E7B] font-bold">
                Cabelos & Estilo
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-neutral-600 hover:text-[#F15E7B] font-medium text-sm transition-colors cursor-pointer"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-neutral-600 hover:text-[#F15E7B] font-medium text-sm transition-colors cursor-pointer"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-neutral-600 hover:text-[#F15E7B] font-medium text-sm transition-colors cursor-pointer"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-neutral-600 hover:text-[#F15E7B] font-medium text-sm transition-colors cursor-pointer"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-neutral-600 hover:text-[#F15E7B] font-medium text-sm transition-colors cursor-pointer"
            >
              Sobre Nós
            </button>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F15E7B] text-white hover:bg-[#e04d6a] transition-all duration-300 font-semibold text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Horário</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-neutral-600 hover:text-[#F15E7B] hover:bg-pink-50 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-pink-100 shadow-lg px-4 py-6 space-y-4 animate-fade-in">
          {/* Location mobile badge */}
          <div className="p-3 bg-[#FFF0F2] rounded-xl flex items-center gap-2.5 text-xs text-[#F15E7B] font-semibold">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span>Exclusivo em Teresina - PI e Parnarama - MA</span>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-left py-2.5 px-4 rounded-lg text-neutral-700 hover:text-[#F15E7B] hover:bg-pink-50/50 font-medium text-sm transition-all"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-left py-2.5 px-4 rounded-lg text-neutral-700 hover:text-[#F15E7B] hover:bg-pink-50/50 font-medium text-sm transition-all"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-left py-2.5 px-4 rounded-lg text-neutral-700 hover:text-[#F15E7B] hover:bg-pink-50/50 font-medium text-sm transition-all"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-left py-2.5 px-4 rounded-lg text-neutral-700 hover:text-[#F15E7B] hover:bg-pink-50/50 font-medium text-sm transition-all"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-left py-2.5 px-4 rounded-lg text-neutral-700 hover:text-[#F15E7B] hover:bg-pink-50/50 font-medium text-sm transition-all"
            >
              Sobre Nós
            </button>
          </div>

          <div className="pt-2">
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full justify-center inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F15E7B] text-white hover:bg-[#e04d6a] transition-all font-semibold text-sm shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
