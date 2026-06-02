import { Scissors, Instagram, MessageSquare, MapPin, Phone, Clock } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <footer className="bg-gradient-to-t from-[#FFF0F2] via-white to-white border-t border-pink-100 pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-pink-100">
          
          {/* Logo & Bio Info Column */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={handleScrollToTop}
              className="flex items-center gap-2 group cursor-pointer text-left focus:outline-none"
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
            <p className="text-neutral-500 text-sm leading-relaxed max-w-sm">
              Mais que um salão de beleza, um espaço dedicado a cuidar da saúde dos seus fios e 
              realçar sua verdadeira essência de dentro para fora. Especialista em loiros e morenas iluminadas.
            </p>
            
            {/* Social Media icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-pink-100 text-[#F15E7B] hover:bg-[#F15E7B] hover:text-white transition-all flex items-center justify-center shadow-sm cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-pink-100 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all flex items-center justify-center shadow-sm cursor-pointer"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
              </a>
            </div>
          </div>

          {/* Practical Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm uppercase font-mono tracking-wider text-[#F15E7B] font-semibold">
              Navegação
            </h4>
            <div className="flex flex-col gap-2.5">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-neutral-600 hover:text-[#F15E7B] text-sm text-left font-medium transition-colors cursor-pointer"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-neutral-600 hover:text-[#F15E7B] text-sm text-left font-medium transition-colors cursor-pointer"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("galeria")}
                className="text-neutral-600 hover:text-[#F15E7B] text-sm text-left font-medium transition-colors cursor-pointer"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className="text-neutral-600 hover:text-[#F15E7B] text-sm text-left font-medium transition-colors cursor-pointer"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-neutral-600 hover:text-[#F15E7B] text-sm text-left font-medium transition-colors cursor-pointer"
              >
                Sobre Nós
              </button>
            </div>
          </div>

          {/* Contact Direct Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm uppercase font-mono tracking-wider text-[#F15E7B] font-semibold">
              Contato & Localização
            </h4>
            <div className="space-y-3.5">
              <div className="flex items-start gap-2.5 text-sm text-neutral-600">
                <MapPin className="w-5 h-5 text-[#F15E7B] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-neutral-800">Cidades de Atendimento:</span>
                  <span className="block text-xs text-neutral-500 mt-0.5">
                    Teresina - PI <br /> Parnarama - MA
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-sm text-neutral-600">
                <Phone className="w-5 h-5 text-[#F15E7B] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-neutral-800">WhatsApp:</span>
                  <a
                    href={CONTACT_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-xs font-semibold text-[#F15E7B] hover:underline"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-sm text-neutral-600">
                <Clock className="w-5 h-5 text-[#F15E7B] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-neutral-800">Agendamentos:</span>
                  <span className="block text-xs text-neutral-500 mt-0.5">
                    Segunda a Sábado <br /> 08:00h às 19:00h
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom licensing bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-400">
          <p>© {currentYear} Studio Gracielys. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F15E7B] transition-colors"
            >
              Instagram
            </a>
            <span>•</span>
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F15E7B] transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
