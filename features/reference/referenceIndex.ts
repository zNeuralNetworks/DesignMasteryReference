import { ReferenceEntry } from '@/types';

export type SortMode = 'title' | 'confidence' | 'risk' | 'perf';
export type QuickFilter = 'all' | 'high-risk' | 'implementation' | 'accessibility';
export type IntentFilter = 'all' | 'choose' | 'implement' | 'diagnose' | 'evaluate-risk' | 'study';

const perfWeight: Record<ReferenceEntry['perfImpact'], number> = {
  low: 1,
  medium: 2,
  high: 3,
};

const joinText = (values: string[] = []) => values.join(' ');

export const getReferenceSearchText = (entry: ReferenceEntry) => [
  entry.title,
  entry.description,
  entry.quickTake,
  entry.whyItMatters,
  entry.domain,
  entry.format,
  entry.verdict,
  entry.perfImpact,
  entry.complexity,
  joinText(entry.tags),
  joinText(entry.useContext),
  joinText(entry.mechanism),
  joinText(entry.whenToUse),
  joinText(entry.whenNotToUse),
  joinText(entry.failureModes),
  joinText(entry.a11ySpecs),
  joinText(entry.implementationNotes),
  joinText(entry.checklist),
  joinText(entry.intentTags),
  entry.alternatives.map((alternative) => alternative.condition).join(' '),
].join(' ').toLowerCase();

export const sortReferenceEntries = (items: ReferenceEntry[], sortMode: SortMode) => {
  return [...items].sort((a, b) => {
    if (sortMode === 'confidence') return b.confidenceScore - a.confidenceScore || a.title.localeCompare(b.title);
    if (sortMode === 'perf') return perfWeight[b.perfImpact] - perfWeight[a.perfImpact] || a.title.localeCompare(b.title);
    if (sortMode === 'risk') {
      const aRisk = (a.verdict === 'anti-pattern' ? 10 : 0) + perfWeight[a.perfImpact];
      const bRisk = (b.verdict === 'anti-pattern' ? 10 : 0) + perfWeight[b.perfImpact];
      return bRisk - aRisk || a.title.localeCompare(b.title);
    }
    return a.title.localeCompare(b.title);
  });
};

export const matchesQuickFilter = (entry: ReferenceEntry, quickFilter: QuickFilter) => {
  return (
    quickFilter === 'all' ||
    (quickFilter === 'high-risk' && (entry.verdict === 'anti-pattern' || entry.perfImpact === 'high')) ||
    (quickFilter === 'implementation' && entry.implementationNotes.length > 0) ||
    (quickFilter === 'accessibility' && entry.a11ySpecs.length > 0)
  );
};

export const matchesIntentFilter = (entry: ReferenceEntry, intent: IntentFilter) => {
  if (intent === 'all') return true;
  if (intent === 'choose') return entry.alternatives.length > 0 || entry.verdict === 'conditional';
  if (intent === 'implement') return entry.implementationNotes.length > 3 || !!entry.codeSnippet;
  if (intent === 'diagnose') return entry.failureModes.length > 0 || entry.verdict === 'anti-pattern';
  if (intent === 'evaluate-risk') return entry.perfImpact === 'high' || entry.a11ySpecs.length > 0;
  if (intent === 'study') return entry.format === 'case-study' || !!entry.interactiveComponent;
  return true;
};

export const filterReferenceEntries = ({
  entries,
  query,
  domain,
  format,
  verdict,
  quickFilter,
  intentFilter,
  sortMode,
}: {
  entries: ReferenceEntry[];
  query: string;
  domain: ReferenceEntry['domain'] | 'All';
  format: ReferenceEntry['format'] | 'All';
  verdict: ReferenceEntry['verdict'] | 'All';
  quickFilter: QuickFilter;
  intentFilter: IntentFilter;
  sortMode: SortMode;
}) => {
  const normalizedQuery = query.trim().toLowerCase();
  const filtered = entries.filter((entry) => {
    const matchesSearch = !normalizedQuery || getReferenceSearchText(entry).includes(normalizedQuery);
    const matchesDomain = domain === 'All' || entry.domain === domain;
    const matchesFormat = format === 'All' || entry.format === format;
    const matchesVerdict = verdict === 'All' || entry.verdict === verdict;
    return matchesSearch && matchesDomain && matchesFormat && matchesVerdict && matchesQuickFilter(entry, quickFilter) && matchesIntentFilter(entry, intentFilter);
  });

  return sortReferenceEntries(filtered, sortMode);
};

export const getReferenceHref = (entry: ReferenceEntry) => `/reference/${entry.id}`;
