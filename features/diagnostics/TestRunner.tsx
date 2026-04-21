import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { ReferenceLibrary } from '@/features/reference/ReferenceLibrary';
import { ReferenceViewer } from '@/features/reference/ReferenceViewer';
import { StaticVisual } from '@/features/demos/StaticVisuals';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { CheckCircle, XCircle, Play, RefreshCw, AlertCircle, Terminal, Activity, ShieldCheck } from 'lucide-react';
import { entries } from '@/data/index';
import { validateEntries } from '@/data/validateEntries';

import { TestResult } from '@/types';

export const TestRunner = () => {
  const [results, setResults] = useState<TestResult[]>([
    { id: '1', name: 'Data Integrity: Spec Sheet Schema', status: 'pending' },
    { id: '2', name: 'Data Integrity: Knowledge Graph Links', status: 'pending' },
    { id: '3', name: 'Smoke Test: Homepage Mounts', status: 'pending' },
    { id: '4', name: 'Content: Hero Headline Integrity', status: 'pending' },
    { id: '5', name: 'Data Layer: Reference Grid Rendering', status: 'pending' },
    { id: '6', name: 'Navigation: Domain Filters Exist', status: 'pending' },
    { id: '7', name: 'Component Registry: Static Visuals', status: 'pending' },
    { id: '8', name: 'Routing: Reference Viewer & Data Hydration', status: 'pending' },
    { id: '9', name: 'Integration: Reference Assistant Component', status: 'pending' },
  ]);
  const [isRunning, setIsRunning] = useState(false);
  const runningRef = useRef(false);

  // Helper to wait for React to flush changes
  const waitForRender = (ms = 100) => new Promise(resolve => setTimeout(resolve, ms));

  const runTests = async () => {
    if (runningRef.current) return;
    setIsRunning(true);
    runningRef.current = true;
    
    // Reset states
    setResults(prev => prev.map(t => ({ ...t, status: 'pending', error: undefined, duration: undefined })));

    // Create a detached DOM node for testing (Virtual DOM Container)
    const testRoot = document.createElement('div');
    testRoot.style.position = 'absolute';
    testRoot.style.visibility = 'hidden';
    testRoot.style.pointerEvents = 'none';
    document.body.appendChild(testRoot);

    let root: any = null;

    try {
      root = createRoot(testRoot);
      
      // --- TEST 1: SPEC SHEET SCHEMA ---
      await runSingleTest('1', async () => {
        const result = validateEntries(entries);
        if (!result.valid) {
          throw new Error(result.issues.slice(0, 5).map(issue => `${issue.entryId || 'registry'}: ${issue.message}`).join(' | '));
        }
      });

      // --- TEST 2: KNOWLEDGE GRAPH LINKS ---
      await runSingleTest('2', async () => {
        const result = validateEntries(entries);
        const linkIssues = result.issues.filter(issue => issue.field === 'alternatives.entryId' || issue.field === 'relatedEntryIds');
        if (linkIssues.length > 0) {
          throw new Error(linkIssues.map(issue => `${issue.entryId}: ${issue.message}`).join(' | '));
        }
      });

      // --- TEST 3: SMOKE TEST ---
      await runSingleTest('3', async () => {
        // Mount the Homepage inside MemoryRouter to handle Links without changing actual URL
        root.render(
          <MemoryRouter>
            <ReferenceLibrary />
          </MemoryRouter>
        );
        await waitForRender(300); // Allow effects to run
        if (testRoot.innerHTML === '') throw new Error('Render produced no HTML output');
      });

      // --- TEST 4: CONTENT INTEGRITY ---
      await runSingleTest('4', async () => {
        const h1 = testRoot.querySelector('h1');
        if (!h1) throw new Error('H1 Element not found');
        if (!h1.textContent?.includes('Design Library')) throw new Error(`Expected headline to contain "Design Library", found: "${h1.textContent}"`);
      });

      // --- TEST 5: DATA RENDERING ---
      await runSingleTest('5', async () => {
        // Look for reference cards. Based on ReferenceLibrary.tsx, they are Links inside a grid
        const articles = testRoot.querySelectorAll('h3');
        if (articles.length === 0) throw new Error('No reference cards rendered. Check data/index.ts import.');
        if (articles.length < 5) throw new Error(`Expected diverse reference library (5+ entries), found only ${articles.length}`);
      });

      // --- TEST 6: NAVIGATION ---
      await runSingleTest('6', async () => {
        // Look for filter buttons
        const buttons = Array.from(testRoot.querySelectorAll('button'));
        const hasAllFilter = buttons.some(b => b.textContent?.includes('All'));
        const hasCategories = buttons.length > 5;
        
        if (!hasAllFilter) throw new Error('"All" filter chip missing');
        if (!hasCategories) throw new Error('Domain filter chips not rendered');
      });

      // --- TEST 7: VISUAL REGISTRY ---
      await runSingleTest('7', async () => {
         // Directly render a StaticVisual component to test the registry lookup
         root.render(<StaticVisual type="Glassmorphism" />);
         await waitForRender(100);
         
         // Glassmorphism component contains the text "Frosted"
         if (!testRoot.textContent?.includes('Frosted')) throw new Error('StaticVisual failed to render correct component type');
      });

      // --- TEST 8: ROUTING & REFERENCE VIEWER ---
      await runSingleTest('8', async () => {
         // Mount a specific reference route
         root.render(
            <MemoryRouter initialEntries={['/reference/theme-bioluminescent']}>
                <Routes>
                    <Route path="/reference/:id" element={<ReferenceViewer />} />
                </Routes>
            </MemoryRouter>
         );
         await waitForRender(500); // Allow for Framer Motion initial animations
         
         const h1 = testRoot.querySelector('h1');
         if (!h1) throw new Error('Reference H1 not found');
         // Check if data hydrated correctly for this specific ID
         if (!h1.textContent?.includes('Bioluminescent')) throw new Error(`Expected reference title "Bioluminescent", found: "${h1.textContent}"`);
      });

      // --- TEST 9: REFERENCE ASSISTANT INTEGRATION ---
      await runSingleTest('9', async () => {
         // Re-mount reference viewer to check for Assistant
         root.render(
            <MemoryRouter initialEntries={['/reference/theme-bioluminescent']}>
                <Routes>
                    <Route path="/reference/:id" element={<ReferenceViewer />} />
                </Routes>
            </MemoryRouter>
         );
         await waitForRender(500);
         
         // Check for the Reference Assistant header or button
         const tutorButton = Array.from(testRoot.querySelectorAll('button')).find(b => b.textContent?.includes('Consult Assistant'));
         const tutorHeader = testRoot.textContent?.includes('Reference Assistant');
         
         if (!tutorHeader) throw new Error('Reference Assistant section header missing');
         if (!tutorButton) throw new Error('AI Assistant "Consult Assistant" button not found');
      });

    } catch (e: any) {
      console.error("Test Suite Critical Failure", e);
    } finally {
      // Cleanup
      if (root) {
        // React 18: unmount is async, but we can detach DOM immediately
        setTimeout(() => {
            try {
                root.unmount();
            } catch(e) {
                console.warn("Error unmounting test root", e);
            }
            if (document.body.contains(testRoot)) {
                document.body.removeChild(testRoot);
            }
            setIsRunning(false);
            runningRef.current = false;
        }, 500);
      } else {
         if (document.body.contains(testRoot)) {
            document.body.removeChild(testRoot);
         }
         setIsRunning(false);
         runningRef.current = false;
      }
    }
  };

  const runSingleTest = async (id: string, testFn: () => Promise<void>) => {
    setResults(prev => prev.map(t => t.id === id ? { ...t, status: 'running' } : t));
    const start = performance.now();
    try {
      await testFn();
      const end = performance.now();
      setResults(prev => prev.map(t => t.id === id ? { ...t, status: 'pass', duration: Math.round(end - start) } : t));
    } catch (err: any) {
      setResults(prev => prev.map(t => t.id === id ? { ...t, status: 'fail', error: err.message } : t));
      // Stop suite on smoke test failure, but continue for others
      if (id === '1') throw err; 
    }
  };

  const passedCount = results.filter(r => r.status === 'pass').length;
  const totalTests = results.length;
  const healthScore = Math.round((passedCount / totalTests) * 100);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
            <div>
                <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                    <ShieldCheck className="text-emerald-500" /> System Diagnostics
                </h1>
                <p className="text-slate-400 mt-2">In-Browser Unit Testing Suite</p>
            </div>
            <button 
                onClick={runTests} 
                disabled={isRunning}
                className={`px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-all ${isRunning ? 'bg-slate-700 text-slate-500 cursor-not-allowed' : 'bg-primary-600 text-white hover:bg-primary-500 hover:shadow-lg'}`}
            >
                {isRunning ? <RefreshCw className="animate-spin" /> : <Play fill="currentColor" />}
                {isRunning ? 'Running Suite...' : 'Run Diagnostics'}
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Status Card */}
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 md:col-span-1">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Health Score</h3>
                <div className="flex flex-col items-center justify-center py-8">
                    <div className="relative w-32 h-32 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="64" cy="64" r="60" fill="none" stroke="#1e293b" strokeWidth="8" />
                            <circle 
                                cx="64" cy="64" r="60" fill="none" stroke={healthScore === 100 ? '#10b981' : healthScore > 50 ? '#f59e0b' : '#ef4444'} strokeWidth="8" 
                                strokeDasharray={377}
                                strokeDashoffset={377 - (377 * (passedCount / totalTests))}
                                className="transition-all duration-1000 ease-out"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">
                            {passedCount}/{totalTests}
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <div className="text-sm font-medium text-slate-300">Tests Passed</div>
                        <div className="text-xs text-slate-500">Target: 100% Coverage</div>
                    </div>
                </div>
            </div>

            {/* Test Feed */}
            <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden md:col-span-2 flex flex-col">
                <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-slate-400 font-mono">
                        <Terminal size={14} />
                        <span>vitest-browser-runner/v1.0.0</span>
                    </div>
                    {isRunning && <Activity size={14} className="text-primary-400 animate-pulse" />}
                </div>
                <div className="p-6 space-y-4 flex-1 overflow-y-auto">
                    {results.map((test) => (
                        <div key={test.id} className="flex items-start gap-4 p-3 rounded-lg bg-slate-900/50 border border-slate-800">
                            <div className="mt-0.5">
                                {test.status === 'pending' && <div className="w-5 h-5 rounded-full border-2 border-slate-600" />}
                                {test.status === 'running' && <RefreshCw className="w-5 h-5 text-primary-400 animate-spin" />}
                                {test.status === 'pass' && <CheckCircle className="w-5 h-5 text-emerald-500" />}
                                {test.status === 'fail' && <XCircle className="w-5 h-5 text-red-500" />}
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center">
                                    <h4 className={`font-medium ${test.status === 'pending' ? 'text-slate-500' : 'text-slate-200'}`}>{test.name}</h4>
                                    {test.duration !== undefined && <span className="text-xs font-mono text-slate-500">{test.duration}ms</span>}
                                </div>
                                {test.error && (
                                    <div className="mt-2 p-3 bg-red-950/30 border border-red-900/50 rounded text-red-400 text-sm font-mono">
                                        Error: {test.error}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
