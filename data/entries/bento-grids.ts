import { ReferenceEntry } from '../../types';

export const bento_grids: ReferenceEntry = {
  id: "bento-grids",
  title: "Bento Grids",
  domain: "layout",
  format: "style",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "marketing"],
  confidenceScore: 92,
  slug: "bento-grids",
  complexity: "intermediate",
  description: "The modular, block-based layout style popularized by Apple and Linear.",
  quickTake: "Bento Grids use a modular, rectangular layout to organize diverse content types into a high-density, visually balanced grid.",
  whyItMatters: "Modern SaaS apps need to showcase features, metrics, and visuals simultaneously. Bento Grids provide a structured way to handle this complexity without feeling cluttered.",
  mechanism: [
    "Define a base grid (usually 4 or 12 columns)",
    "Create rectangular 'cells' of varying sizes (spans)",
    "Apply consistent border-radius (usually 16px-24px) and padding",
    "Use visual hierarchy to make the most important cell the largest"
  ],
  whenToUse: [
    "Marketing landing pages (Feature showcases)",
    "Personal portfolios and 'Link-in-bio' pages",
    "Analytics dashboards with diverse widget types"
  ],
  whenNotToUse: [
    "Data-heavy tables where linear scanning is required",
    "Long-form reading experiences where a single column is better",
    "When content is too sparse, leading to 'empty box' syndrome"
  ],
  tradeoffs: [
    { pro: "High visual appeal and modern 'premium' feel", con: "Can be difficult to make responsive without careful grid planning" },
    { pro: "Excellent for showcasing diverse media types", con: "Risk of 'Grid Fatigue' if every section of the site uses it" }
  ],
  failureModes: [
    "The 'Tetris' Problem: Trying to fit too many odd-sized cells into a single row",
    "Mobile Collapse: Grids that look great on desktop but become a never-ending stack on mobile",
    "Inconsistent Gaps: Using different margins between cells, breaking the modular feel"
  ],
  alternatives: [
    { entryId: "visual-essays", condition: "Use for more narrative, scroll-driven storytelling" },
    { entryId: "atomic-design", condition: "Use to ensure the components inside the grid are consistent" }
  ],
  a11ySpecs: [
    "Ensure the DOM order follows a logical reading path (left-to-right, top-to-bottom)",
    "Use semantic sectioning for each grid cell",
    "Maintain sufficient contrast between cell backgrounds and text"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Use CSS Grid (\`display: grid\`) with \`grid-template-columns\` for the best control",
    "Leverage Tailwind's \`col-span\` and \`row-span\` utilities",
    "Use 'Container Queries' to adjust cell layouts based on their own width"
  ],
  checklist: [
    "Assigned each tile a clear information priority before sizing the grid",
    "Verified the responsive order still matches task importance",
    "Avoided mixing unrelated content types just to fill the layout"
  ],
  relatedEntryIds: ['gestalt-common-region', 'gestalt-proximity', 'cognitive-chunking'],
  interactiveComponent: "BentoGrid",
  tags: ["Layout","CSS Grid","Modern UI","grid layout","card layout","fix layout","dashboard layout","content arrangement","modular layout"],
  content: `

# Bento Box Layouts

Named after the Japanese lunch box, **Bento Grids** separate content into distinct, rectangular cells. This trend has taken over marketing sites and dashboards in 2024.

### Why it works
*   **Hierarchy**: Larger cells command more attention.
*   **Responsiveness**: Grids naturally reflow for mobile devices.
*   **Content Density**: Allows showcasing diverse media types (video, text, graphs) side-by-side harmoniously.

### Implementation
CSS Grid is the hero here. Using \`grid-template-areas\` or simply \`col-span-x\` and \`row-span-y\` classes makes building these intuitive.
    
`,
  intentTags: ["fix-alignment", "improve-aesthetics"],
};
