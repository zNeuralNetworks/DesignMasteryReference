import { ReferenceEntry } from '../../types';

export const gradient_mesh: ReferenceEntry = {
  id: "gradient-mesh",
  title: "Gradient Meshes (Aurora)",
  domain: "color",
  format: "style",
  verdict: "recommended",
  useContext: ["saas", "marketing", "visual-design"],
  confidenceScore: 92,
  slug: "gradient-mesh",
  complexity: "intermediate",
  description: "The evolution of gradients: organic, moving blobs of color that create an ethereal background.",
  quickTake: "Gradient Meshes & Aurora UI are organic, multi-layered gradients that use blurred 'blobs' of color to create a soft, ethereal, and modern background aesthetic.",
  whyItMatters: "Standard linear gradients can feel stiff and 'dated'. Gradient meshes provide a more natural, fluid, and premium feel. They are particularly effective when paired with 'Glassmorphism' to create depth and visual interest without distracting from the content.",
  mechanism: [
    "Multi-Blob Layering: Using 3-5 absolute-positioned elements with different radial gradients",
    "Heavy Gaussian Blur: Applying a massive blur (e.g., 100px+) to blend the colors into an organic mesh",
    "Slow Motion: Animating the position, scale, and opacity of the blobs to create a living, 'Aurora' effect",
    "Subtle Grain: Adding a low-opacity noise texture over the mesh to prevent color banding and add 'tactile' quality"
  ],
  whenToUse: [
    "Designing hero sections for high-end SaaS or marketing landing pages",
    "Creating backgrounds for 'Glassmorphism' cards and modals",
    "Building immersive, brand-heavy experiences where visual mood is paramount"
  ],
  whenNotToUse: [
    "High-density data dashboards where background patterns could distract from the information",
    "Low-power devices where heavy CSS filters (blur) can cause significant performance lag",
    "When the brand identity requires a more structured, geometric, or minimalist aesthetic"
  ],
  tradeoffs: [
    { pro: "Creates an extremely modern, premium, and visually engaging aesthetic", con: "Can be performance-intensive due to heavy CSS blur filters" },
    { pro: "Provides a perfect backdrop for glass and translucent elements", con: "Difficult to control precisely; colors can sometimes blend into muddy grays" }
  ],
  failureModes: [
    "The 'Muddy' Mesh: Choosing colors that are too far apart on the color wheel, resulting in gray/brown blends",
    "Performance Lag: Using too many blurred layers on mobile, causing frame drops during scroll",
    "Color Banding: Not using grain or high-bit-depth colors, resulting in visible 'steps' in the gradient"
  ],
  alternatives: [
    { entryId: "glassmorphism", condition: "Use to create the perfect foreground elements for a gradient mesh" },
    { entryId: "dark-mode-design", condition: "Use to ensure your mesh colors remain vibrant and accessible in dark themes" }
  ],
  a11ySpecs: [
    "Ensure the mesh doesn't interfere with the contrast of text placed over it",
    "Provide a solid-color fallback for users who prefer reduced motion",
    "Test the mesh colors for visibility under different color-blindness conditions"
  ],
  perfImpact: "high",
  implementationNotes: [
    "Use Tailwind's \`blur-3xl\` and \`animate-pulse\` (or custom keyframes) for the effect",
    "Leverage 'SVG Filters' for more complex, high-performance mesh effects",
    "Always test the performance on low-end mobile devices using Chrome DevTools"
  ],
  checklist: [
    "Kept mesh gradients behind non-critical content or decorative surfaces",
    "Checked text contrast across all gradient color stops",
    "Limited animation and blur cost on mobile and battery-constrained devices"
  ],
  relatedEntryIds: ['glassmorphism', 'color-rule', 'theme-bioluminescent'],
  interactiveComponent: "GradientMeshDemo",
  tags: ["Visual Design","CSS","Animation"],
  contentStatus: 'hardened',
  content: `

# Aurora Backgrounds

Standard linear gradients (\`to-r from-blue-500 to-green-500\`) can feel stiff. **Gradient Meshes** (or Aurora UI) involve multiple radial gradients moving slowly and blending together.

### The Technique
1.  **Multiple Blobs**: Create 3-4 absolute positioned \`divs\` with different background colors.
2.  **Heavy Blur**: Apply a massive blur (e.g., \`filter: blur(100px)\`).
3.  **Animation**: Animate their position (\`top/left\`) and scale independently in loops.

> This technique is perfect for "Glassmorphism" backgrounds as it provides the necessary color variation to make the glass effect visible.
    
`,
  intentTags: ["improve-aesthetics"],
};
