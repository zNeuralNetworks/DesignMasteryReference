import { ReferenceEntry } from '../../types';

export const jakobs_law: ReferenceEntry = {
  id: "jakobs-law",
  title: "Jakob's Law",
  domain: "psychology",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "devtools", "consumer", "marketing", "productivity"],
  confidenceScore: 95,
  slug: "jakobs-law",
  complexity: "beginner",
  description: "Users spend most of their time on other websites, so they expect your UI to work like every other UI they've already learned.",
  quickTake: "Convention beats novelty almost every time. Users arrive with mental models built from thousands of hours on other products. Every deviation from those models costs them cognitive effort, and they'll blame your product for the friction — not their own expectations.",
  whyItMatters: "Novelty has a real cost: it forces users to learn before they can act. Jakob Nielsen's original formulation quantifies this as a direct hit to perceived usability. The implication is that innovation should be reserved for genuine differentiation, not used as a default aesthetic choice.",
  mechanism: [
    "User arrives with a pre-existing mental model built from prior product experiences",
    "They map your UI controls to familiar patterns (top nav, left sidebar, cart icon top-right)",
    "Every deviation triggers a 'wait, what?' moment that burns working memory",
    "If deviations are too frequent or costly, users label the product 'confusing' and churn",
    "When you do innovate, invest in clear affordances and onboarding to bridge the gap"
  ],
  whenToUse: [
    "Designing navigation, search, form layouts, or checkout flows in established product categories",
    "Building for non-technical or infrequent users who cannot afford a learning curve",
    "When your competitive advantage is speed or reliability, not UX novelty",
    "Migrating users from a legacy system — match familiar patterns to ease transition"
  ],
  whenNotToUse: [
    "When the conventional pattern is genuinely broken for your use case (e.g., building a novel interaction paradigm like spatial computing)",
    "When your audience is highly technical and expects power-user conventions specific to a niche tool",
    "When user research shows the convention actively harms task completion in your context"
  ],
  tradeoffs: [
    { pro: "Lower learning curve because users apply existing mental models", con: "Can result in a generic product that fails to differentiate on UX quality" },
    { pro: "Reduces user error and support load", con: "Conventional patterns may carry the baggage of prior limitations that no longer apply" },
    { pro: "Faster time-to-value for new users", con: "May lock in suboptimal patterns that are entrenched by network effect" }
  ],
  failureModes: [
    "Treating Jakob's Law as a reason never to innovate — it's a cost/benefit argument, not a ban",
    "Adopting conventions from the wrong reference class (e.g., applying desktop app patterns to mobile)",
    "Using novelty as a substitute for solving real usability problems",
    "Ignoring platform conventions on iOS/Android/Web in favor of a single cross-platform design"
  ],
  alternatives: [
    { entryId: "mystery-meat-navigation", condition: "Study this anti-pattern to understand what happens when icons replace conventional labeling" },
    { entryId: "progressive-disclosure", condition: "Use when you need to introduce a novel feature gradually without overwhelming existing mental models" },
    { entryId: "hicks-law", condition: "Apply alongside Jakob's Law when reducing decision complexity in navigation and menus" }
  ],
  a11ySpecs: [
    "Conventional keyboard interactions (Tab, Enter, Escape, arrow keys) are part of Jakob's Law — deviate and you break accessibility expectations",
    "Screen reader users rely on landmark roles and heading hierarchy that follows established conventions",
    "Standard ARIA patterns for widgets (combobox, dialog, menu) encode convention — use them as-is"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Audit your navigation against the Nielsen Norman Group's top 10 UI conventions before shipping",
    "When you must deviate, add an explicit affordance (tooltip, label, onboarding highlight) to bridge the gap",
    "Use the 'mystery meat' test: can a new user identify every interactive element and predict its behavior without trying it?",
    "Track 'first-click' accuracy in usability tests — low accuracy is often a Jakob's Law violation"
  ],
  checklist: [
    "Navigation placement matches the dominant convention for the platform (top/left for web, bottom tab for mobile)",
    "Interactive affordances (buttons, links, inputs) look like what they are",
    "Any novel interaction pattern has an explicit tutorial or tooltip on first encounter",
    "Keyboard shortcuts follow OS/app-type conventions (Ctrl+S saves, Escape closes modals)"
  ],
  relatedEntryIds: ["hicks-law", "mystery-meat-navigation", "progressive-disclosure"],
  tags: ["Jakob's Law", "convention", "familiar patterns", "don't reinvent the wheel", "user expectations", "mental models", "learnability"],
  intentTags: ["reduce-cognitive-load", "improve-feedback"],
  contentStatus: 'draft',
  content: `# Jakob's Law

## What It Is

Jakob's Law, formulated by usability pioneer Jakob Nielsen, states: *"Users spend most of their time on other sites. This means that users prefer your site to work the same way as all the other sites they already know."*

The insight is deceptively simple. Every product a user has ever learned contributes to a shared mental model of how UIs work. Top navigation. Left sidebar. Search bar at the top. Shopping cart in the top-right corner. These aren't arbitrary — they're conventions calcified by billions of user-hours.

## The Cost of Novelty

Every time your UI deviates from convention, you issue a cognitive invoice. The user must:

1. Notice that something is different
2. Suspend their automatic behavior
3. Figure out what the unfamiliar element does
4. Adapt their mental model going forward

This is fine once or twice in a product tour. Multiply it across every navigation element, every form pattern, every status indicator, and you've built a product that feels "confusing" — even if each individual deviation was intentional and defensible.

## Convention vs. Innovation

Jakob's Law is not a mandate for blandness. It's a cost/benefit argument:

- **High-traffic, low-margin interactions** (nav, checkout, login, search): Follow convention. The cognitive savings compound across every session.
- **Core differentiating features**: Innovate here. This is where you actually have something to teach the user, and they're motivated to learn.
- **Novel paradigms** (AR, voice, spatial): Convention doesn't exist yet. Build carefully, with heavy affordance and onboarding investment.

A useful heuristic: if the feature isn't part of your core value proposition, it should look like every other product the user has used.

## Diagnosing Violations

Run a **first-click test**: show new users a screenshot of your UI and ask them to click where they'd go to accomplish a task. First-click accuracy above 80% is a passing grade. Below 60% on any primary task is a Jakob's Law alarm.

Common violation patterns:
- **Icon-only navigation** without labels (see: mystery meat navigation)
- **Non-standard position** for global elements (search, account menu, primary CTA)
- **Repurposed familiar controls** (a toggle that navigates instead of toggling a setting)
- **Platform mismatch** (desktop-paradigm navigation on mobile, or vice versa)

## When to Break the Rule

Breaking convention is justified when:
- User research shows the convention actively harms your specific use case
- You're operating in a new platform category where no convention exists
- The innovation is significant enough to warrant an explicit onboarding investment
- Your users are domain experts with conventions specific to their professional tools (think Bloomberg terminal, Vim, CAD software)

When you do break convention, the minimum responsible action is: add affordances that telegraph what the non-standard element does, before the user has to discover it by trial and error.`,
};
