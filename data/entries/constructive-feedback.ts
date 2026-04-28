import { ReferenceEntry } from '../../types';

export const constructive_feedback: ReferenceEntry = {
  id: "constructive-feedback",
  title: "Constructive Error Feedback",
  domain: "interaction",
  format: "pattern",
  verdict: "recommended",
  useContext: ["edtech", "saas", "onboarding"],
  confidenceScore: 96,
  slug: "constructive-feedback",
  complexity: "intermediate",
  description: "Designing error states that diagnose misconceptions rather than just saying 'Wrong'.",
  quickTake: "Constructive feedback transforms a 'failure' into a learning moment by explaining *why* an error occurred and how to correct it.",
  whyItMatters: "A generic 'Incorrect' message is a dead end. Constructive feedback provides the 'scaffolding' needed for users to bridge the gap between their current understanding and the correct solution.",
  mechanism: [
    "Identify common 'Misconceptions' or 'Distractors' for a given task",
    "Detect which specific error the user made (e.g., a common math error)",
    "Provide a targeted explanation that addresses that specific misconception",
    "Offer a clear path forward (e.g., 'Try thinking about X instead')"
  ],
  whenToUse: [
    "Educational quizzes and interactive exercises",
    "Complex form validation (e.g., password requirements, tax forms)",
    "Developer tools and CLI error messages"
  ],
  whenNotToUse: [
    "Simple, low-stakes errors (e.g., a typo in a search bar)",
    "When the explanation would be too long or complex for the context",
    "Security-sensitive errors where revealing the reason for failure is a risk (e.g., login)"
  ],
  tradeoffs: [
    { pro: "Significantly improves learning outcomes and user confidence", con: "Requires deep domain knowledge to write effective diagnostic feedback" },
    { pro: "Reduces frustration and repeat errors", con: "Can be difficult to implement for open-ended or complex tasks" }
  ],
  failureModes: [
    "The 'Lecturer' Tone: Providing feedback that is too long, academic, or patronizing",
    "Vague Hints: Giving a hint that is so subtle the user still has no idea what to do",
    "Wrong Diagnosis: Providing feedback for an error the user didn't actually make"
  ],
  alternatives: [
    { entryId: "adaptive-scaffolding", condition: "Use to provide hints before the user fails" },
    { entryId: "confidence-checks", condition: "Use to see if the user was sure of their wrong answer" }
  ],
  a11ySpecs: [
    "Ensure feedback is announced immediately by screen readers",
    "Use clear, simple language (avoid jargon)",
    "Maintain high contrast for error messages and highlights"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Use a 'Feedback' component that can render rich text or even small diagrams",
    "Store diagnostic feedback in a CMS or structured data file for easy updates",
    "A/B test different feedback styles to see which leads to faster correction"
  ],
  checklist: [
    "Explained what failed, why it failed, and how to recover",
    "Kept feedback close to the affected field, action, or decision",
    "Avoided blame language and vague success/error copy"
  ],
  relatedEntryIds: ['confidence-checks', 'adaptive-scaffolding', 'toast-notifications'],
  interactiveComponent: "MistakeAnalysisDemo",
  tags: ["EdTech","Content Design","Pedagogy"],
  contentStatus: 'hardened',
  content: `

# Feedback that Teaches

In many apps, an error state is a blocker. In Learning Apps, an error is the **most valuable moment for learning**.

### Beyond "Try Again"
A red "X" is not enough. Effective feedback must be **Diagnostic**.
*   **Generic Feedback**: "Incorrect." (Low value)
*   **Corrective Feedback**: "The answer is B." (Medium value)
*   **Elaborative Feedback**: "You selected A, but A only applies in case X. B is correct because..." (High Value).
    
`,
  intentTags: ["improve-feedback", "reduce-cognitive-load"],
};
