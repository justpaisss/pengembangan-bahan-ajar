'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, RefreshCw, Award } from 'lucide-react';

const daftarSoal = [
  {
    id: 1,
    pertanyaan: "Manakah tools yang paling relevan digunakan untuk membuat prototipe UI/UX desain secara kolaboratif?",
    pilihan: ["Microsoft Word", "Figma", "Blender", "Notepad"],
    jawabanBenar: 1
  },
  {
    id: 2,
    pertanyaan: "Apa yang membedakan seorang kreator digital yang kreatif dengan sekadar melakukan 'reposting'?",
    pilihan: [
      "Kreator digital selalu menggunakan aplikasi berbayar", 
      "Kreator digital melakukan modifikasi, memberikan nilai tambah, atau menciptakan ide orisinal", 
      "Kreator digital hanya membagikan ulang video viral", 
      "Kreator digital tidak pernah melihat referensi orang lain"
    ],
    jawabanBenar: 1
  },
  {
    id: 3,
    pertanyaan: "Mengapa pemahaman tentang hak cipta (copyright) dan lisensi (seperti Creative Commons) sangat penting dalam kreativitas digital?",
    pilihan: [
      "Agar karya kita tidak bisa dilihat oleh orang lain", 
      "Supaya kita bisa menjual karya orang lain dengan harga mahal", 
      "Untuk memastikan kita menghargai karya orang lain dan menghindari masalah hukum atas plagiarisme", 
      "Karena aturan tersebut diwajibkan oleh penyedia hosting website"
    ],
    jawabanBenar: 2
  },
  {
    id: 4,
    pertanyaan: "Jika kamu ingin membuat animasi 3D untuk memvisualisasikan sebuah objek secara realistis, software mana yang paling tepat digunakan?",
    pilihan: ["Canva", "CapCut", "Adobe Premiere", "Blender"],
    jawabanBenar: 3
  },
  {
    id: 5,
    pertanyaan: "Apa peran utama dari prinsip 'Visual Hierarchy' (Hierarki Visual) dalam pembuatan konten digital?",
    pilihan: [
      "Membuat ukuran file gambar menjadi lebih kecil dan ringan", 
      "Mengarahkan pandangan audiens ke informasi yang paling penting terlebih dahulu", 
      "Memastikan semua warna yang digunakan adalah warna primer", 
      "Menghapus latar belakang foto secara otomatis"
    ],
    jawabanBenar: 1
  }
];

export default function Quiz() {
  const [jawabanUser, setJawabanUser] = useState<{ [key: number]: number }>({});
  const [sudahSubmit, setSudahSubmit] = useState(false);
  const [skor, setSkor] = useState(0);

  const handlePilih = (soalIdx: number, pilihanIdx: number) => {
    if (sudahSubmit) return;
    setJawabanUser({ ...jawabanUser, [soalIdx]: pilihanIdx });
  };

  const hitungSkor = () => {
    let nilaiBenar = 0;
    daftarSoal.forEach((soal, idx) => {
      if (jawabanUser[idx] === soal.jawabanBenar) nilaiBenar += 1;
    });
    setSkor((nilaiBenar / daftarSoal.length) * 100);
    setSudahSubmit(true);
  };

  const resetKuis = () => {
    setJawabanUser({});
    setSudahSubmit(false);
    setSkor(0);
  };

  return (
    <div className="w-full bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
      <h3 className="text-2xl font-bold mb-6 text-slate-800 flex items-center gap-2">
        📝 Evaluasi Pemahaman
      </h3>

      {!sudahSubmit ? (
        <div className="space-y-6">
          {daftarSoal.map((soal, soalIdx) => (
            <div key={soal.id} className="border-b border-slate-100 pb-5 last:border-0">
              <p className="font-semibold text-slate-800 mb-3 text-base">
                {soalIdx + 1}. {soal.pertanyaan}
              </p>
              <div className="grid grid-cols-1 gap-2">
                {soal.pilihan.map((opsi, pilihanIdx) => {
                  const terpilih = jawabanUser[soalIdx] === pilihanIdx;
                  return (
                    <button
                      key={pilihanIdx}
                      onClick={() => handlePilih(soalIdx, pilihanIdx)}
                      className={`text-left px-4 py-3 rounded-xl text-sm transition-all border ${
                        terpilih
                          ? 'bg-indigo-50 border-indigo-500 text-indigo-700 font-medium'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {opsi}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          <button
            onClick={hitungSkor}
            disabled={Object.keys(jawabanUser).length < daftarSoal.length}
            className="w-full py-3 rounded-xl font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed shadow-sm"
          >
            Selesai & Serahkan
          </button>
        </div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-6">
          <div className="inline-flex p-4 bg-indigo-50 rounded-full text-indigo-600 mb-4">
            <Award size={44} />
          </div>
          <h4 className="text-2xl font-bold text-slate-800 mb-1">Hasil Evaluasi</h4>
          <p className="text-sm text-slate-500 mb-6">Nilai akhir berdasarkan jawaban mandiri kamu:</p>
          
          <div className="text-5xl font-black text-indigo-600 mb-8 bg-indigo-50/70 inline-block px-8 py-3 rounded-2xl">
            {skor} <span className="text-lg text-slate-400 font-normal">/ 100</span>
          </div>

          <div className="text-left space-y-3 mb-6">
            {daftarSoal.map((soal, idx) => {
              const benar = jawabanUser[idx] === soal.jawabanBenar;
              return (
                <div key={soal.id} className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs md:text-sm flex items-start gap-2.5">
                  {benar ? (
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                  ) : (
                    <XCircle className="text-rose-500 shrink-0 mt-0.5" size={16} />
                  )}
                  <div>
                    <p className="font-medium text-slate-700">{soal.pertanyaan}</p>
                    <p className="text-slate-500 mt-1">
                      Pilihan kamu: <span className={benar ? 'text-emerald-600 font-semibold' : 'text-rose-650 font-semibold'}>{soal.pilihan[jawabanUser[idx]]}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={resetKuis}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <RefreshCw size={14} /> Reset Kuis
          </button>
        </motion.div>
      )}
    </div>
  );
}