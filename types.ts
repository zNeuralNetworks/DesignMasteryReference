

export type Domain =
  | 'layout'
  | 'typography'
  | 'color'
  | 'components'
  | 'interaction'
  | 'motion'
  | 'visual-hierarchy'
  | 'psychology'
  | 'responsiveness'
  | 'data'
  | 'tokens';

export type IntentTag =
  | 'fix-alignment'
  | 'improve-readability'
  | 'increase-emphasis'
  | 'reduce-cognitive-load'
  | 'improve-feedback'
  | 'increase-density'
  | 'improve-aesthetics'
  | 'fix-accessibility'
  | 'improve-performance';
export type Format = 'principle' | 'pattern' | 'system' | 'style' | 'anti-pattern' | 'case-study';
export type Verdict = 'recommended' | 'conditional' | 'experimental' | 'anti-pattern';
export type UseContext = 
  | 'saas' 
  | 'mobile' 
  | 'dashboard' 
  | 'devtools' 
  | 'content' 
  | 'edtech' 
  | 'onboarding' 
  | 'marketing' 
  | 'marketplace' 
  | 'maps' 
  | 'consumer' 
  | 'gamification' 
  | 'visual-design' 
  | 'productivity' 
  | 'systems' 
  | 'assessment' 
  | 'survey' 
  | 'social' 
  | 'psychology' 
  | 'product-growth' 
  | 'gaming' 
  | 'portfolio' 
  | 'accessibility' 
  | 'big-data';

export interface ReferenceEntry {
  id: string;
  slug: string;
  title: string;
  domain: Domain;
  format: Format;
  verdict: Verdict;
  useContext: UseContext[];
  complexity: 'basic' | 'beginner' | 'intermediate' | 'advanced';
  confidenceScore: number; // 0-100
  description: string;
  quickTake: string;
  whyItMatters: string;
  content: string; // Markdown supported
  interactiveComponent?: string;
  mechanism: string[];
  whenToUse: string[];
  whenNotToUse: string[];
  tradeoffs: { pro: string; con: string }[];
  failureModes: string[];
  alternatives: { entryId: string; condition: string }[];
  commonPitfalls?: string[];
  implementationNotes: string[];
  a11ySpecs: string[];
  perfImpact: 'low' | 'medium' | 'high';
  implementationRisk?: 'low' | 'medium' | 'high';
  contentStatus?: 'draft' | 'hardened' | 'flagship';
  checklist: string[];
  codeSnippet?: {
    language: string;
    code: string;
  };
  relatedEntryIds: string[];
  tags: string[];
  intentTags?: IntentTag[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export type TestResult = {
  id: string;
  name: string;
  status: 'pending' | 'running' | 'pass' | 'fail';
  error?: string;
  duration?: number;
};
