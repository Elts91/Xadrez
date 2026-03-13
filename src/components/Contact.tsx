import { motion } from 'motion/react';
import { Send, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-5xl font-bold mb-8"
            >
              VAMOS <span className="text-gold">CONVERSAR?</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg mb-12 leading-relaxed"
            >
              Tire suas dúvidas, agende uma aula experimental ou peça um orçamento personalizado. 
              Estou pronto para ajudar você a alcançar o próximo nível no xadrez.
            </motion.p>

            <div className="space-y-8">
              {[
                { icon: <Mail />, label: 'Email', value: 'evertontognixadrez@gmail.com' },
                { icon: <Phone />, label: 'Telefone', value: '+55 (51) 9102-2580' },
                { icon: <MapPin />, label: 'Localização', value: 'Porto Alegre, RS - Aulas Online & Presenciais' }
              ].map((item, i) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gold">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-widest text-white/40 mb-1">{item.label}</div>
                    <div className="text-lg font-medium">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://wa.me/555191022580"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(37, 211, 102, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="mt-12 px-8 py-4 rounded-2xl bg-[#25D366] text-white font-bold flex items-center gap-3 shadow-xl shadow-green-500/20 transition-shadow inline-flex"
            >
              <MessageCircle className="w-6 h-6" />
              Agendar via WhatsApp
            </motion.a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="p-8 md:p-12 glass rounded-3xl border-white/10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Nome</label>
                    <input 
                      type="text" 
                      placeholder="Seu nome completo"
                      className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-gold/50 focus:bg-white/10 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Email</label>
                    <input 
                      type="email" 
                      placeholder="seu@email.com"
                      className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-gold/50 focus:bg-white/10 outline-none transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Mensagem</label>
                  <textarea 
                    rows={5}
                    placeholder="Como posso ajudar você?"
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-gold/50 focus:bg-white/10 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button className="w-full py-5 rounded-2xl gold-gradient text-deep-black font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-gold/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
