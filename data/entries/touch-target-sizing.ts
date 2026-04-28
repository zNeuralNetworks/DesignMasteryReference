import { ReferenceEntry } from '../../types';

export const touch_target_sizing: ReferenceEntry = {
  id: "touch-target-sizing",
  title: "Touch Target Sizing",
  domain: "responsiveness",
  format: "principle",
  verdict: "recommended",
  useContext: ["mobile", "saas", "consumer", "marketplace"],
  confidenceScore: 97,
  slug: "touch-target-sizing",
  complexity: "beginner",
  description: "Ensuring interactive elements are large enough to tap accurately on touch devices, reducing mis-tap errors.",
  quickTake: "44×44px is Apple's minimum; 48×48dp is Google's. The visual size of the element doesn't matter — the tap target can be larger than what's visible. Use padding to expand small icons and links without changing their appearance.",
  whyItMatters: "The average adult fingertip is 10–14mm wide. UI elements smaller than 44px cause mis-taps, frustration, and abandonment. This is especially critical for form inputs, close buttons, and nav items — the most tapped elements in any app.",
  mechanism: [
    "Set minimum interactive area to 44×44px (CSS pixels) for all tappable elements",
    "Expand tap area beyond visual bounds using padding or pseudo-element ::after",
    "Maintain at least 8px spacing between adjacent touch targets to prevent mis-taps",
    "Audit with Chrome DevTools touch target checker or Lighthouse accessibility audit",
  ],
  whenToUse: [
    "All mobile and touch-capable interfaces",
    "Any button, link, input, or toggle that appears below 1024px viewport",
  ],
  whenNotToUse: [
    "Desktop-only interfaces where mouse precision is available (pointer: fine media query)",
  ],
  tradeoffs: [
    { pro: "Dramatically reduces mis-tap errors and user frustration", con: "Larger targets require more layout space, especially in dense UIs" },
    { pro: "Can expand tap area invisibly with padding without changing visual design", con: "Invisible tap areas can feel inconsistent if not systematically applied" },
  ],
  failureModes: [
    "Icon-only buttons: 20px icon with no padding creates a 20px target — add padding to reach 44px",
    "Dense lists: items too close together cause mis-taps on adjacent items — minimum 8px gap",
    "Close/dismiss buttons: typically placed small and in corners — frequently the worst offenders",
    "Text links inline in paragraphs: can't be reliably 44px tall without breaking text flow",
  ],
  alternatives: [
    { entryId: "fitts-law", condition: "Understand the theoretical basis: larger targets are faster and more accurate to hit" },
    { entryId: "thumb-zone", condition: "Consider target placement in addition to target size" },
  ],
  a11ySpecs: [
    "WCAG 2.5.5 (AAA): target size minimum 44×44 CSS pixels",
    "WCAG 2.5.8 (AA, WCAG 2.2): minimum 24×24 CSS pixels (the new baseline)",
    "Pointer target spacing: adjacent targets need sufficient gap to prevent activation of wrong target",
  ],
  perfImpact: "low",
  implementationNotes: [
    "Expand small targets with padding: button { padding: 12px; } makes a 20px icon a 44px target",
    "For text links, use display: inline-block with vertical padding",
    "::after pseudo-element technique for invisible expansion: position: absolute; inset: -10px",
    "@media (pointer: fine) to apply tighter sizing on desktop-only",
  ],
  checklist: [
    "All interactive elements have minimum 44×44px touch target area",
    "Adjacent targets have at least 8px spacing between their touch areas",
    "Small icon buttons use padding to expand target without changing visual size",
    "Tested on a real touch device, not just mouse interaction",
  ],
  relatedEntryIds: ['fitts-law', 'thumb-zone', 'mobile-first-design', 'button-design'],
  tags: ["touch targets", "buttons too small", "hard to tap", "mobile buttons", "tap area", "44px", "fix mobile", "accessibility mobile"],
  intentTags: ["fix-accessibility", "fix-alignment"],
  contentStatus: 'hardened',
  content: `
# Touch Target Sizing

A 16px icon is not a 16px touch target. The visual and interactive surfaces are different — and the interactive surface must be at least 44×44px.

## The Standards

- **Apple HIG**: 44×44 points minimum
- **Material Design**: 48×48dp minimum
- **WCAG 2.5.5** (AAA): 44×44 CSS pixels
- **WCAG 2.5.8** (AA, WCAG 2.2): 24×24 CSS pixels with adequate spacing

Aim for 44px. It's the safest target across all guidelines.

## Expanding Without Changing Appearance

\`\`\`css
/* Padding approach */
.icon-button {
  padding: 12px; /* Visual icon is 20px, target is 44px */
}

/* Pseudo-element approach (for absolute-positioned elements) */
.close-button::after {
  content: '';
  position: absolute;
  inset: -12px;
}
\`\`\`

## Target Spacing

Minimum gap between adjacent targets: 8px between their touch areas (not their visual edges). Two 44px buttons need at least 8px gap = 96px total for both.

Dense lists: use \`min-height: 44px\` on list items so each row is fully tappable.

## Desktop Exception

On desktop (mouse), 24–32px is sufficient. Use \`@media (pointer: fine)\` to tighten sizing for precise pointer devices without affecting touch.
`,
};
