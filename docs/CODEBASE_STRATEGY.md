# Project Strategy: DesignMastery

This document outlines the current state of the DesignMastery codebase, identifies areas for improvement, and provides a comprehensive roadmap for transforming the application into a clean, maintainable, and scalable platform.

---

## 1. Codebase Assessment

### **Current Strengths**
- **Modern Tech Stack**: React 18, Vite, Tailwind CSS v4, and Framer Motion provide a solid foundation.
- **Feature Rich**: Includes AI assistance, interactive demos, reference management, and diagnostic tools.
- **Theming System**: Robust CSS variable-based theming (Bioluminescent, Swiss, Default).

### **Identified Weaknesses**
- **High Redundancy**: Multiple duplicate components exist across root, `/components`, and `/features` directories.
- **Architectural Inconsistency**: The project mixes a flat component structure with a feature-based one, leading to "import spaghetti."
- **Service Fragmentation**: Gemini AI logic is split between multiple files (`/services/geminiService.ts` and `/features/tutor/geminiService.ts`).
- **Data Overlap**: Curriculum data is scattered across `data.ts` and `/data/index.ts`.
- **Stale Assets**: Empty files (e.g., `index.tsx`) and fragmented documentation (`readMe.txt`, `readmeimprovements.txt`) clutter the root.

---

## 2. Immediate Next Steps

1.  **Service Unification**: Merge all Gemini AI logic into a single, robust service.
2.  **Feature Migration**: Move all reference and assistant-related components into their respective `/features` subdirectories.
3.  **Data Consolidation**: Create a single source of truth for all reference data.

---

## 3. Comprehensive Game Plan

### **Phase 1: Structural Reorganization**
*   **Feature-First Architecture**: 
    *   Strictly enforce the `/features` pattern for all domain-specific logic.
    *   Reserve `/components` for "dumb" UI primitives (Buttons, Inputs) and Layout elements.
*   **Path Alias Enforcement**: Standardize the use of `@/` for all internal imports to simplify refactoring.

### **Phase 2: Redundancy Cleanup**
*   **Component Audit**: 
    *   Delete `/components/AdminPage.tsx` → Use `/features/admin/AdminDashboard.tsx`.
    *   Delete `/components/GeminiTutor.tsx` → Use `/features/reference/ReferenceAssistant.tsx`.
    *   Delete `/components/InteractiveDemos.tsx` → Use `/features/demos/InteractiveDemos.tsx`.
    *   Delete `/components/StaticVisuals.tsx` → Use `/features/demos/StaticVisuals.tsx`.
    *   Delete `/components/TestRunner.tsx` → Use `/features/diagnostics/TestRunner.tsx`.
*   **Service Cleanup**:
    *   Delete `/features/tutor/geminiService.ts` → Consolidate into `/services/geminiService.ts`.
*   **File Hygiene**: 
    *   Remove `index.tsx` (empty).
    *   Consolidate `readMe.txt` and `readmeimprovements.txt` into a single `README.md`.
    *   Archive or remove `/migrated_prompt_history/` if no longer needed for reference.

### **Phase 3: Standardization & Type Safety**
*   **Centralized Types**: Audit all components to ensure they import from `@/types.ts` rather than defining local interfaces for shared data.
*   **Theme Integration**: Replace all hardcoded Tailwind colors with the CSS variables defined in `index.css` to ensure theme-switching works across all components.
*   **Standardized Error Handling**: Implement the `handleFirestoreError` pattern (if applicable) and ensure all async operations are wrapped in the global `ErrorBoundary`.

### **Phase 4: Maintenance & Scalability**
*   **Documentation**: Maintain this strategy doc and a `CHANGELOG.md` to track architectural shifts.
*   **Performance Audit**: Use the `TestRunner` to identify and optimize heavy Framer Motion animations or expensive re-renders in the `ReferenceViewer`.
*   **AI Integration Hardening**: Move Gemini API prompts into a centralized `prompts.ts` file within the service directory for easier tuning.

---

**Status**: 🟢 *Consolidated*  
**Last Updated**: 2026-04-14
