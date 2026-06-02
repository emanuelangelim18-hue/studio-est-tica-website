import { Service, GalleryItem, Testimonial } from "./types";

export const SERVICES_DATA: Service[] = [
  {
    id: "quimica",
    title: "Química em Geral",
    description: "Procedimentos de transformação seguros e modernos, como selagens, botox capilar, alisamentos e colorações, priorizando a máxima integridade e saúde da fibra capilar.",
    iconName: "Sparkles",
    details: [
      "Colorações e coberturas uniformes",
      "Alinhamento térmico e selagem capilar",
      "Procedimentos livres de danos graves",
      "Neutralização de tons indesejados"
    ]
  },
  {
    id: "blond-hair",
    title: "Blond Hair",
    description: "Técnicas de descoloração sofisticadas para alcançar o loiro dos seus sonhos (platinado, pérola, dourado ou baunilha) mantendo os fios ultra-resistentes, hidratados e brilhantes.",
    iconName: "Flame",
    details: [
      "Loiro personalizado e sob medida",
      "Clareamento saudável com proteção Plex",
      "Matização precisa de alto padrão",
      "Indicação de manutenção pós-química"
    ]
  },
  {
    id: "escova",
    title: "Escova",
    description: "Alinhamento, modelagem e finalização profissional ideal para eventos ou para o seu dia a dia. Garante leveza, toque aveludado e durabilidade duradoura.",
    iconName: "Wind",
    details: [
      "Escova lisa ou com ondas modeladas",
      "Proteção térmica e solar inclusa",
      "Balanço natural sem pesar os fios",
      "Finalização com óleos reconstrutores"
    ]
  },
  {
    id: "penteado",
    title: "Penteado",
    description: "Produções marcantes e cheias de estilo para noivas, formandas, madrinhas e ocasiões especiais. Técnicas avançadas de fixação com acabamento refinado.",
    iconName: "Crown",
    details: [
      "Coques modernos (despojados ou clássicos)",
      "Semi-presos e composições românticas",
      "Penteados ideais para fotos profissionais",
      "Alta fixação com produtos premium"
    ]
  },
  {
    id: "iluminados",
    title: "Iluminados",
    description: "O segredo para um contraste elegante e natural. Efeito morena iluminada com transição fluida, contornos suaves e pontos de luz estratégicos para valorizar seu rosto.",
    iconName: "Sun",
    details: [
      "Pontos de luz sutis na medida certa",
      "Preservação do fundo natural do cabelo",
      "Efeito degradê elegante e sem marcas",
      "Retoque simples e espaçado"
    ]
  },
  {
    id: "tratamentos",
    title: "Tratamentos",
    description: "Cronogramas de terapia capilar intensiva para fios ressecados ou danificados. Reposição lipídica, reestruturação profunda de aminoácidos e nutrição com ativos nobres.",
    iconName: "HeartPulse",
    details: [
      "Reconstrução lipídica e selamento",
      "Nutrição profunda para ressecamento extremo",
      "Hidratação molecular instantânea",
      "Cauterização e antiemborrachamento"
    ]
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "g1",
    imageUrl: "https://i.postimg.cc/CKdb1BjQ/cabelo-loiro.jpg",
    title: "Loiro Platinado Premium",
    category: "Blond Hair",
    description: "Contraste impecável com transição suave e ondas projetadas de extrema luminosidade desenvolvidas sob medida."
  },
  {
    id: "g2",
    imageUrl: "https://i.postimg.cc/8CsL5JhZ/Cabelo-cacheado-loiro.jpg",
    title: "Cachos Loiros Radiantes",
    category: "Cabelos Cacheados",
    description: "Definição de altíssimo padrão com pontos de luz estratégicos para valorizar a textura natural dos espirais."
  },
  {
    id: "g3",
    imageUrl: "https://i.postimg.cc/QMVct9pY/Cabelo-cacheado-loiro2.jpg",
    title: "Volume & Iluminação",
    category: "Cabelos Cacheados",
    description: "Equilíbrio absoluto entre saúde capilar, luminosidade perolada e volume marcante em fios cacheados."
  },
  {
    id: "g4",
    imageUrl: "https://i.postimg.cc/k5DW46xh/Cabelo-cacheado-loiro3.jpg",
    title: "Golden Blond Cachos",
    category: "Cabelos Cacheados",
    description: "Dourado luxuoso com clareamento preservado e umectação intensiva para a melhor elasticidade."
  },
  {
    id: "g5",
    imageUrl: "https://i.postimg.cc/SKjcs2WP/cabelo-liso.jpg",
    title: "Alinhamento & Blond Liso",
    category: "Blond Hair",
    description: "Efeito liso espelhado ultra sedoso com loiro sofisticado e finalização rica em óleos reconstrutores."
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Bruna Guilhon",
    username: "brunnaguilhon",
    text: "Sabe que sou amante desse cabelo no loiro neh ❤️🔥 arrasou.",
    imageUrl: "https://scontent.cdninstagram.com/v/t51.82787-19/710203477_18589855429049530_4736916458638316128_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=111&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=vqyp1iPHzz8Q7kNvwFubNs_&_nc_oc=Adow4Q1WA_Bv0m-FeDmsZbWht9BIu_j-qZvvDT33pif8Id3WN41imvu1i3QBmwD4f1Pv5p_ZiEAckx1Km3AkC4xc&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=PXmE4lP7hRTS1FxUzY6TpA&_nc_ss=7b6a8&oh=00_Af9effKDf_et3f6dsQN0I5kxuxo3d2Usif7qFOh3NSD2oA&oe=6A23F560",
    fallbackColor: "bg-pink-100 text-pink-600",
    stars: 5
  },
  {
    id: "t2",
    name: "Nati Lima",
    username: "NatiLima155",
    text: "Com a melhor de Parnarama sem dúvidas 😍❤️.",
    imageUrl: "https://scontent.cdninstagram.com/v/t51.2885-19/407987674_2207989869389790_5602520376733756729_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=104&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy45NDcuQzMifQ%3D%3D&_nc_ohc=_IUhTTEXhf0Q7kNvwHmRnfQ&_nc_oc=AdqUNm0XtXka3nDNbEuwW_73tjQJ3fmS3gDmmXBzFXxvkSAnqux0eEadsv3IgulW6evJmjThEhi0MPlKUP8AqKe-&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_ss=7b6a8&oh=00_Af-PwgfylSeTadkyYaV4o5SBZACzM5WM3HzhClrCrTJG_Q&oe=6A23FA5C",
    fallbackColor: "bg-rose-100 text-rose-600",
    stars: 5
  }
];

export const CONTACT_INFO = {
  phone: "+55 99 98418-2603",
  phoneRaw: "5599984182603",
  instagramUrl: "https://www.instagram.com/studio_gracielys/?hl=pt",
  instagramUser: "@studio_gracielys",
  cities: ["Teresina - PI", "Parnarama - MA"],
  whatsappLink: "https://wa.me/5599984182603?text=Olá,%20Graciely!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20e%20agendar%20um%20atendimento.",
  logoUrl: "https://i.postimg.cc/5yz3tYMW/Whats-App-Image-2026-06-01-at-20-35-28.jpg"
};
