import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Scale, Sparkles, Plus, X, Printer } from 'lucide-react';
import { entries as allEntries } from '@/data/index';
import { ReferenceEntry } from '@/types';
import { ComparisonTable } from './ComparisonTable';

const MAX_ENTRIES = 4;

export const ComparisonPage = () => {
  const { id1, id2, id3, id4 } = useParams<{ id1: string; id2: string; id3?: string; id4?: string }>();
  const navigate = useNavigate();

  const initialIds = [id1, id2, id3, id4].filter(Boolean) as string[];
  const [selectedIds, setSelectedIds] = useState<string[]>(initialIds);
  const [addSearch, setAddSearch] = useState('');
  const [showAddPanel, setShowAddPanel] = useState(false);

  const selectedEntries = useMemo(
    () => selectedIds.map(id => allEntries.find(e => e.id === id)).filter(Boolean) as ReferenceEntry[],
    [selectedIds],
  );

  const searchResults = useMemo(() => {
    if (!addSearch.trim()) return [];
    const q = addSearch.toLowerCase();
    return allEntries
      .filter(e => !selectedIds.includes(e.id) && (e.title.toLowerCase().includes(q) || e.tags.some(t => t.toLowerCase().includes(q))))
      .slice(0, 8);
  }, [addSearch, selectedIds]);

  const removeEntry = (id: string) => {
    const next = selectedEntries.filter(e => e.id !== id);
    if (next.length < 2) return;
    setSelectedIds(next.map(e => e.id));
    navigate(`/compare/${next.map(e => e.id).join('/')}`, { replace: true });
  };

  const addEntry = (entry: ReferenceEntry) => {
    const next = [...selectedIds, entry.id];
    setSelectedIds(next);
    setAddSearch('');
    setShowAddPanel(false);
    navigate(`/compare/${next.join('/')}`, { replace: true });
  };

  if (selectedEntries.length < 2) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-500">
        One or more references not found.{' '}
        <Link to="/" className="text-primary-600 ml-2 hover:underline">Return Home</Link>
      </div>
    );
  }

  const [first] = selectedEntries;
  const hasAntiPattern = selectedEntries.some(e => e.verdict === 'anti-pattern');

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Back link */}
      <Link
        to={`/reference/${id1}`}
        className="inline-flex items-center text-slate-400 hover:text-slate-900 mb-8 transition-colors text-sm font-medium group no-print"
      >
        <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to {first.title}
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
          <Scale size={12} />
          <span>Pattern Comparison</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
          {selectedEntries.map((e, i) => (
            <span key={e.id}>
              {i > 0 && <span className="text-slate-300 font-light mx-3">vs.</span>}
              {e.title}
            </span>
          ))}
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl">
          Side-by-side architectural analysis to help you choose the right pattern for your specific constraints.
        </p>
      </header>

      {/* Entry chips + add/remove controls */}
      <div className="flex flex-wrap items-center gap-2 mb-8 no-print">
        {selectedEntries.map(entry => (
          <div key={entry.id} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 rounded-full text-sm font-semibold text-slate-700">
            {entry.title}
            {selectedEntries.length > 2 && (
              <button onClick={() => removeEntry(entry.id)} className="ml-1 text-slate-400 hover:text-rose-500 transition-colors">
                <X size={12} />
              </button>
            )}
          </div>
        ))}

        {selectedEntries.length < MAX_ENTRIES && (
          <div className="relative">
            <button
              onClick={() => setShowAddPanel(v => !v)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-dashed border-slate-300 rounded-full text-sm font-semibold text-slate-400 hover:border-primary-400 hover:text-primary-600 transition-colors"
            >
              <Plus size={12} /> Add entry
            </button>
            {showAddPanel && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-slate-200 rounded-xl shadow-xl z-20 p-3">
                <input
                  autoFocus
                  type="text"
                  placeholder="Search entries…"
                  value={addSearch}
                  onChange={e => setAddSearch(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg outline-none focus:border-primary-400 mb-2"
                />
                {searchResults.length > 0 ? (
                  <ul className="space-y-0.5 max-h-52 overflow-y-auto">
                    {searchResults.map(entry => (
                      <li key={entry.id}>
                        <button
                          onClick={() => addEntry(entry)}
                          className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors"
                        >
                          {entry.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : addSearch ? (
                  <p className="text-xs text-slate-400 px-3 py-2">No matches</p>
                ) : null}
              </div>
            )}
          </div>
        )}

        {/* Export PDF button */}
        <button
          onClick={() => window.print()}
          className="ml-auto inline-flex items-center gap-1.5 px-4 py-1.5 bg-slate-900 text-white rounded-full text-sm font-semibold hover:bg-slate-700 transition-colors"
        >
          <Printer size={13} /> Export PDF
        </button>
      </div>

      {/* Comparison table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ComparisonTable entries={selectedEntries} />
      </motion.div>

      {/* Verdict + Decision cards */}
      <div className={`mt-12 grid grid-cols-1 md:grid-cols-2 gap-8`}>
        <div className="p-8 bg-slate-900 rounded-3xl text-white">
          <h3 className="text-primary-400 font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
            <Sparkles size={16} /> Architectural Verdict
          </h3>
          <p className="text-slate-300 leading-relaxed">
            {selectedEntries.map((e, i) => (
              <span key={e.id}>
                {i > 0 && <span className="text-slate-500"> — or — </span>}
                Choose <span className="text-white font-bold">{e.title}</span> if{' '}
                <span className="text-primary-300">{e.quickTake.toLowerCase()}</span>
              </span>
            ))}
            .
          </p>
        </div>

        <div className="p-8 bg-white border border-slate-200 rounded-3xl">
          <h3 className="text-slate-900 font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
            <Scale size={16} className="text-primary-500" /> Decision Framework
          </h3>
          <p className="text-slate-600 leading-relaxed">
            When comparing {selectedEntries.length > 2 ? 'these patterns' : 'these two'}, evaluate your{' '}
            <strong>technical debt tolerance</strong> vs. <strong>user experience requirements</strong>.{' '}
            {hasAntiPattern
              ? 'One or more of these is considered an anti-pattern in modern professional contexts — use extreme caution.'
              : 'All are valid patterns with distinct tradeoffs.'}
          </p>
        </div>
      </div>
    </div>
  );
};
