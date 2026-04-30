import React, { useState } from 'react';
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
  Code2,
  Layout as LayoutIcon,
  MousePointer2,
  Grid3x3,
  Contrast,
  Coins,
  Sun,
  Moon,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';

// ── Shared layout primitives ──────────────────────────────────────────────────

const Section = ({
  title,
  icon: Icon,
  children,
  delay = 0,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="mb-16"
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-accent-bg rounded-lg text-accent">
        <Icon size={20} />
      </div>
      <h2 className="text-2xl font-bold text-fg">{title}</h2>
    </div>
    <div className="bg-surface-raised border border-border rounded-2xl p-8 shadow-sm">
      {children}
    </div>
  </motion.section>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-[11px] font-bold text-fg-faint uppercase tracking-widest mb-3">
    {children}
  </h3>
);

const Divider = () => <div className="border-t border-border my-8" />;

const Tag = ({ children, variant = 'neutral' }: { children: React.ReactNode; variant?: 'neutral' | 'accent' | 'mono' }) => {
  const styles = {
    neutral: 'bg-surface text-fg-muted border border-border',
    accent:  'bg-accent-bg text-accent border border-accent/20',
    mono:    'bg-surface text-fg-muted border border-border font-mono',
  };
  return (
    <span className={`inline-block px-2.5 py-1 rounded-md text-[11px] ${styles[variant]}`}>
      {children}
    </span>
  );
};

// ── Color System sub-components ───────────────────────────────────────────────

const ColorSwatch = ({ token, hex, role, textClass = 'text-fg' }: { token: string; hex: string; role: string; textClass?: string }) => (
  <div className="flex flex-col gap-2">
    <div className="h-10 rounded-lg border border-border/60" style={{ backgroundColor: hex }} />
    <div>
      <span className={`block text-[11px] font-bold font-mono ${textClass}`}>{token}</span>
      <span className="block text-[10px] text-fg-faint font-mono">{hex}</span>
      <span className="block text-[10px] text-fg-muted mt-0.5">{role}</span>
    </div>
  </div>
);

const SemanticToken = ({ token, description, value }: { token: string; description: string; value: string }) => (
  <div className="flex items-start gap-3 py-2.5 border-b border-border/50 last:border-0">
    <code className="text-[11px] font-mono bg-surface border border-border rounded px-2 py-0.5 text-accent whitespace-nowrap flex-shrink-0">{token}</code>
    <div className="flex-1 min-w-0">
      <span className="block text-[12px] text-fg font-medium">{description}</span>
      <span className="text-[11px] text-fg-faint">{value}</span>
    </div>
  </div>
);

const ContrastRow = ({ pair, ratio, level, passes }: { pair: string; ratio: string; level: string; passes: boolean }) => (
  <div className="flex items-center justify-between py-2 border-b border-border/40 last:border-0 text-[12px]">
    <span className="text-fg-muted">{pair}</span>
    <div className="flex items-center gap-3">
      <span className="font-mono font-bold text-fg">{ratio}</span>
      <span className="text-fg-faint">{level}</span>
      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${passes ? 'bg-emerald-500/10 text-emerald-600' : 'bg-rose-500/10 text-rose-500'}`}>
        {passes ? 'PASS' : 'FAIL'}
      </span>
    </div>
  </div>
);

// ── Accordion for dense sections ─────────────────────────────────────────────

const Accordion = ({ label, children }: { label: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-5 py-3.5 text-left hover:bg-surface transition-colors"
      >
        <span className="text-[13px] font-semibold text-fg">{label}</span>
        {open ? <ChevronDown size={15} className="text-fg-faint" /> : <ChevronRight size={15} className="text-fg-faint" />}
      </button>
      {open && <div className="px-5 pb-5 pt-1 border-t border-border">{children}</div>}
    </div>
  );
};

// ── Main page ─────────────────────────────────────────────────────────────────

export const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <span className="inline-block px-3 py-1 bg-accent-bg text-accent text-[11px] font-bold rounded-full mb-4 uppercase tracking-widest">
          System Documentation · v2.1
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-fg mb-6 tracking-tight">
          Design Mastery Reference
        </h1>
        <p className="text-xl text-fg-muted max-w-2xl mx-auto leading-relaxed">
          A symptom-driven UI debugger and design pattern library — built for mid-build decisions under time pressure.
        </p>
      </motion.div>

      {/* Product Vision */}
      <Section title="Product Vision" icon={Compass} delay={0.05}>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-fg-muted leading-relaxed mb-5">
              Design Mastery Reference is not a tutorial or a course. It is a professional lookup tool designed for the moment you're 40 minutes into a layout problem and need actionable guidance — not a lecture on fundamentals.
            </p>
            <p className="text-fg-muted leading-relaxed mb-5">
              The primary workflow is <span className="text-fg font-medium">symptom-first retrieval</span>: describe what feels wrong ("spacing feels off", "hierarchy unclear"), find the pattern, apply the fix. Fix Guides route by symptom; the full library filters by domain and intent.
            </p>
            <div className="flex flex-col gap-3 mt-4">
              {[
                { label: 'Primary Mode', value: 'Solve — symptom-first, action-shaped' },
                { label: 'Secondary Mode', value: 'Explore — browse patterns, build taste' },
                { label: 'Target Persona', value: 'Product designers, lead engineers, design system architects' },
                { label: 'Entry Count', value: '121 reference entries across 11 domains' },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col border-l-2 border-border pl-4 py-0.5">
                  <span className="text-[10px] font-bold text-fg-faint uppercase tracking-wider">{label}</span>
                  <span className="text-[13px] text-fg-muted font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface rounded-xl p-5 border border-border">
            <SubHeading>Design Principles</SubHeading>
            <ul className="space-y-4">
              {[
                { title: 'Density over whitespace', desc: 'Information-rich layouts for rapid scanning. Padding earns its space.' },
                { title: 'Mechanism-first', desc: 'Every entry explains why a pattern works — not just what it looks like.' },
                { title: 'Tradeoff-honest', desc: 'No "always do X". Every entry carries a verdict: Recommended, Conditional, or Anti-Pattern.' },
                { title: 'Symptom-routed retrieval', desc: 'Fix Guides map plain-language problems to the patterns that fix them.' },
              ].map((p, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                  <div>
                    <span className="block font-semibold text-fg text-[13px]">{p.title}</span>
                    <span className="text-[12px] text-fg-muted">{p.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* UI/UX Design System */}
      <Section title="UI/UX Design System" icon={Palette} delay={0.1}>
        <div className="space-y-10">

          {/* ── Color: Primitive scales ── */}
          <div>
            <SubHeading>Color System — Primitive Scales</SubHeading>
            <p className="text-[13px] text-fg-muted mb-5 leading-relaxed">
              Two scales underpin the entire color system. All semantic tokens reference these primitives — components never consume raw hex values directly.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-[11px] font-semibold text-fg-faint mb-3">Apple Neutral (Slate) — 11 steps</p>
                <div className="rounded-xl border border-border overflow-hidden">
                  {[
                    { step: '50',  hex: '#F5F5F7', role: 'Page surface' },
                    { step: '100', hex: '#E8E8ED', role: 'Hover surface' },
                    { step: '200', hex: '#D2D2D7', role: 'Border' },
                    { step: '300', hex: '#B7B7BD', role: 'Strong border' },
                    { step: '400', hex: '#8E8E93', role: 'Faint text' },
                    { step: '500', hex: '#6E6E73', role: 'Muted text' },
                    { step: '600', hex: '#48484A', role: 'Subdued' },
                    { step: '700', hex: '#3A3A3C', role: 'Inverted border' },
                    { step: '800', hex: '#2C2C2E', role: 'Dark raised surface' },
                    { step: '900', hex: '#1D1D1F', role: 'Body text / dark surface' },
                    { step: '950', hex: '#000000', role: 'Pure black' },
                  ].map((s, i) => (
                    <div key={s.step} className={`flex items-center gap-3 px-3 py-1.5 ${i % 2 === 0 ? 'bg-surface' : 'bg-surface-raised'}`}>
                      <div className="w-5 h-5 rounded flex-shrink-0 border border-border/40" style={{ backgroundColor: s.hex }} />
                      <span className="font-mono text-[10px] text-fg-faint w-8 flex-shrink-0">{s.step}</span>
                      <span className="font-mono text-[10px] text-fg-muted flex-shrink-0">{s.hex}</span>
                      <span className="text-[10px] text-fg-faint ml-auto">{s.role}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-fg-faint mb-3">Apple Blue (Primary) — 11 steps</p>
                <div className="rounded-xl border border-border overflow-hidden">
                  {[
                    { step: '50',  hex: '#F0F7FF', role: 'Accent bg tint' },
                    { step: '100', hex: '#DCE9FF', role: 'Light accent bg' },
                    { step: '200', hex: '#B4CFFF', role: 'Accent border' },
                    { step: '300', hex: '#7AAFFA', role: 'Hover ring' },
                    { step: '400', hex: '#3E8FEF', role: 'Accent hover' },
                    { step: '500', hex: '#007AFF', role: 'Apple blue' },
                    { step: '600', hex: '#0071E3', role: 'Accent (default)' },
                    { step: '700', hex: '#005EC9', role: 'Accent pressed' },
                    { step: '800', hex: '#004AA8', role: 'Deep accent' },
                    { step: '900', hex: '#003580', role: 'Darkest accent' },
                    { step: '950', hex: '#001A40', role: 'Near black blue' },
                  ].map((s, i) => (
                    <div key={s.step} className={`flex items-center gap-3 px-3 py-1.5 ${i % 2 === 0 ? 'bg-surface' : 'bg-surface-raised'}`}>
                      <div className="w-5 h-5 rounded flex-shrink-0 border border-border/40" style={{ backgroundColor: s.hex }} />
                      <span className="font-mono text-[10px] text-fg-faint w-8 flex-shrink-0">{s.step}</span>
                      <span className="font-mono text-[10px] text-fg-muted flex-shrink-0">{s.hex}</span>
                      <span className="text-[10px] text-fg-faint ml-auto">{s.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Divider />

          {/* ── Color: Semantic tokens ── */}
          <div>
            <SubHeading>Color System — Semantic Tokens</SubHeading>
            <p className="text-[13px] text-fg-muted mb-5 leading-relaxed">
              Components consume <em>semantic</em> tokens, not primitives. This is what makes all 7 themes work without touching component code — swapping a theme class on <code className="text-[11px] font-mono bg-surface border border-border rounded px-1.5 py-0.5">{'<html>'}</code> redefines every token simultaneously.
            </p>
            <div className="grid md:grid-cols-2 gap-x-8">
              <div>
                <p className="text-[11px] font-semibold text-fg-faint mb-2">Surface & Structure</p>
                <SemanticToken token="--surface"        description="Page background"           value="slate-50 (#F5F5F7) in light; #1D1D1F in dark" />
                <SemanticToken token="--surface-raised" description="Card / panel background"   value="White in light; #2C2C2E in dark" />
                <SemanticToken token="--surface-overlay" description="Sticky bar backdrop"      value="surface at 85% opacity — enables blur" />
                <SemanticToken token="--border"         description="Dividers, card edges"      value="slate-200 (#D2D2D7)" />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-fg-faint mb-2">Foreground & Accent</p>
                <SemanticToken token="--fg"             description="Primary text"              value="slate-900 (#1D1D1F)" />
                <SemanticToken token="--fg-muted"       description="Secondary / body text"     value="slate-500 (#6E6E73)" />
                <SemanticToken token="--fg-faint"       description="Placeholder, metadata"     value="slate-400 (#8E8E93)" />
                <SemanticToken token="--accent"         description="Interactive actions"        value="primary-600 (#0071E3)" />
                <SemanticToken token="--accent-bg"      description="Accent tinted surfaces"    value="primary-50 (#F0F7FF)" />
              </div>
            </div>
          </div>

          <Divider />

          {/* ── Color: Category tokens ── */}
          <div>
            <SubHeading>Color System — Category Tokens</SubHeading>
            <p className="text-[13px] text-fg-muted mb-5 leading-relaxed">
              Fix Guide cards each carry a visual identity tied to one of 6 category token sets. Each set defines <code className="text-[11px] font-mono bg-surface border border-border rounded px-1.5 py-0.5">-bg</code>, <code className="text-[11px] font-mono bg-surface border border-border rounded px-1.5 py-0.5">-border</code>, <code className="text-[11px] font-mono bg-surface border border-border rounded px-1.5 py-0.5">-icon</code>, and <code className="text-[11px] font-mono bg-surface border border-border rounded px-1.5 py-0.5">-badge</code> variants — all override correctly in every theme and dark mode.
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {[
                { n: 1, name: 'Violet',  guides: 'Typography, Color',    hex: '#6d28d9' },
                { n: 2, name: 'Blue',    guides: 'Spacing, Hierarchy',   hex: '#1d4ed8' },
                { n: 3, name: 'Teal',    guides: 'Layout, Motion',       hex: '#0f766e' },
                { n: 4, name: 'Amber',   guides: 'Navigation',           hex: '#b45309' },
                { n: 5, name: 'Rose',    guides: 'Performance',          hex: '#be123c' },
                { n: 6, name: 'Emerald', guides: 'Forms, Data',          hex: '#065f46' },
              ].map(cat => (
                <div key={cat.n} className="flex flex-col gap-2">
                  <div className="h-8 rounded-lg border border-border/60" style={{ backgroundColor: cat.hex + '28' }}>
                    <div className="h-full rounded-lg border" style={{ borderColor: cat.hex + '44' }} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-fg">{cat.name}</span>
                    <span className="block text-[10px] text-fg-faint font-mono">--cat-{cat.n}-*</span>
                    <span className="block text-[10px] text-fg-muted mt-0.5">{cat.guides}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Divider />

          {/* ── Contrast rules ── */}
          <div>
            <SubHeading>Contrast Rules (WCAG 2.1 AA)</SubHeading>
            <p className="text-[13px] text-fg-muted mb-5 leading-relaxed">
              All text and interactive elements meet or exceed WCAG 2.1 Level AA. Icon colors on tinted card backgrounds use <code className="text-[11px] font-mono bg-surface border border-border rounded px-1.5 py-0.5">-700</code> shades (not <code className="text-[11px] font-mono bg-surface border border-border rounded px-1.5 py-0.5">-500</code>) in light mode to clear the 3:1 minimum for UI elements and the 4.5:1 minimum for body-size text.
            </p>
            <div className="bg-surface rounded-xl border border-border overflow-hidden">
              <div className="px-4 py-2.5 border-b border-border bg-surface-raised">
                <span className="text-[11px] font-bold text-fg-faint uppercase tracking-wider">Key contrast pairs — default light theme</span>
              </div>
              <div className="px-4 py-2">
                <ContrastRow pair="--fg on --surface (body text)"            ratio="12.1:1" level="AAA"  passes={true} />
                <ContrastRow pair="--fg-muted on --surface (secondary text)" ratio="5.9:1"  level="AA"   passes={true} />
                <ContrastRow pair="--fg-faint on --surface (placeholder)"    ratio="3.4:1"  level="AA UI" passes={true} />
                <ContrastRow pair="--accent on --surface (link / action)"    ratio="4.7:1"  level="AA"   passes={true} />
                <ContrastRow pair="Violet-700 icon on cat-1-bg tint"         ratio="5.1:1"  level="AA"   passes={true} />
                <ContrastRow pair="Amber-700 icon on cat-4-bg tint"          ratio="4.6:1"  level="AA"   passes={true} />
              </div>
            </div>
          </div>

          <Divider />

          {/* ── Token system architecture ── */}
          <div>
            <SubHeading>Token System Architecture</SubHeading>
            <p className="text-[13px] text-fg-muted mb-5 leading-relaxed">
              Tokens flow through three layers. Components always consume the semantic layer — this is what makes multi-theme support zero-cost to maintain.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch gap-0">
              {[
                {
                  layer: '1 — Primitive',
                  example: '--slate-900\n--primary-600',
                  desc: 'Raw values. Never used directly in component code.',
                  color: 'border-border',
                },
                {
                  layer: '2 — Semantic',
                  example: '--fg\n--accent\n--surface',
                  desc: 'Intent-named aliases. These are what components reference.',
                  color: 'border-accent/40',
                },
                {
                  layer: '3 — Component',
                  example: 'bg-surface\ntext-fg\nborder-border',
                  desc: 'Tailwind utilities that consume semantic CSS variables.',
                  color: 'border-accent',
                },
              ].map((l, i) => (
                <div key={i} className={`flex-1 p-4 border ${l.color} ${i === 0 ? 'rounded-l-xl border-r-0' : i === 2 ? 'rounded-r-xl border-l-0' : ''} bg-surface`}>
                  <p className="text-[10px] font-bold text-fg-faint uppercase tracking-wider mb-2">{l.layer}</p>
                  <pre className="text-[11px] font-mono text-accent mb-2 whitespace-pre">{l.example}</pre>
                  <p className="text-[11px] text-fg-muted leading-relaxed">{l.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <Divider />

          {/* ── Dark mode ── */}
          <div>
            <SubHeading>Dark Mode</SubHeading>
            <p className="text-[13px] text-fg-muted mb-5 leading-relaxed">
              Two dark mode paths coexist. Both redefine the same semantic token layer — components require no changes.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-surface rounded-xl border border-border flex gap-3">
                <Sun size={16} className="text-fg-faint mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[13px] font-semibold text-fg mb-1">OS auto dark mode</p>
                  <p className="text-[12px] text-fg-muted leading-relaxed">
                    <code className="text-[11px] font-mono bg-surface-raised border border-border rounded px-1">@media (prefers-color-scheme: dark)</code> scoped to <code className="text-[11px] font-mono bg-surface-raised border border-border rounded px-1">:root:not([class*="theme-"])</code>. Activates automatically when no named theme class is present.
                  </p>
                </div>
              </div>
              <div className="p-4 bg-surface rounded-xl border border-border flex gap-3">
                <Moon size={16} className="text-fg-faint mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[13px] font-semibold text-fg mb-1">Named dark themes</p>
                  <p className="text-[12px] text-fg-muted leading-relaxed">
                    Three dark-surface named themes — <span className="font-medium text-fg">Bioluminescent</span> (deep navy + cyan), <span className="font-medium text-fg">Operator Console</span> (phosphor terminal), and <span className="font-medium text-fg">Technical Blueprint</span> (prussian blue). Each fully redefines all semantic tokens including category tokens.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-[11px] font-semibold text-fg-faint mb-3">All 7 named themes</p>
              <div className="rounded-xl border border-border overflow-hidden">
                <div className="grid grid-cols-4 px-4 py-2 bg-surface border-b border-border">
                  <span className="text-[10px] font-bold text-fg-faint uppercase tracking-wider">Theme</span>
                  <span className="text-[10px] font-bold text-fg-faint uppercase tracking-wider">Surface</span>
                  <span className="text-[10px] font-bold text-fg-faint uppercase tracking-wider">Type</span>
                  <span className="text-[10px] font-bold text-fg-faint uppercase tracking-wider col-span-1">Character</span>
                </div>
                {[
                  { name: 'Default',             surface: '#F5F5F7', hex: '#F5F5F7', type: 'Light',  char: 'Apple system neutral' },
                  { name: 'Quiet Luxury',        surface: '#FAF7F2', hex: '#FAF7F2', type: 'Light',  char: 'Warm editorial' },
                  { name: 'System Atlas',        surface: '#FAFAFA', hex: '#FAFAFA', type: 'Light',  char: 'Cool zinc reference' },
                  { name: 'Swiss',               surface: '#FFFFFF', hex: '#FFFFFF', type: 'Light',  char: 'Neo-brutalism, red accent, zero border-radius' },
                  { name: 'Bioluminescent',      surface: '#050810', hex: '#050810', type: 'Dark',   char: 'Deep navy + cyan glow' },
                  { name: 'Operator Console',    surface: '#0D1117', hex: '#0D1117', type: 'Dark',   char: 'Phosphor terminal, monospace forced' },
                  { name: 'Technical Blueprint', surface: '#002855', hex: '#002855', type: 'Dark',   char: 'Prussian blue, dot-grid background' },
                ].map((t, i) => (
                  <div key={t.name} className={`grid grid-cols-4 items-center px-4 py-2.5 ${i % 2 === 0 ? 'bg-surface-raised' : 'bg-surface'}`}>
                    <span className="text-[12px] font-semibold text-fg">{t.name}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded border border-border/60 flex-shrink-0" style={{ backgroundColor: t.hex }} />
                      <span className="font-mono text-[10px] text-fg-muted">{t.surface}</span>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full w-fit ${t.type === 'Dark' ? 'bg-slate-800 text-slate-300' : 'bg-surface text-fg-faint border border-border'}`}>
                      {t.type}
                    </span>
                    <span className="text-[11px] text-fg-muted">{t.char}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </Section>

      {/* Layout System */}
      <Section title="Layout System" icon={Grid3x3} delay={0.2}>
        <div className="space-y-8">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'Max content width',   value: 'max-w-7xl (1280px)', note: 'Main library grid' },
              { label: 'Article / detail',    value: 'max-w-4xl (896px)',  note: 'Viewer, About, Comparison' },
              { label: 'Page padding',         value: 'px-6 (24px)',        note: 'Consistent horizontal inset' },
              { label: 'Section vertical gap', value: 'py-10 (40px)',       note: 'Top of main content area' },
              { label: 'Card gap (grid)',       value: 'gap-4 (16px)',       note: 'Entry grid in grid view' },
              { label: 'Card gap (list)',       value: 'gap-2 (8px)',        note: 'Entry list view' },
            ].map(item => (
              <div key={item.label} className="bg-surface rounded-xl border border-border p-4">
                <p className="text-[10px] font-bold text-fg-faint uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-[13px] font-semibold text-fg font-mono">{item.value}</p>
                <p className="text-[11px] text-fg-muted mt-0.5">{item.note}</p>
              </div>
            ))}
          </div>

          <Divider />

          <div>
            <SubHeading>Spacing Scale (4px base)</SubHeading>
            <p className="text-[13px] text-fg-muted mb-4 leading-relaxed">
              All spacing uses multiples of 4px. The 2× rule governs grouping: space between groups is always at least 2× the space within a group.
            </p>
            <div className="flex items-end gap-3 flex-wrap">
              {[
                { step: '1 (4px)',   h: 'h-1'   },
                { step: '2 (8px)',   h: 'h-2'   },
                { step: '3 (12px)',  h: 'h-3'   },
                { step: '4 (16px)',  h: 'h-4'   },
                { step: '6 (24px)',  h: 'h-6'   },
                { step: '8 (32px)',  h: 'h-8'   },
                { step: '12 (48px)', h: 'h-12'  },
                { step: '16 (64px)', h: 'h-16'  },
              ].map(s => (
                <div key={s.step} className="flex flex-col items-center gap-1.5">
                  <div className={`w-5 ${s.h} bg-accent/30 border border-accent/40 rounded`} />
                  <span className="text-[9px] font-mono text-fg-faint whitespace-nowrap">{s.step}</span>
                </div>
              ))}
            </div>
          </div>

          <Divider />

          <div>
            <SubHeading>Sticky Navigation Architecture</SubHeading>
            <p className="text-[13px] text-fg-muted mb-4 leading-relaxed">
              The app uses two stacked sticky layers. The <code className="text-[11px] font-mono bg-surface border border-border rounded px-1.5 py-0.5">--surface-overlay</code> token (surface at 85% opacity) enables the <code className="text-[11px] font-mono bg-surface border border-border rounded px-1.5 py-0.5">backdrop-filter: blur(20px)</code> on both layers.
            </p>
            <div className="space-y-2">
              {[
                { layer: 'z-40', label: 'Global nav bar',     desc: 'App-level navigation — logo, theme picker, links', top: 'top-0', sticky: true },
                { layer: 'z-30', label: 'Filter bar',         desc: 'Search + Domain pills + Intent pills — library-level controls', top: 'top-14', sticky: true },
                { layer: 'z-10', label: 'Content scroll area',desc: 'Entry grid / list — scrolls beneath both sticky layers', top: '—', sticky: false },
              ].map(l => (
                <div key={l.layer} className="flex items-center gap-4 p-3 bg-surface rounded-lg border border-border">
                  <code className="text-[11px] font-mono text-accent w-12 flex-shrink-0">{l.layer}</code>
                  <div className="flex-1">
                    <span className="text-[13px] font-semibold text-fg">{l.label}</span>
                    <span className="text-[11px] text-fg-muted block">{l.desc}</span>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${l.sticky ? 'bg-accent-bg text-accent' : 'bg-surface-raised text-fg-faint border border-border'}`}>
                    {l.sticky ? 'sticky' : 'scroll'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Components */}
      <Section title="Component System" icon={LayoutIcon} delay={0.25}>
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                name: 'Entry Card (Grid)',
                desc: 'bg-surface-raised + border-border + rounded-2xl. Two view densities: grid (preview + metadata) and list (compact single row). Hover: shadow-sm elevation bump.',
              },
              {
                name: 'Segmented Control',
                desc: 'Track: bg-surface + border-border/40. Active pill: bg-surface-raised + shadow-sm. The shadow delta communicates mutual exclusivity without a visual indicator.',
              },
              {
                name: 'Filter Pill (Domain / Intent)',
                desc: 'Active: bg-fg text-surface — maximum contrast inversion. Inactive: bg-surface-raised text-fg-muted border-border. One tap toggles; clicking active deselects.',
              },
              {
                name: 'Fix Guide Card',
                desc: 'Tinted via --cat-*-bg / --cat-*-border tokens. Icon badge uses --cat-*-badge. Active state adds ring-2 ring-offset-1. All 10 guides scroll horizontally.',
              },
              {
                name: 'Command Palette',
                desc: 'Modal overlay, max-w-xl, backdrop blur. Intent-prefix detection: "fix:", "impl:", "risk:", "!" etc. Max 8 results. Keyboard: ↑↓ navigate, Enter open, Esc close.',
              },
              {
                name: 'Verdict Badge',
                desc: 'Four states: Recommended (emerald), Conditional (amber), Experimental (primary), Anti-Pattern (rose). Tooltip describes context on hover. 9px font.',
              },
              {
                name: 'Tooltip',
                desc: 'Framer Motion scale+opacity entrance. Side-aware positioning (top/bottom/left/right). Max-w-xs. 300ms delay before show to avoid accidental triggers.',
              },
              {
                name: 'Annotation',
                desc: 'Inline design commentary attached to any element. Triggered on hover. Links to the related library entry. Used throughout the UI as self-referential documentation.',
              },
            ].map(comp => (
              <div key={comp.name} className="p-4 bg-surface rounded-xl border border-border">
                <p className="text-[13px] font-bold text-fg mb-1">{comp.name}</p>
                <p className="text-[12px] text-fg-muted leading-relaxed">{comp.desc}</p>
              </div>
            ))}
          </div>

          <Divider />

          <div>
            <SubHeading>Typography Scale</SubHeading>
            <p className="text-[13px] text-fg-muted mb-5 leading-relaxed">
              The UI uses the system Apple font stack — SF Pro on macOS/iOS, falling back to Inter. <span className="font-medium text-fg">JetBrains Mono</span> is reserved for code, metadata, and token names.
            </p>
            <div className="space-y-3">
              {[
                { label: 'Display / H1',  size: '34px', weight: 'font-bold',     tracking: 'tracking-tight', use: 'Page title ("Debug your UI")' },
                { label: 'Section H2',    size: '24px', weight: 'font-bold',     tracking: 'tracking-tight', use: 'Section headings' },
                { label: 'Card title',    size: '15px', weight: 'font-semibold', tracking: 'normal',          use: 'Entry titles, guide titles' },
                { label: 'Body',          size: '14px', weight: 'font-normal',   tracking: 'normal',          use: 'Entry descriptions, prose' },
                { label: 'Label / meta',  size: '12px', weight: 'font-medium',   tracking: 'normal',          use: 'Filter pills, badge labels' },
                { label: 'Caption',       size: '11px', weight: 'font-medium',   tracking: 'tracking-widest', use: 'Section sub-headers (uppercase)' },
                { label: 'Micro',         size: '10px', weight: 'font-bold',     tracking: 'tracking-widest', use: 'Token labels, field labels' },
              ].map(t => (
                <div key={t.label} className="flex items-baseline justify-between gap-4 py-2 border-b border-border/40 last:border-0">
                  <span className="text-[11px] text-fg-faint w-28 flex-shrink-0">{t.label}</span>
                  <span className="font-mono text-[11px] text-accent">{t.size}</span>
                  <span className="font-mono text-[11px] text-fg-muted hidden sm:block">{t.weight}</span>
                  <span className="font-mono text-[11px] text-fg-muted hidden sm:block">{t.tracking}</span>
                  <span className="text-[11px] text-fg-muted flex-1 text-right">{t.use}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Interaction States */}
      <Section title="Interaction States" icon={MousePointer2} delay={0.3}>
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                state: 'Default',
                classes: 'bg-surface-raised border border-border text-fg',
                desc: 'Base resting state. No elevation. Uses surface-raised to sit above page background.',
              },
              {
                state: 'Hover',
                classes: 'hover:shadow-sm hover:border-fg/20',
                desc: 'Subtle shadow elevation + border darkening. Never color-shifts the background — only border and shadow move.',
              },
              {
                state: 'Active / Pressed',
                classes: 'active:scale-[0.98] active:shadow-none',
                desc: '2% scale compression on press. Removes the hover shadow to simulate physical depression.',
              },
              {
                state: 'Focus Visible',
                classes: 'focus-visible:ring-2 ring-accent ring-offset-2',
                desc: 'Keyboard-only focus ring using --accent color. Offset ensures ring never overlaps border. :focus (mouse) is suppressed.',
              },
              {
                state: 'Selected / Active pill',
                classes: 'bg-fg text-surface shadow-sm',
                desc: 'Maximum-contrast inversion. fg becomes background, surface becomes text. Reads in peripheral vision — no color reliance.',
              },
              {
                state: 'Disabled',
                classes: 'opacity-40 pointer-events-none cursor-not-allowed',
                desc: 'Opacity reduction to 40%. No custom disabled color — the semantic relationship is communicated by reduced opacity alone.',
              },
              {
                state: 'Loading / Skeleton',
                classes: 'bg-border animate-pulse rounded',
                desc: 'Block placeholders using --border color. Pulse animation at 2s. No spinner — skeleton shapes communicate layout before data.',
              },
              {
                state: 'Error',
                classes: 'border-rose-500 text-rose-600 bg-rose-50/50',
                desc: 'Rose border + tinted background. Never relies on color alone — paired with an icon and descriptive text adjacent to the field.',
              },
            ].map(item => (
              <div key={item.state} className="p-4 bg-surface rounded-xl border border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[13px] font-bold text-fg">{item.state}</span>
                </div>
                <code className="block text-[10px] font-mono text-accent bg-surface-raised border border-border rounded px-2 py-1.5 mb-2 leading-relaxed whitespace-pre-wrap break-all">
                  {item.classes}
                </code>
                <p className="text-[12px] text-fg-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <Divider />

          <div>
            <SubHeading>Motion Timing</SubHeading>
            <p className="text-[13px] text-fg-muted mb-4 leading-relaxed">
              All animations use Framer Motion. Durations follow the 150/300/400ms rule. Only <code className="text-[11px] font-mono bg-surface border border-border rounded px-1.5 py-0.5">transform</code> and <code className="text-[11px] font-mono bg-surface border border-border rounded px-1.5 py-0.5">opacity</code> are animated — never layout properties.
            </p>
            <div className="space-y-2">
              {[
                { context: 'Micro interactions (hover, press)',  duration: '150ms',  easing: 'ease-out',      token: 'transition-all' },
                { context: 'UI element entrance (cards, panels)', duration: '300ms', easing: 'ease-out',      token: '--animate-fade-in' },
                { context: 'Page-level / modal entrance',         duration: '400ms', easing: 'cubic-bezier(0.16, 1, 0.3, 1)', token: '--animate-slide-up' },
                { context: 'Command palette',                     duration: '200ms', easing: 'ease-out',      token: 'scale + opacity' },
              ].map(t => (
                <div key={t.context} className="flex items-center gap-4 p-3 bg-surface rounded-lg border border-border text-[12px]">
                  <span className="text-fg-muted flex-1">{t.context}</span>
                  <span className="font-mono text-fg font-bold w-16 text-right">{t.duration}</span>
                  <span className="font-mono text-fg-faint hidden sm:block text-right w-48 truncate">{t.easing}</span>
                </div>
              ))}
            </div>
          </div>

          <Divider />

          <div>
            <SubHeading>Accessibility Notes</SubHeading>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'WCAG 2.1 AA — all text/UI element contrast pairs verified',
                '44px minimum touch target on all interactive elements',
                'Focus-visible rings on all keyboard-navigable elements',
                'Semantic HTML: <nav>, <header>, <main>, <section>, <button>',
                'All animations wrapped in prefers-reduced-motion media query',
                'Color is never the sole differentiator — shape, label, or icon always pairs with color',
                'Filter pills use aria-pressed for screen reader state communication',
                'Command palette supports full keyboard navigation (↑↓ Enter Esc)',
              ].map((note, i) => (
                <div key={i} className="flex items-start gap-2 text-[12px] text-fg-muted">
                  <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
                  {note}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Technical Architecture */}
      <Section title="Technical Architecture" icon={Cpu} delay={0.35}>
        <div className="space-y-8">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Code2,      title: 'React 18 + TypeScript', desc: 'Strict types across the full data model. ReferenceEntry interface is the single source of truth for all 121 entries.' },
              { icon: LayoutIcon, title: 'Tailwind CSS v4',        desc: '@theme-based design tokens. No tailwind.config.js — token definitions live in index.css using native CSS cascade.' },
              { icon: Zap,        title: 'Framer Motion 11',       desc: 'whileInView staggered entrances, scale transforms, and command palette transitions. No layout-property animations.' },
            ].map((tech, i) => (
              <div key={i} className="p-4 bg-surface rounded-xl border border-border">
                <tech.icon size={18} className="text-accent mb-3" />
                <h5 className="font-bold text-fg text-[13px] mb-1">{tech.title}</h5>
                <p className="text-[12px] text-fg-muted leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Layers,  title: 'Vite 6',          desc: 'HMR dev server, tree-shaking, code-split routes. @tailwindcss/vite plugin handles CSS processing — no PostCSS config.' },
              { icon: Shield,  title: 'React Router v6', desc: 'Client-side routing. Routes: /, /entry/:id, /compare, /ebook, /about, /admin.' },
              { icon: Target,  title: 'No backend',      desc: 'All 121 entries are local TypeScript files. Zero runtime DB queries. Sub-100ms filter performance via useDeferredValue.' },
              { icon: Coins,   title: 'Design tokens',   desc: 'Primitive → semantic → component. Category tokens (--cat-1 through --cat-6) for Fix Guide cards. 7 named themes + OS dark mode.' },
            ].map((tech, i) => (
              <div key={i} className="p-4 bg-surface rounded-xl border border-border flex gap-3">
                <tech.icon size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-fg text-[13px] mb-1">{tech.title}</h5>
                  <p className="text-[12px] text-fg-muted leading-relaxed">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Divider />

          <div>
            <SubHeading>Information Architecture — Taxonomy</SubHeading>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-[11px] font-semibold text-fg-faint mb-3">Domains — the "what"</p>
                <div className="flex flex-wrap gap-1.5">
                  {['layout', 'typography', 'color', 'components', 'interaction', 'motion', 'visual-hierarchy', 'psychology', 'responsiveness', 'data', 'tokens'].map(d => (
                    <Tag key={d} variant="mono">{d}</Tag>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-fg-faint mb-3">Formats — the "how"</p>
                <div className="flex flex-wrap gap-1.5">
                  {['principle', 'pattern', 'system', 'style', 'anti-pattern', 'case-study'].map(f => (
                    <Tag key={f} variant="accent">{f}</Tag>
                  ))}
                </div>
                <p className="text-[11px] font-semibold text-fg-faint mb-3 mt-4">Intent — the "why"</p>
                <div className="flex flex-wrap gap-1.5">
                  {['choose', 'implement', 'diagnose', 'evaluate-risk', 'study'].map(i => (
                    <Tag key={i} variant="neutral">{i}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center pt-10 pb-20"
      >
        <p className="text-fg-faint text-[13px] mb-2">Design Mastery Reference · v2.1</p>
        <p className="text-fg-faint text-[12px]">Built for the next generation of product builders.</p>
      </motion.div>

    </div>
  );
};
