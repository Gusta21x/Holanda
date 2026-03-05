import { motion } from 'motion/react';

const cards = [
  {
    title: "Clareamento Íntimo — Método CLARIE®",
    description: "Protocolo especializado para clareamento da região íntima feminina. Tratamento seguro, personalizado e acompanhado de perto para garantir resultado eficaz e respeitoso com a pele.",
    image: "https://i.imgur.com/10r9yOr.jpeg"
  },
  {
    title: "Clareamento Íntimo — Método CLARÍE®",
    description: "",
    image: "https://i.imgur.com/xyCTLr6.jpeg"
  },
  {
    title: "Clareamento Corporal — Glúteos",
    description: "Tratamento de clareamento e renovação da pele dos glúteos. Protocolo personalizado que uniformiza o tom, trata manchas e devolve maciez e confiança.",
    image: "https://i.imgur.com/HLWi6an.jpeg"
  },
  {
    title: "Tratamento Facial — Clareamento e Manchas",
    description: "Protocolo facial que clareia, uniformiza o tom da pele e trata manchas com ativos especializados. Resultado progressivo para uma pele mais luminosa, saudável e renovada.",
    image: "https://i.imgur.com/0AraqpN.jpeg"
  },
  {
    title: "Clareamento de Costas",
    description: "Renovação e uniformização do tom da pele das costas. Protocolo que trata manchas, melhora a textura e devolve uniformidade para você se sentir bem em qualquer roupa.",
    image: "https://i.imgur.com/rKzt1IF.jpeg"
  },
  {
    title: "Clareamento de Axilas",
    description: "Tratamento suave e eficaz para clarear e renovar a pele das axilas. Protocolo personalizado com ativos que uniformizam o tom e fortalecem a pele da região.",
    image: "https://i.imgur.com/74aFIMT.jpeg"
  }
];

export default function ServiceCards() {
  return (
    <section id="servicos-principais" className="py-20 bg-nude-principal/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-dourado font-bold tracking-widest uppercase text-sm mb-2 block"
          >
            Cada protocolo pensado para a sua pele, com cuidado e método.
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-texto"
          >
            Especialização em Clareamento
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-branco rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-nude-medio/20"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-serif font-bold text-texto mb-3 group-hover:text-dourado transition-colors">
                  {card.title}
                </h3>
                {card.description && (
                  <p className="text-texto/70 leading-relaxed text-sm">
                    {card.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
