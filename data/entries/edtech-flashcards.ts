import { ReferenceEntry } from '../../types';

export const edtech_flashcards: ReferenceEntry = {
  id: "edtech-flashcards",
  title: "Spaced Repetition UI",
  domain: "components",
  format: "pattern",
  verdict: "recommended",
  useContext: ["edtech", "saas", "mobile"],
  confidenceScore: 92,
  slug: "edtech-flashcards",
  complexity: "intermediate",
  description: "Design patterns for memory retention and active recall apps.",
  quickTake: "Spaced Repetition & Flashcards is a UI pattern that optimizes long-term memory by presenting information at increasing intervals based on the user's performance.",
  whyItMatters: "Traditional learning is 'one-and-done'. Spaced repetition ensures that users actually retain what they learn. A well-designed flashcard UI minimizes distraction and focuses entirely on the 'Active Recall' interaction.",
  mechanism: [
    "Active Recall: Forcing the user to retrieve information from memory before revealing the answer",
    "Self-Assessment: Allowing users to rate the difficulty of a card (e.g., Easy, Good, Hard, Again)",
    "Adaptive Scheduling: Using algorithms (like SM-2) to determine when the user should see the card next",
    "Minimalist Design: Removing all UI 'chrome' during a study session to maximize focus"
  ],
  whenToUse: [
    "Building language learning apps (like Duolingo or Anki)",
    "Designing medical or legal exam prep tools",
    "Creating onboarding flows that need to teach complex software features"
  ],
  whenNotToUse: [
    "General information browsing where retention isn't the primary goal",
    "When the content is purely conceptual and cannot be easily broken into 'cards'",
    "In apps where the user only needs to perform a task once (e.g., a tax calculator)"
  ],
  tradeoffs: [
    { pro: "Scientifically proven to improve long-term memory retention", con: "Requires significant user discipline and daily commitment" },
    { pro: "Provides a clear, measurable sense of progress", con: "Can feel repetitive or 'grindy' if not gamified correctly" }
  ],
  failureModes: [
    "The 'Review Avalanche': Letting too many cards pile up, overwhelming the user",
    "Ambiguous Feedback: Not making it clear *why* a card was shown or when it will return",
    "Distracting UI: Using too many animations or colors that pull focus away from the content"
  ],
  alternatives: [
    { entryId: "habit-streaks", condition: "Use to encourage the daily commitment required for spaced repetition" },
    { entryId: "case-study-duolingo", condition: "Use to see how Duolingo gamifies the spaced repetition experience" }
  ],
  a11ySpecs: [
    "Ensure flashcards are fully keyboard-navigable (Space to flip, 1-4 for difficulty)",
    "Provide clear audio cues for correct/incorrect answers",
    "Maintain high contrast for text on both 'Front' and 'Back' of cards"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Use 'Framer Motion' for the 3D 'Flip' animation effect",
    "Implement the 'SuperMemo-2' (SM-2) algorithm for the scheduling logic",
    "Store card states locally to allow for offline study sessions"
  ],
  checklist: [
    "Separated recall, recognition, and explanation card types",
    "Scheduled review based on confidence or performance signals",
    "Made answer reveal and grading controls keyboard accessible"
  ],
  relatedEntryIds: ['cognitive-chunking', 'mastery-paths', 'adaptive-scaffolding'],
  interactiveComponent: "FlashcardDemo",
  tags: ["Gamification","EdTech"],
  content: `

# Designing for Learning

Educational apps (EdTech) have unique UI requirements. The "Flashcard" is a staple, but its design can significantly impact learning efficacy.

### Principles
*   **Immediate Feedback**: Users need to know instantly if they were right or wrong.
*   **Minimal Distraction**: The content is the hero. Remove unnecessary chrome.
    
`,
  intentTags: ["improve-feedback", "increase-emphasis"],
};
