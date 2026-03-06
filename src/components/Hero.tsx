import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-nude-principal">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-nude-principal via-nude-principal/90 to-transparent z-10 md:w-2/3"></div>
        <img
          src="https://i.imgur.com/5C7cQnF.jpeg"
          alt="Camilla Holanda - Estética Avançada"
          className="absolute right-0 top-0 h-full w-full md:w-2/3 object-cover object-center opacity-80"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-texto leading-tight mb-8 tracking-wide"
          >
            Clareamento com Método, <br />
            <span className="italic text-dourado font-medium">Cuidado e Elegância</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg text-texto/80 mb-12 max-w-lg leading-relaxed font-light tracking-wide"
          >
            Protocolos personalizados de clareamento facial, corporal e íntimo para uma pele renovada, saudável e naturalmente mais uniforme.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="https://wa.me/5562992690307"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-dourado text-dourado px-10 py-4 text-sm font-light tracking-widest uppercase hover:bg-dourado hover:text-texto transition-colors"
            >
              Agendar Avaliação
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
