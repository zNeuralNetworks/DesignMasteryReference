import { ReferenceEntry } from '../../types';

export const case_study_linear: ReferenceEntry = {
  id: "case-study-linear",
  title: "Case Study: Linear",
  domain: "tokens",
  format: "case-study",
  verdict: "recommended",
  useContext: ["saas", "productivity", "devtools"],
  confidenceScore: 98,
  slug: "case-study-linear",
  complexity: "intermediate",
  description: "Analyzing the \"Magical Feel\" of Linear and its keyboard-first architecture.",
  quickTake: "Linear is the industry benchmark for 'High-Performance SaaS'—blending sub-100ms interactions, optimistic UI, and a keyboard-first architecture to create a 'magical' user experience.",
  whyItMatters: "Linear proved that B2B software doesn't have to be clunky. By prioritizing speed and 'Flow', they created a cult-like following among developers and designers who value efficiency over all else.",
  mechanism: [
    "Optimistic UI: Every action happens instantly on the client, with the server catching up in the background",
    "Keyboard-First: Every action has a shortcut, and the 'Cmd+K' palette flattens the entire information hierarchy",
    "Sub-100ms Interactions: Tuning animations and state transitions to be incredibly fast (approx 150ms-200ms)",
    "Local-First Data: Syncing the entire workspace to the client to ensure zero-latency navigation"
  ],
  whenToUse: [
    "Building productivity tools or B2B SaaS where speed is a core value",
    "Designing interfaces for power users who prefer keyboard navigation",
    "Creating 'High-Performance' web apps that need to feel like native software"
  ],
  whenNotToUse: [
    "Consumer apps where 'speed' is less important than 'discovery' or 'emotion'",
    "Simple, static websites where the overhead of optimistic UI isn't justified",
    "When the target audience is not tech-savvy and may find keyboard-first patterns confusing"
  ],
  tradeoffs: [
    { pro: "Unmatched user satisfaction and perceived performance", con: "Extremely high engineering complexity (Sync engines, Optimistic UI)" },
    { pro: "Creates a 'Flow State' for power users", con: "Steeper learning curve for non-technical users" }
  ],
  failureModes: [
    "The 'Sync Conflict': Optimistic UI failing when multiple users edit the same item simultaneously",
    "Shortcut Overload: Implementing so many shortcuts that they conflict with browser or OS defaults",
    "Performance Regression: Letting the client-side database grow so large that it slows down the browser"
  ],
  alternatives: [
    { entryId: "command-palettes", condition: "Use to implement the specific 'Cmd+K' pattern Linear popularized" },
    { entryId: "micro-interactions", condition: "Use to tune the sub-100ms animations that create the 'Magical' feel" }
  ],
  a11ySpecs: [
    "Ensure all keyboard shortcuts are customizable or can be disabled",
    "Provide clear visual focus states for all keyboard-navigable elements",
    "Maintain screen reader compatibility for the complex, fast-changing UI"
  ],
  perfImpact: "high",
  implementationNotes: [
    "Use 'Replicache' or 'CRDTs' for robust local-first data synchronization",
    "Leverage 'cmdk' or similar libraries for the command palette implementation",
    "Profile every interaction to ensure it stays under the 100ms 'Perception' threshold"
  ],
  checklist: [
    "Validated every fast interaction has a visible recovery path",
    "Checked command palette coverage for navigation and primary actions",
    "Profiled high-frequency workflows against sub-200ms interaction targets"
  ],
  relatedEntryIds: ['case-study-airbnb', 'case-study-duolingo', 'optimistic-ui'],
  interactiveComponent: "LinearCommandPalette",
  tags: ["SaaS","Performance","Keyboard","Shortcuts"],
  contentStatus: 'flagship',
  content: `

# Linear: Designed for Flow

**Linear** (a project management tool) is famous for its "Cult of Quality." It feels faster than local software.

### The "Magical" Feel
What users describe as "magic" is actually a combination of three technical pillars:
1.  **Optimistic UI**: Every action happens instantly on the client. The server catches up later.
2.  **Keyboard First**: The mouse is optional. The \`Cmd+K\` command palette allows users to navigate anywhere without lifting their hands.
3.  **Sub-100ms Interaction**: Animations are tuned to be incredibly fast (approx 150ms-200ms). They provide context without slowing down the power user.

### The Command Palette
Linear popularized the \`Cmd+K\` menu in web apps. It flattens the information hierarchy. Instead of clicking *Settings > Profile > Edit*, you just type "Edit Profile".
    
`,
  intentTags: ["improve-aesthetics", "improve-performance"],
};
