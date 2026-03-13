import { motion } from 'motion/react';
import { Brain, Focus, Map, Share2 } from 'lucide-react';

export default function Benefits() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  const benefits = [
    // ... same benefits array ...
    {
      title: 'Raciocínio Lógico',
      description: 'Desenvolva a capacidade de analisar padrões e antecipar consequências.',
      icon: <Brain className="w-10 h-10 text-gold" />
    },
    {
      title: 'Concentração',
      description: 'Aumente seu foco e disciplina mental através do exercício constante.',
      icon: <Focus className="w-10 h-10 text-gold" />
    },
    {
      title: 'Estratégia',
      description: 'Aprenda a criar planos complexos e adaptá-los conforme a necessidade.',
      icon: <Map className="w-10 h-10 text-gold" />
    },
    {
      title: 'Tomada de Decisão',
      description: 'Treine a escolha da melhor opção sob pressão e tempo limitado.',
      icon: <Share2 className="w-10 h-10 text-gold" />
    }
  ];

  return (
    <section id="beneficios" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="p-8 rounded-3xl bg-dark-gray/40 border border-white/5 hover:border-gold/30 transition-all group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
