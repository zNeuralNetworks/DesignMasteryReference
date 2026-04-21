import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, LayoutDashboard, FileText, Settings, Users, Activity, Search, Edit2, Trash2, CheckCircle, AlertTriangle, LogOut, Save, RefreshCw, X, Eye, Lightbulb, BookOpen, Code, Video, Sparkles } from 'lucide-react';
import { entries } from '@/data/index';
import { Link } from 'react-router-dom';

export const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'content' | 'settings' | 'users' | 'ideas'>('dashboard');
  const [loading, setLoading] = useState(false);
  const [editorMode, setEditorMode] = useState<string | null>(null); // ID of entry being edited

  // --- Authentication Handler ---
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    // Simulate network delay for realism
    setTimeout(() => {
      if (pin === '19901991') {
        setIsAuthenticated(true);
        sessionStorage.setItem('admin_auth', 'true');
      } else {
        setError(true);
        setPin('');
      }
      setLoading(false);
    }, 800);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_auth');
    setPin('');
  };

  // Check session on mount
  useEffect(() => {
    if (sessionStorage.getItem('admin_auth') === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // --- Views ---

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-2xl"
          >
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center border border-slate-600">
                <Lock className="text-primary-400" size={32} />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-white text-center mb-2">Admin Console</h2>
            <p className="text-slate-400 text-center text-sm mb-8">Restricted access area. Enter security PIN.</p>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <input
                  type="password"
                  value={pin}
                  onChange={(e) => { setPin(e.target.value); setError(false); }}
                  placeholder="Enter PIN"
                  className={`w-full bg-slate-900 border ${error ? 'border-red-500 animate-shake' : 'border-slate-700 focus:border-primary-500'} rounded-xl px-4 py-3 text-center text-white text-lg tracking-widest placeholder:text-slate-600 focus:outline-none transition-all`}
                  autoFocus
                />
                {error && <p className="text-red-400 text-xs text-center mt-2">Access Denied. Invalid PIN.</p>}
              </div>

              <button
                type="submit"
                disabled={loading || pin.length < 4}
                className="w-full bg-primary-600 hover:bg-primary-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                {loading ? <RefreshCw className="animate-spin" size={20} /> : <Unlock size={20} />}
                {loading ? 'Verifying...' : 'Unlock Console'}
              </button>
            </form>
            
            <div className="mt-8 text-center">
              <Link to="/" className="text-sm text-slate-500 hover:text-white transition-colors">← Return to App</Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Editor View Component
  if (editorMode) {
      const entry = entries.find(e => e.id === editorMode);
      return (
          <div className="min-h-screen bg-slate-900 text-slate-200 flex flex-col">
              <div className="bg-slate-800 border-b border-slate-700 p-4 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                      <button onClick={() => setEditorMode(null)} className="p-2 hover:bg-slate-700 rounded-full"><X size={20}/></button>
                      <h2 className="font-bold text-white">Editing: {entry?.title}</h2>
                  </div>
                  <div className="flex gap-2">
                      <button className="px-4 py-2 bg-slate-700 text-white rounded font-medium text-sm flex items-center gap-2">
                          <Eye size={16}/> Preview
                      </button>
                      <button className="px-4 py-2 bg-primary-600 text-white rounded font-bold text-sm flex items-center gap-2">
                          <Save size={16}/> Save Changes
                      </button>
                  </div>
              </div>
              <div className="flex-1 flex overflow-hidden">
                  {/* Editor */}
                  <div className="flex-1 p-0 flex flex-col">
                      <div className="bg-slate-900 border-b border-slate-800 p-2 flex gap-2">
                          <button className="px-3 py-1 bg-slate-800 rounded text-xs text-slate-300">Bold</button>
                          <button className="px-3 py-1 bg-slate-800 rounded text-xs text-slate-300">Italic</button>
                          <div className="w-px bg-slate-800 h-full mx-2"></div>
                          <button className="px-3 py-1 bg-slate-800 rounded text-xs text-slate-300">Link</button>
                          <button className="px-3 py-1 bg-slate-800 rounded text-xs text-slate-300">Image</button>
                      </div>
                      <textarea className="flex-1 w-full bg-slate-950 p-6 font-mono text-sm text-slate-300 outline-none resize-none" defaultValue={entry?.content}></textarea>
                  </div>
                  
                  {/* Sidebar Meta */}
                  <div className="w-80 bg-slate-800 border-l border-slate-700 p-6 space-y-6 overflow-y-auto">
                      <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Title</label>
                          <input type="text" defaultValue={entry?.title} className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-sm text-white focus:border-primary-500 focus:outline-none"/>
                      </div>
                      <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Domain</label>
                          <select defaultValue={entry?.domain} className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-sm text-white focus:border-primary-500 focus:outline-none">
                              <option value="layout">Layout</option>
                              <option value="typography">Typography</option>
                              <option value="color">Color</option>
                              <option value="components">Components</option>
                              <option value="interaction">Interaction</option>
                              <option value="motion">Motion</option>
                              <option value="visual-hierarchy">Visual Hierarchy</option>
                              <option value="psychology">Psychology</option>
                              <option value="responsiveness">Responsiveness</option>
                              <option value="data">Data</option>
                              <option value="tokens">Tokens</option>
                          </select>
                      </div>
                      <div>
                           <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Tags</label>
                           <div className="flex flex-wrap gap-2">
                               {entry?.tags.map(t => (
                                   <span key={t} className="bg-slate-700 px-2 py-1 rounded text-xs text-slate-300 flex items-center gap-1">
                                       {t} <button className="hover:text-red-400"><X size={10}/></button>
                                   </span>
                               ))}
                               <button className="bg-slate-900 border border-slate-600 border-dashed px-2 py-1 rounded text-xs text-slate-400 hover:text-white">+ Add Tag</button>
                           </div>
                      </div>
                  </div>
              </div>
          </div>
      )
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 flex pt-16">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-800 border-r border-slate-700 hidden md:flex flex-col fixed top-16 bottom-0 left-0 z-10">
        <div className="p-6">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Menu</h3>
          <nav className="space-y-2">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'dashboard' ? 'bg-primary-600 text-white' : 'text-slate-400 hover:bg-slate-700 hover:text-white'}`}
            >
              <LayoutDashboard size={18} /> Dashboard
            </button>
            <button 
              onClick={() => setActiveTab('content')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'content' ? 'bg-primary-600 text-white' : 'text-slate-400 hover:bg-slate-700 hover:text-white'}`}
            >
              <FileText size={18} /> Content Manager
            </button>
            <button 
              onClick={() => setActiveTab('ideas')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'ideas' ? 'bg-primary-600 text-white' : 'text-slate-400 hover:bg-slate-700 hover:text-white'}`}
            >
              <Lightbulb size={18} /> Ideas & Roadmap
            </button>
            <button 
              onClick={() => setActiveTab('users')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'users' ? 'bg-primary-600 text-white' : 'text-slate-400 hover:bg-slate-700 hover:text-white'}`}
            >
              <Users size={18} /> User Management
            </button>
            <button 
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'settings' ? 'bg-primary-600 text-white' : 'text-slate-400 hover:bg-slate-700 hover:text-white'}`}
            >
              <Settings size={18} /> System Settings
            </button>
          </nav>
        </div>

        <div className="mt-auto p-6 border-t border-slate-700">
           <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center font-bold border border-primary-500/30">
                AD
              </div>
              <div>
                <div className="text-white font-bold text-sm">Admin User</div>
                <div className="text-xs text-green-400 flex items-center gap-1">● Online</div>
              </div>
           </div>
           <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-400/10 py-2 rounded transition-colors">
              <LogOut size={16} /> Sign Out
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-8 overflow-y-auto">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
           <div>
             <h1 className="text-2xl font-bold text-white mb-1">
               {activeTab === 'dashboard' && 'System Overview'}
               {activeTab === 'content' && 'Content Management'}
               {activeTab === 'ideas' && 'Content Roadmap'}
               {activeTab === 'settings' && 'Platform Settings'}
               {activeTab === 'users' && 'User Management'}
             </h1>
             <p className="text-sm text-slate-400">Welcome back to the command center.</p>
           </div>
           <div className="md:hidden">
              <button onClick={handleLogout} className="p-2 bg-slate-800 rounded border border-slate-700 text-slate-400"><LogOut size={20}/></button>
           </div>
        </header>

        {/* Dashboard View */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
             {/* Stats Grid */}
             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><FileText size={64}/></div>
                   <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-primary-500/20 rounded-lg text-primary-400"><FileText size={20}/></div>
                      <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded">+2 this week</span>
                   </div>
                   <div className="text-3xl font-bold text-white mb-1">{entries.length}</div>
                   <div className="text-sm text-slate-400">Total Entries</div>
                </div>

                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Users size={64}/></div>
                   <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-pink-500/20 rounded-lg text-pink-400"><Users size={20}/></div>
                      <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded">+12%</span>
                   </div>
                   <div className="text-3xl font-bold text-white mb-1">12,405</div>
                   <div className="text-sm text-slate-400">Active Learners</div>
                </div>

                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Activity size={64}/></div>
                   <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-amber-500/20 rounded-lg text-amber-400"><Activity size={20}/></div>
                      <span className="text-xs font-bold text-slate-500 bg-slate-700 px-2 py-1 rounded">Stable</span>
                   </div>
                   <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                   <div className="text-sm text-slate-400">Uptime</div>
                </div>

                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><LayoutDashboard size={64}/></div>
                   <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400"><LayoutDashboard size={20}/></div>
                   </div>
                   <div className="text-3xl font-bold text-white mb-1">v2.4.0</div>
                   <div className="text-sm text-slate-400">Current Build</div>
                </div>
             </div>

             {/* Charts Area (Simulated) */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                 <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                     <h3 className="font-bold text-white mb-4">Traffic Overview</h3>
                     <div className="h-64 flex items-end gap-2">
                         {[40, 60, 45, 70, 85, 60, 90, 80, 50, 60, 75, 100].map((h, i) => (
                             <div key={i} className="flex-1 bg-primary-600/20 rounded-t hover:bg-primary-600/40 transition-colors relative group">
                                 <div style={{ height: `${h}%` }} className="bg-primary-500 rounded-t absolute bottom-0 w-full"></div>
                                 <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-700 whitespace-nowrap z-10">
                                     {h * 120} Visitors
                                 </div>
                             </div>
                         ))}
                     </div>
                     <div className="flex justify-between mt-4 text-xs text-slate-500 uppercase font-bold tracking-widest">
                         <span>Jan</span>
                         <span>Dec</span>
                     </div>
                 </div>

                 <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                     <h3 className="font-bold text-white mb-4">Popular Categories</h3>
                     <div className="space-y-4">
                         {[
                             { name: 'UI Trend', val: 85, color: 'bg-purple-500' },
                             { name: 'EdTech', val: 65, color: 'bg-orange-500' },
                             { name: 'Performance', val: 45, color: 'bg-green-500' },
                             { name: 'Psychology', val: 30, color: 'bg-blue-500' },
                         ].map(cat => (
                             <div key={cat.name}>
                                 <div className="flex justify-between text-sm mb-1">
                                     <span className="text-slate-300">{cat.name}</span>
                                     <span className="text-slate-500">{cat.val}%</span>
                                 </div>
                                 <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                     <div style={{ width: `${cat.val}%` }} className={`h-full ${cat.color} rounded-full`}></div>
                                 </div>
                             </div>
                         ))}
                     </div>
                 </div>
             </div>
          </div>
        )}

        {/* Content View */}
        {activeTab === 'content' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="flex gap-4 mb-6">
                <div className="relative flex-1">
                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                   <input type="text" placeholder="Search entries..." className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-slate-200 focus:border-primary-500 focus:outline-none" />
                </div>
                <button className="bg-primary-600 hover:bg-primary-500 text-white px-6 rounded-lg font-bold flex items-center gap-2">
                   <Edit2 size={18} /> New Entry
                </button>
             </div>

             <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                <table className="w-full text-left">
                   <thead className="bg-slate-900 border-b border-slate-700">
                      <tr>
                         <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Entry Title</th>
                         <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Domain</th>
                         <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                         <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-slate-700">
                      {entries.map(entry => (
                         <tr key={entry.id} className="hover:bg-slate-700/50 transition-colors">
                            <td className="p-4 font-medium text-white">{entry.title}</td>
                            <td className="p-4">
                               <span className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs">{entry.domain}</span>
                            </td>
                            <td className="p-4">
                               <span className="flex items-center gap-1 text-xs text-green-400 font-bold">
                                  <CheckCircle size={12} /> Published
                               </span>
                            </td>
                            <td className="p-4 text-right">
                               <div className="flex justify-end gap-2">
                                  <button onClick={() => setEditorMode(entry.id)} className="p-2 bg-slate-700 hover:bg-primary-600 text-slate-300 hover:text-white rounded transition-colors"><Edit2 size={14}/></button>
                                  <button className="p-2 bg-slate-700 hover:bg-red-600 text-slate-300 hover:text-white rounded transition-colors"><Trash2 size={14}/></button>
                               </div>
                            </td>
                         </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </div>
        )}

        {/* Ideas View */}
        {activeTab === 'ideas' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Reference Library Expansion */}
                  <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                      <div className="flex items-center gap-3 mb-6">
                          <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400"><BookOpen size={24}/></div>
                          <div>
                              <h3 className="text-lg font-bold text-white">Reference Library Expansion</h3>
                              <p className="text-xs text-slate-400">Planned new modules and categories</p>
                          </div>
                      </div>
                      <div className="space-y-4">
                          <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-purple-500/50 transition-colors">
                              <div className="flex justify-between items-start mb-2">
                                  <h4 className="font-bold text-white text-sm">Anti-Patterns Category</h4>
                                  <span className="text-[10px] uppercase font-bold bg-slate-700 px-2 py-0.5 rounded text-slate-300">High Priority</span>
                              </div>
                              <p className="text-xs text-slate-400 leading-relaxed">
                                  A dedicated section for "Bad Design". Side-by-side "Do This, Not That" comparisons for every major UI component (e.g., Infinite Scroll vs Pagination).
                              </p>
                          </div>
                          <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-purple-500/50 transition-colors">
                              <div className="flex justify-between items-start mb-2">
                                  <h4 className="font-bold text-white text-sm">Deep Dive Case Studies</h4>
                                  <span className="text-[10px] uppercase font-bold bg-slate-700 px-2 py-0.5 rounded text-slate-300">Research</span>
                              </div>
                              <p className="text-xs text-slate-400 leading-relaxed">
                                  Detailed breakdowns of specific apps: "How Spotify handles offline mode", "The psychology of TikTok's feed", "Linear's keyboard shortcuts".
                              </p>
                          </div>
                          <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-purple-500/50 transition-colors">
                              <div className="flex justify-between items-start mb-2">
                                  <h4 className="font-bold text-white text-sm">Gestalt Principles</h4>
                                  <span className="text-[10px] uppercase font-bold bg-slate-700 px-2 py-0.5 rounded text-slate-300">Theory</span>
                              </div>
                              <p className="text-xs text-slate-400 leading-relaxed">
                                  Comprehensive lessons on Proximity, Similarity, Continuity, Closure, and Figure/Ground with interactive canvas demos.
                              </p>
                          </div>
                      </div>
                  </div>

                  {/* Feature & Tech Roadmap */}
                  <div className="space-y-6">
                      <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                          <div className="flex items-center gap-3 mb-6">
                              <div className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400"><Code size={24}/></div>
                              <div>
                                  <h3 className="text-lg font-bold text-white">Platform Features</h3>
                                  <p className="text-xs text-slate-400">Technical and engagement improvements</p>
                              </div>
                          </div>
                          <div className="space-y-3">
                              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors cursor-pointer group">
                                  <div className="mt-1 w-4 h-4 rounded-full border-2 border-slate-600 group-hover:border-cyan-500"></div>
                                  <div>
                                      <h5 className="text-sm font-bold text-slate-200 group-hover:text-white">Live Code Playground</h5>
                                      <p className="text-xs text-slate-500 mt-1">Integrate Sandpack/Monaco to allow users to edit Tailwind classes in real-time.</p>
                                  </div>
                              </div>
                              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors cursor-pointer group">
                                  <div className="mt-1 w-4 h-4 rounded-full border-2 border-slate-600 group-hover:border-cyan-500"></div>
                                  <div>
                                      <h5 className="text-sm font-bold text-slate-200 group-hover:text-white">Knowledge Checks</h5>
                                      <p className="text-xs text-slate-500 mt-1">Simple 3-question quizzes at the end of each module to verify understanding.</p>
                                  </div>
                              </div>
                              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors cursor-pointer group">
                                  <div className="mt-1 w-4 h-4 rounded-full border-2 border-slate-600 group-hover:border-cyan-500"></div>
                                  <div>
                                      <h5 className="text-sm font-bold text-slate-200 group-hover:text-white">User Progress & Streaks</h5>
                                      <p className="text-xs text-slate-500 mt-1">Persist read state and daily streaks using localStorage or a backend.</p>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                          <div className="flex items-center gap-3 mb-6">
                              <div className="p-2 bg-pink-500/20 rounded-lg text-pink-400"><Video size={24}/></div>
                              <div>
                                  <h3 className="text-lg font-bold text-white">Media Strategy</h3>
                                  <p className="text-xs text-slate-400">Enhanced content types</p>
                              </div>
                          </div>
                          <div className="p-4 bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg border border-slate-700">
                              <div className="flex items-center gap-2 mb-2">
                                  <Sparkles size={14} className="text-yellow-400"/> 
                                  <span className="text-sm font-bold text-white">Micro-Video Integration</span>
                              </div>
                              <p className="text-xs text-slate-400 mb-3">
                                  Embed short (15-30s) loop videos for complex interactions that are difficult to simulate with code alone (e.g., 3D page transitions, AR interactions).
                              </p>
                              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                                  <div className="w-1/3 h-full bg-pink-500"></div>
                              </div>
                              <div className="flex justify-between mt-1">
                                  <span className="text-[10px] text-slate-500">Progress</span>
                                  <span className="text-[10px] text-pink-400">35%</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        )}

        {/* Placeholder for other tabs */}
        {(activeTab === 'users' || activeTab === 'settings') && (
            <div className="flex flex-col items-center justify-center h-96 text-slate-500">
                <Settings size={48} className="mb-4 opacity-50" />
                <h3 className="text-xl font-bold text-slate-400">Under Construction</h3>
                <p>This module is currently being built.</p>
            </div>
        )}

      </main>
    </div>
  );
};