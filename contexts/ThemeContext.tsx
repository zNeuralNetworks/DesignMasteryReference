import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ThemeMeta {
  id: string;
  label: string;
  tagline: string;
  cssClass: string;
  surface: string;
  surfaceRaised: string;
  accent: string;
  fg: string;
  entryId: string;
}

export const THEMES: ThemeMeta[] = [
  { id: 'default',             label: 'Default',             tagline: 'Apple-inspired system UI',          cssClass: '',                          surface: '#F5F5F7', surfaceRaised: '#ffffff', accent: '#0071E3', fg: '#1D1D1F', entryId: '' },
  { id: 'bioluminescent',      label: 'Bioluminescent',      tagline: 'Deep navy with cyan glow',          cssClass: 'theme-bioluminescent',      surface: '#050810', surfaceRaised: '#0a1628', accent: '#06b6d4', fg: '#e0f2fe', entryId: 'theme-bioluminescent' },
  { id: 'swiss',               label: 'Swiss Polarity',      tagline: 'Neo-brutalist high contrast',       cssClass: 'theme-swiss',               surface: '#ffffff', surfaceRaised: '#ffffff', accent: '#dc2626', fg: '#171717', entryId: 'theme-swiss-polarity' },
  { id: 'operator-console',    label: 'Operator Console',    tagline: 'Phosphor terminal, amber on black', cssClass: 'theme-operator-console',    surface: '#0d1117', surfaceRaised: '#161b22', accent: '#f59e0b', fg: '#e6edf3', entryId: 'theme-operator-console' },
  { id: 'quiet-luxury',        label: 'Quiet Luxury',        tagline: 'Warm cream editorial restraint',    cssClass: 'theme-quiet-luxury',        surface: '#faf7f2', surfaceRaised: '#ffffff', accent: '#c2714f', fg: '#1a1611', entryId: 'theme-quiet-luxury' },
  { id: 'system-atlas',        label: 'System Atlas',        tagline: 'Cool zinc reference document',      cssClass: 'theme-system-atlas',        surface: '#fafafa', surfaceRaised: '#ffffff', accent: '#2563eb', fg: '#18181b', entryId: 'theme-system-atlas' },
  { id: 'technical-blueprint', label: 'Technical Blueprint', tagline: 'Prussian blue engineering draft',   cssClass: 'theme-technical-blueprint', surface: '#002855', surfaceRaised: '#003366', accent: '#9ec8ff', fg: '#ffffff', entryId: 'theme-technical-blueprint' },
];

interface ThemeContextValue {
  activeTheme: ThemeMeta;
  setTheme: (id: string) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  activeTheme: THEMES[0],
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeId, setActiveId] = useState<string>(() => {
    const stored = localStorage.getItem('dm-theme') ?? '';
    return THEMES.find(t => t.cssClass === stored)?.id ?? 'default';
  });

  useEffect(() => {
    const theme = THEMES.find(t => t.id === activeId) ?? THEMES[0];
    document.documentElement.className = theme.cssClass;
    localStorage.setItem('dm-theme', theme.cssClass);
  }, [activeId]);

  const activeTheme = THEMES.find(t => t.id === activeId) ?? THEMES[0];

  return (
    <ThemeContext.Provider value={{ activeTheme, setTheme: setActiveId }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
