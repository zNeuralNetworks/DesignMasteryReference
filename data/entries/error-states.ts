import { ReferenceEntry } from '../../types';

export const error_states: ReferenceEntry = {
  id: "error-states",
  title: "Error States",
  domain: "interaction",
  format: "pattern",
  verdict: "recommended",
  useContext: ["saas", "mobile", "consumer", "marketplace", "dashboard"],
  confidenceScore: 95,
  slug: "error-states",
  complexity: "beginner",
  description: "Designing error messages and failure states that help users understand what went wrong and how to recover — not just what failed.",
  quickTake: "Error messages should be: human-readable (no error codes), specific (say what failed), constructive (say what to do). 'Something went wrong' is an error message. 'Unable to save — you're offline. Your changes are saved locally and will sync when reconnected.' is a recovery path.",
  whyItMatters: "Poor error messages are one of the top causes of support tickets and user abandonment. When something goes wrong, users are already stressed. A vague error message leaves them stranded; a constructive one turns a failure into a guided recovery. Error state design is customer support design.",
  mechanism: [
    "Say what failed: 'File too large' not 'Error 413'",
    "Say why it failed (if knowable): 'Files must be under 25MB. Yours is 47MB.'",
    "Say what to do: 'Compress the file or upload as a shareable link instead.'",
    "Offer a recovery action: a button that fixes the problem or navigates to a solution",
  ],
  whenToUse: [
    "All failure states in any flow: form validation, network errors, permission errors, empty search",
    "Background operation failures: sync errors, auto-save failures, webhook failures",
  ],
  whenNotToUse: [
    "Warning states that aren't errors — use warning/info styling instead of error red",
  ],
  tradeoffs: [
    { pro: "Constructive errors reduce support load and user abandonment at failure points", con: "Writing good error copy requires content design time — engineers writing error messages produce 'An error occurred'" },
    { pro: "Specific error messages help developers debug too", con: "Too much technical detail in user-facing errors (stack traces) is both unhelpful and potentially a security risk" },
  ],
  failureModes: [
    "Generic messages: 'Something went wrong. Please try again.' — says nothing actionable",
    "Technical jargon: 'Request failed with status code 500' — meaningless to users",
    "Blame the user: 'Invalid input' without specifying what's invalid",
    "Error without recovery: message shown but no action to resolve it",
    "Missing error state entirely: operation fails silently, user thinks it succeeded",
  ],
  alternatives: [
    { entryId: "form-validation-ux", condition: "Form-specific error validation patterns" },
    { entryId: "empty-states", condition: "Empty states are a related pattern for zero-data situations" },
    { entryId: "toast-notifications", condition: "Transient error notifications for background operation failures" },
  ],
  a11ySpecs: [
    "Error messages associated with form fields: aria-describedby pointing to error message element",
    "Errors announced to screen readers: role='alert' or aria-live='assertive' for critical errors",
    "Focus moved to error summary on form submission failure",
    "Error color must not be the only differentiator — include error icon and text label",
  ],
  perfImpact: "low",
  implementationNotes: [
    "Error boundary in React: catch rendering errors and show fallback UI with retry option",
    "Error message content: maintain a centralized error message map rather than inline strings",
    "Network errors: detect offline state (navigator.onLine + online/offline events) for specific messaging",
    "Retry logic: exponential backoff for transient errors; show attempt count 'Retrying (2/3)...'",
  ],
  checklist: [
    "Error messages say what failed, why, and what to do",
    "No technical jargon or error codes in user-facing messages",
    "Recovery action available for every error with a fixable cause",
    "role='alert' or aria-live on dynamic error messages",
    "Error color paired with icon and text label",
  ],
  relatedEntryIds: ['form-validation-ux', 'empty-states', 'toast-notifications', 'offline-sync-states'],
  tags: ["error states", "error messages", "form errors", "error handling UX", "failure states", "recovery UX"],
  intentTags: ["improve-feedback", "reduce-cognitive-load"],
  content: `
# Error States

Error messages are customer support, written in advance.

## The Three-Part Formula

Every error message should answer:
1. **What happened?** (What failed)
2. **Why did it happen?** (The cause, if knowable)
3. **What should I do?** (The recovery path)

| Tier | Message | Quality |
|------|---------|---------|
| Terrible | "Error." | No info |
| Bad | "Something went wrong. Please try again." | Too vague |
| Okay | "Upload failed." | What, no why/recovery |
| Good | "Upload failed — file too large." | What + why |
| Great | "Upload failed: file is 47MB (max 25MB). Try compressing it first, or share via link." | What + why + how |

## Common Error Types

### Network/Connectivity
\`\`\`tsx
<ErrorBanner icon={<WifiOff />} type="warning">
  You're offline. Changes are saved locally and will sync automatically when reconnected.
</ErrorBanner>
\`\`\`

### Permission
\`\`\`tsx
<ErrorState>
  <h3>Access restricted</h3>
  <p>You need admin access to view billing settings.</p>
  <button>Request access from your admin →</button>
</ErrorState>
\`\`\`

### Not Found
\`\`\`tsx
<ErrorState>
  <h3>This page doesn't exist</h3>
  <p>The link may be outdated or the item may have been deleted.</p>
  <button>Go to dashboard</button>
</ErrorState>
\`\`\`

## React Error Boundary

\`\`\`tsx
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div role="alert">
          <h2>Something went wrong</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
\`\`\`
`,
};
