import { useState, useCallback, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess, Square } from 'chess.js';
import { motion } from 'motion/react';
import { RotateCcw, Cpu, User, Trophy } from 'lucide-react';

const ChessboardAny = Chessboard as any;

export default function ChessExperience() {
  const [game, setGame] = useState(new Chess());
  const [moveFrom, setMoveFrom] = useState<Square | null>(null);
  const [rightClickedSquares, setRightClickedSquares] = useState<Record<string, any>>({});
  const [optionSquares, setOptionSquares] = useState<Record<string, any>>({});
  const [isAiMode, setIsAiMode] = useState(false);

  function safeGameMutate(modify: (g: Chess) => void) {
    setGame((g) => {
      const update = new Chess(g.fen());
      modify(update);
      return update;
    });
  }

  const makeRandomMove = useCallback(() => {
    const possibleMoves = game.moves();
    if (game.isGameOver() || game.isDraw() || possibleMoves.length === 0) return;
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    safeGameMutate((game) => {
      game.move(possibleMoves[randomIndex]);
    });
  }, [game]);

  useEffect(() => {
    if (isAiMode && game.turn() === 'b') {
      const timer = setTimeout(makeRandomMove, 500);
      return () => clearTimeout(timer);
    }
  }, [game, isAiMode, makeRandomMove]);

  function onDrop(sourceSquare: string, targetSquare: string) {
    const gameCopy = new Chess(game.fen());
    try {
      gameCopy.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q', // always promote to queen for simplicity
      });
      setGame(gameCopy);
      setMoveFrom(null);
      setOptionSquares({});
      return true;
    } catch (e) {
      return false;
    }
  }

  function onSquareClick(square: string) {
    setRightClickedSquares({});

    // from square
    if (!moveFrom) {
      const hasMoves = game.moves({ square: square as Square }).length > 0;
      if (hasMoves) {
        setMoveFrom(square as Square);
        const moves = game.moves({
          square: square as Square,
          verbose: true,
        });
        const newSquares: Record<string, any> = {};
        moves.map((move) => {
          newSquares[move.to] = {
            background:
              game.get(move.to as Square) && game.get(move.to as Square).color !== game.get(square as Square).color
                ? 'radial-gradient(circle, rgba(0,0,0,.1) 85%, transparent 85%)'
                : 'radial-gradient(circle, rgba(0,0,0,.1) 25%, transparent 25%)',
            borderRadius: '50%',
          };
          return move;
        });
        newSquares[square] = {
          background: 'rgba(201, 162, 39, 0.4)',
        };
        setOptionSquares(newSquares);
      }
      return;
    }

    // to square
    const gameCopy = new Chess(game.fen());
    try {
      gameCopy.move({
        from: moveFrom,
        to: square,
        promotion: 'q',
      });
      setGame(gameCopy);
      setMoveFrom(null);
      setOptionSquares({});
    } catch (e) {
      setMoveFrom(null);
      setOptionSquares({});
    }
  }

  function resetGame() {
    safeGameMutate((game) => {
      game.reset();
    });
    setMoveFrom(null);
    setOptionSquares({});
  }

  return (
    <section id="jogar" className="py-24 bg-dark-gray/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
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
              EXPERIMENTE O <span className="text-gold">DESAFIO</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg mb-10 leading-relaxed"
            >
              O xadrez é a ginástica da mente. Pratique agora mesmo em nosso tabuleiro interativo. 
              Você pode jogar contra um amigo localmente ou testar suas habilidades contra o computador.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className={`p-6 rounded-2xl border transition-all ${!isAiMode ? 'bg-gold/10 border-gold' : 'bg-white/5 border-white/10'}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <User className={!isAiMode ? 'text-gold' : 'text-white/40'} />
                  <h3 className="font-bold">Modo Local</h3>
                </div>
                <p className="text-sm text-white/40">Jogue contra alguém ao seu lado.</p>
                <button 
                  onClick={() => setIsAiMode(false)}
                  className="mt-4 text-xs font-bold uppercase tracking-wider text-gold hover:underline"
                >
                  Selecionar
                </button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className={`p-6 rounded-2xl border transition-all ${isAiMode ? 'bg-gold/10 border-gold' : 'bg-white/5 border-white/10'}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Cpu className={isAiMode ? 'text-gold' : 'text-white/40'} />
                  <h3 className="font-bold">Contra IA</h3>
                </div>
                <p className="text-sm text-white/40">Desafie o computador em um modo simples.</p>
                <button 
                  onClick={() => setIsAiMode(true)}
                  className="mt-4 text-xs font-bold uppercase tracking-wider text-gold hover:underline"
                >
                  Selecionar
                </button>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button 
                onClick={resetGame}
                className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 hover:bg-white/10 transition-all font-bold"
              >
                <RotateCcw className="w-4 h-4" />
                Reiniciar Partida
              </button>
              
              {game.isGameOver() && (
                <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-gold/20 border border-gold/40 text-gold font-bold animate-bounce">
                  <Trophy className="w-5 h-5" />
                  Fim de Jogo!
                </div>
              )}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 max-w-[600px]"
          >
            <div className="relative p-4 md:p-8 glass rounded-3xl shadow-2xl shadow-black">
              <div className="aspect-square w-full rounded-lg overflow-hidden shadow-inner shadow-black/50">
                <ChessboardAny 
                  position={game.fen()}
                  onPieceDrop={onDrop}
                  onSquareClick={onSquareClick}
                  customBoardStyle={{
                    borderRadius: '4px',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)',
                  }}
                  customDarkSquareStyle={{ backgroundColor: '#1c1c1c' }}
                  customLightSquareStyle={{ backgroundColor: '#2d2d2d' }}
                  animationDuration={300}
                  customSquareStyles={{
                    ...optionSquares,
                    ...rightClickedSquares,
                  }}
                />
              </div>
              
              <div className="mt-6 flex justify-between items-center text-xs font-bold uppercase tracking-widest text-white/40">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${game.turn() === 'w' ? 'bg-gold animate-pulse' : 'bg-white/20'}`} />
                  Brancas {game.turn() === 'w' && '(Sua vez)'}
                </div>
                <div className="flex items-center gap-2">
                  Pretas {game.turn() === 'b' && '(Pensando...)'}
                  <div className={`w-3 h-3 rounded-full ${game.turn() === 'b' ? 'bg-gold animate-pulse' : 'bg-white/20'}`} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
