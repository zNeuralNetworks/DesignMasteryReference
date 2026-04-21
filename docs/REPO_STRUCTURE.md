# Repository Structure: DesignMastery Reference

This document outlines the organization of the DesignMastery Reference codebase, following a feature-based architecture for scalability and maintainability.

---

## 1. Root Directory
*   `App.tsx`: Main application component and routing configuration.
*   `main.tsx`: Application entry point.
*   `types.ts`: Global TypeScript interfaces, types, and enums (The Source of Truth for the data model).
*   `index.css`: Global styles using Tailwind CSS.
*   `metadata.json`: Application metadata and permissions.
*   `package.json`: Dependency management and scripts.

---

## 2. `/docs` - Documentation Hub
Centralized location for architectural and product documentation.
*   `PDD.md`: Product Design Document.
*   `IA.md`: Information Architecture.
*   `REPO_STRUCTURE.md`: This document.
*   `CHANGELOG.md`: History of changes and versions.

---

## 3. `/data` - Data Layer
The static knowledge base of the application.
*   `index.ts`: Central registry that exports all reference entries.
*   `/entries`: Individual TypeScript files for every reference entry (e.g., `optimistic-ui.ts`). Each file follows the `ReferenceEntry` schema.

---

## 4. `/features` - Feature-Based Components
Organized by functional domain rather than technical type.

### 4.1 `/reference`
Core logic for the reference engine.
*   `ReferenceLibrary.tsx`: The main hub with filtering and search.
*   `ReferenceViewer.tsx`: The high-density "Spec Sheet" detail view.
*   `ComparisonPage.tsx` & `ComparisonTable.tsx`: Head-to-head architectural analysis.
*   `ReferenceAssistant.tsx`: AI-powered implementation guidance.

### 4.2 `/demos`
Visual and interactive components used within reference entries.
*   `InteractiveDemos.tsx`: Complex React-based interactive patterns.
*   `StaticVisuals.tsx`: Lightweight visual representations for library cards.

### 4.3 `/admin` & `/diagnostics`
Internal tools for system management.
*   `AdminDashboard.tsx`: Content management and system status.
*   `TestRunner.tsx`: Diagnostic tools for verifying data integrity.

---

## 5. `/services` - Logic & API Services
External integrations and shared logic.
*   `gemini.ts`: Integration with the Google Gemini API.
*   `prompts.ts`: System instructions and persona definitions for the AI Assistant.

---

## 6. Architectural Principles
1.  **Feature Isolation:** Keep UI, logic, and types related to a specific feature within its `/features` subdirectory.
2.  **Data-Driven UI:** The UI should react dynamically to the `ReferenceEntry` schema. Adding a new field to `types.ts` should ideally only require updates in the Viewer and Library.
3.  **Static First:** Reference data is stored as TypeScript objects to ensure zero-latency navigation and full type safety across the content library.
