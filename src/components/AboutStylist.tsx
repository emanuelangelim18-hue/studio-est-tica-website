import { motion } from "motion/react";
import { Award, MapPin, Heart, Sparkles, Instagram } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function AboutStylist() {
  return (
    <section id="sobre" className="py-20 bg-white relative overflow-hidden">
      {/* Delicate background glows */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-pink-100/20 blur-3xl" />
      <div className="absolute top-20 left-0 w-64 h-64 rounded-full bg-neutral-100/50 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Photo Column - input_file_5 is the professional's photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative max-w-sm lg:max-w-full w-full aspect-[3/4] rounded-3xl overflow-hidden border-4 border-white shadow-lg bg-[#FFEAEF]/30">
              <img
                src="https://i.postimg.cc/4NJ7yHG8/graciely-studio.jpg"
                alt="Graciely, fundadora e especialista de Studio Gracielys"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md shadow-sm border border-pink-50 text-left">
                <span className="block font-bold text-neutral-800 text-base">Graciely</span>
                <span className="block text-xs uppercase font-semibold text-[#F15E7B] font-mono tracking-wider">
                  Fundadora & Hair Stylist
                </span>
              </div>
            </div>
          </motion.div>

          {/* Copy Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0F2] text-[#F15E7B] text-xs font-semibold uppercase tracking-wider font-mono">
              <Sparkles className="w-3 h-3" />
              <span>A Essência por trás do Studio</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-neutral-800">
              Cuidado personalizado que transforma mais que fios, eleva a sua essência.
            </h2>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              O **Studio Gracielys** nasceu de um propósito genuíno: esculpir cores, formas 
              e brilhos que realçam a autenticidade e a beleza natural de cada cliente. Sob os cuidados 
              especializados da nossa cabeleireira e visagista, defendemos que cada transformação capilar 
              representa uma nova etapa de autoconhecimento e empoderamento.
            </p>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Nosso diferencial reside em oferecer diagnósticos capilares individualizados antes de 
              qualquer trabalho químico agressivo. Atuamos com as melhores composições do mercado 
              para manter suas cutículas protegidas e os fios infinitamente brilhantes e sedosos.
            </p>

            {/* Quick credentials pointers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#FFF9FA] border border-pink-50">
                <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-[#F15E7B] shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#F15E7B] text-sm">Design Saudável</h4>
                  <p className="text-xs text-neutral-500">Técnicas plex para loiros que preservam a integridade capilar.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#FFF9FA] border border-pink-50">
                <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-[#F15E7B] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#F15E7B] text-sm">Suporte Profissional</h4>
                  <p className="text-xs text-neutral-500">Aconselhamento completo de cronograma e pós-química em casa.</p>
                </div>
              </div>
            </div>

            {/* Crucial Service Cities Notice */}
            <div className="p-4 rounded-2xl bg-[#FFF4F6] border border-[#FFDEE4] flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#F15E7B] mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-bold text-neutral-800">Cadeiras de Atendimento Localizadas:</p>
                <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                  Trabalhamos de forma descentralizada para aproximar nossa excelência de você. 
                  O atendimento oficial é realizado exclusivamente nas cidades de:
                  <br />
                  🗺️ <strong className="text-[#F15E7B]">Teresina - PI</strong> e <strong className="text-[#F15E7B]">Parnarama - MA</strong>.
                </p>
              </div>
            </div>

            {/* Instagram link action */}
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1e1e24] hover:bg-neutral-800 text-white font-semibold text-sm transition-all shadow-sm"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Acompanhar @studio_gracielys</span>
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
