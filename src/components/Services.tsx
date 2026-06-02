import React from "react";
import { motion } from "motion/react";
import { Sparkles, Flame, Wind, Crown, Sun, HeartPulse, Check, Calendar } from "lucide-react";
import { SERVICES_DATA, CONTACT_INFO } from "../data";

const iconMap: Record<string, React.ComponentType<any>> = {
  Sparkles: Sparkles,
  Flame: Flame,
  Wind: Wind,
  Crown: Crown,
  Sun: Sun,
  HeartPulse: HeartPulse
};

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-white relative">
      <div className="absolute top-0 right-[20%] w-80 h-80 rounded-full bg-pink-50/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase font-mono tracking-widest text-[#F15E7B] font-bold">
            Serviços Exclusivos
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-neutral-800">
            Nossas Especialidades
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
            Combinamos técnicas avançadas, produtos de alta tecnologia e atendimento
            personalizado para revelar a sua melhor versão. Veja nossos principais serviços do estúdio:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Sparkles;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white to-[#FFF7F8] border border-pink-50 hover:border-pink-200 hover:shadow-lg transition-all duration-300 flex flex-col h-full text-left relative overflow-hidden"
              >
                {/* Background glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100/20 rounded-full blur-2xl group-hover:bg-pink-100/40 transition-all duration-300" />

                {/* Service Icon */}
                <div className="w-12 h-12 rounded-2xl bg-white border border-pink-100 flex items-center justify-center text-[#F15E7B] shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-[#F15E7B] transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Bullets/Details */}
                <div className="border-t border-pink-50/80 pt-5 space-y-2.5 mb-6">
                  {service.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-neutral-600">
                      <Check className="w-4 h-4 text-[#F15E7B] mt-0.5 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Link/Action */}
                <a
                  href={`${CONTACT_INFO.whatsappLink}&text=Olá!%20Gostaria%20de%20agendar%20um%20atendimento%20para%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white group-hover:bg-[#F15E7B] text-[#F15E7B] group-hover:text-white border border-pink-100 group-hover:border-transparent transition-all font-semibold text-xs shadow-sm cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Consultar Horários</span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
