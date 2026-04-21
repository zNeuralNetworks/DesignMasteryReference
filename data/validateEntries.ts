import { ReferenceEntry } from '../types';

export type EntryValidationIssue = {
  entryId?: string;
  field?: keyof ReferenceEntry | 'alternatives.entryId' | 'relatedEntryIds';
  message: string;
};

export type EntryValidationResult = {
  valid: boolean;
  issues: EntryValidationIssue[];
  warnings: EntryValidationIssue[];
};

const REQUIRED_ARRAY_FIELDS: (keyof ReferenceEntry)[] = [
  'useContext',
  'mechanism',
  'whenToUse',
  'whenNotToUse',
  'tradeoffs',
  'failureModes',
  'alternatives',
  'implementationNotes',
  'a11ySpecs',
  'checklist',
  'relatedEntryIds',
  'tags',
];

const REQUIRED_TEXT_FIELDS: (keyof ReferenceEntry)[] = [
  'id',
  'slug',
  'title',
  'description',
  'quickTake',
  'whyItMatters',
  'content',
];

const GENERIC_CHECKLIST = [
  'Verified accessibility',
  'Tested on mobile',
  'Consistent with design system',
];

export const validateEntries = (entries: ReferenceEntry[]): EntryValidationResult => {
  const issues: EntryValidationIssue[] = [];
  const warnings: EntryValidationIssue[] = [];
  const ids = new Set<string>();
  const slugs = new Set<string>();

  entries.forEach((entry) => {
    if (ids.has(entry.id)) {
      issues.push({ entryId: entry.id, field: 'id', message: `Duplicate entry id "${entry.id}".` });
    }
    ids.add(entry.id);

    if (slugs.has(entry.slug)) {
      issues.push({ entryId: entry.id, field: 'slug', message: `Duplicate entry slug "${entry.slug}".` });
    }
    slugs.add(entry.slug);

    if (entry.confidenceScore < 0 || entry.confidenceScore > 100) {
      issues.push({
        entryId: entry.id,
        field: 'confidenceScore',
        message: 'Confidence score must be between 0 and 100.',
      });
    }

    REQUIRED_TEXT_FIELDS.forEach((field) => {
      const value = entry[field];
      if (typeof value !== 'string' || value.trim().length === 0) {
        issues.push({ entryId: entry.id, field, message: `${String(field)} must be non-empty text.` });
      }
    });

    REQUIRED_ARRAY_FIELDS.forEach((field) => {
      const value = entry[field];
      if (!Array.isArray(value)) {
        issues.push({ entryId: entry.id, field, message: `${String(field)} must be an array.` });
        return;
      }

      const canBeEmpty = field === 'alternatives' || field === 'relatedEntryIds';
      if (!canBeEmpty && value.length === 0) {
        issues.push({ entryId: entry.id, field, message: `${String(field)} must contain at least one item.` });
      }
    });

    if (
      entry.checklist.length === GENERIC_CHECKLIST.length &&
      entry.checklist.every((item, index) => item === GENERIC_CHECKLIST[index])
    ) {
      warnings.push({
        entryId: entry.id,
        field: 'checklist',
        message: 'Checklist still uses generic placeholder criteria.',
      });
    }
  });

  entries.forEach((entry) => {
    entry.alternatives.forEach((alternative) => {
      if (!ids.has(alternative.entryId)) {
        issues.push({
          entryId: entry.id,
          field: 'alternatives.entryId',
          message: `Alternative "${alternative.entryId}" does not match a registered entry id.`,
        });
      }
    });

    entry.relatedEntryIds.forEach((relatedId) => {
      if (!ids.has(relatedId)) {
        issues.push({
          entryId: entry.id,
          field: 'relatedEntryIds',
          message: `Related entry "${relatedId}" does not match a registered entry id.`,
        });
      }
    });
  });

  return {
    valid: issues.length === 0,
    issues,
    warnings,
  };
};
