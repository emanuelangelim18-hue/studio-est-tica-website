import { motion } from "motion/react";
import { Sparkles, ArrowRight, MapPin, Instagram } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-to-b from-[#FFF4F6] via-[#FFFBFB] to-white overflow-hidden"
    >
      {/* Decorative blurred background shapes */}
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-pink-100/50 blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-rose-100/45 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content Block */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFEAEF] text-[#F15E7B] text-xs sm:text-sm font-semibold tracking-wide border border-pink-100"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Especialista em Loiros e Transformações</span>
            </motion.div>

            {/* Main Header */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-neutral-800 leading-tight"
              >
                Deixe seu cabelo em mãos de quem{" "}
                <span className="relative inline-block text-[#F15E7B] font-extrabold italic">
                  entende de brilho.
                  <span className="absolute left-0 bottom-1 w-full h-[6px] bg-pink-200/50 -z-10 rounded-full" />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl"
              >
                No **Studio Gracielys**, cada fio recebe um tratamento de luxo.
                Somos referência em Blond Hair, Iluminados impecáveis, Química segura,
                Penteados deslumbrantes e tratamentos capilares intensivos.
              </motion.p>
            </div>

            {/* Cities restriction badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-4 rounded-xl bg-white border border-pink-100 shadow-sm flex flex-col sm:flex-row gap-3 sm:items-center max-w-lg"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FFE5EA] text-[#F15E7B] shrink-0">
                <MapPin className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <span className="block font-bold text-sm text-neutral-800">
                  Área de Atendimento Exclusiva
                </span>
                <span className="block text-xs text-neutral-500">
                  Atendemos exclusivamente em{" "}
                  <strong className="text-[#F15E7B] font-semibold">
                    Teresina - PI
                  </strong>{" "}
                  e{" "}
                  <strong className="text-[#F15E7B] font-semibold">
                    Parnarama - MA
                  </strong>
                  .
                </span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2.5 px-8 py-4 rounded-full bg-[#F15E7B] text-white hover:bg-[#e04d6a] transition-all hover:shadow-lg hover:-translate-y-0.5 font-bold text-base shadow-md cursor-pointer"
              >
                <span>Agendar pelo WhatsApp</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-white text-neutral-700 hover:text-[#F15E7B] border border-pink-200 hover:border-[#F15E7B] hover:bg-pink-50/25 transition-all font-semibold text-base shadow-sm cursor-pointer"
              >
                <Instagram className="w-5 h-5 text-[#F15E7B]" />
                <span>Ver no Instagram</span>
              </a>
            </motion.div>
          </div>

          {/* Visual Display side block - uses input_file_0.png */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            {/* Framed Hair showcase */}
            <div className="relative w-72 sm:w-80 md:w-96 lg:w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden border-8 border-white shadow-xl rotate-1 hover:rotate-0 transition-all duration-500 group">
              <img
                src="https://i.postimg.cc/Bvx42Ncs/Save-Clip-App-628189808-18064113053297825-484181969346962603-n.jpg"
                alt="Mechas perfeitas por Studio Gracielys"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 text-white flex flex-col justify-end text-left">
                <span className="text-xs font-mono uppercase tracking-widest text-[#FFC6D1] font-semibold">
                  Trabalho Real
                </span>
                <span className="text-lg font-bold tracking-tight">
                  Especialidade Blond Hair
                </span>
              </div>
            </div>

            {/* Backdrops elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#FFE8EC] rounded-full -z-10" />
            <div className="absolute -top-6 right-10 w-16 h-16 bg-[#FFF2F4] rounded-lg rotate-12 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
