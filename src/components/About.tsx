import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="sobre" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: -50, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-1/2 relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative group">
              <img 
                src="https://picsum.photos/seed/chess-master/800/1000" 
                alt="Everton Togni" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent opacity-60" />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 gold-gradient rounded-2xl -z-10 blur-2xl opacity-50" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-white/10 rounded-2xl -z-10 blur-2xl opacity-50" />
            </div>
            
            <div className="absolute -bottom-10 -left-10 glass p-8 rounded-2xl hidden lg:block">
              <div className="text-4xl font-black text-gold mb-1">15+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/60">Anos de Experiência</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block"
            >
              O Professor
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight"
            >
              PAIXÃO PELA <span className="text-gold">ESTRATÉGIA</span> E PELO ENSINO
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6 text-lg text-white/60 leading-relaxed"
            >
              <p>
                Everton Togni é um professor apaixonado por xadrez e pelo desenvolvimento do pensamento estratégico. 
                Com anos de dedicação ao esporte, ele acredita que o xadrez é uma ferramenta poderosa para a vida.
              </p>
              <p>
                Sua metodologia foca não apenas em decorar aberturas, mas em entender os princípios fundamentais 
                que regem cada movimento. O objetivo é formar enxadristas pensantes, capazes de analisar situações 
                complexas e tomar decisões precisas sob pressão.
              </p>
              <p>
                Seja você um iniciante curioso ou um jogador avançado buscando refinar sua técnica, 
                Everton oferece um acompanhamento personalizado para acelerar sua evolução.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
