import fs from 'fs';
import path from 'path';

const entriesDir = path.join(process.cwd(), 'data/entries');
const files = fs.readdirSync(entriesDir);

files.forEach(file => {
  if (!file.endsWith('.ts')) return;
  
  const filePath = path.join(entriesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if already migrated
  if (content.includes('verdict:')) return;
  
  // Simple regex-based insertion after 'format:'
  const formatMatch = content.match(/format: ".*",/);
  if (formatMatch) {
    const insertion = `\n  verdict: "recommended",\n  useContext: ["saas"],`;
    content = content.replace(formatMatch[0], formatMatch[0] + insertion);
    
    // Also add confidenceScore if missing
    if (!content.includes('confidenceScore:')) {
      content = content.replace(insertion, insertion + `\n  confidenceScore: 90,`);
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Migrated ${file}`);
  } else {
    console.warn(`Could not find format in ${file}`);
  }
});
