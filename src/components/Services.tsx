import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const serviceImages = [
  "https://i.imgur.com/MJNFALR.jpeg",
  "https://i.imgur.com/mFFY6zS.jpeg",
  "https://i.imgur.com/Sapwl0C.jpeg",
  "https://i.imgur.com/opGlSzI.jpeg",
  "https://i.imgur.com/mE5529f.jpeg",
  "https://i.imgur.com/C1rBSHt.jpeg"
];

export default function Services() {
  return (
    <section id="servicos" className="py-12 bg-nude-principal/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-texto mb-2"
          >
            Método CLARÍE® em Prática
          </motion.h2>
          <p className="text-texto/60 font-light tracking-widest uppercase text-xs">
            Resultados e Procedimentos
          </p>
        </div>
      </div>

      {/* Automatic Image Carousel */}
      <div className="relative w-full py-4">
        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {[...serviceImages, ...serviceImages].map((image, index) => (
            <div
              key={index}
              className="w-[196px] md:w-[245px] aspect-[4/5] rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
        
        {/* Gradient Overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-nude-principal/40 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-nude-principal/40 to-transparent z-10"></div>
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://wa.me/5562992690307"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-dourado text-dourado px-8 py-3 rounded-full text-sm font-medium hover:bg-dourado hover:text-texto transition-all"
        >
          Agendar Minha Avaliação
        </a>
      </div>
    </section>
  );
}
