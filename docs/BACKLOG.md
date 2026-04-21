# Project Backlog: DesignMastery Reference

This document tracks planned features, technical debt, and content requirements.

---

## 1. High Priority (Phase 2)

### 1.1 Content Hardening
*   [ ] **Audit all 50+ entries**: Currently, many entries have placeholder data from the initial migration. They need to be "hardened" with real failure modes, alternatives, and technical specs.
*   [ ] **Case Study Expansion**: Add detailed case studies for Linear, Airbnb, and Duolingo following the new Spec Sheet format.

### 1.2 Comparison Engine Enhancements
*   [ ] **Multi-Pattern Comparison**: Allow comparing 3+ patterns simultaneously.
*   [ ] **Comparison Export**: Generate a "Decision Matrix" PDF from a comparison view.

---

## 2. Technical Debt

### 2.1 Data Integrity
*   [ ] **Schema Validation Script**: Create a script to verify that all entries in `/data/entries` have non-placeholder values for critical fields (Failure Modes, Tradeoffs).
*   [ ] **Broken Link Checker**: Ensure all `relatedEntryIds` and `alternatives.entryId` actually exist in the registry.

### 2.2 Performance
*   [ ] **Dynamic Imports**: Lazy-load interactive demo components to reduce initial bundle size as the library grows.

---

## 3. Future Vision (Phase 3)

### 3.1 Knowledge Graph
*   [ ] **Visual Map**: A D3.js powered interactive graph showing how principles (Foundations) lead to specific UI Patterns.
*   [ ] **Decision Trees**: Interactive "Choose your own adventure" flows to help users select a pattern based on their constraints (e.g., "Is your app mobile-first?" -> "Yes" -> "Avoid Scroll Jacking").

### 3.2 Community & Personalization
*   [ ] **Bookmarks/Collections**: Allow users to save "Pattern Stacks" for specific projects.
*   [ ] **User Notes**: Private annotation layer for teams to add internal implementation notes to public patterns.
