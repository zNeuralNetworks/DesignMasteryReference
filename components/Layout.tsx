import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Lightbulb } from 'lucide-react';
import { AnnotationProvider, useAnnotations } from '@/contexts/AnnotationContext';
import { Annotation } from '@/components/Annotation';
import { ThemeProvider, THEMES, useTheme } from '@/contexts/ThemeContext';
import { Tooltip } from '@/components/Tooltip';

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AnnotationToggle = () => {
  const { isOn, toggle } = useAnnotations();
  return (
    <Tooltip
      content={isOn ? 'Exit annotation mode' : 'Hover blue pins to inspect design decisions'}
      side="bottom"
    >
      <button
        onClick={toggle}
        className={`hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-medium transition-all ${
          isOn
            ? 'bg-primary-50 text-primary-600 border-primary-200'
            : 'bg-transparent text-fg-faint border-border hover:border-primary-300 hover:text-primary-600'
        }`}
      >
        <Lightbulb size={11} />
        {isOn ? 'Annotating' : 'Annotate'}
      </button>
    </Tooltip>
  );
};

const ThemeSwitcher = () => {
  const { activeTheme, setTheme } = useTheme();
  return (
    <div className="hidden md:flex items-center gap-1.5">
      {THEMES.map((t) => (
        <Tooltip
          key={t.id}
          side="bottom"
          content={
            <span className="flex flex-col gap-0.5">
              <span className="font-semibold">{t.label}</span>
              <span className="text-slate-400 font-normal">{t.tagline}</span>
            </span>
          }
        >
          <button
            onClick={() => setTheme(t.id)}
            className={`w-3.5 h-3.5 rounded-full transition-all flex-shrink-0 ${
              activeTheme.id === t.id ? 'ring-2 ring-offset-1 ring-slate-400 scale-110' : 'opacity-60 hover:opacity-90'
            }`}
            style={{ backgroundColor: t.accent }}
          />
        </Tooltip>
      ))}
    </div>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <ThemeProvider>
    <AnnotationProvider>
    <div className="min-h-screen font-sans flex flex-col bg-surface text-fg">
      <ScrollToTop />

      {/* Navigation — Apple-style translucent bar */}
      <nav className="sticky top-0 z-50">
      <Annotation
        title="Translucent Navigation"
        body="bg-surface-raised/90 + backdrop-blur-xl creates a glass effect: the page content bleeds through as you scroll, establishing a visual layer hierarchy without a hard border."
        entryId="glassmorphism"
        side="bottom"
      >
      <div className="bg-surface-raised/90 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 bg-accent rounded-lg flex items-center justify-center text-white text-[11px] font-bold tracking-tight group-hover:opacity-85 transition-opacity shadow-sm">
              DM
            </div>
            <span className="font-semibold text-[15px] tracking-tight text-fg">Design Mastery Reference</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <AnnotationToggle />
            <Annotation
              title="Semantic Theme Tokens"
              body="Each dot applies a CSS class to <html> that overrides --surface, --fg, --accent tokens. Every component responds without touching component code — the entire visual system is a cascade of one attribute."
              entryId="design-tokens"
              side="bottom"
            >
              <ThemeSwitcher />
            </Annotation>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-7 text-[14px] font-medium text-fg-muted">
              <Link
                to="/"
                className={`transition-colors hover:text-fg ${pathname === '/' ? 'text-fg' : ''}`}
              >
                Library
              </Link>
              <Link
                to="/about"
                className={`transition-colors hover:text-fg ${pathname === '/about' ? 'text-fg' : ''}`}
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
      </Annotation>
      </nav>

      <main className="flex-1 w-full">
        {children}
      </main>

      {isHome && (
        <div className="border-t border-border py-6 flex items-center justify-center bg-surface">
          <p className="text-[12px] text-fg-faint">Design Mastery Reference — Built for fast professional lookup.</p>
        </div>
      )}
    </div>
    </AnnotationProvider>
    </ThemeProvider>
  );
};
