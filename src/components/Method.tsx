import { motion } from 'motion/react';

export default function Method() {
  return (
    <section id="metodo" className="py-24 bg-nude-medio relative overflow-hidden">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.imgur.com/QC7vKjm.jpeg" 
          alt="" 
          className="w-full h-full object-cover opacity-40 blur-[1px] object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-nude-medio/30"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-light text-texto mb-4 tracking-wide">
            Método CLARÍE®
          </h2>
          <p className="text-lg md:text-xl text-texto/80 font-light tracking-widest uppercase mb-12">
            Mais do que clarear — tratar, renovar e fortalecer.
          </p>

          <div className="space-y-4 text-lg md:text-xl text-texto/90 font-serif leading-relaxed font-light">
            <p>
              O Método CLARÍE® nasceu da vivência clínica, do estudo contínuo e da necessidade de oferecer um clareamento íntimo e corporal mais seguro, eficaz e respeitoso com a fisiologia da pele.
            </p>
            <p>
              Por meio de protocolos personalizados que associam peelings orgânicos, peelings químicos e ativos regeneradores, o CLARÍE® vai além da estética: ele trata, renova e fortalece a pele de dentro para fora.
            </p>
            <div className="py-4 px-6 border-y border-dourado/20 my-4 bg-white/5 backdrop-blur-sm">
              <p className="text-xl md:text-2xl italic text-texto font-serif leading-tight">
                CLARÍE® não é promessa rápida.<br />
                <span className="text-lg md:text-xl text-dourado mt-2 block not-italic font-light tracking-widest uppercase">É processo, cuidado e resultado consciente.</span>
              </p>
            </div>
          </div>

          <div className="w-24 h-[1px] bg-dourado mx-auto mt-4 mb-6"></div>

          <a
            href="https://wa.me/5562992690307"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-dourado text-dourado px-10 py-4 text-sm font-light tracking-widest uppercase hover:bg-dourado hover:text-texto transition-colors"
          >
            Quero Conhecer o Método
          </a>
        </motion.div>
      </div>
    </section>
  );
}
