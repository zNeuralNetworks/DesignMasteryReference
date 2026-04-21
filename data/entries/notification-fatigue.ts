import { ReferenceEntry } from '../../types';

export const notification_fatigue: ReferenceEntry = {
  id: "notification-fatigue",
  title: "Notification Fatigue",
  domain: "interaction",
  format: "anti-pattern",
  verdict: "anti-pattern",
  useContext: ["saas", "mobile", "content"],
  confidenceScore: 97,
  slug: "notification-fatigue",
  complexity: "intermediate",
  description: "Over-requesting permissions and over-notifying users trains them to dismiss or block everything.",
  quickTake: "Each notification is a tax on user trust. Excessive notifications create habituation — users begin to ignore, dismiss, or disable all notifications, including critical ones.",
  whyItMatters: "Permission requests are your only chance to ask. Once a user blocks notifications, re-requesting requires them to manually change settings. The cost of re-engagement is very high.",
  mechanism: [
    "Frequency creates habituation: The 10th notification in a day is ignored; users no longer read it.",
    "Permission request fatigue: Asking for permissions on onboarding + later creates distrust.",
    "Default notification floods: Sending notifications by default (vs. opt-in) trains users to disable all.",
    "Blast notifications: Sending multiple types simultaneously (notification + email + SMS) feels like spam."
  ],
  whenToUse: [],
  whenNotToUse: [
    "Never use excessive notifications as a engagement metric.",
    "Never send notifications without a clear, actionable reason.",
    "Never auto-enable notifications; always require explicit opt-in."
  ],
  tradeoffs: [
    { pro: "High engagement in the short term", con: "Users disable all notifications, losing critical alerts forever" },
    { pro: "Can drive feature adoption quickly", con: "Destroys trust and increases app uninstalls" }
  ],
  failureModes: [
    "The 'Boy Who Cried Wolf' effect: Users learn to ignore all notifications, even critical ones.",
    "Permission request cascade: Asking for notifications, location, calendar permissions on every visit.",
    "Notification pile-up: Users receive 20+ notifications per day and disable the feature entirely.",
    "Deceptive re-engagement: Sending notifications disguised as system alerts (e.g., 'You have 1 new friend request') when they are promotional."
  ],
  alternatives: [
    { entryId: "toast-notifications", condition: "Use in-app toasts instead of push notifications for low-priority updates" },
    { entryId: "micro-interactions", condition: "Use subtle animations to draw attention without leaving the app" }
  ],
  a11ySpecs: [
    "If sending notifications, they must be meaningful and actionable for all users.",
    "Never require notifications for critical app functionality.",
    "Provide a notification management center in settings for users to control frequency."
  ],
  perfImpact: "low",
  implementationNotes: [
    "Only request notification permission after clear onboarding (never on first visit).",
    "Set a 'cool-down' period between notifications (e.g., max 1 per hour).",
    "Audit: If more than 3 unique notification types in a week, you're over-notifying.",
    "Use granular notification settings: allow users to disable specific types, not just all-or-nothing."
  ],
  checklist: [
    "Deferred notification permission request until after positive user interaction",
    "Set clear, granular notification preferences in settings",
    "Ensured each notification has a clear action and is not duplicate/redundant"
  ],
  relatedEntryIds: ['toast-notifications', 'micro-interactions', 'deceptive-patterns'],
  interactiveComponent: "ToastDemo",
  tags: ["Anti-Pattern","Interaction","Permissions","Trust","too many notifications","notification spam","users ignore alerts","over-requesting permissions","permission fatigue"],
  content: `

# Notification Fatigue

Over-requesting permissions and bombarding users with notifications destroys trust. Once disabled, notifications are almost never re-enabled.

## The Habituation Effect

The first notification is noticed. The second is interesting. The tenth is background noise.

Users develop learned helplessness: they stop reading notifications altogether, because the signal-to-noise ratio is so poor. Critical alerts get ignored alongside promotional spam.

## The Permission Tax

Each permission request is a moment of friction. Asking for notifications on onboarding + again later + via in-app prompts = users learn to say "No" reflexively.

## The Fix

1. **Defer permission requests** until the user has found value (e.g., after completing first task)
2. **Set notification quotas** — max 1 per hour, 3 per day
3. **Offer granular controls** — let users disable specific notification types, not just all-or-nothing
4. **Audit your notification sources** — if 5+ different features send notifications, you're flooding

**Golden Rule:** A notification should be worth interrupting the user for. If you're unsure, don't send it.
`,
  intentTags: ["reduce-cognitive-load", "improve-feedback"],
};
