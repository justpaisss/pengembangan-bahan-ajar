'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

interface CardProps {
  front: string;
  back: string;
}

export default function Flashcard({ front, back }: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="w-full h-44 cursor-pointer perspective"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Sisi Depan */}
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-indigo-600 to-violet-600 text-white rounded-2xl flex flex-col items-center justify-center p-6 shadow-md border border-indigo-500">
          <HelpCircle size={28} className="mb-2 opacity-80 animate-pulse" />
          <h4 className="text-xl font-bold text-center tracking-wide">{front}</h4>
          <span className="text-[10px] uppercase tracking-widest opacity-60 mt-3 bg-indigo-900/40 px-2 py-0.5 rounded-full">Klik untuk melihat</span>
        </div>

        {/* Sisi Belakang */}
        <div className="absolute w-full h-full backface-hidden bg-slate-900 text-slate-100 rounded-2xl flex items-center justify-center p-6 shadow-md border border-slate-800 rotateY-180">
          <p className="text-center text-sm leading-relaxed font-medium">{back}</p>
        </div>
      </motion.div>
    </div>
  );
}