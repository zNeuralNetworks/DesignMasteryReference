# DesignMastery Reference - Premium UI/UX Knowledge System

DesignMastery Reference is a premium reference library for UI/UX systems, interaction patterns, and product design judgment. Unlike traditional text-based learning, this platform utilizes **"Live Concept Rendering"**—where the concept being documented (e.g., "Optimistic UI") is actually executed as a functional component within the reference entry.

## 🚀 Tech Stack
- **React 18+**: Core framework for building the UI.
- **TypeScript**: Enforced for type safety across the reference library and component registry.
- **Tailwind CSS v4**: Utility-first styling with a robust CSS variable-based theming system.
- **Framer Motion**: Handles complex layout transitions and micro-interactions.
- **Lucide React**: Lightweight, consistent SVG icon set.
- **Gemini AI**: Powers the Reference Assistant for context-aware design assistance.

## 🏗️ Architecture
The application follows a **Feature-Based** architecture for modularity and scalability:
- `features/reference/`: Core reference experience (Library, Viewer, Assistant, E-book Generator).
- `features/demos/`: Interactive and static visual concept renderings.
- `features/admin/`: Management dashboard for reference content.
- `features/diagnostics/`: In-browser test runner for smoke testing and data integrity.
- `services/`: Centralized service layer for external integrations (e.g., Gemini API).
- `components/`: Shared layout elements and generic UI primitives.

## 🛠️ Key Features
- **Interactive Demos**: Every entry includes a live, interactive component demonstrating the design principle in action.
- **Reference Assistant**: A context-aware chatbot that helps designers understand complex concepts through analogies and code snippets.
- **E-Book Generator**: A specialized view optimized for high-quality PDF export of the entire reference library.
- **In-Browser Diagnostics**: A custom test runner to ensure application stability without external dependencies.

## 📈 Improvement Roadmap
Strategic improvements planned for future iterations:
- **PWA Support**: Offline reading capabilities for subway/airplane study.
- **Live Code Playground**: Integration of `Sandpack` or `Monaco Editor` for real-time CSS/Tailwind experimentation.
- **Progress Tracking**: User accounts to track entry review and mastery paths.
- **CMS Integration**: Moving the reference data to a Headless CMS for easier content updates.

---
© 2024 DesignMastery. All rights reserved.
