import { ReferenceEntry } from '../../types';

export const form_validation_ux: ReferenceEntry = {
  id: "form-validation-ux",
  title: "Form Validation UX",
  domain: "components",
  format: "pattern",
  verdict: "recommended",
  useContext: ["saas", "mobile", "content"],
  confidenceScore: 95,
  slug: "form-validation-ux",
  complexity: "intermediate",
  description: "When and how to surface validation errors determines whether users complete forms or abandon them.",
  quickTake: "Form validation timing (real-time vs. on-blur vs. on-submit) and error messaging (inline vs. summary) are critical friction points. The wrong approach increases abandonment by 50%+.",
  whyItMatters: "Forms are the primary conversion point in SaaS and e-commerce. A frustrating form experience leads directly to lost users, lost revenue, and increased support load.",
  mechanism: [
    "Validation timing sets user expectations: When should they expect feedback? Real-time feels responsive; on-submit feels punishing.",
    "Error placement determines discoverability: Inline errors are immediate; summary errors require scrolling and re-scanning.",
    "Error messaging tone affects recovery: 'Invalid format' is confusing; 'Phone must be 10 digits' is actionable.",
    "Success states matter: Show a green checkmark on valid fields to reward progress; users need confidence they're 'doing it right'."
  ],
  whenToUse: [
    "Any form with required fields (login, checkout, signup)",
    "Complex forms with conditional/dependent fields",
    "Mobile forms where UI real estate is scarce"
  ],
  whenNotToUse: [
    "Search inputs — validate on submit only (real-time validation breaks search UX)",
    "Settings forms where errors are rare and not critical"
  ],
  tradeoffs: [
    { pro: "Real-time validation feels responsive", con: "Users are interrupted mid-entry with errors for partially-typed fields" },
    { pro: "On-submit validation feels simple", con: "Users must scroll to find all errors; frustration spikes" },
    { pro: "Inline errors are immediately visible", con: "Summary errors allow for batch error correction"  }
  ],
  failureModes: [
    "Premature validation: Showing 'Invalid email' while user is still typing 'jane@g'; they feel nagged.",
    "Generic errors: 'Error' or 'Invalid field' without explaining what's wrong.",
    "Lost input on error: Form re-renders and clears their partially-filled data after validation failure.",
    "Hidden errors: Error message only visible when field has focus; user doesn't see it until scrolling.",
    "No success feedback: Valid fields show no indicator; user isn't confident they're on the right track."
  ],
  alternatives: [
    { entryId: "progressive-disclosure", condition: "Show conditional fields only when parent field is valid" },
    { entryId: "empty-states", condition: "Use a blank form state with helpful placeholder text" },
    { entryId: "toast-notifications", condition: "Show error summary as a top toast after form submission" }
  ],
  a11ySpecs: [
    "Associate error messages with fields using aria-describedby.",
    "Announce validation errors to screen readers without requiring focus.",
    "Ensure error messages are color-independent (use icons, text, not just red background).",
    "Never rely on placeholder text to explain validation rules; use visible labels + hint text."
  ],
  perfImpact: "low",
  implementationNotes: [
    "Use on-blur validation for most fields (strikes balance between responsiveness and annoyance).",
    "Use real-time validation only for instant-feedback fields (password strength, username availability).",
    "Show error inline next to the field; also show error summary at the top if there are multiple errors.",
    "Always show what's wrong and how to fix it: 'Password must contain uppercase, lowercase, and a number' beats 'Invalid password'.",
    "Show a green checkmark or 'Looks good' indicator on valid fields to provide positive feedback."
  ],
  checklist: [
    "Validation timing matches user expectations (on-blur for most, real-time for username/password)",
    "Error messages are actionable and explain the specific rule",
    "Valid fields show positive feedback (checkmark or success color)",
    "Errors are shown inline and do not clear user input"
  ],
  relatedEntryIds: ['progressive-disclosure', 'empty-states', 'toast-notifications'],
  interactiveComponent: "DebounceDemo",
  tags: ["Interaction","Forms","UX Design","fix forms","form too long","confusing error messages","form validation","validation errors","error messaging"],
  content: `

# Form Validation UX

Forms are high-stakes UX. One bad validation experience can turn away users forever.

## The Timing Spectrum

### Real-Time Validation
**When**: Instant-feedback fields (email availability, password strength, username).
**Feels like**: Responsive and intelligent.
**Risk**: Users typing an email will see "Invalid email" until they finish (@domain).

### On-Blur Validation
**When**: Most form fields (name, phone, address).
**Feels like**: Balanced. User finishes typing, moves to next field, gets feedback.
**Risk**: Users may not notice an error if they don't return to the field.

### On-Submit Validation
**When**: Low-frequency forms, search inputs.
**Feels like**: Simple and non-intrusive.
**Risk**: Showing 10 errors at once overwhelms users; they often abandon rather than fix all.

## The Messaging Pattern

Bad: "Error"
Better: "Phone must be 10 digits"
Best: "Phone must be 10 digits, e.g., 555-123-4567"

## The Placement Pattern

**Inline + Summary**: Show the error directly below the field. Also show a summary at the top of the form (e.g., in a red box or toast) so the user knows there are errors without scrolling.

**Success Indicator**: Show a green checkmark or subtle green border when a field is valid. Users need confidence they're doing it right.

## The Recovery Pattern

Never clear the field on error. The user typed something; don't delete it and force them to retype. Show the error, let them fix it in place.
`,
  intentTags: ["improve-feedback", "reduce-cognitive-load"],
};
