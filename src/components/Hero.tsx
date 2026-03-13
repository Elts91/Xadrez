import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronRight, Play, Calendar } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax transforms
  const yContent = useTransform(scrollY, [0, 800], [0, -100]);
  const yBg1 = useTransform(scrollY, [0, 800], [0, -250]);
  const yBg2 = useTransform(scrollY, [0, 800], [0, 150]);
  const yBg3 = useTransform(scrollY, [0, 800], [0, -180]);
  const yBg4 = useTransform(scrollY, [0, 800], [0, 220]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.9]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Parallax Layer 1 */}
      <motion.div 
        style={{ y: yBg1 }}
        className="absolute top-1/4 right-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-10"
      />
      
      {/* Background Parallax Layer 2 */}
      <motion.div 
        style={{ y: yBg2 }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10"
      />

      {/* Background Parallax Layer 3 (New) */}
      <motion.div 
        style={{ y: yBg3 }}
        className="absolute top-1/2 left-10 w-48 h-48 bg-gold/5 rounded-full blur-3xl -z-10"
      />

      {/* Background Parallax Layer 4 (New) */}
      <motion.div 
        style={{ y: yBg4 }}
        className="absolute bottom-10 right-1/4 w-32 h-32 bg-white/5 rounded-full blur-3xl -z-10"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          style={{ y: yContent, opacity, scale }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-widest mb-6">
              Mestre da Estratégia
            </span>
            <h1 className="font-display text-6xl md:text-8xl font-black mb-6 leading-tight">
              EVERTON TOGNI <br />
              <span className="text-gold-gradient">AULAS DE XADREZ</span>
            </h1>
            <p className="text-xl text-white/60 mb-10 max-w-2xl leading-relaxed">
              Aprenda estratégia, tática e pensamento enxadrístico com um professor dedicado. 
              Transforme seu jogo e desenvolva habilidades que vão além do tabuleiro.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://wa.me/555191022580"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(201, 162, 39, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl gold-gradient text-deep-black font-bold text-lg flex items-center gap-2 shadow-xl shadow-gold/20 transition-shadow"
              >
                <Calendar className="w-5 h-5" />
                Agendar Aula
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Graphic Elements Layer */}
      <motion.div 
        style={{ y: yBg1, rotate: 15 }}
        className="absolute top-1/3 right-[15%] w-32 h-32 border-2 border-gold/20 rounded-xl -z-10"
      />
      <motion.div 
        style={{ y: yBg2, rotate: -15 }}
        className="absolute bottom-1/3 left-[10%] w-24 h-24 border-2 border-white/10 rounded-full -z-10"
      />
      
      {/* New Graphic Elements for Depth */}
      <motion.div 
        style={{ y: yBg3, rotate: 45 }}
        className="absolute top-1/4 left-[5%] w-16 h-16 border border-gold/10 rounded-lg -z-10"
      />
      <motion.div 
        style={{ y: yBg4, rotate: -30 }}
        className="absolute bottom-1/4 right-[5%] w-40 h-40 border border-white/5 rounded-full -z-10"
      />
    </section>
  );
}
