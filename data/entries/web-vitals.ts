import { ReferenceEntry } from '../../types';

export const web_vitals: ReferenceEntry = {
  id: "web-vitals",
  title: "Core Web Vitals: CLS",
  domain: "tokens",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "content", "mobile"],
  confidenceScore: 98,
  slug: "web-vitals",
  complexity: "intermediate",
  description: "Google's standardized metrics for measuring user experience: LCP, INP, and CLS.",
  quickTake: "Core Web Vitals provide a quantified baseline for 'User Experience' that directly impacts SEO rankings and user retention.",
  whyItMatters: "A 1-second delay in mobile load times can impact conversion rates by up to 20%. Web Vitals turn 'feeling slow' into actionable technical targets.",
  mechanism: [
    "LCP (Largest Contentful Paint): Measures loading performance (< 2.5s)",
    "INP (Interaction to Next Paint): Measures responsiveness (< 200ms)",
    "CLS (Cumulative Layout Shift): Measures visual stability (< 0.1)"
  ],
  whenToUse: [
    "Optimizing landing pages for SEO",
    "Improving the performance of data-heavy dashboards",
    "Auditing mobile web experiences"
  ],
  whenNotToUse: [
    "Internal tools where SEO is irrelevant (though UX still matters)",
    "Single-use prototypes or proof-of-concepts"
  ],
  tradeoffs: [
    { pro: "Direct correlation with business metrics (conversion, bounce rate)", con: "Requires significant engineering effort to maintain high scores" },
    { pro: "Standardized language for designers and engineers", con: "Lab data (Lighthouse) can differ significantly from Field data (RUM)" }
  ],
  failureModes: [
    "The 'Flicker' Effect: Skeletons that don't match final content causing CLS",
    "JavaScript Bloat: Heavy bundles delaying LCP and INP",
    "Unoptimized Assets: Large images or uncompressed fonts killing LCP"
  ],
  alternatives: [
    { entryId: "skeleton-screens", condition: "Use to reduce perceived wait time and prevent CLS" },
    { entryId: "virtualization", condition: "Use to maintain high INP on long lists" }
  ],
  a11ySpecs: [
    "Ensure performance optimizations don't break screen reader focus",
    "Avoid 'Lazy Loading' critical above-the-fold content",
    "Maintain high contrast during 'Font Loading' states"
  ],
  perfImpact: "high",
  implementationNotes: [
    "Use 'aspect-ratio' in CSS to reserve space for images and prevent CLS",
    "Prioritize 'Critical CSS' to speed up LCP",
    "Use 'requestIdleCallback' for non-essential JavaScript to keep the main thread free for INP"
  ],
  checklist: [
    "Measured field data before relying on lab-only Lighthouse scores",
    "Mapped LCP, INP, and CLS regressions to owning components",
    "Set performance budgets that fail builds or release checks when exceeded"
  ],
  relatedEntryIds: ['performance-tuning', 'debounce-throttle', 'virtualization'],
  interactiveComponent: "WebVitalsDemo",
  tags: ["Optimization","Web Vitals","CSS"],
  contentStatus: 'hardened',
  content: `

# Cumulative Layout Shift (CLS)

CLS measures the visual stability of a page. It occurs when visible elements change their position unexpectedly.

### Common Causes
1.  **Images without dimensions**: The browser doesn't know the size until the image downloads, pushing text down.
2.  **Ads/Embeds**: Dynamically injected content.
3.  **Web Fonts**: FOIT (Flash of Invisible Text) or FOUT (Flash of Unstyled Text).
    
`,
  intentTags: ["improve-performance", "improve-feedback"],
};
