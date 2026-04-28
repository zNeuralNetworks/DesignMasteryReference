import { ReferenceEntry } from '../../types';

export const atomic_design: ReferenceEntry = {
  id: "atomic-design",
  title: "Atomic Design Principles",
  domain: "tokens",
  format: "system",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "devtools"],
  confidenceScore: 88,
  slug: "atomic-design",
  complexity: "intermediate",
  description: "Methodology for creating design systems by breaking layouts down into basic building blocks.",
  quickTake: "Atomic Design provides a mental model for scaling design systems from the smallest tag (Atom) to the most complex layout (Page).",
  whyItMatters: "Without a clear hierarchy, design systems become a flat list of components that are hard to maintain and inconsistent to use.",
  mechanism: [
    "Atoms: Smallest functional units (Buttons, Inputs, Labels)",
    "Molecules: Groups of atoms (Search Bar, Form Field)",
    "Organisms: Complex sections (Header, Sidebar, Card Grid)",
    "Templates: Page-level layouts without real data",
    "Pages: Final instances with real content"
  ],
  whenToUse: [
    "Building a new design system from scratch",
    "Auditing an existing UI for consistency",
    "Communicating component hierarchy to developers"
  ],
  whenNotToUse: [
    "Small, one-off projects where overhead is too high",
    "Teams that prefer a 'flat' component library (e.g., just 'Components' and 'Views')",
    "When the 'chemistry' metaphor causes more confusion than clarity"
  ],
  tradeoffs: [
    { pro: "Clear, logical hierarchy for scaling", con: "Can lead to over-engineering and deep prop-drilling" },
    { pro: "Promotes reusability at every level", con: "The distinction between 'Molecule' and 'Organism' is often subjective" }
  ],
  failureModes: [
    "Spending too much time on 'Atoms' before building real features",
    "Creating too many 'Molecules' that are only used once",
    "Rigid adherence to the hierarchy preventing pragmatic solutions"
  ],
  alternatives: [
    { entryId: "design-tokens", condition: "Use for the 'Sub-Atomic' layer (colors, spacing, typography)" },
    { entryId: "component-props", condition: "Use to manage variations within a single component level" }
  ],
  a11ySpecs: [
    "Accessibility must be baked into the 'Atoms' level to propagate upward",
    "Ensure 'Organisms' manage focus and landmark roles correctly",
    "Test 'Templates' with various content lengths to ensure reflow"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Map your folder structure to the Atomic levels (e.g., src/components/atoms/)",
    "Use Storybook to document components at each level",
    "Focus on the 'Organism' level for the best balance of reuse and speed"
  ],
  checklist: [
    "Defined ownership boundaries between tokens, primitives, and composed patterns",
    "Prevented organism-level components from leaking product-specific state",
    "Mapped component hierarchy to documentation and package structure"
  ],
  relatedEntryIds: ['design-tokens', 'component-props'],
  interactiveComponent: "AtomicDesignDemo",
  tags: ["Architecture","Scalability","Components"],
  contentStatus: 'hardened',
  content: `

# Atomic Design

Coined by Brad Frost, this methodology draws a parallel between chemistry and interface design.

1.  **Atoms**: Basic tags (Labels, Inputs, Buttons, Icons).
2.  **Molecules**: Groups of atoms working together (Search Form = Label + Input + Button).
3.  **Organisms**: Groups of molecules (Header = Logo + Search Form + Nav).
    
`,
  intentTags: ["reduce-cognitive-load", "improve-performance"],
};
