import { entries } from '../data/index';
import { validateEntries } from '../data/validateEntries';

const result = validateEntries(entries);

if (!result.valid) {
  console.error(`Reference entry validation failed with ${result.issues.length} issue(s):`);
  result.issues.forEach((issue) => {
    const location = [issue.entryId, issue.field].filter(Boolean).join(' / ') || 'registry';
    console.error(`- ${location}: ${issue.message}`);
  });
  process.exit(1);
}

if (result.warnings.length > 0) {
  console.warn(`Reference entry validation passed with ${result.warnings.length} content warning(s):`);
  result.warnings.slice(0, 12).forEach((warning) => {
    const location = [warning.entryId, warning.field].filter(Boolean).join(' / ') || 'registry';
    console.warn(`- ${location}: ${warning.message}`);
  });
  if (result.warnings.length > 12) {
    console.warn(`- ...and ${result.warnings.length - 12} more warning(s).`);
  }
}

console.log(`Reference entry validation passed for ${entries.length} entries.`);
