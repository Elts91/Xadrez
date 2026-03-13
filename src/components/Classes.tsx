import { motion } from 'motion/react';
import { Target, Zap, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Classes() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const classes = [
    {
      title: 'Iniciante',
      description: 'Fundamentos do xadrez, movimentos das peças e princípios básicos de abertura.',
      icon: <Target className="w-8 h-8" />,
      features: ['Movimentação das peças', 'Xeque e Xeque-mate', 'Aberturas básicas', 'Táticas simples'],
      color: 'from-blue-500/20 to-blue-600/20'
    },
    {
      title: 'Intermediário',
      description: 'Táticas avançadas, padrões estratégicos e introdução ao planejamento de meio-jogo.',
      icon: <Zap className="w-8 h-8" />,
      features: ['Combinações táticas', 'Estrutura de peões', 'Finais básicos', 'Análise de partidas'],
      color: 'from-gold/20 to-gold/40',
      popular: true
    },
    {
      title: 'Avançado',
      description: 'Preparação para torneios, estudo profundo de aberturas e refinamento estratégico.',
      icon: <ShieldCheck className="w-8 h-8" />,
      features: ['Repertório de aberturas', 'Cálculo profundo', 'Finais complexos', 'Psicologia do jogo'],
      color: 'from-purple-500/20 to-purple-600/20'
    }
  ];

  return (
    <section id="aulas" className="py-24 bg-dark-gray/20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold mb-6"
          >
            PLANOS DE <span className="text-gold">TREINAMENTO</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg"
          >
            Escolha o nível que melhor se adapta ao seu momento atual e comece sua jornada rumo à maestria.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {classes.map((cls) => (
            <motion.div
              key={cls.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-3xl glass border-white/10 flex flex-col h-full overflow-hidden group ${cls.popular ? 'border-gold/50' : ''}`}
            >
              {cls.popular && (
                <div className="absolute top-0 right-0 gold-gradient text-deep-black text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-bl-xl">
                  Mais Procurado
                </div>
              )}
              
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cls.color} flex items-center justify-center mb-8 text-gold group-hover:scale-110 transition-transform duration-500`}>
                {cls.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">{cls.title}</h3>
              <p className="text-white/40 mb-8 text-sm leading-relaxed">
                {cls.description}
              </p>

              <ul className="space-y-4 mb-10 flex-grow">
                {cls.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                cls.popular 
                ? 'gold-gradient text-deep-black shadow-lg shadow-gold/20' 
                : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
              }`}>
                Começar Agora
                <ChevronRight className="w-4 h-4" />
              </button>
              
              {/* Animated background light */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-colors" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
