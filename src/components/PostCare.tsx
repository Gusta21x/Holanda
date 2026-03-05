import { motion } from 'motion/react';
import { AlertCircle, Sun, Activity, Droplets, Flame, Wine, FileText } from 'lucide-react';

export default function PostCare() {
  const cares = [
    { icon: Sun, text: "Evite exposição solar direta por 48h — use FPS 50+" },
    { icon: Activity, text: "Não manipule nem coce as áreas tratadas" },
    { icon: Droplets, text: "Mantenha a região limpa e hidratada conforme orientação" },
    { icon: Flame, text: "Evite sauna, banho muito quente e exercícios intensos por 48h" },
    { icon: Wine, text: "Não consuma bebidas alcoólicas por 24h" },
    { icon: FileText, text: "Siga todas as orientações específicas passadas no atendimento" },
  ];

  return (
    <section id="cuidados" className="py-20 bg-branco">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-texto mb-4">
            Cuide do Seu Resultado
          </h2>
          <p className="text-lg text-texto/70">
            Para garantir o melhor resultado e uma recuperação tranquila:
          </p>
        </div>

        <div className="bg-nude-principal/20 rounded-3xl p-8 md:p-12 border border-nude-medio/30 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cares.map((care, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start"
              >
                <div className="bg-white p-2 rounded-full shadow-sm mr-4 text-dourado shrink-0">
                  <care.icon size={20} />
                </div>
                <span className="text-texto/90 font-medium">{care.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 bg-nude-principal/50 p-6 rounded-xl flex items-start border-l-4 border-dourado"
          >
            <AlertCircle className="text-dourado mr-4 shrink-0 mt-1" size={24} />
            <p className="text-texto/90 text-sm md:text-base">
              <strong>Atenção:</strong> Qualquer reação fora do esperado, entre em contato imediatamente pelo WhatsApp.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
