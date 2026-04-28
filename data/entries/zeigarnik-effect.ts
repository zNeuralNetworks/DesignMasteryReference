import { ReferenceEntry } from '../../types';

export const zeigarnik_effect: ReferenceEntry = {
  id: "zeigarnik-effect",
  title: "Zeigarnik Effect",
  domain: "psychology",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "consumer", "mobile", "marketplace"],
  confidenceScore: 90,
  slug: "zeigarnik-effect",
  complexity: "beginner",
  description: "People remember uncompleted tasks better than completed ones — showing progress through incomplete tasks increases the motivation to finish them.",
  quickTake: "An 80% complete progress bar is more motivating than an empty one. Users who see what they haven't done yet are more likely to complete it. Progress indicators, completion checklists, and partially-filled profiles all leverage the Zeigarnik effect to drive completion behavior.",
  whyItMatters: "Task completion rates directly affect product value: incomplete profiles mean less data, incomplete onboarding means lower activation, abandoned checkouts mean lost revenue. The Zeigarnik effect provides a mechanism to increase completion — users have a natural psychological drive to close open loops.",
  mechanism: [
    "Show progress rather than perfection — a partially complete state (60%) is more motivating than starting from 0%",
    "Make incompleteness visible: progress bars, completion percentages, step indicators",
    "Use specific missing items, not vague prompts: 'Add your job title' not 'Complete your profile'",
    "Position the incomplete items where users will see them — not buried in settings",
  ],
  whenToUse: [
    "User onboarding and profile completion flows",
    "Multi-step forms and wizards",
    "Habit streaks and learning progress",
    "Profile/account setup completion indicators",
  ],
  whenNotToUse: [
    "When the 'incomplete' state is the user's preference (they deliberately didn't fill optional fields)",
    "Dark pattern use: artificially marking things as 'incomplete' to trigger anxiety and unnecessary engagement",
  ],
  tradeoffs: [
    { pro: "Increases task completion rates for onboarding and setup flows", con: "Can create anxiety for users who don't want to complete optional tasks — needs opt-out" },
    { pro: "Specific incomplete items convert better than vague 'finish setup' prompts", con: "Can feel manipulative if used for engagement rather than genuine user benefit" },
  ],
  failureModes: [
    "Vague progress: '60% complete' with no indication of what's missing",
    "Too many incomplete items: overwhelming checklist discourages rather than motivates",
    "Unreachable completion: 100% requires optional fields users don't want to fill",
    "Repeated pestering: showing the same incomplete prompt every session annoys users who made a deliberate choice",
  ],
  alternatives: [
    { entryId: "habit-streaks", condition: "Streaks leverage Zeigarnik for repeated behavior, not one-time completion" },
    { entryId: "adaptive-scaffolding", condition: "Scaffolding reveals tasks progressively rather than showing all at once" },
  ],
  a11ySpecs: [
    "Progress indicators: aria-valuenow, aria-valuemin, aria-valuemax on progress bars",
    "Completion checklists: use <ul> with role='list' and checked state communicated semantically",
    "Don't rely on color to communicate incomplete vs. complete — use icons + text",
  ],
  perfImpact: "low",
  implementationNotes: [
    "Profile completion: calculate missing fields server-side, show top 2–3 incomplete items by importance",
    "Onboarding checklist: persist completion state in user profile, not localStorage (needs to sync)",
    "Progress bars: show actual percentage, not just visual fill — '7 of 10 steps complete'",
    "Dismissable: allow users to dismiss completion prompts without completing them",
  ],
  checklist: [
    "Incomplete state shows specific missing items, not just percentage",
    "Progress is persistent across sessions",
    "100% completion is achievable without requiring optional data",
    "Completion prompts can be dismissed",
  ],
  relatedEntryIds: ['habit-streaks', 'onboarding-tours', 'adaptive-scaffolding', 'goal-setting-ui'],
  tags: ["Zeigarnik effect", "progress", "completion", "onboarding completion", "profile completion", "progress bar"],
  intentTags: ["improve-feedback", "reduce-cognitive-load"],
  contentStatus: 'hardened',
  content: `
# Zeigarnik Effect

People have a stronger memory of and drive to finish incomplete tasks than completed ones. Open loops bother us.

## The Design Application

Show users what they haven't done yet — specifically, not vaguely — and they're more likely to do it.

**Vague (weak):**
> Your profile is 60% complete.

**Specific (strong):**
> Your profile is 60% complete. Missing: Job title, Location, Profile photo.

The vague version informs. The specific version motivates.

## Profile Completion Example

\`\`\`tsx
<div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
  <div className="flex items-center justify-between mb-2">
    <span className="text-sm font-semibold text-amber-900">Profile 60% complete</span>
    <span className="text-xs text-amber-600">3 items remaining</span>
  </div>
  <div className="h-2 bg-amber-100 rounded-full">
    <div className="h-2 bg-amber-500 rounded-full" style={{ width: '60%' }} />
  </div>
  <ul className="mt-3 space-y-1">
    <li className="text-sm text-amber-800">→ Add your job title</li>
    <li className="text-sm text-amber-800">→ Upload a profile photo</li>
    <li className="text-sm text-amber-800">→ Connect your calendar</li>
  </ul>
</div>
\`\`\`

## The Gotcha: Optional Fields

If 100% completion requires a phone number the user doesn't want to share, you've created an anxiety loop without a resolution. Always make 100% achievable with genuinely optional information.

## When It Becomes a Dark Pattern

Using the Zeigarnik effect to drive engagement for the *product's* benefit (badge counts, notification dots) rather than the *user's* benefit crosses into manipulation. Ask: would completing this task improve the user's experience, or just our metrics?
`,
};
