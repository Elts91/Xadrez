import { Trophy, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-deep-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 gold-gradient rounded flex items-center justify-center">
              <Trophy className="text-deep-black w-5 h-5" />
            </div>
            <span className="font-display text-lg font-bold tracking-tighter">
              EVERTON<span className="text-gold">TOGNI</span>
            </span>
          </div>

          <div className="flex gap-6">
            <a href="https://www.instagram.com/evertontogni/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="https://x.com/evertontogni" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="https://www.youtube.com/channel/UCLeF2TEYy4c0MU5jSavWiLw" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors"><Youtube className="w-5 h-5" /></a>
          </div>

          <div className="text-white/40 text-xs font-medium">
            © 2026 Everton Togni. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
