'use client';

import React, { useState } from 'react';
import { Sparkles, HelpCircle } from 'lucide-react';

const contohPrompt = [
  {
    kategori: "Desain Poster",
    template: "Buat poster gaya minimalis Swiss untuk acara seminar literasi digital kampus, warna dominan navy dan orange, tipografi bold.",
    hasil: "✨ Hasil AI: Rekomendasi layout grid 3-kolom, font sans-serif tebal (Inter/Montserrat), ilustrasi vektor flat abstrak yang melambangkan konektivitas internet."
  },
  {
    kategori: "UI/UX Asset",
    template: "Buat set ikon glassmorphic 3D untuk aplikasi mobile e-learning mahasiswa, warna pastel biru muda dan ungu transparan.",
    hasil: "✨ Hasil AI: Panduan efek blend mode, opacity layer 40% dengan background-blur 16px, efek inner-shadow putih 1px untuk simulasi material kaca."
  }
];

export default function AIPrompter() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="w-full bg-slate-900 text-white p-6 md:p-8 rounded-3xl border border-slate-800 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 bg-indigo-500/20 text-indigo-400 rounded-xl">
          <Sparkles size={20} />
        </div>
        <div>
          <h4 className="text-lg font-bold tracking-tight">AI Prompter Lab</h4>
          <p className="text-xs text-slate-400">Pilih skenario cetak biru prompt untuk eksplorasi kreasi digital cepat.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        {contohPrompt.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            className={`text-left p-4 rounded-xl border text-sm transition-all ${
              selected === idx 
                ? 'bg-indigo-600 border-indigo-500 text-white' 
                : 'bg-slate-800/50 border-slate-700/50 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <span className="text-xs text-indigo-400 font-semibold block mb-1">Kategori: {prompt.kategori}</span>
            <p className="italic text-slate-200">"{prompt.template}"</p>
          </button>
        ))}
      </div>

      {selected !== null ? (
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-sm text-slate-300">
          {contohPrompt[selected].hasil}
        </div>
      ) : (
        <div className="text-center py-4 text-xs text-slate-500 flex items-center justify-center gap-1.5">
          <HelpCircle size={14} /> Pilih salah satu skenario prompt di atas untuk melihat simulasi output kreasi.
        </div>
      )}
    </div>
  );
}