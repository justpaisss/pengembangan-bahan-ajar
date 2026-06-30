'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

export default function AIPrompter() {
  return (
    <div className="p-4 rounded-xl border border-dashed border-indigo-500/30 bg-indigo-500/5 text-xs text-center text-slate-400">
      <Sparkles size={14} className="inline mr-2 text-indigo-500 animate-pulse" />
      AI Prompter Lab Siap Digunakan.
    </div>
  );
}