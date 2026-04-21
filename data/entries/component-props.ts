import { ReferenceEntry } from '../../types';

export const component_props: ReferenceEntry = {
  id: "component-props",
  title: "Component Properties",
  domain: "tokens",
  format: "system",
  verdict: "recommended",
  useContext: ["saas", "systems", "devtools"],
  confidenceScore: 94,
  slug: "component-props",
  complexity: "intermediate",
  description: "Creating robust, configurable components using variants instead of separate files.",
  quickTake: "Component Architecture & Props is the practice of designing highly reusable UI elements that use properties (props) to handle variations in style, size, and state.",
  whyItMatters: "Without a robust prop strategy, design systems explode into hundreds of one-off components (e.g., 'RedButton', 'BigButton'). A well-architected component is easier to maintain, test, and scale.",
  mechanism: [
    "Define a clear set of 'Variants' (e.g., Primary, Secondary, Ghost)",
    "Use 'Size' props (e.g., sm, md, lg) to handle scaling",
    "Leverage 'Boolean' props for simple toggles (e.g., isLoading, isDisabled)",
    "Use 'Slots' or 'Children' to allow for flexible content injection"
  ],
  whenToUse: [
    "Building a shared component library or design system",
    "Developing complex, multi-state UI elements like Modals or Data Tables",
    "Ensuring consistency across a large engineering team"
  ],
  whenNotToUse: [
    "Small, one-off prototypes where reusability isn't a priority",
    "When a component becomes a 'God Component' with 50+ props, making it impossible to understand",
    "When the variations are so different that they should be separate components"
  ],
  tradeoffs: [
    { pro: "Drastically reduces code duplication and maintenance effort", con: "Can lead to complex internal logic and 'Prop Soup'" },
    { pro: "Enforces design consistency across the entire application", con: "Requires careful planning and documentation to be effective" }
  ],
  failureModes: [
    "The 'Prop Soup': Passing too many unrelated props to a single component",
    "Rigid Design: Not providing enough flexibility for valid edge cases",
    "Inconsistent Naming: Using 'color' in one component and 'variant' in another for the same concept"
  ],
  alternatives: [
    { entryId: "atomic-design", condition: "Use to determine where the component fits in the overall hierarchy" },
    { entryId: "design-tokens", condition: "Use to drive the values passed into the props (e.g., colors, spacing)" }
  ],
  a11ySpecs: [
    "Ensure that props like 'isDisabled' correctly update ARIA attributes",
    "Provide props for 'aria-label' when the component doesn't have visible text",
    "Maintain focus management logic within complex components"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Use 'class-variance-authority' (CVA) to manage complex Tailwind class combinations",
    "Leverage TypeScript interfaces to provide autocomplete and type safety for props",
    "Document every prop with JSDoc comments for better developer experience"
  ],
  checklist: [
    "Separated semantic props from styling escape hatches",
    "Documented controlled, uncontrolled, and async state contracts",
    "Rejected boolean prop combinations that create invalid component states"
  ],
  relatedEntryIds: ['atomic-design', 'design-tokens'],
  interactiveComponent: "ComponentPropsDemo",
  tags: ["React","Props","Scalability"],
  content: `

# Configurable Components

In a mature Design System, you don't build \`RedButton\`, \`BlueButton\`, and \`BigButton\`. You build a single **Button** component with properties.

### The Variant Pattern
Using props to control visual styles makes the library easier to maintain.
    
`,
  intentTags: ["reduce-cognitive-load", "improve-performance"],
};
