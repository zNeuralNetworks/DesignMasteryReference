# Information Architecture (IA): DesignMastery Reference

**Version:** 1.0.0  
**Status:** Active  
**Last Updated:** 2026-04-14  

---

## 1. Structural Overview
DesignMastery Reference uses a **Matrix-based Information Architecture**. Unlike hierarchical systems (folders/subfolders), every entry exists at the intersection of a **Domain** (Subject Matter) and a **Format** (Structural Type).

---

## 2. Taxonomy

### 2.1 Domains (The "What")
Domains categorize content by the specific field of design or engineering expertise.

*   **Foundations:** Core visual and structural principles (Grid, Typography, Color).
*   **Interaction:** Behavioral patterns, state management, and user feedback loops.
*   **Psychology:** Cognitive biases, mental models, and behavioral economics.
*   **Systems:** Design system architecture, component hierarchy, and scalability.
*   **Accessibility:** Inclusive design, ARIA specifications, and legal compliance.
*   **Style:** Visual aesthetics, atmospheric design, and brand expression.

### 2.2 Formats (The "How")
Formats define the structural nature of the entry and how the information is presented.

*   **Principle:** High-level, universal guidance (e.g., "Hick's Law").
*   **Pattern:** Specific, reusable UI solutions (e.g., "Optimistic UI").
*   **System:** Methodologies for organization (e.g., "Atomic Design").
*   **Anti-Pattern:** Practices to avoid with documented failure modes (e.g., "Scroll Jacking").
*   **Case Study:** Deep-dive analysis of industry-leading implementations.

---

## 3. Data Schema (The "Entry")
Every `ReferenceEntry` is a structured object designed for decision support.

### 3.1 Metadata Layer
*   `id`: Unique identifier.
*   `title`: Professional name of the pattern/principle.
*   `slug`: URL-friendly identifier.
*   `domain`: One of the 6 core domains.
*   `format`: One of the 5 core formats.

### 3.2 Judgment Layer (Decision Support)
*   **Verdict:** `recommended` | `conditional` | `experimental` | `anti-pattern`.
*   **Confidence Score:** 0-100% (Universality of the advice).
*   **Use Context:** `saas` | `mobile` | `dashboard` | `devtools` | `content`.

### 3.3 Content Layer
*   **Quick Take:** 1-sentence summary.
*   **Mechanism:** Array of logical steps.
*   **Tradeoffs:** Array of `{ pro, con }` objects.
*   **Failure Modes:** Array of specific risks.
*   **Alternatives:** Array of `{ entryId, condition }` for redirection.

### 3.4 Technical Layer
*   **A11y Specs:** Implementation requirements for accessibility.
*   **Perf Impact:** `low` | `medium` | `high`.
*   **Implementation Notes:** Technical guidance for engineers.

---

## 4. Navigation & Discovery

### 4.1 The Library (The Hub)
*   **Grid/List Toggle:** Optimized for visual scanning or data density.
*   **Multi-Filter:** Simultaneous filtering by Domain, Format, and Verdict.
*   **Risk Signals:** Visual icons for High Performance Cost and Anti-Patterns.

### 4.2 The Viewer (The Detail)
*   **Spec Sheet Layout:** Two-column layout prioritizing judgment and technical specs.
*   **Comparison Trigger:** Direct link to head-to-head analysis via the Alternatives section.

### 4.3 The Comparison Engine (The Decision)
*   **Head-to-Head:** Side-by-side table comparing Verdict, Complexity, Perf Cost, and Tradeoffs.
*   **Architectural Verdict:** Final guidance on which pattern to choose for specific constraints.

---

## 5. Relationship Mapping
Entries are not isolated; they form a **Knowledge Graph**:
*   **Related IDs:** Lateral links to similar concepts.
*   **Alternatives:** Hierarchical links to "Better" or "Different" solutions.
*   **Concept Clusters (Future):** Visual mapping of how Foundations lead to Patterns.

---

## 6. AI Assistant Integration
The AI Assistant acts as a **Dynamic IA Layer**, allowing users to query the graph using natural language (e.g., "What is the best alternative to Skeleton Screens for a low-bandwidth mobile app?").
