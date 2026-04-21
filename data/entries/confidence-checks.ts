import { ReferenceEntry } from '../../types';

export const confidence_checks: ReferenceEntry = {
  id: "confidence-checks",
  title: "Metacognition (Confidence)",
  domain: "components",
  format: "pattern",
  verdict: "recommended",
  useContext: ["edtech", "assessment", "survey"],
  confidenceScore: 92,
  slug: "confidence-checks",
  complexity: "intermediate",
  description: "Encouraging self-reflection by asking users to rate their confidence before or after answering.",
  quickTake: "Confidence checks ask users to rate how sure they are of their answer, providing a second dimension of data for both the user and the system.",
  whyItMatters: "A correct answer from a lucky guess is different from a correct answer from mastery. Confidence checks help identify 'Misconceptions' (High Confidence + Wrong Answer) and 'Lucky Guesses' (Low Confidence + Right Answer).",
  mechanism: [
    "Present a simple scale (e.g., 1-3 or 'Not Sure' to 'Very Sure') alongside the primary question",
    "Capture the confidence rating at the moment of submission",
    "Use the data to adjust the learning path (e.g., repeating a 'Lucky Guess' sooner)",
    "Provide feedback that addresses the user's confidence level (e.g., 'You were sure, but here's why that's a common mistake')"
  ],
  whenToUse: [
    "Formative assessments and practice quizzes",
    "Self-assessment surveys and diagnostic tests",
    "Learning platforms where tracking 'Mastery' is a core goal"
  ],
  whenNotToUse: [
    "High-stakes summative exams where the extra step causes anxiety",
    "Simple data entry forms where confidence is irrelevant",
    "When the user is already in a high-pressure, time-sensitive situation"
  ],
  tradeoffs: [
    { pro: "Provides deep insights into user understanding and misconceptions", con: "Adds an extra step and cognitive load to every question" },
    { pro: "Encourages metacognition and self-reflection", con: "Users may become biased or 'game' the system if rewards are tied to confidence" }
  ],
  failureModes: [
    "The 'Anxiety' Trigger: Making the confidence check feel like a judgment rather than a tool",
    "Data Noise: Users picking the middle option every time to save effort",
    "Ignored Data: Collecting confidence ratings but never using them to improve the experience"
  ],
  alternatives: [
    { entryId: "adaptive-scaffolding", condition: "Use to provide help based on the user's struggle" },
    { entryId: "celebration-rewards", condition: "Use to reward users who demonstrate high-confidence mastery" }
  ],
  a11ySpecs: [
    "Ensure the confidence scale is fully keyboard-accessible",
    "Use clear, descriptive labels for each point on the scale",
    "Maintain high contrast for the scale's visual elements"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Use a simple button group or a slider for the confidence scale",
    "Keep the scale small and 'secondary' to the main question",
    "Store confidence data alongside the answer for longitudinal analysis"
  ],
  checklist: [
    "Asked users to rate confidence before showing correctness feedback",
    "Used confidence data to adapt review frequency or support",
    "Avoided treating confidence as a substitute for demonstrated competence"
  ],
  relatedEntryIds: ['constructive-feedback', 'adaptive-scaffolding', 'mastery-paths'],
  interactiveComponent: "ConfidenceDemo",
  tags: ["EdTech","Metacognition","Assessment"],
  content: `

# Metacognition in UI

Metacognition is "thinking about thinking." In EdTech, simply getting an answer right isn't enough. We want students to know *why* they are right.

### The Confidence Check
Before or after submitting an answer, add a UI element asking: "How sure are you?"

*   **Correct + High Confidence**: Mastery. Move on.
*   **Correct + Low Confidence**: Lucky guess. Needs review.
*   **Incorrect + High Confidence**: Misconception. Needs immediate intervention.
    
`,
  intentTags: ["improve-feedback", "reduce-cognitive-load"],
};
