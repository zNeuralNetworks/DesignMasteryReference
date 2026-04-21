import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Layers, 
  Cpu, 
  Palette, 
  Type, 
  Zap, 
  Shield, 
  Target, 
  BookOpen,
  Code2,
  Layout as LayoutIcon,
  Search
} from 'lucide-react';

const Section = ({ title, icon: Icon, children, delay = 0 }: { title: string, icon: any, children: React.ReactNode, delay?: number }) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="mb-16"
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
        <Icon size={24} />
      </div>
      <h2 className="text-2xl font-bold text-fg">{title}</h2>
    </div>
    <div className="bg-surface-raised border border-border rounded-2xl p-8 shadow-sm">
      {children}
    </div>
  </motion.section>
);

const SpecItem = ({ label, value }: { label: string, value: string }) => (
  <div className="flex flex-col gap-1 border-l-2 border-border pl-4 py-1">
    <span className="text-xs font-bold text-fg-faint uppercase tracking-wider">{label}</span>
    <span className="text-fg-muted font-medium">{value}</span>
  </div>
);

export const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 text-xs font-bold rounded-full mb-4 uppercase tracking-widest">
          System Documentation
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-fg mb-6 tracking-tight">
          Design Mastery Reference
        </h1>
        <p className="text-xl text-fg-muted max-w-2xl mx-auto leading-relaxed">
          A high-density reference library engineered for product designers and systems architects who prioritize precision over fluff.
        </p>
      </motion.div>

      {/* Product Vision */}
      <Section title="Product Vision" icon={Compass} delay={0.1}>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-fg mb-3">The Core Objective</h3>
            <p className="text-fg-muted leading-relaxed mb-4">
              Design Mastery Reference is not a tutorial site. It is a professional lookup tool designed to provide immediate, actionable guidance on UI/UX patterns, interaction mechanisms, and product judgment.
            </p>
            <div className="flex flex-col gap-3">
              <SpecItem label="Primary Value" value="Tradeoff analysis & implementation precision" />
              <SpecItem label="Target Persona" value="Senior Designers, Lead Engineers, Product Architects" />
            </div>
          </div>
          <div className="bg-surface rounded-xl p-6 border border-border">
            <h3 className="font-bold text-fg mb-3 text-sm">Design Principles</h3>
            <ul className="space-y-3">
              {[
                { title: 'Density over White Space', desc: 'Information-rich layouts for rapid scanning.' },
                { title: 'Mechanism-First', desc: 'Focus on how things work, not just how they look.' },
                { title: 'Objective Judgment', desc: 'Removing "absolute" language in favor of tradeoffs.' }
              ].map((p, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                  <div>
                    <span className="block font-bold text-fg text-sm">{p.title}</span>
                    <span className="text-xs text-fg-muted">{p.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Information Architecture */}
      <Section title="Information Architecture" icon={Layers} delay={0.2}>
        <p className="text-fg-muted mb-8">
          The system utilizes a strict two-dimensional taxonomy to ensure every entry is categorized by its conceptual domain and its structural format.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-fg-faint uppercase tracking-widest">Domains (The What)</h4>
            <div className="flex flex-wrap gap-2">
              {['layout', 'typography', 'color', 'components', 'interaction', 'motion', 'visual-hierarchy', 'psychology', 'responsiveness', 'data', 'tokens'].map(d => (
                <span key={d} className="px-3 py-1 bg-surface text-fg-muted rounded-md text-xs font-mono">{d}</span>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-fg-faint uppercase tracking-widest">Formats (The How)</h4>
            <div className="flex flex-wrap gap-2">
              {['principle', 'pattern', 'system', 'style', 'anti-pattern', 'case-study'].map(f => (
                <span key={f} className="px-3 py-1 bg-primary-50 text-primary-700 rounded-md text-xs font-mono">{f}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* UI/UX Design System */}
      <Section title="UI/UX Design System" icon={Palette} delay={0.3}>
        <div className="space-y-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-fg font-bold">
                <Type size={18} className="text-primary-500" />
                <span>Typography</span>
              </div>
              <p className="text-sm text-fg-muted">
                We use <span className="font-bold text-fg">Inter</span> for UI elements to ensure maximum legibility at small sizes. <span className="font-bold text-fg font-mono">JetBrains Mono</span> is reserved for technical data, code snippets, and metadata to reinforce the architectural mood.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-fg font-bold">
                <Zap size={18} className="text-primary-500" />
                <span>Motion & Interaction</span>
              </div>
              <p className="text-sm text-fg-muted">
                Interactions are powered by <span className="font-bold text-fg">Framer Motion</span>. We utilize staggered entrances and subtle scale transforms to provide tactile feedback without distracting from the content.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-border">
            <h4 className="text-sm font-bold text-fg mb-4">Color Strategy</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: 'Slate 900', hex: '#0f172a', use: 'Primary Text' },
                { name: 'Primary 600', hex: '#4f46e5', use: 'Actions' },
                { name: 'Slate 50', hex: '#f8fafc', use: 'Backgrounds' },
                { name: 'Slate 200', hex: '#e2e8f0', use: 'Borders' }
              ].map(c => (
                <div key={c.name} className="flex flex-col gap-2">
                  <div className="h-12 rounded-lg border border-border" style={{ backgroundColor: c.hex }} />
                  <div className="text-[10px]">
                    <span className="block font-bold text-fg">{c.name}</span>
                    <span className="text-fg-faint">{c.use}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Technical Architecture */}
      <Section title="Technical Architecture" icon={Cpu} delay={0.4}>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: Code2, title: 'React 18 + TS', desc: 'Strict type safety across the entire data model.' },
            { icon: LayoutIcon, title: 'Tailwind CSS', desc: 'Utility-first styling for rapid, consistent UI.' },
            { icon: Zap, title: 'Framer Motion', desc: 'Staggered animations and tactile interaction feedback.' }
          ].map((tech, i) => (
            <div key={i} className="p-4 bg-surface rounded-xl border border-border">
              <tech.icon size={20} className="text-primary-600 mb-3" />
              <h5 className="font-bold text-fg text-sm mb-1">{tech.title}</h5>
              <p className="text-xs text-fg-muted leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Product Design Spec (PDS) */}
      <Section title="Product Design Spec (PDS)" icon={Shield} delay={0.5}>
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-x-12 gap-y-6">
            <SpecItem label="Project Name" value="Design Mastery Reference" />
            <SpecItem label="Version" value="1.0.0 (Consolidated)" />
            <SpecItem label="Repository Type" value="Reference Library / Tool" />
            <SpecItem label="Deployment" value="Cloud Run (Vite Static)" />
          </div>

          <div className="pt-6 border-t border-border">
            <h4 className="text-sm font-bold text-fg mb-4">Core User Flows</h4>
            <div className="space-y-3">
              {[
                { step: '01', action: 'Entry Discovery', desc: 'Search or filter the library by Domain/Format.' },
                { step: '02', action: 'Deep Analysis', desc: 'Review mechanisms, tradeoffs, and pitfalls in the Viewer.' },
                { step: '03', action: 'Implementation Support', desc: 'Review code snippets and implementation notes in the Viewer.' },
                { step: '04', action: 'Knowledge Portability', desc: 'Export the library to a high-density PDF (E-Book).' }
              ].map((flow, i) => (
                <div key={i} className="flex gap-4 items-center p-3 hover:bg-surface rounded-lg transition-colors group">
                  <span className="text-xs font-black text-fg-faint group-hover:text-primary-200 transition-colors">{flow.step}</span>
                  <div>
                    <span className="block font-bold text-fg text-sm">{flow.action}</span>
                    <span className="text-xs text-fg-muted">{flow.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-border grid sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-bold text-fg mb-3">Success Metrics</h4>
              <ul className="text-xs text-fg-muted space-y-2">
                <li>• Time to Insight (TTI) &lt; 30 seconds</li>
                <li>• Zero legacy "lesson" terminology in UI</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-fg mb-3">Accessibility</h4>
              <ul className="text-xs text-fg-muted space-y-2">
                <li>• WCAG 2.1 AA Compliance</li>
                <li>• 44px minimum touch targets</li>
                <li>• Semantic HTML structure for screen readers</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer Call to Action */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center pt-10 pb-20"
      >
        <p className="text-fg-faint text-sm mb-6">Built for the next generation of product builders.</p>
        <div className="flex justify-center gap-4">
          <div className="w-10 h-10 bg-surface rounded-full flex items-center justify-center text-fg-faint">
            <Shield size={20} />
          </div>
          <div className="w-10 h-10 bg-surface rounded-full flex items-center justify-center text-fg-faint">
            <Zap size={20} />
          </div>
          <div className="w-10 h-10 bg-surface rounded-full flex items-center justify-center text-fg-faint">
            <Target size={20} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
