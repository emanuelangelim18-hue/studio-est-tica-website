import { useState } from "react";
import { motion } from "motion/react";
import { Star, MessageCircle, Quote } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-[#FFF9FA] relative">
      {/* Accent design elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-pink-100/20 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-rose-100/20 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Caption */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase font-mono tracking-widest text-[#F15E7B] font-bold">
            Depoimentos Completos
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-neutral-800">
            Quem Ama, Recomenda o Nosso Trabalho
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
            Nada nos traz mais orgulho do que ver o sorriso e sentir a renovação da autoestima de cada uma de 
            nossas clientes. Veja o carinho que recebemos de quem passa pela nossa cadeira:
          </p>
        </div>

        {/* Testimonials layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TESTIMONIALS_DATA.map((item, index) => {
            const [imageError, setImageError] = useState(false);

            // Calculate initials
            const initials = item.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase();

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white p-8 rounded-3xl border border-pink-100/50 shadow-sm hover:shadow-md transition-shadow text-left flex flex-col justify-between"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-pink-100/80">
                  <Quote className="w-10 h-10 transform translate-x-2 -translate-y-2 shrink-0" />
                </div>

                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F15E7B] text-[#F15E7B]" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-neutral-700 text-sm sm:text-base leading-relaxed italic pr-4">
                    "{item.text}"
                  </p>
                </div>

                {/* Author Block */}
                <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-pink-50">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-pink-100 shrink-0 bg-pink-50">
                    {!imageError && item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        onError={() => setImageError(true)}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center font-bold text-sm ${item.fallbackColor}`}>
                        {initials}
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <span className="block font-bold text-neutral-800 text-sm sm:text-base">
                      {item.name}
                    </span>
                    <a
                      href={`https://www.instagram.com/${item.username}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-[#F15E7B] transition-colors"
                    >
                      <MessageCircle className="w-3 h-3 text-[#F15E7B]" />
                      <span>{`@${item.username}`}</span>
                    </a>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Social Proof subtext */}
        <div className="text-center mt-12">
          <p className="text-xs text-neutral-400">
            Comentários reais retirados da nossa comunidade no{" "}
            <a
              href="https://www.instagram.com/studio_gracielys/?hl=pt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F15E7B] font-semibold underline hover:text-[#e04d6a]"
            >
              Instagram Oficial
            </a>.
          </p>
        </div>

      </div>
    </section>
  );
}
