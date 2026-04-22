import React, { useState, useMemo, useDeferredValue, lazy, Suspense, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, LayoutGrid, List, X, ShieldCheck, Info, Ban,
  Smartphone, Monitor, Settings as SettingsIcon, FileText, Cloud,
  ArrowDownAZ, Gauge, Sparkles, ArrowRight, GitFork, Wrench,
  Stethoscope, TriangleAlert, BookOpen, Type, Columns, Compass,
  ChevronRight, SlidersHorizontal, Palette, Layers, Zap, Table2,
} from 'lucide-react';
import { entries } from '@/data/index';
import { fixGuides, FixGuide } from '@/data/fixGuides';
import { Domain, Format, Verdict, UseContext, ReferenceEntry } from '@/types';
import { filterReferenceEntries, QuickFilter, SortMode, IntentFilter } from '@/features/reference/referenceIndex';
import { ReferenceCommandPalette } from '@/features/reference/ReferenceCommandPalette';
import { Annotation } from '@/components/Annotation';
import { Tooltip } from '@/components/Tooltip';
import { THEMES, useTheme } from '@/contexts/ThemeContext';

const StaticVisualLazy = lazy(() => import('@/features/demos/StaticVisuals').then(m => ({ default: m.StaticVisual })));
const VisualPlaceholder = () => <div className="w-full h-full bg-slate-100 rounded-xl" />;
const StaticVisual = (props: { type: string }) => (
  <Suspense fallback={<VisualPlaceholder />}>
    <StaticVisualLazy {...props} />
  </Suspense>
);

const VerdictBadge = ({ verdict }: { verdict: Verdict }) => {
  const configs = {
    recommended:    { icon: ShieldCheck, color: 'text-emerald-600 bg-emerald-50', label: 'Recommended',  tip: 'Industry standard — broadly safe to use' },
    conditional:    { icon: Info,        color: 'text-amber-600 bg-amber-50',     label: 'Conditional',  tip: 'Effective only in specific contexts'     },
    experimental:   { icon: Sparkles,    color: 'text-primary-600 bg-primary-50', label: 'Experimental', tip: 'Emerging pattern, use with caution'       },
    'anti-pattern': { icon: Ban,         color: 'text-rose-600 bg-rose-50',       label: 'Anti-Pattern', tip: 'Avoid in production — known failure mode' },
  };
  const { icon: Icon, color, label, tip } = configs[verdict];
  return (
    <Tooltip content={tip} side="top">
      <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-semibold cursor-default ${color}`}>
        <Icon size={9} />
        {label}
      </div>
    </Tooltip>
  );
};

const ContextIcon = ({ context }: { context: UseContext }) => {
  const map: Record<string, [React.ElementType, string]> = {
    saas:      [Cloud,       'SaaS product'],
    mobile:    [Smartphone,  'Mobile app'],
    dashboard: [LayoutGrid,  'Dashboard'],
    devtools:  [SettingsIcon,'Developer tools'],
    content:   [FileText,    'Content platform'],
    portfolio: [Monitor,     'Portfolio site'],
    marketing: [Monitor,     'Marketing site'],
  };
  const [Icon, label] = map[context] ?? [Monitor, context];
  return (
    <Tooltip content={label} side="top">
      <Icon size={11} className="text-fg-faint cursor-default" />
    </Tooltip>
  );
};

const FIX_ICONS: Record<string, React.ElementType> = {
  Type, LayoutGrid, Columns, Compass, Gauge, Palette, Layers, Zap, Table2,
};

const DOMAIN_LABELS: Record<string, string> = {
  All: 'All', layout: 'Layout', typography: 'Typography', color: 'Color & Theme',
  components: 'Components', interaction: 'Interaction & States', motion: 'Motion',
  'visual-hierarchy': 'Visual Hierarchy', psychology: 'Psychology',
  responsiveness: 'Responsive', data: 'Data', tokens: 'Tokens',
};

const SOLVE_DOMAIN_LABELS: Record<string, string> = {
  All: 'All', layout: 'Layout', typography: 'Type', color: 'Color',
  components: 'Components', interaction: 'Interaction', motion: 'Motion',
  'visual-hierarchy': 'Hierarchy', psychology: 'UX Laws',
  responsiveness: 'Mobile', data: 'Data', tokens: 'Tokens',
};

const FIX_COLORS: Record<string, { card: string; icon: string; badge: string }> = {
  violet:  { card: 'bg-violet-50 border-violet-100 hover:border-violet-300',    icon: 'text-violet-600',  badge: 'bg-violet-100 text-violet-700'  },
  blue:    { card: 'bg-blue-50 border-blue-100 hover:border-blue-300',          icon: 'text-blue-600',    badge: 'bg-blue-100 text-blue-700'    },
  teal:    { card: 'bg-teal-50 border-teal-100 hover:border-teal-300',          icon: 'text-teal-600',    badge: 'bg-teal-100 text-teal-700'    },
  amber:   { card: 'bg-amber-50 border-amber-100 hover:border-amber-300',       icon: 'text-amber-600',   badge: 'bg-amber-100 text-amber-700'   },
  rose:    { card: 'bg-rose-50 border-rose-100 hover:border-rose-300',          icon: 'text-rose-600',    badge: 'bg-rose-100 text-rose-700'    },
  emerald: { card: 'bg-emerald-50 border-emerald-100 hover:border-emerald-300', icon: 'text-emerald-600', badge: 'bg-emerald-100 text-emerald-700' },
};

// ── FiltersPopover ──────────────────────────────────────────────────────────

const ALL_FORMATS: Format[] = ['principle', 'pattern', 'system', 'style', 'anti-pattern', 'case-study'];
const FORMAT_LABELS: Record<string, string> = {
  principle: 'Principle', pattern: 'Pattern', system: 'System',
  style: 'Style', 'anti-pattern': 'Anti-Pattern', 'case-study': 'Case Study',
};

interface FiltersPopoverProps {
  activeVerdict: Verdict | 'All';
  setActiveVerdict: (v: Verdict | 'All') => void;
  activeFormat: Format | 'All';
  setActiveFormat: (f: Format | 'All') => void;
  quickFilter: QuickFilter;
  setQuickFilter: (q: QuickFilter) => void;
  sortMode: SortMode;
  setSortMode: (s: SortMode) => void;
  onClearAll: () => void;
}

const FiltersPopover = ({
  activeVerdict, setActiveVerdict,
  activeFormat, setActiveFormat,
  quickFilter, setQuickFilter,
  sortMode, setSortMode,
  onClearAll,
}: FiltersPopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen]);

  const activeCount =
    (activeVerdict !== 'All' ? 1 : 0) +
    (activeFormat !== 'All' ? 1 : 0) +
    (quickFilter !== 'all' ? 1 : 0);
  const hasActive = activeCount > 0;

  const vColors: Record<string, string> = {
    recommended:    activeVerdict === 'recommended'    ? 'bg-emerald-500 text-white border-emerald-500'  : 'bg-surface-raised text-fg-faint border-border hover:border-emerald-300 hover:text-emerald-600',
    conditional:    activeVerdict === 'conditional'    ? 'bg-amber-500 text-white border-amber-500'      : 'bg-surface-raised text-fg-faint border-border hover:border-amber-300 hover:text-amber-600',
    experimental:   activeVerdict === 'experimental'   ? 'bg-primary-500 text-white border-primary-500'  : 'bg-surface-raised text-fg-faint border-border hover:border-primary-300 hover:text-primary-600',
    'anti-pattern': activeVerdict === 'anti-pattern'   ? 'bg-rose-500 text-white border-rose-500'        : 'bg-surface-raised text-fg-faint border-border hover:border-rose-300 hover:text-rose-600',
  };

  return (
    <div ref={ref} className="relative flex-shrink-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium border transition-all ${
          hasActive || isOpen
            ? 'bg-accent-bg text-accent border-accent/30'
            : 'bg-surface-raised text-fg-muted border-border hover:border-fg/20 hover:text-fg'
        }`}
      >
        <SlidersHorizontal size={11} />
        Filters
        {activeCount > 0 && (
          <span className="w-4 h-4 rounded-full bg-accent text-surface text-[9px] font-bold flex items-center justify-center leading-none">
            {activeCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1.5 z-40 w-80 p-4 rounded-2xl border border-border bg-surface-raised shadow-xl">

          <p className="text-[10px] font-bold uppercase tracking-wider text-fg-faint mb-2">Format</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {ALL_FORMATS.map(format => (
              <button
                key={format}
                onClick={() => setActiveFormat(activeFormat === format ? 'All' : format)}
                className={`px-2.5 py-1 rounded-full text-[11px] font-medium border transition-all ${
                  activeFormat === format
                    ? 'bg-accent text-surface border-accent'
                    : 'bg-surface-raised text-fg-faint border-border hover:border-accent/40 hover:text-accent'
                }`}
              >
                {FORMAT_LABELS[format]}
              </button>
            ))}
          </div>

          <p className="text-[10px] font-bold uppercase tracking-wider text-fg-faint mb-2">Verdict</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {(['recommended', 'conditional', 'experimental', 'anti-pattern'] as Verdict[]).map(verdict => (
              <button
                key={verdict}
                onClick={() => setActiveVerdict(activeVerdict === verdict ? 'All' : verdict)}
                className={`px-2.5 py-1 rounded-full text-[11px] font-medium border transition-all ${vColors[verdict]}`}
              >
                {verdict.charAt(0).toUpperCase() + verdict.slice(1)}
              </button>
            ))}
          </div>

          <p className="text-[10px] font-bold uppercase tracking-wider text-fg-faint mb-2">Quick Filters</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {([['high-risk', 'High Risk'], ['accessibility', 'A11y']] as [QuickFilter, string][]).map(([value, label]) => (
              <button
                key={value}
                onClick={() => setQuickFilter(quickFilter === value ? 'all' : value)}
                className={`px-2.5 py-1 rounded-full text-[11px] font-medium border transition-all ${
                  quickFilter === value
                    ? 'bg-rose-500 text-white border-rose-500'
                    : 'bg-surface-raised text-fg-faint border-border hover:border-rose-300 hover:text-rose-600'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <p className="text-[10px] font-bold uppercase tracking-wider text-fg-faint mb-2">Sort</p>
          <div className="flex items-center gap-2 mb-3">
            <ArrowDownAZ size={13} className="text-fg-faint" />
            <select
              value={sortMode}
              onChange={(e) => setSortMode(e.target.value as SortMode)}
              className="flex-1 bg-surface-raised border border-border rounded-lg px-2 py-1.5 text-[12px] text-fg focus:border-accent focus:outline-none transition-colors"
            >
              <option value="title">Title</option>
              <option value="confidence">Confidence</option>
              <option value="risk">Risk</option>
              <option value="perf">Performance</option>
            </select>
          </div>

          {hasActive && (
            <button
              onClick={() => { onClearAll(); setIsOpen(false); }}
              className="w-full text-[12px] text-accent font-medium hover:opacity-80 transition-opacity text-center pt-2 border-t border-border"
            >
              Clear all filters
            </button>
          )}
        </div>
      )}
    </div>
  );
};

// ── FixGuideRow ─────────────────────────────────────────────────────────────

const FixGuideRow = ({
  activeGuideId,
  onSelect,
}: {
  activeGuideId: string | null;
  onSelect: (guide: FixGuide | null) => void;
}) => (
  <div className="mb-6">
    <p className="text-[11px] font-semibold text-fg-faint uppercase tracking-widest mb-3">Something feel off?</p>
    <div className="flex gap-2.5 overflow-x-auto scrollbar-hide pb-1">
      {fixGuides.map((guide) => {
        const Icon = FIX_ICONS[guide.icon] || Gauge;
        const c = FIX_COLORS[guide.color];
        const isActive = activeGuideId === guide.id;
        const shortTitle = guide.title.replace('Fix ', '');
        return (
          <button
            key={guide.id}
            onClick={() => onSelect(isActive ? null : guide)}
            className={`group flex-shrink-0 w-44 text-left p-3.5 rounded-2xl border transition-all duration-200 ${
              isActive
                ? `${c.card} ring-2 ring-offset-1 shadow-md`
                : `${c.card} hover:shadow-md hover:-translate-y-0.5`
            }`}
          >
            <div className="flex items-center gap-2 mb-2.5">
              <div className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 ${c.badge}`}>
                <Icon size={12} className={c.icon} />
              </div>
              <span className="text-[13px] font-bold text-fg leading-tight truncate">{shortTitle}</span>
            </div>
            <p className="text-[11px] text-fg-faint leading-snug line-clamp-2">
              {guide.problems.slice(0, 3).join(' · ')}
            </p>
          </button>
        );
      })}
    </div>
  </div>
);

// ── ThemeGalleryRow ─────────────────────────────────────────────────────────

const ThemeGalleryRow = () => {
  const { activeTheme, setTheme } = useTheme();

  return (
    <div className="mb-7">
      <p className="text-[11px] font-semibold text-fg-faint uppercase tracking-widest mb-3">Visual Themes</p>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1">
        {THEMES.filter(t => t.id !== 'default').map((theme) => {
          const isActive = activeTheme.id === theme.id;
          return (
            <button
              key={theme.id}
              onClick={() => setTheme(isActive ? 'default' : theme.id)}
              className={`flex-shrink-0 group text-left rounded-2xl border transition-all duration-200 overflow-hidden ${
                isActive
                  ? 'ring-2 ring-offset-2 ring-accent shadow-lg'
                  : 'border-border hover:shadow-md hover:-translate-y-0.5'
              }`}
              title={isActive ? `Exit ${theme.label}` : `Apply ${theme.label}`}
            >
              {/* Swatch */}
              <div
                className="w-32 h-16 relative flex items-end p-2"
                style={{ backgroundColor: theme.surface }}
              >
                {/* Simulated nav bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-4 flex items-center px-2 gap-1 opacity-70"
                  style={{ backgroundColor: theme.surfaceRaised, borderBottom: `1px solid ${theme.accent}22` }}
                >
                  <div className="w-3 h-1.5 rounded-sm" style={{ backgroundColor: theme.accent }} />
                  <div className="flex-1 h-1 rounded-sm opacity-40" style={{ backgroundColor: theme.fg }} />
                </div>
                {/* Simulated cards */}
                <div className="flex gap-1 w-full">
                  {[0.9, 0.7, 0.5].map((op, i) => (
                    <div
                      key={i}
                      className="flex-1 h-5 rounded"
                      style={{ backgroundColor: theme.surfaceRaised, opacity: op, border: `1px solid ${theme.accent}33` }}
                    />
                  ))}
                </div>
                {/* Accent dot */}
                <div
                  className="absolute top-5 right-2 w-2 h-2 rounded-full"
                  style={{ backgroundColor: theme.accent }}
                />
              </div>
              {/* Label */}
              <div
                className="px-3 py-2 flex items-center justify-between gap-2"
                style={{ backgroundColor: theme.surfaceRaised, borderTop: `1px solid ${theme.accent}20` }}
              >
                <span
                  className="text-[11px] font-semibold leading-tight"
                  style={{ color: theme.fg }}
                >
                  {theme.label}
                </span>
                {isActive && (
                  <span
                    className="text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full"
                    style={{ backgroundColor: `${theme.accent}20`, color: theme.accent }}
                  >
                    Active
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

// ── SolveCard ───────────────────────────────────────────────────────────────

const SolveCard = ({ entry }: { entry: ReferenceEntry }) => (
  <Link
    to={`/reference/${entry.id}`}
    className="group flex flex-col bg-surface-raised rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.11)] transition-all duration-300 hover:-translate-y-0.5"
  >
    <div className="flex items-center justify-between mb-2">
      <VerdictBadge verdict={entry.verdict} />
      <span className="text-[10px] text-fg-faint capitalize">{entry.domain} · {entry.format}</span>
    </div>
    <h3 className="font-semibold text-[14px] text-fg leading-snug mb-2 group-hover:text-accent transition-colors">
      {entry.title.includes(':') ? entry.title.split(':')[1].trim() : entry.title}
    </h3>
    <p className="text-[12px] text-fg-muted leading-relaxed mb-3 line-clamp-2">{entry.quickTake}</p>
    {entry.checklist && entry.checklist.length > 0 && (
      <>
        <div className="border-t border-border mb-3" />
        <ul className="space-y-1.5 flex-1">
          {entry.checklist.slice(0, 3).map((item, i) => (
            <li key={i} className="flex items-start gap-1.5 text-[11px] text-fg-muted">
              <span className="mt-0.5 text-emerald-500 flex-shrink-0">✓</span>
              <span className="line-clamp-1">{item}</span>
            </li>
          ))}
        </ul>
      </>
    )}
    <div className="mt-auto pt-3 flex items-center justify-end">
      <span className="text-[11px] font-medium text-accent flex items-center gap-1 group-hover:gap-1.5 transition-all">
        Apply <ArrowRight size={11} />
      </span>
    </div>
  </Link>
);

// ── ReferenceLibrary ────────────────────────────────────────────────────────

export const ReferenceLibrary = () => {
  const [mode, setMode] = useState<'solve' | 'explore'>(() =>
    (localStorage.getItem('dmr-mode') as 'solve' | 'explore') ?? 'solve'
  );
  const [searchQuery, setSearchQuery]       = useState('');
  const [activeDomain, setActiveDomain]     = useState<Domain | 'All'>('All');
  const [activeFormat, setActiveFormat]     = useState<Format | 'All'>('All');
  const [activeVerdict, setActiveVerdict]   = useState<Verdict | 'All'>('All');
  const [viewMode, setViewMode]             = useState<'grid' | 'list'>('grid');
  const [sortMode, setSortMode]             = useState<SortMode>('title');
  const [quickFilter, setQuickFilter]       = useState<QuickFilter>('all');
  const [intentFilter, setIntentFilter]     = useState<IntentFilter>('all');
  const [activeFixGuide, setActiveFixGuide] = useState<FixGuide | null>(null);
  const [paletteOpen, setPaletteOpen]       = useState(false);
  const deferredSearchQuery = useDeferredValue(searchQuery);

  useEffect(() => {
    localStorage.setItem('dmr-mode', mode);
    setActiveFixGuide(null);
    setIntentFilter('all');
    setActiveDomain('All');
  }, [mode]);

  if (!entries || !Array.isArray(entries)) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-12 text-center text-fg-muted">
        <h2 className="text-xl font-semibold">No reference data found.</h2>
        <p className="mt-2 text-sm">Please check data/index.ts configuration.</p>
      </div>
    );
  }

  const domains: (Domain | 'All')[] = ['All', 'layout', 'typography', 'color', 'components', 'interaction', 'motion', 'visual-hierarchy', 'psychology', 'responsiveness', 'data', 'tokens'];

  const filteredEntries = useMemo(() => {
    if (activeFixGuide) {
      const ids = new Set(activeFixGuide.relatedEntryIds);
      return entries.filter(e =>
        ids.has(e.id) ||
        activeFixGuide.searchTerms.some(term =>
          e.tags.some(tag => tag.toLowerCase().includes(term.toLowerCase()))
        )
      );
    }
    return filterReferenceEntries({
      entries, query: deferredSearchQuery, domain: activeDomain,
      format: activeFormat, verdict: activeVerdict, quickFilter, intentFilter, sortMode,
    });
  }, [activeFixGuide, deferredSearchQuery, activeDomain, activeFormat, activeVerdict, quickFilter, intentFilter, sortMode]);

  const clearFilters = () => {
    setSearchQuery(''); setActiveDomain('All'); setActiveFormat('All');
    setActiveVerdict('All'); setQuickFilter('all'); setIntentFilter('all'); setSortMode('title');
    setActiveFixGuide(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* Page header */}
      <header className="mb-8 flex items-end justify-between">
        <Annotation
          title="Display Typography"
          body="34px + tracking-tight reads as editorial authority. Tight letter-spacing corrects the optical spread that large sizes create — the headline fills its box intentionally, not accidentally."
          entryId="typography-scale"
          side="bottom"
        >
          <div>
            <h1 className="text-[34px] font-bold tracking-tight text-fg leading-none mb-1.5">
              Design Library
            </h1>
            <p className="text-[15px] text-fg-muted">
              {filteredEntries.length} of {entries.length} references
            </p>
          </div>
        </Annotation>

        <div className="flex items-center gap-3">
          {/* Mode toggle */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
            <Tooltip content="Find a fix fast — problem-first, action-shaped entries" side="bottom">
              <button
                onClick={() => setMode('solve')}
                className={`px-3 py-1.5 rounded-lg text-[12px] font-semibold transition-all ${mode === 'solve' ? 'bg-surface-raised text-fg shadow-sm' : 'text-fg-faint hover:text-fg-muted'}`}
              >
                Solve
              </button>
            </Tooltip>
            <Tooltip content="Browse patterns and build taste — visual, no pressure" side="bottom">
              <button
                onClick={() => setMode('explore')}
                className={`px-3 py-1.5 rounded-lg text-[12px] font-semibold transition-all ${mode === 'explore' ? 'bg-surface-raised text-fg shadow-sm' : 'text-fg-faint hover:text-fg-muted'}`}
              >
                Explore
              </button>
            </Tooltip>
          </div>

          {/* View toggle */}
          <Annotation
            title="Segmented Control"
            body="The active pill uses bg-surface-raised + shadow-sm while the track stays bg-slate-100 — the shadow creates an elevation difference that communicates mutual exclusivity without a dropdown."
            entryId="micro-interactions"
            side="bottom"
          >
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
              <Tooltip content="Grid view" side="bottom">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-surface-raised text-fg shadow-sm' : 'text-fg-faint hover:text-fg-muted'}`}
                >
                  <LayoutGrid size={16} />
                </button>
              </Tooltip>
              <Tooltip content="List view" side="bottom">
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-surface-raised text-fg shadow-sm' : 'text-fg-faint hover:text-fg-muted'}`}
                >
                  <List size={16} />
                </button>
              </Tooltip>
            </div>
          </Annotation>
        </div>
      </header>

      {/* Theme gallery — Explore mode only */}
      {mode === 'explore' && <ThemeGalleryRow />}

      {/* Fix guides — Solve mode only */}
      {mode === 'solve' && (
        <Annotation
          title="Diagnostic UX Pattern"
          body="Fix guides route by symptom, not solution — 'feels cluttered' leads to gestalt-proximity without the user knowing the term. Reduces the expert knowledge barrier for the entire library."
          entryId="progressive-disclosure"
          side="bottom"
          className="block"
        >
          <FixGuideRow activeGuideId={activeFixGuide?.id ?? null} onSelect={setActiveFixGuide} />
        </Annotation>
      )}

      {/* Active fix guide checklist banner */}
      {activeFixGuide && (() => {
        const c = FIX_COLORS[activeFixGuide.color];
        const Icon = FIX_ICONS[activeFixGuide.icon] || Gauge;
        return (
          <div className={`mb-5 rounded-2xl border p-4 ${c.card}`}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-2.5 mb-3">
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${c.badge}`}>
                  <Icon size={12} className={c.icon} />
                </div>
                <span className="text-[13px] font-bold text-fg">{activeFixGuide.title} — Quick Checklist</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-medium text-fg-faint">
                  {filteredEntries.length} matching {filteredEntries.length === 1 ? 'entry' : 'entries'}
                </span>
                <button onClick={() => setActiveFixGuide(null)} className="text-fg-faint hover:text-fg-muted transition-colors">
                  <X size={14} />
                </button>
              </div>
            </div>
            <ul className="space-y-1.5">
              {activeFixGuide.quickChecklist.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[12px] text-fg-muted">
                  <span className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-[9px] font-bold ${c.badge} ${c.icon}`}>{i + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        );
      })()}

      {/* Sticky filter bar */}
      <div className="sticky top-14 z-30 -mx-6 px-6 pb-3.5 pt-3 border-b border-border/60" style={{ backgroundColor: 'var(--surface-overlay, var(--surface))', backdropFilter: 'blur(20px)' }}>

        {/* Search trigger — opens command palette */}
        <Annotation
          title="Unified Search Surface"
          body="The search bar is a read-only trigger — clicking opens the command palette. This collapses two entry points (inline input + ⌘K shortcut) into one mental model: one search, two access methods."
          entryId="command-palettes"
          side="bottom"
          className="relative mb-3 block"
        >
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-fg-faint pointer-events-none" size={16} />
          <button
            type="button"
            onClick={() => { setPaletteOpen(true); setActiveFixGuide(null); }}
            className="w-full bg-surface-raised border border-border/80 rounded-2xl pl-10 pr-10 py-2.5 text-[14px] text-left shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:border-primary-300/60 transition-all flex items-center"
          >
            {searchQuery
              ? <span className="text-fg flex-1 truncate">{searchQuery}</span>
              : <span className="text-fg-faint flex-1">
                  {mode === 'solve'
                    ? "Describe the problem: 'spacing feels off', 'hierarchy unclear'..."
                    : 'Search patterns, principles, systems...'}
                </span>
            }
            <span className="text-[11px] text-fg-faint font-medium flex-shrink-0 ml-2">⌘K</span>
          </button>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 bg-border hover:bg-slate-300 rounded-full flex items-center justify-center transition-colors"
            >
              <X size={11} className="text-fg-muted" />
            </button>
          )}
        </Annotation>

        {/* Domain pills */}
        <Annotation
          title="Intervention-Surface Filters"
          body="Domain pills map directly to what you're trying to fix — Layout, Color, Motion — not academic categories. Active pill uses maximum-contrast bg-fg so it reads immediately in peripheral vision."
          entryId="hicks-law"
          side="bottom"
          className="block"
        >
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide mb-2.5 pb-0.5">
          {mode === 'solve' && (
            <span className="text-[11px] text-fg-faint font-medium whitespace-nowrap flex-shrink-0">Problem area:</span>
          )}
          {domains.map(domain => (
            <button
              key={domain}
              onClick={() => setActiveDomain(domain)}
              className={`px-3 py-1.5 rounded-full text-[12px] font-medium whitespace-nowrap flex-shrink-0 transition-all ${
                activeDomain === domain
                  ? 'bg-fg text-surface shadow-sm'
                  : 'bg-surface-raised text-fg-muted border border-border hover:border-fg/20 hover:text-fg'
              }`}
            >
              {(mode === 'solve' ? SOLVE_DOMAIN_LABELS : DOMAIN_LABELS)[domain] ?? domain}
            </button>
          ))}
        </div>
        </Annotation>

        {/* Filters popover */}
        <div className="flex justify-end">
          <Annotation
            title="Progressive Disclosure"
            body="Verdict and sort options are collapsed into a count-badged popover. The badge (1, 2) tells users active filters exist without opening the panel — information density without visual noise."
            entryId="progressive-disclosure"
            side="bottom"
          >
            <FiltersPopover
              activeVerdict={activeVerdict}
              setActiveVerdict={setActiveVerdict}
              activeFormat={activeFormat}
              setActiveFormat={setActiveFormat}
              quickFilter={quickFilter}
              setQuickFilter={setQuickFilter}
              sortMode={sortMode}
              setSortMode={setSortMode}
              onClearAll={clearFilters}
            />
          </Annotation>
        </div>
      </div>

      {/* Results */}
      <div className="pt-8">
        {filteredEntries.length === 0 ? (
          <div className="py-24 text-center">
            <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search size={22} className="text-fg-faint" />
            </div>
            <h3 className="text-[17px] font-semibold text-fg mb-1.5">No results</h3>
            <p className="text-[15px] text-fg-muted mb-5">Try a different search or filter.</p>
            <button onClick={clearFilters} className="text-accent font-semibold text-[15px] hover:opacity-80 transition-opacity">
              Clear all filters
            </button>
          </div>

        ) : viewMode === 'grid' ? (
          <Annotation
            title="Physical Hover Metaphor"
            body="Cards use hover:-translate-y-0.5 with a deepening shadow — as the card rises, the shadow expands and darkens. The two effects are physically coherent: lift requires shadow. CSS-only, zero JS."
            entryId="micro-interactions"
            side="top"
            className="block"
          >
          <div className={`grid gap-4 ${mode === 'solve' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'}`}>
            {filteredEntries.map((entry) => (
              mode === 'solve' ? (
                <SolveCard key={entry.id} entry={entry} />
              ) : (
                <Link
                  key={entry.id}
                  to={`/reference/${entry.id}`}
                  className="group flex flex-col bg-surface-raised rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.11)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="aspect-[4/3] bg-surface flex items-center justify-center overflow-hidden p-4 group-hover:bg-slate-100/60 transition-colors">
                    <div className="w-full h-full flex items-center justify-center scale-95 group-hover:scale-100 transition-transform duration-500">
                      <StaticVisual type={entry.interactiveComponent || entry.domain} />
                    </div>
                  </div>
                  <div className="p-3 flex-1 flex flex-col">
                    <VerdictBadge verdict={entry.verdict} />
                    <h3 className="font-semibold text-[13px] text-fg mt-2 leading-snug line-clamp-2 group-hover:text-accent transition-colors">
                      {entry.title.includes(':') ? entry.title.split(':')[1].trim() : entry.title}
                    </h3>
                    <div className="mt-auto pt-2.5 flex items-center justify-between">
                      <span className="text-[10px] text-fg-faint capitalize">{entry.domain}</span>
                      <div className="flex items-center gap-1">
                        {entry.perfImpact === 'high' && (
                          <Tooltip content="High performance cost" side="top">
                            <Gauge size={10} className="text-rose-400 cursor-default" />
                          </Tooltip>
                        )}
                        {entry.useContext.slice(0, 2).map(ctx => <ContextIcon key={ctx} context={ctx} />)}
                      </div>
                    </div>
                  </div>
                </Link>
              )
            ))}
          </div>
          </Annotation>

        ) : (
          <div className="flex flex-col">
            {filteredEntries.map((entry) => (
              <Link
                key={entry.id}
                to={`/reference/${entry.id}`}
                className="group flex items-center gap-4 py-3.5 px-3 -mx-3 hover:bg-surface-raised/70 rounded-2xl transition-colors"
              >
                <div className="w-11 h-11 bg-surface rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-border/70 transition-colors overflow-hidden p-1.5">
                  <StaticVisual type={entry.interactiveComponent || entry.domain} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="font-semibold text-[15px] text-fg group-hover:text-accent transition-colors truncate">
                      {entry.title.includes(':') ? entry.title.split(':')[1].trim() : entry.title}
                    </h3>
                    <VerdictBadge verdict={entry.verdict} />
                  </div>
                  <p className="text-[13px] text-fg-muted truncate">{entry.description}</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-[11px] text-fg-faint capitalize hidden md:block">{entry.domain}</span>
                  <ArrowRight size={14} className="text-fg-faint group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Command palette — controlled by library search state */}
      <ReferenceCommandPalette
        isOpen={paletteOpen}
        onOpen={() => setPaletteOpen(true)}
        onClose={() => setPaletteOpen(false)}
        initialQuery={searchQuery}
        onQueryChange={(q) => { setSearchQuery(q); setActiveFixGuide(null); }}
      />
    </div>
  );
};
