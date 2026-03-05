import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "Fiz o clareamento íntimo com o Método CLARIÉ® e os resultados foram além do que eu esperava. A Camilla é extremamente cuidadosa, me acompanhou durante todo o processo e me deixou muito segura. Recomendo de olhos fechados!",
    author: "Beatriz Alves",
    rating: 5
  },
  {
    text: "Tratei manchas nas costas e clareamento de axilas com ela. Minha pele mudou completamente. Atendimento humanizado, ambiente acolhedor e resultado real. Me sinto muito mais confiante!",
    author: "Renata Souza",
    rating: 5
  },
  {
    text: "O acompanhamento diário no pós-procedimento me surpreendeu. Nunca tinha visto tanto cuidado e atenção. O resultado do clareamento facial foi incrível e completamente natural.",
    author: "Amanda Lima",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-nude-principal/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-texto mb-4">
            O Que Dizem Nossas Clientes
          </h2>
          <div className="w-24 h-1 bg-dourado mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-branco p-8 rounded-2xl shadow-sm relative border border-nude-medio/20"
            >
              <div className="absolute -top-4 left-8 text-6xl text-dourado/20 font-serif">"</div>
              <div className="flex mb-4 text-dourado">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" className="mr-1" />
                ))}
              </div>
              <p className="text-texto/80 mb-6 italic relative z-10">
                {testimonial.text}
              </p>
              <div className="font-bold text-texto border-t border-nude-medio/10 pt-4">
                {testimonial.author}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
