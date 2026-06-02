import { motion } from "motion/react";
import { MessageSquare, Calendar, ShieldCheck, Clock, MapPin } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function BookingCTA() {
  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2.5rem] bg-gradient-to-tr from-[#FFF0F2] to-[#FFF9FA] border border-pink-100 p-8 sm:p-12 md:p-16 text-center overflow-hidden shadow-sm"
        >
          {/* Subtle background circle patterns */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border-4 border-pink-100/50" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full border-4 border-pink-100/50" />

          {/* Subtitle icon */}
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white border border-pink-100 text-[#F15E7B] mb-6 shadow-sm">
            <Calendar className="w-6 h-6" />
          </div>

          <div className="space-y-4 max-w-2xl mx-auto mb-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-neutral-800 tracking-tight leading-tight">
              Pronta para renovar o seu visual e ativar o seu brilho?
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Agendar é simples e rápido. Clique no botão abaixo para iniciar uma conversa comigo no WhatsApp. 
              Traga suas inspirações, tire suas dúvidas e escolha seu melhor dia e horário!
            </p>
          </div>

          {/* Steps highlight */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10 text-left">
            <div className="p-4 rounded-2xl bg-white border border-pink-50 shadow-sm flex gap-3 items-start">
              <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center font-bold text-sm text-[#F15E7B] shrink-0">1</div>
              <div>
                <h4 className="font-bold text-neutral-800 text-sm">Chame no Whats</h4>
                <p className="text-xs text-neutral-500">Clique para enviar uma mensagem instantânea.</p>
              </div>
            </div>
            
            <div className="p-4 rounded-2xl bg-white border border-pink-50 shadow-sm flex gap-3 items-start">
              <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center font-bold text-sm text-[#F15E7B] shrink-0">2</div>
              <div>
                <h4 className="font-bold text-neutral-800 text-sm">Escolha a Unidade</h4>
                <p className="text-xs text-neutral-500">Defina se prefere Teresina - PI ou Parnarama - MA.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-pink-50 shadow-sm flex gap-3 items-start">
              <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center font-bold text-sm text-[#F15E7B] shrink-0">3</div>
              <div>
                <h4 className="font-bold text-neutral-800 text-sm">Agende o Dia</h4>
                <p className="text-xs text-neutral-500">Pronto! Aguarde confirmação profissional.</p>
              </div>
            </div>
          </div>

          {/* Big Action button and support numbers */}
          <div className="space-y-4">
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-3.5 px-8 py-4 sm:px-10 sm:py-5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white hover:shadow-lg hover:-translate-y-0.5 transition-all font-bold text-base sm:text-lg shadow-md cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
              <span>Agendar via WhatsApp</span>
            </a>

            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 pt-4 text-xs font-medium text-neutral-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#F15E7B]" />
                <span>Atendimento Seguro e Qualificado</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#F15E7B]" />
                <span>Horários Flexíveis</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#F15E7B]" />
                <span>Teresina e Parnarama</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-block text-xs text-neutral-400 bg-neutral-50 py-1.5 px-3.5 rounded-full border border-neutral-100">
                Contato Direto: <strong className="text-neutral-700">{CONTACT_INFO.phone}</strong>
              </span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
