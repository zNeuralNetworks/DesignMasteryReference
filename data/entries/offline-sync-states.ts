import { ReferenceEntry } from '../../types';

export const offline_sync_states: ReferenceEntry = {
  id: "offline-sync-states",
  title: "Offline & Sync States",
  domain: "interaction",
  format: "pattern",
  verdict: "conditional",
  useContext: ["saas", "mobile", "consumer"],
  confidenceScore: 86,
  slug: "offline-sync-states",
  complexity: "advanced",
  description: "Designing interfaces that work without a connection, communicate sync status clearly, and resolve conflicts between offline edits and server state.",
  quickTake: "Offline-capable apps feel more reliable and responsive even when users are always online — local-first operations are fast by definition. The design challenge is communicating sync state clearly without alarming users. Show 'Saved locally, syncing...' not 'Warning: offline'. Conflicts need resolution UX only when they actually occur.",
  whyItMatters: "Mobile users experience intermittent connectivity constantly. Progressive Web Apps running on desktop lose connection during VPN drops and hotel WiFi failures. Without offline state design, these moments cause data loss and broken UI. With it, the app continues working and syncs transparently.",
  mechanism: [
    "Detect connectivity: navigator.onLine + online/offline events as a start; real connectivity test (fetch a tiny endpoint) for accuracy",
    "Queue writes locally: store operations in IndexedDB queue when offline; replay when reconnected",
    "Optimistic persistence: save to local state immediately, sync to server asynchronously",
    "Conflict resolution: last-write-wins for simple cases; version vectors or CRDTs for collaborative docs",
  ],
  whenToUse: [
    "Mobile-first apps where intermittent connectivity is expected",
    "Document editing / note-taking apps where losing unsaved work is catastrophic",
    "Apps with collaborative editing where concurrent edits create conflicts",
  ],
  whenNotToUse: [
    "Desktop-only productivity tools where offline is genuinely rare",
    "Apps requiring real-time server state (trading platforms, live dashboards) — stale data is worse than no data",
    "Initial implementation: offline sync is complex infrastructure — add after core product is stable",
  ],
  tradeoffs: [
    { pro: "Operations feel instant — no network round-trip in the critical path", con: "Conflict resolution is complex, especially for collaborative editing" },
    { pro: "App remains functional during connectivity loss", con: "Sync state communication design requires careful copy to avoid alarming users unnecessarily" },
  ],
  failureModes: [
    "Alarming offline UI: large red banner 'YOU ARE OFFLINE' for routine brief connectivity loss",
    "Silent data loss: offline writes not queued — user thinks they saved, but didn't",
    "No conflict visibility: last-write-wins silently discards a team member's changes",
    "Infinite sync state: spinner that never resolves if server is permanently unreachable",
  ],
  alternatives: [
    { entryId: "optimistic-ui", condition: "Optimistic UI is the simpler form — assume success without full offline queuing" },
    { entryId: "error-states", condition: "Permanent offline failures need error state patterns after retry exhaustion" },
  ],
  a11ySpecs: [
    "Sync state changes announced via aria-live='polite' — not assertive, as sync is not urgent",
    "Conflict resolution dialogs: full modal with aria requirements (focus management, Escape)",
    "Status indicators: don't rely on color alone (green synced / red offline) — add icon + text",
  ],
  perfImpact: "high",
  implementationNotes: [
    "IndexedDB via idb library for local queue storage",
    "Service Worker for background sync (Background Sync API) when tab is closed",
    "TanStack Query: offline-first with persistQueryClient and broadcastQueryClient",
    "Conflict timestamps: store created/modified timestamps on every record for last-write-wins",
  ],
  checklist: [
    "Offline state detected and communicated without alarming users",
    "Writes queued locally when offline, replayed on reconnect",
    "Sync status indicator non-intrusive (not blocking UI)",
    "Conflict states have visible resolution UX when they occur",
    "Data never silently lost on connectivity failure",
  ],
  relatedEntryIds: ['optimistic-ui', 'error-states', 'loading-states', 'toast-notifications'],
  tags: ["offline", "sync state", "local-first", "offline mode", "connectivity", "background sync"],
  intentTags: ["improve-feedback", "improve-performance"],
  contentStatus: 'hardened',
  content: `
# Offline & Sync States

Design for connectivity as a spectrum, not a binary.

## The Connectivity Reality

Users aren't "online" or "offline" — they're on:
- Fast WiFi
- Slow WiFi with packet loss
- 4G with intermittent dropouts
- Airplane mode briefly
- A VPN that just disconnected

Good offline UX handles all of these gracefully.

## Sync State Indicators

**Non-alarming:** "Saved locally, syncing..." (matter-of-fact)
**Alarming:** "⚠ WARNING: OFFLINE - DATA MAY BE LOST" (panic-inducing for a 2-second dropout)

\`\`\`tsx
function SyncStatus({ status }: { status: 'synced' | 'syncing' | 'offline' | 'error' }) {
  const config = {
    synced: { icon: <Check size={12} />, label: 'Saved', className: 'text-slate-400' },
    syncing: { icon: <Loader2 size={12} className="animate-spin" />, label: 'Saving...', className: 'text-slate-400' },
    offline: { icon: <WifiOff size={12} />, label: 'Saved locally', className: 'text-amber-500' },
    error: { icon: <AlertCircle size={12} />, label: 'Save failed', className: 'text-red-500' },
  }[status];

  return (
    <span className={\`flex items-center gap-1 text-xs \${config.className}\`} aria-live="polite">
      {config.icon}
      {config.label}
    </span>
  );
}
\`\`\`

## The Write Queue Pattern

\`\`\`typescript
async function saveDocument(doc: Document) {
  // 1. Save to local state immediately (instant)
  updateLocalState(doc);

  // 2. Try to sync to server
  if (navigator.onLine) {
    try {
      await api.saveDocument(doc);
      setSyncStatus('synced');
    } catch {
      await queueForSync(doc); // Save to IndexedDB queue
      setSyncStatus('offline');
    }
  } else {
    await queueForSync(doc);
    setSyncStatus('offline');
  }
}

// When back online, replay queue
window.addEventListener('online', async () => {
  const queue = await getQueuedWrites();
  for (const write of queue) {
    await api.saveDocument(write);
    await removeFromQueue(write.id);
  }
  setSyncStatus('synced');
});
\`\`\`
`,
};
