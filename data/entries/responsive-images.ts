import { ReferenceEntry } from '../../types';

export const responsive_images: ReferenceEntry = {
  id: "responsive-images",
  title: "Responsive Images",
  domain: "responsiveness",
  format: "pattern",
  verdict: "recommended",
  useContext: ["content", "marketing", "saas", "mobile", "consumer"],
  confidenceScore: 93,
  slug: "responsive-images",
  complexity: "intermediate",
  description: "Serving appropriately sized images for each viewport using srcset, sizes, and modern formats to reduce load time and layout shift.",
  quickTake: "A 2000px image served to a 375px phone wastes 10× the bandwidth needed. Use srcset to provide multiple sizes, sizes to tell the browser how large the image will render, and WebP/AVIF for format compression. This alone can cut image payload by 60–80%.",
  whyItMatters: "Images are typically 50–70% of page weight. On mobile networks, oversized images cause slow loads, high data usage, and abandonment. Responsive images are one of the highest-ROI performance optimizations available — they directly improve LCP (Largest Contentful Paint).",
  mechanism: [
    "Provide multiple image sizes in srcset (e.g., 400w, 800w, 1200w, 2400w)",
    "Use the sizes attribute to tell the browser the rendered width at each viewport",
    "Use WebP or AVIF format with JPEG fallback via <picture> element",
    "Set explicit width and height attributes to prevent layout shift (CLS)",
  ],
  whenToUse: [
    "Any image that appears at different sizes across breakpoints",
    "Hero images, card thumbnails, user avatars, article images",
    "Any image that's the Largest Contentful Paint element",
  ],
  whenNotToUse: [
    "SVG images — they're already resolution-independent",
    "Tiny decorative images under 10KB where optimization gain is negligible",
    "Images generated at runtime where pre-generation of multiple sizes isn't feasible",
  ],
  tradeoffs: [
    { pro: "60–80% reduction in image payload for mobile users", con: "Requires generating and storing multiple image variants" },
    { pro: "Eliminates Cumulative Layout Shift with explicit dimensions", con: "sizes attribute math is non-obvious and easy to get wrong" },
  ],
  failureModes: [
    "Missing sizes attribute: browser defaults to 100vw, selecting max-size image on mobile",
    "No explicit width/height: browser can't reserve space, causing layout shift during load",
    "No WebP/AVIF: serving only JPEG misses 25–50% additional compression",
    "Lazy loading above-fold images: adds delay to LCP — only lazy-load below-fold images",
  ],
  alternatives: [
    { entryId: "fluid-adaptive-layouts", condition: "Responsive images work best paired with fluid container sizing" },
    { entryId: "web-vitals", condition: "Responsive images directly improve LCP and CLS scores — track both" },
  ],
  a11ySpecs: [
    "All images must have descriptive alt text (or empty alt='' for decorative images)",
    "Never use images of text — use real text with responsive sizing instead",
    "Ensure sufficient contrast between image content and any overlaid text",
  ],
  perfImpact: "high",
  implementationNotes: [
    "srcset + sizes: <img srcset='img-400.webp 400w, img-800.webp 800w' sizes='(max-width: 640px) 100vw, 50vw'>",
    "Next.js Image, Nuxt Image, Astro Image components handle srcset/sizes/format automatically",
    "loading='lazy' for below-fold; loading='eager' + fetchpriority='high' for LCP images",
    "Cloudinary, Imgix, or Cloudflare Images can generate multiple sizes from one source",
  ],
  checklist: [
    "All images have srcset with at least 3 size variants",
    "sizes attribute reflects actual rendered widths at breakpoints",
    "WebP or AVIF format provided with JPEG fallback",
    "Explicit width and height attributes set on all images",
    "LCP image has loading='eager' and fetchpriority='high'",
  ],
  relatedEntryIds: ['web-vitals', 'performance-tuning', 'mobile-first-design', 'fluid-adaptive-layouts'],
  tags: ["responsive images", "srcset", "image optimization", "slow images", "LCP", "layout shift", "fix performance"],
  intentTags: ["improve-performance", "fix-accessibility"],
  content: `
# Responsive Images

Images are the fastest win in web performance. One responsive image implementation can cut page weight in half.

## The Core Pattern

\`\`\`html
<img
  src="hero-800.webp"
  srcset="
    hero-400.webp 400w,
    hero-800.webp 800w,
    hero-1200.webp 1200w,
    hero-2400.webp 2400w
  "
  sizes="
    (max-width: 640px) 100vw,
    (max-width: 1024px) 80vw,
    60vw
  "
  width="800"
  height="450"
  alt="Description of image"
  loading="lazy"
/>
\`\`\`

The browser picks the most appropriate source based on the device's viewport width and pixel density.

## The sizes Attribute

\`sizes\` tells the browser how wide the image will be *rendered* — not how wide the image file is. The browser uses this to pick the right srcset entry:

- \`100vw\` = image spans full viewport width
- \`50vw\` = image spans half viewport width
- \`(max-width: 640px) 100vw, 480px\` = full width on mobile, fixed 480px on larger screens

Getting this wrong is the #1 responsive images mistake — a missing or wrong \`sizes\` causes the browser to fetch the largest image on mobile.

## Modern Formats

\`\`\`html
<picture>
  <source srcset="hero.avif" type="image/avif">
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg" alt="...">
</picture>
\`\`\`

AVIF: ~50% smaller than JPEG. WebP: ~30% smaller. Always provide JPEG fallback.

## Preventing Layout Shift

Always set \`width\` and \`height\` attributes matching the image's natural aspect ratio. The browser uses these to reserve space before the image loads, eliminating CLS.
`,
};
