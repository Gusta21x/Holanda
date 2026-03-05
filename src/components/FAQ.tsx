import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "O que é o Método CLARIÉ®?",
    answer: "É um método exclusivo desenvolvido por Camilla Holanda para clareamento íntimo e corporal. Seguro, eficaz e com resultados visíveis desde as primeiras sessões."
  },
  {
    question: "O clareamento íntimo é seguro?",
    answer: "Sim. O procedimento é realizado com produtos e técnicas específicas para regiões sensíveis, com total segurança e conforto para a cliente."
  },
  {
    question: "Quantas sessões são necessárias?",
    answer: "Depende da área e do objetivo de cada cliente. Na avaliação, montamos um protocolo personalizado com o número ideal de sessões."
  },
  {
    question: "Vocês atendem em quais cidades?",
    answer: "Atendemos em Anápolis e Brasília - DF. Entre em contato pelo WhatsApp para confirmar disponibilidade e localização."
  },
  {
    question: "Como agendar minha avaliação?",
    answer: "Pelo WhatsApp! É só me chamar que respondo rapidinho e já marcamos sua avaliação."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-text-dark mb-4">
            Dúvidas Frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-100 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 bg-white hover:bg-nude-light/20 transition-colors text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-text-dark font-serif">{faq.question}</span>
                <span className="text-rose-aged ml-4">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-nude-light/10"
                  >
                    <div className="p-6 pt-0 text-text-dark/80 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
