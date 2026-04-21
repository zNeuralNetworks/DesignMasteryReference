import React, { useDeferredValue, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Gauge, Search, ShieldAlert, X, Wrench } from 'lucide-react';
import { entries } from '@/data/index';
import { fixGuides } from '@/data/fixGuides';
import { filterReferenceEntries, getReferenceHref, IntentFilter } from '@/features/reference/referenceIndex';
import { ReferenceEntry } from '@/types';

const MAX_RESULTS = 8;

const getEntryTitle = (entry: ReferenceEntry) =>
  entry.title.includes(':') ? entry.title.split(':')[1].trim() : entry.title;

const ResultMeta = ({ entry }: { entry: ReferenceEntry }) => (
  <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-fg-muted">
    <span>{entry.domain}</span>
    <span className="text-fg-faint">/</span>
    <span>{entry.format}</span>
    <span className="text-fg-faint">/</span>
    <span>{entry.verdict}</span>
    {entry.perfImpact === 'high' && (
      <span className="inline-flex items-center gap-1 text-rose-500">
        <Gauge size={11} /> High perf cost
      </span>
    )}
    {entry.verdict === 'anti-pattern' && (
      <span className="inline-flex items-center gap-1 text-rose-500">
        <ShieldAlert size={11} /> Risk
      </span>
    )}
  </div>
);

export interface ReferenceCommandPaletteProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  initialQuery?: string;
  onQueryChange?: (query: string) => void;
}

export const ReferenceCommandPalette = ({
  isOpen,
  onOpen,
  onClose,
  initialQuery = '',
  onQueryChange,
}: ReferenceCommandPaletteProps) => {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const deferredQuery = useDeferredValue(query);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const intentFilter: IntentFilter = useMemo(() => {
    const q = deferredQuery.toLowerCase();
    if (q.startsWith('fix ') || q.startsWith('!')) return 'diagnose';
    if (q.startsWith('impl ') || q.startsWith('>')) return 'implement';
    if (q.startsWith('avoid ') || q.startsWith('risk ')) return 'evaluate-risk';
    return 'all';
  }, [deferredQuery]);

  const searchQuery = useMemo(() => {
    const q = deferredQuery;
    if (/^(fix |impl |avoid |risk |!|>)/.test(q))
      return q.replace(/^[^a-z]*(fix|impl|avoid|risk)\s*/i, '').trimStart();
    return q;
  }, [deferredQuery]);

  const results = useMemo(() => {
    return filterReferenceEntries({
      entries,
      query: searchQuery,
      domain: 'All',
      format: 'All',
      verdict: 'All',
      quickFilter: 'all',
      intentFilter,
      sortMode: searchQuery.trim() ? 'confidence' : 'risk',
    }).slice(0, MAX_RESULTS);
  }, [searchQuery, intentFilter]);

  // Global Cmd+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        if (isOpen) onClose(); else onOpen();
      }
      if (event.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onOpen, onClose]);

  // Pre-fill from initialQuery each time palette opens
  useEffect(() => {
    if (isOpen) setQuery(initialQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Auto-focus on open
  useEffect(() => {
    if (!isOpen) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 0);
    return () => window.clearTimeout(t);
  }, [isOpen]);

  useEffect(() => { setActiveIndex(0); }, [deferredQuery]);

  const handleQueryChange = (value: string) => {
    setQuery(value);
    onQueryChange?.(value);
  };

  const closePalette = () => {
    onClose();
    setQuery('');
    setActiveIndex(0);
  };

  const openEntry = (entry: ReferenceEntry) => {
    navigate(getReferenceHref(entry));
    closePalette();
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    }
    if (event.key === 'Enter' && results[activeIndex]) {
      event.preventDefault();
      openEntry(results[activeIndex]);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[80] bg-fg/30 px-4 py-16 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Reference command palette"
      onClick={(e) => { if (e.target === e.currentTarget) closePalette(); }}
    >
      <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-border bg-surface-raised shadow-2xl">
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <Search size={18} className="text-fg-faint" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            onKeyDown={handleInputKeyDown}
            placeholder="Search... or type 'fix typography', 'avoid', 'impl'"
            className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-fg outline-none placeholder:text-fg-faint"
            aria-label="Search references"
            aria-activedescendant={results[activeIndex] ? `command-result-${results[activeIndex].id}` : undefined}
            aria-controls="reference-command-results"
          />
          <button
            type="button"
            onClick={closePalette}
            className="rounded-md p-1 text-fg-faint transition-colors hover:bg-surface hover:text-fg"
          >
            <X size={18} />
          </button>
        </div>

        <div id="reference-command-results" className="max-h-[60vh] overflow-y-auto p-2">
          {!deferredQuery.trim() && (
            <div className="mb-2 px-2 pt-1">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-fg-muted">Quick Fix</p>
              <div className="flex flex-wrap gap-1.5">
                {fixGuides.map((guide) => (
                  <button
                    key={guide.id}
                    type="button"
                    onClick={() => handleQueryChange(`fix ${guide.title.replace('Fix ', '').toLowerCase()}`)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-2.5 py-1.5 text-[11px] font-semibold text-fg-muted transition-colors hover:border-accent hover:bg-accent-bg hover:text-accent"
                  >
                    <Wrench size={10} />
                    {guide.title}
                  </button>
                ))}
              </div>
              <div className="mt-3 border-t border-border pt-2">
                <p className="text-[10px] font-bold uppercase tracking-wider text-fg-muted">All References</p>
              </div>
            </div>
          )}

          {intentFilter !== 'all' && (
            <div className="mb-1 px-2">
              <span className="inline-flex items-center gap-1 rounded-md bg-accent-bg px-2 py-0.5 text-[10px] font-bold text-accent">
                {intentFilter} mode
              </span>
            </div>
          )}

          {results.length === 0 ? (
            <div className="px-4 py-10 text-center text-sm font-semibold text-fg-muted">
              No matching references.
            </div>
          ) : (
            results.map((entry, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  id={`command-result-${entry.id}`}
                  key={entry.id}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => openEntry(entry)}
                  className={`flex w-full items-start justify-between gap-4 rounded-lg p-4 text-left transition-colors ${
                    isActive ? 'bg-accent-bg ring-1 ring-primary-100' : 'hover:bg-surface'
                  }`}
                >
                  <div className="min-w-0">
                    <ResultMeta entry={entry} />
                    <div className="mt-1 text-base font-black tracking-tight text-fg">
                      {getEntryTitle(entry)}
                    </div>
                    <p className="mt-1 line-clamp-2 text-xs font-medium leading-relaxed text-fg-muted">
                      {entry.quickTake}
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    className={`mt-2 shrink-0 ${isActive ? 'text-accent' : 'text-fg-faint'}`}
                  />
                </button>
              );
            })
          )}
        </div>

        <div className="flex items-center justify-between border-t border-border px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-fg-muted">
          <span>Enter opens · ↑↓ navigate</span>
          <span>Esc closes</span>
        </div>
      </div>
    </div>
  );
};
