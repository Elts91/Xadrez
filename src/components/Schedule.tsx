import { motion } from 'motion/react';
import { Clock, Calendar } from 'lucide-react';

export default function Schedule() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const slots = [
    { day: 'Segunda', time: '19:00', status: 'Disponível' },
    { day: 'Terça', time: '20:00', status: 'Disponível' },
    { day: 'Quarta', time: '18:00', status: 'Última Vaga', highlight: true },
    { day: 'Quinta', time: '19:30', status: 'Disponível' },
    { day: 'Sábado', time: '10:00', status: 'Disponível' },
  ];

  return (
    <section id="horarios" className="py-24 bg-dark-gray/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              HORÁRIOS <span className="text-gold">DISPONÍVEIS</span>
            </h2>
            <p className="text-white/60 text-lg">
              Escolha o melhor momento para sua evolução. Nossas aulas são flexíveis e adaptadas à sua rotina.
            </p>
          </motion.div>
          <motion.a 
            href="https://wa.me/555191022580"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-2xl gold-gradient text-deep-black font-bold flex items-center gap-2 shadow-xl shadow-gold/20"
          >
            <Calendar className="w-5 h-5" />
            Reservar Horário
          </motion.a>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {slots.map((slot) => (
            <motion.div
              key={slot.day}
              variants={itemVariants}
              className={`p-8 rounded-3xl glass border-white/10 text-center group hover:border-gold/50 transition-all ${slot.highlight ? 'ring-2 ring-gold/30' : ''}`}
            >
              <div className="text-gold font-bold uppercase tracking-widest text-xs mb-4">{slot.day}</div>
              <div className="flex items-center justify-center gap-2 text-3xl font-black mb-4">
                <Clock className="w-6 h-6 text-white/20" />
                {slot.time}
              </div>
              <div className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full inline-block ${
                slot.highlight ? 'bg-gold text-deep-black' : 'bg-white/10 text-white/60'
              }`}>
                {slot.status}
              </div>
              
              <a 
                href={`https://wa.me/555191022580?text=Olá! Gostaria de reservar o horário de ${slot.day} às ${slot.time}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full py-3 rounded-xl border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-deep-black hover:border-gold transition-all inline-block"
              >
                Reservar
              </a>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center text-white/40 text-sm"
        >
          * Não encontrou um horário ideal? <a href="#contato" className="text-gold hover:underline">Entre em contato</a> para horários personalizados.
        </motion.p>
      </div>
    </section>
  );
}
