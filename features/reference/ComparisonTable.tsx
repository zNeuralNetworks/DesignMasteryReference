import React from 'react';
import { ReferenceEntry, Verdict } from '@/types';
import { ShieldCheck, Info, Sparkles, Ban, CheckCircle2, XCircle } from 'lucide-react';

interface ComparisonTableProps {
  entries: ReferenceEntry[];
}

const VerdictBadge = ({ verdict }: { verdict: Verdict }) => {
  const configs = {
    recommended: { icon: ShieldCheck, color: 'text-emerald-600 bg-emerald-50', label: 'Recommended' },
    conditional: { icon: Info, color: 'text-amber-600 bg-amber-50', label: 'Conditional' },
    experimental: { icon: Sparkles, color: 'text-primary-600 bg-primary-50', label: 'Experimental' },
    'anti-pattern': { icon: Ban, color: 'text-rose-600 bg-rose-50', label: 'Anti-Pattern' },
  };
  const config = configs[verdict];
  const Icon = config.icon;
  return (
    <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${config.color}`}>
      <Icon size={12} />
      <span>{config.label}</span>
    </div>
  );
};

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ entries }) => {
  const rows: { label: string; render: (e: ReferenceEntry) => React.ReactNode }[] = [
    { label: 'Verdict', render: (e) => <VerdictBadge verdict={e.verdict} /> },
    { label: 'Quick Take', render: (e) => <p className="text-xs text-slate-600 leading-relaxed">{e.quickTake}</p> },
    { label: 'Complexity', render: (e) => <span className="text-xs font-bold uppercase text-slate-400">{e.complexity}</span> },
    { label: 'Perf Cost', render: (e) => (
      <div className="flex items-center gap-2">
        <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden max-w-[60px]">
          <div className={`h-full ${e.perfImpact === 'low' ? 'w-1/3 bg-emerald-500' : e.perfImpact === 'medium' ? 'w-2/3 bg-amber-500' : 'w-full bg-rose-500'}`} />
        </div>
        <span className="text-[10px] font-bold text-slate-400 uppercase">{e.perfImpact}</span>
      </div>
    )},
    { label: 'Best For', render: (e) => (
      <ul className="space-y-1">
        {e.whenToUse?.slice(0, 2).map((item, i) => (
          <li key={i} className="text-[11px] text-slate-600 flex gap-1.5">
            <CheckCircle2 size={10} className="text-emerald-500 mt-0.5 shrink-0" /> {item}
          </li>
        ))}
      </ul>
    )},
    { label: 'Avoid If', render: (e) => (
      <ul className="space-y-1">
        {e.whenNotToUse?.slice(0, 2).map((item, i) => (
          <li key={i} className="text-[11px] text-slate-600 flex gap-1.5">
            <XCircle size={10} className="text-rose-500 mt-0.5 shrink-0" /> {item}
          </li>
        ))}
      </ul>
    )},
  ];

  const gridCols = `grid-cols-[160px_repeat(${entries.length},_1fr)]`;

  return (
    <div className="w-full border border-slate-200 rounded-2xl overflow-x-auto bg-white shadow-sm">
      <div className={`grid ${gridCols} bg-slate-50 border-b border-slate-200 min-w-[480px]`}>
        <div className="p-4 border-r border-slate-200" />
        {entries.map((entry, i) => (
          <div key={entry.id} className={`p-4 ${i < entries.length - 1 ? 'border-r border-slate-200' : ''}`}>
            <h4 className="font-black text-slate-900 text-sm tracking-tight">{entry.title}</h4>
          </div>
        ))}
      </div>

      {rows.map((row, i) => (
        <div key={i} className={`grid ${gridCols} border-b border-slate-100 last:border-0 min-w-[480px]`}>
          <div className="p-4 border-r border-slate-200 bg-slate-50/50">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{row.label}</span>
          </div>
          {entries.map((entry, j) => (
            <div key={entry.id} className={`p-4 ${j < entries.length - 1 ? 'border-r border-slate-200' : ''}`}>
              {row.render(entry)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
