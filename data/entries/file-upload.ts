import { ReferenceEntry } from '../../types';

export const file_upload: ReferenceEntry = {
  id: "file-upload",
  title: "File Upload Zones",
  domain: "components",
  format: "style",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "consumer"],
  confidenceScore: 92,
  slug: "file-upload",
  complexity: "intermediate",
  description: "Creating intuitive drag-and-drop zones with rich visual feedback.",
  quickTake: "File Upload & Drop Zones provide a tactile, visual way for users to add files to an application, moving beyond the standard browser file input.",
  whyItMatters: "File uploading is often a high-friction task. A well-designed drop zone with clear states and progress indicators reduces anxiety and makes the process feel reliable and modern.",
  mechanism: [
    "Provide a large, clearly defined 'Drop Zone' with a dashed or distinct border",
    "Implement 'Drag Over' states that provide immediate visual feedback (e.g., color change, scale)",
    "Show a 'Progress' indicator (percentage or bar) during the upload process",
    "Allow for both 'Drag-and-Drop' and 'Click-to-Select' interactions"
  ],
  whenToUse: [
    "Profile picture uploads and image galleries",
    "Document management systems and cloud storage apps",
    "Importing data files (CSV, JSON) into a dashboard"
  ],
  whenNotToUse: [
    "When only a single, very small file is needed (a simple button might suffice)",
    "In mobile-only apps where drag-and-drop is less common (use native file pickers)",
    "When security constraints prevent the use of complex client-side upload logic"
  ],
  tradeoffs: [
    { pro: "Significantly better UX than standard file inputs", con: "Requires more complex state management and event handling" },
    { pro: "Allows for multi-file selection and previewing", con: "Can be visually overwhelming if not integrated cleanly into the layout" }
  ],
  failureModes: [
    "The 'Silent' Failure: Not providing feedback when an upload fails or is rejected",
    "Missing Constraints: Not clearly stating file size or type limits before the user tries to upload",
    "No Preview: Forcing users to remember which file they uploaded without showing a thumbnail"
  ],
  alternatives: [
    { entryId: "empty-states", condition: "Use to encourage file uploads when a collection is empty" },
    { entryId: "toast-notifications", condition: "Use to confirm successful uploads or report errors" }
  ],
  a11ySpecs: [
    "Ensure the drop zone is keyboard-accessible (can be triggered via Enter/Space)",
    "Use 'aria-live' to announce upload progress and completion",
    "Provide a clear textual description of the upload requirements"
  ],
  perfImpact: "medium",
  implementationNotes: [
    "Use 'react-dropzone' for a robust, accessible foundation",
    "Implement 'Optimistic UI' by showing the file in the list before the upload completes",
    "Handle large files by using 'Multipart' uploads or chunking"
  ],
  checklist: [
    "Exposed accepted file types, size limits, and failure states before upload",
    "Provided keyboard-accessible file selection and remove controls",
    "Handled retry, cancellation, progress, and partial failure states"
  ],
  relatedEntryIds: ['progressive-disclosure', 'empty-states', 'toast-notifications'],
  interactiveComponent: "FileUpload",
  tags: ["Forms","Interaction","UX"],
  content: `

# Drag & Drop Zones

File uploading used to be a boring \`<input type="file">\`. Modern apps use large drop zones.

### Visual States
1.  **Idle**: Dashed border, "Drop files here".
2.  **Drag Over**: Highlight color, scale up icon to indicate "I am ready to receive".
    
`,
  intentTags: ["improve-feedback", "reduce-cognitive-load"],
};
