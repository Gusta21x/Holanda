import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function About() {
  const differentials = [
    "Criadora do Método Exclusivo CLARÍE®",
    "Especialista em Clareamento Íntimo, Corporal e Facial",
    "Protocolos 100% Personalizados",
    "Acompanhamento Diário no Pós-Procedimento",
    "Atendimento Humanizado e de Alto Nível",
    "Atuando desde 2018"
  ];

  return (
    <section id="sobre" className="py-20 bg-branco">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="w-full text-center mb-12">
          <span className="text-dourado font-bold tracking-widest uppercase text-sm mb-2 block">Sobre Mim</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-texto">
            Quem Está Por Trás da Sua Transformação
          </h2>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://i.imgur.com/3vGa2mQ.jpeg"
                alt="Camilla Holanda"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-dourado/30 rounded-2xl -z-0 hidden md:block"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="bg-nude-principal/30 p-8 rounded-2xl mb-8 border border-nude-medio">
              <p className="text-texto text-lg leading-relaxed italic font-serif">
                "Sou Camilla Holanda, esteticista cosmetóloga especializada em clareamento íntimo, corporal e facial. Meu foco é devolver confiança e autoestima através de tratamentos que realmente funcionam — com método, cuidado e um olhar atento para cada paciente. Atendo em Anápolis e Brasília com protocolos personalizados, técnica refinada e acompanhamento próximo durante todo o processo."
              </p>
            </div>

            <ul className="space-y-4">
              {differentials.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center text-texto"
                >
                  <span className="bg-dourado/20 p-1 rounded-full mr-3 text-dourado">
                    <Check size={16} strokeWidth={3} />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
