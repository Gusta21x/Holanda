import { motion } from 'motion/react';
import { MapPin, Phone, Instagram, MessageCircle, Map } from 'lucide-react';

export default function Location() {
  const locations = [
    {
      city: "Anápolis - GO",
      label: "📍 Anápolis - GO",
      buttonText: "Ver Localização em Anápolis",
      link: "https://www.google.com/maps/place/16°20'51.6\"S+48°56'35.1\"W/@-16.3476615,-48.9456582,17z"
    },
    {
      city: "Brasília - DF",
      label: "📍 Brasília - DF",
      buttonText: "Ver Localização em Brasília",
      link: "https://www.google.com/maps/place/15°50'20.5\"S+48°01'37.9\"W/@-15.8390312,-48.0297699,17z"
    }
  ];

  return (
    <section id="localizacao" className="py-20 bg-branco relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-dourado font-bold tracking-widest uppercase text-sm mb-2 block"
          >
            Localização
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-texto mb-4"
          >
            Onde Você Me Encontra
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-texto/70"
          >
            Atendo em duas unidades — escolha a mais próxima de você.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-nude-principal/10 p-10 rounded-3xl border border-dourado/20 flex flex-col items-center text-center group hover:border-dourado/40 transition-colors"
            >
              <div className="text-3xl font-serif text-texto mb-6 font-medium">
                {loc.label}
              </div>
              <a
                href={loc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center border border-dourado text-dourado px-8 py-4 rounded-full text-base font-medium hover:bg-dourado hover:text-texto transition-all group"
              >
                <Map className="mr-2 w-5 h-5" />
                {loc.buttonText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
