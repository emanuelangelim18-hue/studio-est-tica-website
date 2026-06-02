import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, X, Calendar, ChevronRight, Sparkles } from "lucide-react";
import { GALLERY_DATA, CONTACT_INFO } from "../data";
import { GalleryItem } from "../types";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filters = ["Todos", "Blond Hair", "Cabelos Cacheados", "Iluminados"];

  const filteredItems = activeFilter === "Todos"
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => {
        if (activeFilter === "Cabelos Cacheados") {
          return item.category === "Cabelos Cacheados" || item.category === "Tratamentos & Cor";
        }
        return item.category === activeFilter;
      });

  return (
    <section id="galeria" className="py-20 bg-[#FFF9FA] relative">
      <div className="absolute top-10 left-10 w-48 h-48 bg-[#FFE5EA] rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Caption */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs uppercase font-mono tracking-widest text-[#F15E7B] font-bold">
            Galeria do Estúdio
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-neutral-800">
            Trabalhos Reais, Resultados Extraordinários
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
            Nossos loiros e iluminados são criados respeitando singularidades. Clique em
            qualquer imagem para vê-la sob ampliação e se inspirar:
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-10">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 cursor-pointer ${
                activeFilter === filter
                  ? "bg-[#F15E7B] text-white shadow-md shadow-pink-100"
                  : "bg-white text-neutral-600 hover:text-[#F15E7B] border border-pink-100/50 hover:border-pink-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedPhoto(item)}
                className="group relative cursor-pointer aspect-[3/4] rounded-3xl overflow-hidden bg-white border border-pink-100/40 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover overlay with text info */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white text-left">
                  <span className="text-[10px] uppercase tracking-wider font-mono text-[#FFC6D1] mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-lg font-bold mb-1 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-200 line-clamp-2 mb-3">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-[#FFE2E7] text-xs font-semibold">
                    <span>Ver Ampliado</span>
                    <Eye className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / Modal Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop click to close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="absolute inset-0 bg-neutral-900/85 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl bg-white rounded-[2rem] overflow-hidden shadow-2xl z-10 flex flex-col md:grid md:grid-cols-12 max-h-[90vh] md:max-h-[80vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors shadow-md cursor-pointer"
                aria-label="Fecahar visualizador"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Area */}
              <div className="md:col-span-7 bg-neutral-950 flex items-center justify-center overflow-hidden aspect-[4/5] md:aspect-auto md:h-full">
                <img
                  src={selectedPhoto.imageUrl}
                  alt={selectedPhoto.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover max-h-[45vh] md:max-h-full"
                />
              </div>

              {/* Text / Actions Area */}
              <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between text-left h-full">
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#FFEAEF] text-[#F15E7B] text-xs font-semibold uppercase tracking-wider font-mono">
                    {selectedPhoto.category}
                  </span>
                  <h3 className="text-2xl font-bold text-neutral-800 tracking-tight">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {selectedPhoto.description}
                  </p>

                  <div className="p-4 rounded-xl bg-[#FFF5F6] border border-pink-100/50 space-y-1">
                    <span className="block text-xs font-mono uppercase text-[#F15E7B] font-bold">
                      Serviço Disponível em:
                    </span>
                    <span className="block text-xs text-neutral-600 font-medium">
                      Teresina - PI & Parnarama - MA
                    </span>
                  </div>
                </div>

                <div className="space-y-3 pt-6 border-t border-pink-50">
                  <span className="block text-xs text-neutral-400">
                    Gostou deste estilo? Clique abaixo e envie uma foto dele para agendar as suas mechas!
                  </span>
                  <a
                    href={`${CONTACT_INFO.whatsappLink}&text=Olá!%20Vi%20a%20foto%20do%20${encodeURIComponent(selectedPhoto.title)}%20na%20sua%20galeria%20e%20gostaria%20de%20fazer%20um%20diagnóstico.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full justify-center inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#F15E7B] text-white hover:bg-[#e04d6a] transition-all font-semibold text-sm shadow-md"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Quero este estilo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
