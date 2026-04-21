import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, CheckCircle2, AlertCircle, Info, Code, Lightbulb, Zap, ShieldAlert, Layers, ShieldCheck, Ban, Smartphone, Monitor, LayoutGrid, Settings as SettingsIcon, FileText, Cloud, Gauge, Accessibility, ArrowRight, Scale } from 'lucide-react';
import { entries } from '@/data/index';
import * as Demos from '@/features/demos/InteractiveDemos';
import { ReferenceEntry, Verdict, UseContext } from '@/types';


const VerdictHeader = ({ verdict, confidence }: { verdict: Verdict, confidence?: number }) => {
  const configs = {
    recommended: { icon: ShieldCheck, color: 'text-emerald-600 bg-emerald-50 border-emerald-200', label: 'Recommended Pattern', desc: 'Industry standard with high reliability.' },
    conditional: { icon: Info, color: 'text-amber-600 bg-amber-50 border-amber-200', label: 'Conditional Use', desc: 'Highly effective but only in specific contexts.' },
    experimental: { icon: Sparkles, color: 'text-primary-600 bg-primary-50 border-primary-200', label: 'Experimental', desc: 'Emerging pattern with limited validation.' },
    'anti-pattern': { icon: Ban, color: 'text-rose-600 bg-rose-50 border-rose-200', label: 'Anti-Pattern', desc: 'Avoid in professional production environments.' },
  };
  const config = configs[verdict];
  const Icon = config.icon;

  return (
    <div className={`flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl border ${config.color} mb-8 shadow-sm`}>
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-xl bg-surface-raised/50 border border-current/10`}>
          <Icon size={28} />
        </div>
        <div>
          <h3 className="font-black text-xl tracking-tight">{config.label}</h3>
          <p className="text-sm opacity-80">{config.desc}</p>
        </div>
      </div>
      {confidence && (
        <div className="mt-4 md:mt-0 flex flex-col items-end border-t md:border-t-0 md:border-l border-current/10 pt-4 md:pt-0 md:pl-6">
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Confidence Score</span>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-black">{confidence}</span>
            <span className="text-sm font-bold opacity-60">%</span>
          </div>
        </div>
      )}
    </div>
  );
};

const ContextTag = ({ context }: { context: UseContext }) => {
  const icons = {
    saas: Cloud,
    mobile: Smartphone,
    dashboard: LayoutGrid,
    devtools: SettingsIcon,
    content: FileText,
  };
  const Icon = icons[context] || Monitor;
  return (
    <div className="flex items-center gap-1.5 px-2 py-1 bg-surface text-fg-muted rounded-md text-[10px] font-bold uppercase tracking-wider border border-border">
      <Icon size={12} />
      <span>{context}</span>
    </div>
  );
};

const SpecSummary = ({ entry }: { entry: ReferenceEntry }) => {
  const summaryItems = [
    { label: 'Use When', value: entry.whenToUse[0] },
    { label: 'Avoid When', value: entry.whenNotToUse[0] },
    { label: 'Primary Failure', value: entry.failureModes[0] },
    { label: 'Perf Impact', value: entry.perfImpact.toUpperCase() },
    { label: 'A11y Specs', value: `${entry.a11ySpecs.length} required checks` },
    { label: 'Alternatives', value: `${entry.alternatives.length} mapped option${entry.alternatives.length === 1 ? '' : 's'}` },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden mb-10 shadow-sm">
      {summaryItems.map((item) => (
        <div key={item.label} className="bg-surface-raised p-5">
          <div className="text-[10px] font-black uppercase tracking-widest text-fg-faint mb-2">{item.label}</div>
          <p className="text-sm font-semibold leading-relaxed text-fg">{item.value}</p>
        </div>
      ))}
    </section>
  );
};

export const ReferenceViewer = () => {
  const { id } = useParams();
  const entry = entries.find(l => l.id === id);
  
  if (!entry) return <div className="min-h-screen flex items-center justify-center text-fg-muted font-medium">Reference not found. <Link to="/" className="text-accent ml-2 hover:underline">Return Home</Link></div>;
  
  const relatedEntries = entry.relatedEntryIds?.map(rid => entries.find(e => e.id === rid)).filter(Boolean) || [];
  const alternativeEntries = entry.alternatives?.map(alt => ({
    ...alt,
    entry: entries.find(e => e.id === alt.entryId)
  })).filter(a => a.entry) || [];

  // Robustly resolve the demo component
  let DemoComponent = null;
  if (entry.interactiveComponent) {
      const componentName = entry.interactiveComponent;
      const componentNameWithDemo = `${componentName}Demo`;
      
      // Attempt to resolve the component
      const Resolved = (Demos as any)[componentName] || (Demos as any)[componentNameWithDemo];
      
      // Ensure it is a valid function/component before assigning
      if (typeof Resolved === 'function' || typeof Resolved === 'object') {
          DemoComponent = Resolved;
      }
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Link to="/" className="inline-flex items-center text-fg-faint hover:text-fg mb-8 transition-colors text-[14px] font-medium group gap-1">
        <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" /> Library
      </Link>
      
      {/* Header Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <span className="px-3 py-1 bg-fg text-surface text-[11px] font-semibold rounded-full">{entry.domain}</span>
          <span className="px-3 py-1 bg-surface text-fg-muted text-[11px] font-semibold rounded-full border border-border">{entry.format}</span>
          <div className="h-4 w-px bg-border mx-0.5" />
          {entry.useContext.map(ctx => <ContextTag key={ctx} context={ctx} />)}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-fg mb-8 tracking-tight leading-tight">
          {entry.title.includes(':') ? entry.title.split(':')[1].trim() : entry.title}
        </h1>

        <VerdictHeader verdict={entry.verdict} confidence={entry.confidenceScore} />

        <div className="bg-fg p-8 rounded-3xl mb-8 shadow-[0_4px_24px_rgba(0,0,0,0.14)] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-[0.07]">
            <Zap size={100} />
          </div>
          <p className="text-[11px] font-semibold text-surface/50 uppercase tracking-widest mb-3 flex items-center gap-1.5">
            <Zap size={12} className="text-accent" /> The Bottom Line
          </p>
          <p className="text-[19px] md:text-[22px] font-medium leading-relaxed relative z-10 text-surface">{entry.quickTake}</p>
        </div>

        <SpecSummary entry={entry} />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Why It Matters */}
          <section>
            <h2 className="text-[22px] font-bold text-fg mb-4 flex items-center gap-2">
              <Lightbulb className="text-amber-500" size={22} /> Why It Matters
            </h2>
            <p className="text-lg text-fg-muted leading-relaxed">{entry.whyItMatters}</p>
          </section>

          {/* Mechanism */}
          {entry.mechanism && (
            <section className="bg-surface rounded-2xl p-8 border border-border">
              <h2 className="text-xl font-bold text-fg mb-6 flex items-center gap-2">
                <Layers className="text-primary-500" size={20} /> The Mechanism
              </h2>
              <div className="space-y-4">
                {entry.mechanism.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-fg-muted font-medium">{step}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Usage Guidelines */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100">
              <h3 className="text-emerald-700 font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 size={18} /> Use This When
              </h3>
              <ul className="space-y-2">
                {entry.whenToUse.map((item, i) => (
                  <li key={i} className="text-sm text-emerald-800 flex gap-2">
                    <span className="text-emerald-400 mt-1">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-rose-50/50 rounded-2xl p-6 border border-rose-100">
              <h3 className="text-rose-700 font-bold mb-4 flex items-center gap-2">
                <Ban size={18} /> Avoid When
              </h3>
              <ul className="space-y-2">
                {entry.whenNotToUse.map((item, i) => (
                  <li key={i} className="text-sm text-rose-800 flex gap-2">
                    <span className="text-rose-400 mt-1">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Failure Modes */}
          {entry.failureModes && (
            <section className="bg-surface rounded-2xl p-8 border border-border">
              <h2 className="text-xl font-bold text-fg mb-6 flex items-center gap-2">
                <ShieldAlert className="text-rose-500" size={20} /> Failure Modes
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {entry.failureModes.map((mode, i) => (
                  <div key={i} className="p-4 bg-surface-raised rounded-xl border border-border shadow-sm">
                    <p className="text-sm text-fg-muted leading-relaxed font-medium">{mode}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Alternatives */}
          {alternativeEntries.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-fg mb-6 flex items-center gap-2">
                <ArrowRight className="text-primary-500" size={20} /> Better Alternatives
              </h2>
              <div className="space-y-4">
                {alternativeEntries.map((alt, i) => (
                  <Link 
                    key={i} 
                    to={`/reference/${alt.entryId}`}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-surface-raised border border-border rounded-2xl hover:border-accent/50 hover:shadow-md transition-all group"
                  >
                    <div className="mb-4 sm:mb-0">
                      <span className="text-[10px] font-bold text-primary-600 uppercase tracking-widest mb-1 block">Alternative Entry</span>
                      <h4 className="font-bold text-fg group-hover:text-accent transition-colors">{alt.entry?.title}</h4>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <span className="text-[10px] font-bold text-fg-faint uppercase tracking-widest block mb-1">Condition</span>
                        <p className="text-xs text-fg-muted font-medium italic">{alt.condition}</p>
                      </div>
                      <Link 
                        to={`/compare/${entry.id}/${alt.entryId}`}
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 bg-surface text-fg-faint hover:text-accent hover:bg-primary-50 rounded-lg transition-all"
                        title="Compare side-by-side"
                      >
                        <Scale size={18} />
                      </Link>
                      <ArrowRight size={18} className="text-fg-faint group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {relatedEntries.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-fg mb-6 flex items-center gap-2">
                <Layers className="text-primary-500" size={20} /> Related References
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedEntries.map((related) => (
                  <Link
                    key={related!.id}
                    to={`/reference/${related!.id}`}
                    className="p-5 bg-surface-raised border border-border rounded-2xl hover:border-accent/50 hover:shadow-md transition-all group"
                  >
                    <span className="text-[10px] font-bold text-fg-faint uppercase tracking-widest">{related!.domain}</span>
                    <h4 className="font-bold text-fg group-hover:text-accent transition-colors mt-1">{related!.title}</h4>
                    <p className="text-xs text-fg-muted mt-2 line-clamp-2">{related!.quickTake}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Detailed Content */}
          <article className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-fg prose-p:text-fg-muted prose-a:text-accent prose-code:text-accent prose-code:bg-accent-bg prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:font-medium prose-pre:bg-fg prose-pre:text-surface">
              {entry.content && entry.content.split('\n').map((line, i) => {
                  if (line.startsWith('# ')) return <h1 key={i} className="mb-6 mt-8">{line.replace('# ', '')}</h1>
                  if (line.startsWith('### ')) return <h3 key={i} className="mb-4 mt-8">{line.replace('### ', '')}</h3>
                  if (line.startsWith('* ')) return <li key={i} className="ml-4">{line.replace('* ', '')}</li>
                  if (line.startsWith('> ')) return <blockquote key={i} className="border-l-4 border-primary-500 pl-4 italic bg-surface p-4 rounded-r-lg my-6">{line.replace('> ', '')}</blockquote>
                  if (line.trim() === '') return <br key={i}/>
                  return <p key={i} className="mb-4">{line}</p>
              })}
          </article>

          {/* Implementation & Code */}
          {(entry.implementationNotes || entry.codeSnippet) && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-fg flex items-center gap-2">
                <Code className="text-primary-600" size={24} /> Implementation
              </h2>
              
              {entry.implementationNotes.length > 0 && (
                <div className="bg-fg rounded-2xl p-8 text-surface/80">
                  <h3 className="text-surface font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                    <Info size={16} className="text-primary-400" /> Technical Notes
                  </h3>
                  <ul className="space-y-3">
                    {entry.implementationNotes.map((note, i) => (
                      <li key={i} className="text-sm flex gap-3">
                        <span className="text-primary-500 mt-1">→</span> {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {entry.codeSnippet && (
                <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800">
                  <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex justify-between items-center">
                    <span className="text-[10px] font-bold text-fg-muted uppercase tracking-widest">{entry.codeSnippet.language}</span>
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                    </div>
                  </div>
                  <pre className="p-6 overflow-x-auto">
                    <code className="text-sm text-primary-300 font-mono">{entry.codeSnippet.code}</code>
                  </pre>
                </div>
              )}
            </section>
          )}
        </div>

        {/* Sidebar Column */}
        <div className="space-y-8">
          {/* Visual Reference Preview */}
          {DemoComponent && (
            <div className="sticky top-24 space-y-8">
              <div className="bg-surface-raised rounded-2xl overflow-hidden shadow-xl border border-border">
                <div className="bg-surface border-b border-border px-4 py-3 flex items-center justify-between">
                   <span className="text-[10px] font-bold text-fg-faint uppercase tracking-widest flex items-center gap-2">
                     <Sparkles size={12} className="text-primary-500"/> Visual Reference
                   </span>
                </div>
                <div className="p-1 bg-surface">
                    <DemoComponent />
                </div>
              </div>

              {/* Tradeoffs & Pitfalls */}
              <div className="space-y-6">
                {entry.perfImpact && (
                  <div className="bg-surface-raised rounded-2xl p-6 border border-border shadow-sm">
                    <h3 className="text-fg font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                      <Gauge size={16} className="text-primary-500" /> Performance Cost
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-surface rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all ${
                            entry.perfImpact === 'low' ? 'w-1/3 bg-emerald-500' :
                            entry.perfImpact === 'medium' ? 'w-2/3 bg-amber-500' :
                            'w-full bg-rose-500'
                          }`}
                        />
                      </div>
                      <span className="text-[10px] font-black uppercase text-fg-faint">{entry.perfImpact}</span>
                    </div>
                  </div>
                )}

                {entry.a11ySpecs.length > 0 && (
                  <div className="bg-surface-raised rounded-2xl p-6 border border-border shadow-sm">
                    <h3 className="text-fg font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                      <Accessibility size={16} className="text-primary-500" /> A11y Specs
                    </h3>
                    <ul className="space-y-2">
                      {entry.a11ySpecs.map((spec, i) => (
                        <li key={i} className="text-[11px] text-fg-muted flex gap-2">
                          <span className="text-primary-400 font-bold">•</span> {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bg-surface-raised rounded-2xl p-6 border border-border shadow-sm">
                  <h3 className="text-fg font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                    <Layers size={16} className="text-primary-500" /> Tradeoffs
                  </h3>
                  <div className="space-y-4">
                    {entry.tradeoffs.map((item, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600">
                          <CheckCircle2 size={10} /> PRO
                        </div>
                        <p className="text-xs text-fg-muted mb-2">{item.pro}</p>
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-rose-600">
                          <Ban size={10} /> CON
                        </div>
                        <p className="text-xs text-fg-muted">{item.con}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {entry.commonPitfalls && entry.commonPitfalls.length > 0 && (
                  <div className="bg-rose-50/30 rounded-2xl p-6 border border-rose-100 shadow-sm">
                    <h3 className="text-rose-900 font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                      <ShieldAlert size={16} className="text-rose-500" /> Common Pitfalls
                    </h3>
                    <ul className="space-y-3">
                      {entry.commonPitfalls.map((item, i) => (
                        <li key={i} className="text-xs text-rose-800 flex gap-2">
                          <span className="text-rose-300 mt-0.5">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Checklist */}
              {entry.checklist && (
                <div className="bg-fg rounded-2xl p-6 text-surface shadow-xl">
                  <h3 className="text-accent font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                    <CheckCircle2 size={16} /> Reference Checklist
                  </h3>
                  <div className="space-y-3">
                    {entry.checklist.map((item, i) => (
                      <label key={i} className="flex items-start gap-3 cursor-pointer group">
                        <input type="checkbox" className="mt-1 rounded border-border bg-surface-raised text-accent focus:ring-accent" />
                        <span className="text-xs text-surface/70 group-hover:text-surface transition-colors">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

    </div>
  );
};
