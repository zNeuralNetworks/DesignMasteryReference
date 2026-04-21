import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Scale, Sparkles } from 'lucide-react';
import { entries } from '@/data/index';
import { ComparisonTable } from './ComparisonTable';

export const ComparisonPage = () => {
  const { id1, id2 } = useParams();
  
  const entryA = entries.find(e => e.id === id1);
  const entryB = entries.find(e => e.id === id2);

  if (!entryA || !entryB) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-500">
        One or both references not found. 
        <Link to="/" className="text-primary-600 ml-2 hover:underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <Link to={`/reference/${id1}`} className="inline-flex items-center text-slate-400 hover:text-slate-900 mb-8 transition-colors text-sm font-medium group">
        <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to {entryA.title}
      </Link>

      <header className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
          <Scale size={12} />
          <span>Pattern Comparison</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
          {entryA.title} <span className="text-slate-300 font-light">vs.</span> {entryB.title}
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl">
          Side-by-side architectural analysis to help you choose the right pattern for your specific constraints.
        </p>
      </header>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ComparisonTable entryA={entryA} entryB={entryB} />
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-slate-900 rounded-3xl text-white">
          <h3 className="text-primary-400 font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
            <Sparkles size={16} /> Architectural Verdict
          </h3>
          <p className="text-slate-300 leading-relaxed">
            Choose <span className="text-white font-bold">{entryA.title}</span> if your primary goal is <span className="text-primary-300">{entryA.quickTake.toLowerCase()}</span>. 
            Opt for <span className="text-white font-bold">{entryB.title}</span> when <span className="text-primary-300">{entryB.quickTake.toLowerCase()}</span> is the priority.
          </p>
        </div>
        
        <div className="p-8 bg-white border border-slate-200 rounded-3xl">
          <h3 className="text-slate-900 font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
            <Scale size={16} className="text-primary-500" /> Decision Framework
          </h3>
          <p className="text-slate-600 leading-relaxed">
            When comparing these two, evaluate your <strong>technical debt tolerance</strong> vs. <strong>user experience requirements</strong>. 
            {entryA.verdict === 'anti-pattern' || entryB.verdict === 'anti-pattern' ? 
              " One of these is considered an anti-pattern in modern professional contexts—use extreme caution." : 
              " Both are valid patterns with distinct tradeoffs."}
          </p>
        </div>
      </div>
    </div>
  );
};
