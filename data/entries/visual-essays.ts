import { ReferenceEntry } from '../../types';

export const visual_essays: ReferenceEntry = {
  id: "visual-essays",
  title: "Visual Essays & Dual Coding",
  domain: "typography",
  format: "pattern",
  verdict: "recommended",
  useContext: ["edtech", "mobile", "visual-design"],
  confidenceScore: 96,
  slug: "visual-essays",
  complexity: "intermediate",
  description: "Breaking complex concepts into bite-sized, tap-through visual stories using Dual Coding theory.",
  quickTake: "Visual Essays & Dual Coding is a pedagogical pattern that replaces long-form text with a series of 'Beats'—concise text paired with a synchronized visual to maximize memory retention.",
  whyItMatters: "The human brain processes text and images through separate channels. By presenting them together in a synchronized, bite-sized format, you create multiple 'memory traces', making the information significantly easier to recall than text alone.",
  mechanism: [
    "Dual Coding: Synchronizing a specific visual (diagram, metaphor) with a specific piece of text (15-30 words)",
    "Tap-to-Advance: Using discrete taps instead of scrolling to force a micro-commitment and control the 'Beat'",
    "The 60/40 Rule: Allocating 60% of the screen to the visual and 40% to the text anchor",
    "Segmented Progress: Using top-mounted progress bars to show the user's position within the 'story deck'"
  ],
  whenToUse: [
    "Designing educational content for mobile-first audiences (e.g., Imprint, Brilliant)",
    "Creating interactive onboarding or 'How-to' guides for complex software",
    "Building marketing decks or 'Visual Stories' that need to convey value quickly"
  ],
  whenNotToUse: [
    "Reference materials where users need to scan and find specific information quickly",
    "Desktop-first environments where scrolling is the dominant and expected interaction",
    "When the content is purely textual and cannot be effectively paired with visuals"
  ],
  tradeoffs: [
    { pro: "Drastically increases memory retention and user engagement", con: "Requires high-quality custom visuals and careful editorial chunking" },
    { pro: "Optimized for mobile ergonomics and short attention spans", con: "Can feel 'shallow' for deeply technical or academic subjects" }
  ],
  failureModes: [
    "The 'Decorative' Visual: Using images that don't actually teach or reinforce the text",
    "Text Overload: Putting too much text on a single card, breaking the 'Beat'",
    "Inconsistent Pacing: Having some beats that are too simple and others that are too complex"
  ],
  alternatives: [
    { entryId: "case-study-imprint", condition: "Use to see the most successful implementation of this pattern" },
    { entryId: "cognitive-chunking", condition: "Use to understand the psychological basis for the 'Beat' structure" }
  ],
  a11ySpecs: [
    "Provide a 'Transcript' or 'List View' for users who cannot process visual information",
    "Ensure all visuals have descriptive alt-text that matches the textual beat",
    "Maintain keyboard accessibility for the 'Tap-to-Advance' interaction"
  ],
  perfImpact: "medium",
  implementationNotes: [
    "Use 'Framer Motion' for the smooth, story-like transitions between cards",
    "Optimize image assets (WebP/AVIF) to ensure instant loading of the next beat",
    "Implement 'Pre-fetching' for the next 2-3 cards in the deck to eliminate latency"
  ],
  checklist: [
    "Structured sections around clear narrative beats and decisions",
    "Kept visuals explanatory rather than decorative filler",
    "Provided text equivalents for meaning carried by images or motion"
  ],
  relatedEntryIds: ['cognitive-chunking', 'case-study-imprint', 'micro-interactions'],
  interactiveComponent: "VisualEssay",
  tags: ["EdTech","Storytelling","Micro-learning","Psychology"],
  content: `

# The Rise of the Visual Essay

Popularized by apps like **Imprint**, **Brilliant**, and **Headway**, the Visual Essay replaces the "article" with a "story deck". It fundamentally changes the reading experience from passive scrolling to active tapping.

### The Science: Dual Coding Theory
Proposed by Allan Paivio in 1971, **Dual Coding Theory** posits that the human brain processes information through two distinct, non-competing channels:
1.  **Verbal Channel**: Processes text and audio (Sequential processing).
2.  **Visual Channel**: Processes images, diagrams, and animations (Parallel processing).

**The Multiplier Effect**: When you present information using *both* channels simultaneously (e.g., a diagram that animates exactly as the text describes it), you create two separate memory traces. This doubles the cognitive hooks available for retrieving that information later.

### Anatomy of a Visual Card
A Visual Essay isn't just a slideshow. It follows a strict spatial layout designed for focus:
*   **The Visual Hero (Top 60%)**: Occupies the majority of the screen. It is the primary teacher. It should never be static decoration; it must be a diagram, a metaphor, or a data visualization.
*   **The Anchor Text (Bottom 40%)**: Concise (15-30 words max). Its job is only to decode the visual.
*   **Progress Bars**: Segmented bars at the top indicate "beats", giving the user a clear sense of completion (Goal Gradient Effect).

### Interaction: Tap vs Scroll
*   **Scrolling** is continuous. Users tend to scan headers and skip body text. It is a "passive" consumption mode.
*   **Tapping** is discrete. By forcing a user to tap to reveal the next beat, you force a **micro-commitment**. The user is actively saying, "I am ready for the next piece of information."
    
`,
  intentTags: ["improve-readability", "increase-emphasis"],
};
