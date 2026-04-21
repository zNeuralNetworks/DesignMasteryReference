import { ReferenceEntry } from '../../types';

export const case_study_airbnb: ReferenceEntry = {
  id: "case-study-airbnb",
  title: "Case Study: Airbnb",
  domain: "interaction",
  format: "case-study",
  verdict: "recommended",
  useContext: ["marketplace", "maps", "consumer"],
  confidenceScore: 96,
  slug: "case-study-airbnb",
  complexity: "intermediate",
  description: "Balancing density and clarity in search and discovery interfaces.",
  quickTake: "Airbnb's design system is a masterclass in building trust through visual clarity, high-quality photography, and seamless map-list interactions.",
  whyItMatters: "Airbnb's core product challenge is 'Trust'. You are sleeping in a stranger's house. The UI must convey cleanliness, safety, and accuracy through every interaction and visual detail.",
  mechanism: [
    "Hover Linking: Synchronizing the list of results with map pins to provide instant spatial context",
    "Progressive Disclosure: Showing only essential info (price, rating) in the list, revealing details on click",
    "Skeleton Loading: Using complex, multi-state skeletons to reduce perceived latency during search",
    "Custom Typography: Using 'Airbnb Cereal' to maintain brand identity and readability across all platforms"
  ],
  whenToUse: [
    "Building marketplaces where trust and quality are paramount",
    "Designing search interfaces that involve geographical data",
    "Creating high-density discovery experiences that need to feel 'light'"
  ],
  whenNotToUse: [
    "Low-trust, utility-first applications where speed is the only metric",
    "B2B tools where visual 'polish' is secondary to data density",
    "Apps without a geographical component where map-linking is irrelevant"
  ],
  tradeoffs: [
    { pro: "Creates an extremely high-trust, premium user experience", con: "High engineering cost for custom fonts, maps, and skeletons" },
    { pro: "Seamlessly blends spatial and list-based discovery", con: "Can be heavy on mobile devices with limited memory/CPU" }
  ],
  failureModes: [
    "The 'Map Lag': Pins and cards getting out of sync during rapid scrolling",
    "Over-Polishing: Prioritizing aesthetics over functional search filters",
    "Generic Assets: Using low-quality or inconsistent photography that breaks the 'Trust' illusion"
  ],
  alternatives: [
    { entryId: "skeleton-screens", condition: "Use to implement the specific loading patterns Airbnb popularized" },
    { entryId: "bento-grids", condition: "Use to organize discovery content in a more modular, structured way" }
  ],
  a11ySpecs: [
    "Ensure map pins are keyboard-accessible and have descriptive ARIA labels",
    "Maintain high contrast for price tags and ratings against diverse image backgrounds",
    "Provide a list-only view for users who find map interactions difficult"
  ],
  perfImpact: "high",
  implementationNotes: [
    "Use 'Mapbox' or 'Google Maps' with custom styling to match the brand",
    "Optimize image loading with 'Next/Image' or similar for fast discovery",
    "Implement 'Shared Element Transitions' for a seamless card-to-detail flow"
  ],
  checklist: [
    "Separated trust-building content from booking-critical interaction paths",
    "Checked imagery, map, and filter hierarchy against search intent",
    "Verified responsive layouts preserve price, location, and availability signals"
  ],
  relatedEntryIds: ['case-study-linear', 'case-study-duolingo', 'progressive-disclosure'],
  interactiveComponent: "AirbnbMapToggle",
  tags: ["Marketplace","Maps","Trust","Layout"],
  content: `

# Airbnb: The Trust Interface

Airbnb's core product challenge is **Trust**. You are sleeping in a stranger's house. The UI must convey cleanliness, safety, and accuracy.

### Split View (Map vs List)
Airbnb perfected the interaction between a list of cards and a map.
1.  **Hover Linking**: Hovering a card highlights the pin on the map. This connects "Price/Style" (List) with "Location" (Map).
2.  **Typography**: They developed their own font (Cereal) to ensure readability across devices, using heavy weights for prices to make browsing scan-friendly.

### Skeleton Loading
Airbnb was one of the first major adopters of complex **Skeleton Screens**. Instead of a spinner, you see the shape of the house cards, which lowers the perceived wait time during search.
    
`,
  intentTags: ["improve-readability", "reduce-cognitive-load"],
};
