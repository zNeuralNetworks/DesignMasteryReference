import { ReferenceEntry } from '../../types';

export const scroll_animations: ReferenceEntry = {
  id: "scroll-animations",
  title: "Scroll-Linked Animations",
  domain: "motion",
  format: "style",
  verdict: "recommended",
  useContext: ["marketing", "content", "consumer"],
  confidenceScore: 90,
  slug: "scroll-animations",
  complexity: "intermediate",
  description: "Immersive storytelling (\"Scrollytelling\") where scroll position drives animation playback.",
  quickTake: "Scroll-linked animations (Scrollytelling) bind the progress of an animation directly to the user's scroll position, creating an immersive, narrative experience.",
  whyItMatters: "Standard static pages can be boring for product reveals or complex data. Scroll-linked animations keep users engaged by making them 'active participants' in the storytelling.",
  mechanism: [
    "Track the scroll progress of a container or the entire page",
    "Map the scroll percentage (0% to 100%) to an animation axis (e.g., opacity, scale, rotation)",
    "Use 'Sticky' positioning to keep elements in view while they animate",
    "Ensure smooth interpolation to prevent 'jittery' movement"
  ],
  whenToUse: [
    "Product landing pages (Revealing features as you scroll)",
    "Interactive data visualizations and reports",
    "Brand storytelling and 'About Us' pages"
  ],
  whenNotToUse: [
    "Productivity tools where users need to scroll quickly to find data",
    "Mobile apps with limited screen real estate for complex motion",
    "When the animation obscures critical information or navigation"
  ],
  tradeoffs: [
    { pro: "Extremely high engagement and 'wow' factor", con: "Can be difficult to implement across different screen heights" },
    { pro: "Creates a sense of depth and narrative flow", con: "Risk of 'Scroll Fatigue' if the page becomes too long or complex" }
  ],
  failureModes: [
    "The 'Jank' Effect: Animations that stutter due to heavy JS on the scroll event",
    "Broken Navigation: Users getting 'stuck' in a sticky section and unable to scroll past",
    "Mobile Mismatch: Animations that work on desktop but break on touch devices"
  ],
  alternatives: [
    { entryId: "scroll-jacking", condition: "Avoid scroll-jacking; use scroll-linked animations instead for a better user experience" },
    { entryId: "fluid-motion", condition: "Use for time-based animations that aren't tied to scroll" }
  ],
  a11ySpecs: [
    "Ensure all content is reachable even if animations fail to trigger",
    "Respect 'prefers-reduced-motion' by providing a static fallback",
    "Do not use scroll position to trigger high-frequency flashing"
  ],
  perfImpact: "high",
  implementationNotes: [
    "Use 'useScroll' and 'useTransform' from Framer Motion for high-performance mapping",
    "Leverage the 'Intersection Observer' API to trigger animations only when in view",
    "Consider 'CSS Scroll-Driven Animations' for a future-proof, JS-free approach"
  ],
  checklist: [
    "Kept native scroll physics intact while triggering animation state",
    "Respected prefers-reduced-motion with static alternatives",
    "Tested animation work for jank on low-end mobile hardware"
  ],
  relatedEntryIds: ['micro-interactions', 'fluid-motion', 'scroll-jacking'],
  interactiveComponent: "ScrollAnimation",
  tags: ["Interaction Design","Scrollytelling"],
  content: `

# Scroll-Linked Animations

Also known as "Scrollytelling", this technique binds animation progress directly to the scrollbar. As the user scrolls down, elements move, rotate, or scale in perfect sync.

### Use Cases
*   **Product Reveals**: Rotating a 3D product model as the user scrolls.
*   **Data Visualization**: Drawing charts progressively.
*   **Reading Progress**: Parallax effects to create depth.
    
`,
  intentTags: ["improve-aesthetics", "improve-feedback"],
};
