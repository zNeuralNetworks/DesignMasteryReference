import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useDragControls } from 'framer-motion';
import { Bell, Check, Heart, ThumbsUp, X, Zap, Loader2, Info, Lock, MapPin, Star, PieChart, Image as ImageIcon, Video, Moon, Sun, Search, FileText, WifiOff, MessageSquare, ChevronDown, ChevronRight, Upload, Trash2, Archive, Trophy, User, Accessibility, Brain, Grid, Palette, Type, Smartphone, Hand, Activity, MousePointer2, Settings, ArrowRight, Flame, Calendar, HelpCircle, Eye, Target, Award, PlayCircle, Send, AlertTriangle, AlertOctagon, MousePointerClick, Layers, Command, List as ListIcon, Map as MapIcon, Smile, Frown, MousePointer, Box, Plus } from 'lucide-react';

// --- Bioluminescent Demo ---
export const BioluminescentDemo = () => {
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl flex items-center justify-center">
            <div className="relative w-full max-w-sm rounded-xl overflow-hidden p-6 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)] bg-[#020617] text-[#e2e8f0]">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-lime-500/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative z-10 space-y-6">
                    <div className="flex justify-between items-center border-b border-cyan-500/20 pb-4">
                         <div className="flex items-center gap-2">
                             <Zap className="text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" size={20} />
                             <span className="font-bold tracking-widest uppercase text-xs text-cyan-200">System Core</span>
                         </div>
                         <div className="h-2 w-2 rounded-full bg-lime-500 shadow-[0_0_8px_#84cc16]"></div>
                    </div>

                    <div className="space-y-4">
                        <div className="p-3 bg-cyan-950/30 border border-cyan-500/20 rounded text-sm text-cyan-100 flex justify-between items-center">
                            <span>Reactor Status</span>
                            <span className="text-lime-400 font-mono font-bold text-shadow-lime">OPTIMAL</span>
                        </div>
                        <div className="p-3 bg-cyan-950/30 border border-cyan-500/20 rounded text-sm text-cyan-100 flex justify-between items-center">
                            <span>Output</span>
                            <span className="text-cyan-400 font-mono font-bold">98.4%</span>
                        </div>
                    </div>

                    <button className="w-full py-3 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 font-bold uppercase tracking-wider text-xs rounded transition-all shadow-[0_0_10px_rgba(6,182,212,0.2)] hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                        Initiate Sequence
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- Swiss Polarity Demo ---
export const SwissPolarityDemo = () => {
    return (
        <div className="w-full p-8 bg-slate-200 rounded-xl flex items-center justify-center font-sans">
             <div className="w-full max-w-sm bg-[#FDFBF7] text-black border-2 border-black p-0 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                 <div className="border-b-2 border-black p-6">
                     <h1 className="text-4xl font-black tracking-tighter leading-none mb-2">HELVETICA<br/>NEUE</h1>
                     <p className="text-sm font-bold uppercase tracking-wide">International Typographic Style</p>
                 </div>
                 
                 <div className="grid grid-cols-2 border-b-2 border-black divide-x-2 divide-black">
                     <div className="p-4 flex flex-col justify-between h-32 hover:bg-black hover:text-white transition-colors cursor-pointer group">
                         <span className="text-xs font-bold">01</span>
                         <ArrowRight className="self-end group-hover:translate-x-1 transition-transform" />
                     </div>
                     <div className="p-4 flex flex-col justify-between h-32 hover:bg-[#ff3333] hover:text-white transition-colors cursor-pointer group">
                         <span className="text-xs font-bold">02</span>
                         <ArrowRight className="self-end group-hover:translate-x-1 transition-transform" />
                     </div>
                 </div>

                 <div className="p-6">
                     <button className="w-full bg-black text-white py-4 font-bold text-lg hover:bg-[#ff3333] transition-colors border-none rounded-none">
                         EXPLORE
                     </button>
                 </div>
             </div>
        </div>
    );
};

// --- Glassmorphism Demo ---
export const GlassmorphismDemo = () => {
  const [blur, setBlur] = useState(12);
  const [opacity, setOpacity] = useState(0.2);
  const [saturation, setSaturation] = useState(100);

  return (
    <div className="relative w-full h-80 rounded-xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-primary-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <motion.div 
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-24 h-24 bg-blue-500 rounded-full mix-blend-overlay filter blur-xl" 
      />
      <motion.div 
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }} 
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-400 rounded-full mix-blend-overlay filter blur-xl" 
      />

      <div 
        className="relative z-10 w-80 p-6 rounded-2xl border border-white/20 shadow-xl text-white"
        style={{
          backdropFilter: `blur(${blur}px) saturate(${saturation}%)`,
          backgroundColor: `rgba(255, 255, 255, ${opacity})`,
        }}
      >
        <h3 className="font-bold text-lg mb-2">Glass Card</h3>
        <p className="text-sm opacity-90 mb-4">Adjust the sliders to see how backdrop-filter affects readability.</p>
        <div className="space-y-3">
          <label className="text-xs font-mono uppercase opacity-75">Blur: {blur}px</label>
          <input type="range" min="0" max="40" value={blur} onChange={(e) => setBlur(Number(e.target.value))} className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer" />
          
          <label className="text-xs font-mono uppercase opacity-75">Opacity: {Math.round(opacity * 100)}%</label>
          <input type="range" min="0" max="1" step="0.05" value={opacity} onChange={(e) => setOpacity(Number(e.target.value))} className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

// --- Micro-Interaction Demo ---
export const MicroInteractionDemo = () => {
  const [liked, setLiked] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleSubmit = () => {
    if (status !== 'idle') return;
    setStatus('loading');
    
    timeoutRef.current = window.setTimeout(() => {
      setStatus('success');
      timeoutRef.current = window.setTimeout(() => {
        setStatus('idle');
      }, 2000);
    }, 1500);
  };

  return (
    <div className="w-full h-64 bg-slate-900 rounded-xl flex flex-col md:flex-row items-center justify-around p-8 gap-8">
      <div className="flex flex-col items-center gap-2">
        <span className="text-slate-400 text-xs uppercase tracking-wider">State Toggle</span>
        <button 
          onClick={() => setLiked(!liked)}
          className="relative group p-4 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
        >
          <Heart 
            className={`w-8 h-8 transition-all duration-300 ${liked ? 'fill-red-500 text-red-500 scale-110' : 'text-slate-400 group-hover:scale-110'}`} 
          />
          {liked && (
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              className="absolute inset-0 rounded-full border-2 border-red-500"
            />
          )}
        </button>
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-slate-400 text-xs uppercase tracking-wider">Process Feedback</span>
        <motion.button
          layout
          onClick={handleSubmit}
          disabled={status !== 'idle'}
          className={`h-12 px-6 rounded-lg font-medium flex items-center justify-center overflow-hidden
            ${status === 'success' ? 'bg-green-500 text-white' : 'bg-primary-600 text-white hover:bg-primary-500'}`}
          animate={{
            width: status === 'loading' ? 48 : (status === 'success' ? 140 : 120),
            borderRadius: status === 'loading' ? 24 : 8
          }}
        >
          <AnimatePresence mode="wait">
            {status === 'loading' ? (
              <motion.div key="loader" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Loader2 className="w-5 h-5 animate-spin" />
              </motion.div>
            ) : status === 'success' ? (
              <motion.div key="success" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex items-center gap-2">
                <Check className="w-5 h-5" /> <span>Done</span>
              </motion.div>
            ) : (
              <motion.span key="text" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>Submit</motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
};

// --- Fluid Motion Demo ---
export const FluidMotionDemo = () => {
  const [items, setItems] = useState([1, 2, 3]);
  const shuffle = () => setItems([...items].sort(() => Math.random() - 0.5));

  return (
    <div className="w-full bg-slate-900 rounded-xl p-6 flex flex-col items-center">
        <div className="flex justify-between w-full max-w-sm mb-4">
            <h4 className="text-slate-300 font-medium">Reorder Animation</h4>
            <button onClick={shuffle} className="text-xs text-primary-400 hover:text-primary-300 font-mono">Shuffle</button>
        </div>
      <div className="w-full max-w-sm flex flex-col gap-3">
        <AnimatePresence>
            {items.map((item) => (
            <motion.div
                layout
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex items-center gap-4 cursor-grab active:cursor-grabbing"
            >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${item === 1 ? 'bg-pink-500' : item === 2 ? 'bg-cyan-500' : 'bg-emerald-500'}`}>{item}</div>
                <div className="flex-1 space-y-2">
                    <div className="h-2 w-24 bg-slate-600 rounded" />
                    <div className="h-2 w-16 bg-slate-700 rounded" />
                </div>
            </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

// --- Glossary Demo ---
export const GlossaryDemo = () => {
    const [activeTerm, setActiveTerm] = useState<string | null>(null);
    const terms: Record<string, string> = {
        "Cognitive Load": "The amount of working memory resources used. Minimizing this leads to better learning.",
        "Scaffolding": "Instructional techniques used to move students progressively toward stronger understanding.",
    };

    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl text-slate-300 leading-relaxed relative">
            <p className="text-lg">
                When designing educational interfaces, it is crucial to minimize 
                <span 
                    className="text-primary-400 border-b border-primary-400 border-dashed cursor-help mx-1 relative inline-block"
                    onMouseEnter={() => setActiveTerm("Cognitive Load")}
                    onMouseLeave={() => setActiveTerm(null)}
                >
                     Cognitive Load
                     <AnimatePresence>
                        {activeTerm === "Cognitive Load" && (
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }}
                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-slate-800 border border-slate-600 p-3 rounded-lg shadow-2xl z-20 text-sm text-slate-200 pointer-events-none"
                            >
                                <span className="font-bold block mb-1 text-primary-400">Cognitive Load</span>
                                {terms["Cognitive Load"]}
                            </motion.div>
                        )}
                     </AnimatePresence>
                </span>
                to ensure learners focus on the content.
            </p>
        </div>
    )
}

// --- Performance Demo ---
export const PerformanceDemo = () => {
    const [optimized, setOptimized] = useState(true);

    return (
        <div className="w-full p-6 bg-slate-900 rounded-xl">
             <div className="flex justify-between items-center mb-6">
                 <h4 className="text-slate-200 font-medium">Layout Thrashing Simulator</h4>
                 <button 
                     onClick={() => setOptimized(!optimized)}
                     className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${optimized ? 'bg-green-500/20 text-green-400 border border-green-500/50' : 'bg-red-500/20 text-red-400 border border-red-500/50'}`}
                 >
                     {optimized ? "Optimized (Transform)" : "Slow (Left/Top)"}
                 </button>
             </div>
             
             <div className="relative h-40 bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
                <motion.div 
                    animate={{ x: [0, 200, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute top-10 left-10 w-20 h-20 bg-primary-500 rounded shadow-lg flex items-center justify-center text-xs text-white text-center p-2"
                >
                    {optimized ? "GPU Layer" : "CPU Repaint"}
                </motion.div>
             </div>
        </div>
    )
}

// --- Flashcard Demo ---
export const FlashcardDemo = () => {
    const [flipped, setFlipped] = useState(false);
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl flex flex-col items-center">
            <div className="perspective-1000 w-64 h-80 cursor-pointer group" onClick={() => setFlipped(!flipped)}>
                <motion.div
                    className="w-full h-full relative preserve-3d"
                    animate={{ rotateY: flipped ? 180 : 0 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    <div className="absolute inset-0 backface-hidden bg-white text-slate-900 rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 border-b-4 border-slate-200">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Question</span>
                        <h3 className="text-xl font-bold text-center">Contrast ratio for AA?</h3>
                        <div className="mt-8 text-xs text-slate-400">Tap to flip</div>
                    </div>
                    <div className="absolute inset-0 backface-hidden bg-primary-600 text-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 border-b-4 border-primary-800" style={{ transform: "rotateY(180deg)" }}>
                         <h3 className="text-4xl font-bold mb-2">4.5:1</h3>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

// --- Bento Grid Demo ---
export const BentoGridDemo = () => {
  return (
    <div className="w-full p-6 bg-slate-900 rounded-xl">
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-4 h-96">
        <motion.div whileHover={{ scale: 0.98 }} className="col-span-2 row-span-2 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl p-6 text-white flex flex-col justify-between shadow-lg">
          <div className="flex justify-between items-start">
             <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"><PieChart size={20} /></div>
             <span className="text-xs font-medium bg-white/10 px-2 py-1 rounded">Analytics</span>
          </div>
          <div>
            <h4 className="text-2xl font-bold">Weekly Growth</h4>
            <p className="text-primary-100 text-sm opacity-80">+24% vs last week</p>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 0.95 }} className="bg-slate-800 rounded-2xl p-4 border border-slate-700 flex flex-col items-center justify-center gap-2">
           <ImageIcon className="text-pink-400" />
           <span className="text-xs text-slate-400">Media</span>
        </motion.div>
        <motion.div whileHover={{ scale: 0.95 }} className="bg-slate-800 rounded-2xl p-4 border border-slate-700 flex flex-col items-center justify-center gap-2">
           <Video className="text-cyan-400" />
           <span className="text-xs text-slate-400">Video</span>
        </motion.div>
        <motion.div whileHover={{ scale: 0.98 }} className="col-span-2 bg-slate-800 rounded-2xl p-4 border border-slate-700 flex items-center justify-between px-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-slate-200">System Status</span>
            </div>
            <span className="text-green-400 text-sm font-bold">Operational</span>
        </motion.div>
      </div>
    </div>
  )
}

// --- Skeleton Loader Demo ---
export const SkeletonLoaderDemo = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<null | {title: string, desc: string}>(null);
    const timeoutRef = useRef<number | null>(null);

    useEffect(() => {
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      }
    }, []);

    const loadData = () => {
        setLoading(true);
        setData(null);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        
        timeoutRef.current = window.setTimeout(() => {
            setLoading(false);
            setData({ title: "Content Loaded", desc: "This is the actual content that appears after the loading state." });
        }, 2000);
    }

    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl">
             <div className="flex justify-end mb-4">
                 <button onClick={loadData} className="text-xs text-primary-400 hover:text-primary-300 font-mono flex items-center gap-1">
                     <Zap size={12} /> Reload Demo
                 </button>
             </div>
             <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 max-w-sm mx-auto">
                 {loading ? (
                     <div className="animate-pulse space-y-4">
                         <div className="flex items-center gap-4">
                             <div className="w-12 h-12 rounded-full bg-slate-700" />
                             <div className="space-y-2">
                                 <div className="h-4 w-24 bg-slate-700 rounded" />
                                 <div className="h-3 w-16 bg-slate-700 rounded" />
                             </div>
                         </div>
                         <div className="space-y-2 pt-4">
                             <div className="h-3 bg-slate-700 rounded w-3/4" />
                             <div className="h-3 bg-slate-700 rounded w-full" />
                         </div>
                     </div>
                 ) : (
                     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                         <div className="flex items-center gap-4 mb-6">
                             <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold"><Check /></div>
                             <div>
                                 <h4 className="font-bold text-white">Success</h4>
                                 <p className="text-xs text-slate-400">Just now</p>
                             </div>
                         </div>
                         <p className="text-sm text-slate-300 leading-relaxed">{data?.desc}</p>
                     </motion.div>
                 )}
             </div>
        </div>
    )
}

export const ScrollAnimationDemo = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ container: containerRef });
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    return (
        <div className="w-full bg-slate-900 rounded-xl overflow-hidden relative h-80">
            <div ref={containerRef} className="h-full overflow-y-scroll scrollbar-hide relative z-10 p-8">
                <div className="h-[200%] flex flex-col justify-between">
                    <p className="text-center text-slate-500 text-sm mb-4">Scroll down to animate ↓</p>
                    <div className="text-center space-y-2 pb-20">
                         <h3 className="text-2xl font-bold text-white">End of Story</h3>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div style={{ rotate }} className="w-24 h-24 bg-gradient-to-br from-primary-500 to-purple-500 rounded-xl shadow-2xl flex items-center justify-center border border-white/20">
                    <span className="text-white font-bold text-xs uppercase">Scrolly</span>
                </motion.div>
            </div>
        </div>
    )
}

export const MasteryPathDemo = () => {
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl flex flex-col items-center">
            <div className="relative w-full max-w-md h-64 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 200">
                     <path d="M 50 100 Q 125 50 200 100 T 350 100" fill="none" stroke="#334155" strokeWidth="4" strokeDasharray="8 8"/>
                     <motion.path d="M 50 100 Q 125 50 200 100" fill="none" stroke="#6366f1" strokeWidth="4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }}/>
                </svg>
                <div className="absolute left-[12.5%] top-[50%] -translate-y-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                     <div className="w-12 h-12 rounded-full bg-primary-600 border-4 border-primary-900 text-white flex items-center justify-center shadow-lg shadow-primary-500/30 z-10"><Check size={20} /></div>
                     <span className="text-xs font-bold text-primary-400">Basics</span>
                </div>
                <div className="absolute left-[50%] top-[50%] -translate-y-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                     <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: "spring" }} className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 border-4 border-slate-900 text-white flex items-center justify-center shadow-xl z-10">
                         <Star size={28} className="fill-white" />
                     </motion.div>
                     <span className="text-xs font-bold text-white bg-orange-500/20 px-2 py-1 rounded-full border border-orange-500/50">Current Goal</span>
                </div>
            </div>
        </div>
    )
}

export const DarkModeDemo = () => {
    const [isDark, setIsDark] = useState(true);
    return (
        <div className="w-full p-8 bg-slate-800 rounded-xl flex items-center justify-center">
             <div className={`w-80 rounded-2xl p-6 transition-colors duration-300 shadow-xl ${isDark ? 'bg-[#121212] text-slate-200' : 'bg-white text-slate-800'}`}>
                 <div className="flex justify-between items-center mb-6">
                     <h3 className="font-bold text-lg">Settings</h3>
                     <button onClick={() => setIsDark(!isDark)} className={`p-2 rounded-full transition-colors ${isDark ? 'bg-slate-800 text-yellow-400' : 'bg-slate-100 text-slate-600'}`}>
                         {isDark ? <Sun size={18} /> : <Moon size={18} />}
                     </button>
                 </div>
                 <div className="space-y-4">
                     <div className={`h-20 rounded-xl p-3 flex gap-3 items-center ${isDark ? 'bg-slate-800' : 'bg-slate-50'}`}>
                         <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isDark ? 'bg-primary-900/50 text-primary-400' : 'bg-primary-100 text-primary-600'}`}><User size={20} /></div>
                         <div className="space-y-2"><div className={`h-3 w-24 rounded ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`} /><div className={`h-2 w-16 rounded ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`} /></div>
                     </div>
                 </div>
             </div>
        </div>
    );
}

export const VariableFontsDemo = () => {
  const [weight, setWeight] = useState(400);
  const [slant, setSlant] = useState(0);
  
  return (
    <div className="w-full p-8 bg-slate-900 rounded-xl text-center">
      <h2 style={{ fontWeight: weight, fontStyle: slant > 0 ? 'italic' : 'normal' }} className="text-4xl text-white mb-8 transition-all">Variable Typography</h2>
      <div className="max-w-xs mx-auto space-y-4">
         <div>
            <label className="text-xs text-slate-500 uppercase font-bold block mb-1">Weight: {weight}</label>
            <input type="range" min="100" max="900" value={weight} onChange={e => setWeight(Number(e.target.value))} className="w-full accent-primary-500"/>
         </div>
      </div>
    </div>
  )
}

export const ToastDemo = () => {
  const [toasts, setToasts] = useState<{id: number, type: 'success' | 'error'}[]>([]);
  const timeoutsRef = useRef<Record<number, number>>({});

  useEffect(() => {
    return () => {
        Object.values(timeoutsRef.current).forEach(window.clearTimeout);
    };
  }, []);
  
  const addToast = (type: 'success' | 'error') => {
      const id = Date.now();
      setToasts(prev => [...prev, {id, type}]);
      
      const timer = window.setTimeout(() => {
          setToasts(curr => curr.filter(t => t.id !== id));
          delete timeoutsRef.current[id];
      }, 3000);
      
      timeoutsRef.current[id] = timer;
  }

  return (
      <div className="w-full h-64 bg-slate-900 rounded-xl relative overflow-hidden flex items-center justify-center gap-4">
          <button onClick={() => addToast('success')} className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg border border-green-500/50">Show Success</button>
          <button onClick={() => addToast('error')} className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg border border-red-500/50">Show Error</button>
          
          <div className="absolute bottom-4 right-4 flex flex-col gap-2">
              <AnimatePresence>
                  {toasts.map(t => (
                      <motion.div key={t.id} initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 50, opacity: 0 }} className={`px-4 py-3 rounded shadow-lg flex items-center gap-2 ${t.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
                          {t.type === 'success' ? <Check size={16}/> : <AlertTriangle size={16}/>}
                          <span className="text-sm font-medium">{t.type === 'success' ? 'Changes Saved' : 'Connection Failed'}</span>
                      </motion.div>
                  ))}
              </AnimatePresence>
          </div>
      </div>
  )
}

export const SwipeActionDemo = () => {
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl flex justify-center">
            <div className="w-full max-w-sm relative h-16 rounded-lg overflow-hidden bg-red-500 flex items-center justify-end px-4">
                 <Trash2 className="text-white" />
                 <motion.div 
                    drag="x" 
                    dragConstraints={{ left: -100, right: 0 }}
                    className="absolute inset-0 bg-white flex items-center px-4 cursor-grab active:cursor-grabbing"
                 >
                     <div className="w-10 h-10 rounded-full bg-slate-200 mr-4"></div>
                     <div className="flex-1">
                         <div className="h-2 w-24 bg-slate-300 rounded mb-2"></div>
                         <div className="h-2 w-16 bg-slate-200 rounded"></div>
                     </div>
                     <span className="text-xs text-slate-400">Swipe Left</span>
                 </motion.div>
            </div>
        </div>
    )
}

export const FileUploadDemo = () => {
    const [isHover, setIsHover] = useState(false);
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl">
            <div 
                className={`w-full h-48 border-2 border-dashed rounded-xl flex flex-col items-center justify-center transition-all ${isHover ? 'border-primary-500 bg-primary-500/10' : 'border-slate-700 bg-slate-800'}`}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <Upload size={32} className={`mb-4 transition-colors ${isHover ? 'text-primary-400' : 'text-slate-500'}`} />
                <p className="text-slate-400 font-medium">Drag & Drop files here</p>
                <p className="text-slate-600 text-sm mt-1">or click to browse</p>
            </div>
        </div>
    )
}

export const OnboardingTourDemo = () => {
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl relative overflow-hidden">
             <div className="grid grid-cols-2 gap-4 blur-[2px]">
                 <div className="h-32 bg-slate-800 rounded"></div>
                 <div className="h-32 bg-slate-800 rounded"></div>
                 <div className="h-32 bg-slate-800 rounded"></div>
             </div>
             
             {/* Spotlight Element */}
             <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-slate-800 rounded-xl z-10 border-2 border-primary-500 shadow-[0_0_0_9999px_rgba(0,0,0,0.7)] flex items-center justify-center">
                 <span className="text-white font-bold">New Feature!</span>
             </div>
             
             <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white text-center">
                 <p className="font-bold mb-2">Focus on what matters</p>
                 <button className="px-4 py-1 bg-white text-slate-900 rounded-full text-sm font-bold">Next</button>
             </div>
        </div>
    )
}

export const LeaderboardDemo = () => {
    return (
        <div className="w-full p-6 bg-slate-900 rounded-xl flex justify-center">
             <div className="w-full max-w-sm bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                 <div className="bg-slate-900 p-4 border-b border-slate-700 flex justify-between items-center">
                     <h3 className="text-white font-bold">Weekly Ranking</h3>
                     <Trophy className="text-yellow-500" size={18}/>
                 </div>
                 <div className="divide-y divide-slate-700">
                     {[
                         {rank: 4, name: "Sarah J.", score: 2400, me: false},
                         {rank: 5, name: "You", score: 2350, me: true},
                         {rank: 6, name: "Mike T.", score: 2100, me: false},
                     ].map((user) => (
                         <div key={user.rank} className={`flex items-center p-4 ${user.me ? 'bg-primary-500/10' : ''}`}>
                             <div className="w-8 font-mono text-slate-500 font-bold">#{user.rank}</div>
                             <div className="flex-1 text-slate-200 font-medium">{user.name}</div>
                             <div className="text-primary-400 font-bold">{user.score}</div>
                         </div>
                     ))}
                 </div>
             </div>
        </div>
    )
}

export const FocusDemo = () => {
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl flex flex-col items-center gap-6">
             <button className="px-6 py-3 bg-slate-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-slate-900">
                 Custom Focus Ring (Tab to me)
             </button>
             <button className="px-6 py-3 bg-slate-800 text-white rounded-lg focus:outline-none border border-transparent focus:border-primary-500">
                 Subtle Border Focus
             </button>
        </div>
    )
}

export const HicksLawDemo = () => {
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl grid grid-cols-2 gap-8">
             <div className="space-y-2">
                 <h4 className="text-xs font-bold text-red-400 uppercase">Bad (High Load)</h4>
                 <div className="bg-white p-4 rounded text-slate-900 text-xs space-y-1">
                     {Array.from({length: 8}).map((_, i) => <div key={i} className="p-1 border-b">Link {i+1}</div>)}
                 </div>
             </div>
             <div className="space-y-2">
                 <h4 className="text-xs font-bold text-green-400 uppercase">Good (Categorized)</h4>
                 <div className="bg-white p-4 rounded text-slate-900 text-xs space-y-2">
                     <div className="font-bold">Products</div>
                     <div className="pl-2 border-l-2 border-slate-200">Link 1</div>
                     <div className="font-bold mt-2">Company</div>
                     <div className="pl-2 border-l-2 border-slate-200">Link 2</div>
                 </div>
             </div>
        </div>
    )
}

export const AtomicDesignDemo = () => {
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl flex flex-col items-center gap-8">
            <div className="flex items-center gap-8">
                <div className="flex flex-col items-center">
                    <div className="px-3 py-1 bg-primary-600 rounded text-xs text-white mb-2">Button</div>
                    <span className="text-[10px] uppercase text-slate-500">Atom</span>
                </div>
                <ArrowRight className="text-slate-600"/>
                <div className="flex flex-col items-center">
                    <div className="p-2 bg-slate-800 rounded border border-slate-700 flex gap-2">
                        <input className="w-20 bg-slate-900 border border-slate-600 rounded px-1 text-[10px]" placeholder="Search"/>
                        <div className="px-2 bg-primary-600 rounded text-[10px] text-white flex items-center">Go</div>
                    </div>
                    <span className="text-[10px] uppercase text-slate-500 mt-2">Molecule</span>
                </div>
                <ArrowRight className="text-slate-600"/>
                <div className="flex flex-col items-center">
                    <div className="w-32 bg-slate-800 rounded border border-slate-700 p-2">
                        <div className="flex justify-between items-center mb-2">
                            <div className="w-4 h-4 rounded-full bg-slate-600"></div>
                            <div className="h-1 w-10 bg-slate-700 rounded"></div>
                        </div>
                        <div className="p-1 bg-slate-900 rounded border border-slate-600 flex gap-1">
                             <div className="flex-1 h-3 bg-slate-800"></div>
                             <div className="w-4 h-3 bg-primary-600 rounded-sm"></div>
                        </div>
                    </div>
                    <span className="text-[10px] uppercase text-slate-500 mt-2">Organism</span>
                </div>
            </div>
        </div>
    )
}

export const ColorRuleDemo = () => {
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl flex justify-center">
            <div className="w-64 bg-[#f8fafc] rounded-xl overflow-hidden shadow-xl text-slate-900">
                <div className="h-32 bg-[#f8fafc] p-4 flex flex-col justify-center items-center">
                    <h3 className="font-bold text-2xl">60%</h3>
                    <p className="text-xs uppercase tracking-widest">Neutral Base</p>
                </div>
                <div className="h-16 bg-slate-200 p-4 flex items-center justify-between">
                    <span className="font-bold">30%</span>
                    <span className="text-xs uppercase">Secondary</span>
                </div>
                <div className="p-4 flex gap-2">
                    <button className="flex-1 bg-primary-600 text-white py-2 rounded text-xs font-bold uppercase">10% Accent</button>
                </div>
            </div>
        </div>
    )
}

export const TypographyDemo = () => {
    const [scale, setScale] = useState(1.25);
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl flex flex-col items-center">
            <div className="flex gap-4 mb-8">
                <button onClick={() => setScale(1.2)} className={`px-3 py-1 rounded text-xs ${scale === 1.2 ? 'bg-primary-600 text-white' : 'bg-slate-800 text-slate-400'}`}>Major Third (1.200)</button>
                <button onClick={() => setScale(1.5)} className={`px-3 py-1 rounded text-xs ${scale === 1.5 ? 'bg-primary-600 text-white' : 'bg-slate-800 text-slate-400'}`}>Perfect Fifth (1.500)</button>
            </div>
            <div className="text-center text-white space-y-4">
                <div style={{ fontSize: `${1 * scale * scale * scale}rem` }} className="font-bold leading-none">Heading 1</div>
                <div style={{ fontSize: `${1 * scale * scale}rem` }} className="font-bold leading-none">Heading 2</div>
                <div style={{ fontSize: `${1 * scale}rem` }} className="font-bold leading-none">Heading 3</div>
                <div style={{ fontSize: '1rem' }} className="text-slate-400">Body Text (1rem)</div>
            </div>
        </div>
    )
}

export const ThumbZoneDemo = () => {
    return (
        <div className="w-full p-6 bg-slate-900 rounded-xl flex justify-center">
             <div className="w-64 h-96 bg-slate-800 rounded-3xl border-4 border-slate-700 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-tr from-green-500/40 via-yellow-500/30 to-red-500/40 pointer-events-none"></div>
                 <div className="absolute bottom-6 left-6 text-xs font-bold text-green-300 bg-black/50 px-2 py-1 rounded">Easy</div>
                 <div className="absolute top-6 right-6 text-xs font-bold text-red-300 bg-black/50 px-2 py-1 rounded">Hard</div>
                 
                 <div className="absolute bottom-4 right-4 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform z-10">
                     <PlusIcon />
                 </div>
             </div>
        </div>
    )
}

const PlusIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>;

export const WebVitalsDemo = () => {
    const [shift, setShift] = useState(false);
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl">
             <button onClick={() => setShift(!shift)} className="mb-4 px-3 py-1 bg-slate-800 text-white text-xs rounded border border-slate-700">Toggle CLS</button>
             <div className="bg-white p-4 rounded max-w-sm text-slate-900">
                 <p className="mb-2">Reading this text...</p>
                 {shift && <div className="h-24 bg-primary-100 rounded mb-2 flex items-center justify-center text-primary-800 text-xs font-bold">Ad Loaded Late</div>}
                 <p>...is annoying if it keeps moving down.</p>
             </div>
        </div>
    )
}

export const DebounceDemo = () => {
    const [val, setVal] = useState('');
    const [debouncedVal, setDebouncedVal] = useState('');
    
    useEffect(() => {
        const timer = setTimeout(() => setDebouncedVal(val), 500);
        return () => clearTimeout(timer);
    }, [val]);

    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl">
            <input 
                value={val} 
                onChange={e => setVal(e.target.value)} 
                className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-2 text-white mb-6" 
                placeholder="Type quickly..."
            />
            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-800 rounded border border-slate-700">
                    <div className="text-xs text-slate-500 uppercase font-bold mb-1">Raw Input</div>
                    <div className="text-white font-mono break-all">{val}</div>
                </div>
                <div className="p-4 bg-primary-900/20 rounded border border-primary-500/30">
                    <div className="text-xs text-primary-400 uppercase font-bold mb-1">Debounced (API Call)</div>
                    <div className="text-white font-mono break-all">{debouncedVal}</div>
                </div>
            </div>
        </div>
    )
}

export const VirtualizationDemo = () => {
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl flex justify-center">
            <div className="w-48 h-64 bg-slate-800 rounded border border-slate-700 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-1 bg-green-500 text-white text-[10px] font-bold z-10">Viewport</div>
                <div className="space-y-2 p-2 opacity-50">
                    {Array.from({length: 3}).map((_, i) => <div key={`top-${i}`} className="h-8 bg-slate-700 rounded"></div>)}
                </div>
                <div className="space-y-2 p-2 relative bg-primary-500/10 border-y-2 border-primary-500">
                     <div className="h-8 bg-primary-600 rounded"></div>
                     <div className="h-8 bg-primary-600 rounded"></div>
                </div>
                <div className="space-y-2 p-2 opacity-50">
                    {Array.from({length: 3}).map((_, i) => <div key={`bot-${i}`} className="h-8 bg-slate-700 rounded"></div>)}
                </div>
            </div>
        </div>
    )
}

export const FittsLawDemo = () => {
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl flex items-center justify-between relative h-40">
            <button className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500 text-[10px] text-red-500 flex items-center justify-center">
                Hard
            </button>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <MousePointer className="text-white"/>
            </div>
            <button className="w-32 h-32 rounded-xl bg-green-500/20 border border-green-500 text-lg font-bold text-green-500 flex items-center justify-center">
                Easy
            </button>
        </div>
    )
}

export const DesignTokensDemo = () => {
    const [theme, setTheme] = useState<'blue' | 'orange'>('blue');
    
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl">
             <div className="flex gap-4 mb-6 justify-center">
                 <button onClick={() => setTheme('blue')} className="w-6 h-6 rounded-full bg-blue-500 ring-2 ring-offset-2 ring-offset-slate-900 ring-blue-500"></button>
                 <button onClick={() => setTheme('orange')} className="w-6 h-6 rounded-full bg-orange-500 ring-2 ring-offset-2 ring-offset-slate-900 ring-orange-500"></button>
             </div>
             <div className="max-w-xs mx-auto p-6 rounded-xl bg-slate-800 text-center border border-slate-700">
                 <h3 style={{ color: theme === 'blue' ? '#3b82f6' : '#f97316' }} className="text-xl font-bold mb-2">Tokenized Heading</h3>
                 <button style={{ backgroundColor: theme === 'blue' ? '#3b82f6' : '#f97316' }} className="px-4 py-2 text-white rounded font-bold">
                     Primary Action
                 </button>
             </div>
        </div>
    )
}

export const ComponentPropsDemo = () => {
    const [size, setSize] = useState<'sm' | 'lg'>('lg');
    const [disabled, setDisabled] = useState(false);

    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl flex flex-col items-center gap-8">
            <div className="flex gap-4">
                <button onClick={() => setSize(s => s === 'sm' ? 'lg' : 'sm')} className="px-3 py-1 bg-slate-800 text-slate-300 rounded text-xs border border-slate-700">Toggle Size</button>
                <button onClick={() => setDisabled(!disabled)} className="px-3 py-1 bg-slate-800 text-slate-300 rounded text-xs border border-slate-700">Toggle Disabled</button>
            </div>
            <button 
                disabled={disabled}
                className={`bg-primary-600 text-white rounded font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed ${size === 'lg' ? 'px-8 py-3 text-lg' : 'px-4 py-1 text-sm'}`}
            >
                View Reference
            </button>
        </div>
    )
}

export const ConfidenceDemo = () => {
    const [step, setStep] = useState(0);
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl flex flex-col items-center">
             {step === 0 && (
                 <div className="text-center">
                     <h3 className="text-white font-bold mb-4">What is 2 + 2?</h3>
                     <button onClick={() => setStep(1)} className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded border border-slate-600">4</button>
                 </div>
             )}
             {step === 1 && (
                 <div className="text-center animate-in fade-in">
                     <h3 className="text-white font-bold mb-4">How sure are you?</h3>
                     <div className="flex gap-2">
                         <button onClick={() => setStep(0)} className="px-4 py-2 bg-yellow-500/20 text-yellow-500 rounded border border-yellow-500/50">Not sure</button>
                         <button onClick={() => setStep(0)} className="px-4 py-2 bg-green-500/20 text-green-500 rounded border border-green-500/50">100% Certain</button>
                     </div>
                 </div>
             )}
        </div>
    )
}

export const ChunkingDemo = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="w-full p-6 bg-slate-900 rounded-xl">
             <div className="flex gap-2 mb-4">
                 {[0, 1, 2].map(i => (
                     <div key={i} className={`h-1 flex-1 rounded-full ${i <= activeTab ? 'bg-primary-500' : 'bg-slate-700'}`}></div>
                 ))}
             </div>
             <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 h-40 flex flex-col justify-between">
                 <div className="text-white font-medium">
                     {activeTab === 0 && "Step 1: Break content into small pieces."}
                     {activeTab === 1 && "Step 2: Let user digest one piece at a time."}
                     {activeTab === 2 && "Step 3: Combine for mastery."}
                 </div>
                 <div className="flex justify-end">
                     <button onClick={() => setActiveTab((activeTab + 1) % 3)} className="px-4 py-2 bg-primary-600 text-white rounded text-sm font-bold">Next</button>
                 </div>
             </div>
        </div>
    )
}

export const ScaffoldingDemo = () => {
    const [attempts, setAttempts] = useState(0);
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl flex flex-col items-center">
             <div className="mb-4 text-white font-bold">Translate "Gato"</div>
             <div className="flex gap-2 mb-4">
                 <button onClick={() => setAttempts(a => a + 1)} className="px-4 py-2 bg-slate-800 text-slate-300 rounded hover:bg-slate-700">Dog</button>
                 <button onClick={() => alert("Correct!")} className="px-4 py-2 bg-slate-800 text-slate-300 rounded hover:bg-slate-700">Cat</button>
             </div>
             {attempts === 1 && <div className="text-yellow-500 text-sm animate-bounce">Hint: It meows.</div>}
             {attempts >= 2 && <div className="text-primary-400 text-sm">Solution: Gato means Cat.</div>}
        </div>
    )
}

export const StreakDemo = () => {
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl flex justify-center">
             <div className="flex flex-col items-center">
                 <motion.div 
                    animate={{ scale: [1, 1.1, 1] }} 
                    transition={{ duration: 2, repeat: Infinity }}
                    className="relative"
                 >
                     <Flame size={64} className="text-orange-500 fill-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-slate-900 text-xl">12</div>
                 </motion.div>
                 <span className="text-orange-400 font-bold uppercase tracking-widest text-xs mt-2">Day Streak</span>
             </div>
        </div>
    )
}

export const VisualEssayDemo = () => {
    const [step, setStep] = useState(0);
    const content = [
        { img: <Brain className="text-pink-400" size={48} />, text: "1. The Brain has two channels." },
        { img: <Eye className="text-cyan-400" size={48} />, text: "2. Visuals process instantly." },
        { img: <Type className="text-emerald-400" size={48} />, text: "3. Text decodes sequentially." },
    ];
    
    return (
        <div className="w-full h-80 bg-slate-900 rounded-xl flex flex-col overflow-hidden" onClick={() => setStep((step + 1) % 3)}>
             <div className="flex-1 bg-slate-800 flex items-center justify-center">
                 <AnimatePresence mode="wait">
                     <motion.div key={step} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
                         {content[step].img}
                     </motion.div>
                 </AnimatePresence>
             </div>
             <div className="h-24 bg-white p-6 flex flex-col justify-center cursor-pointer hover:bg-slate-50">
                 <p className="text-slate-900 font-bold text-lg">{content[step].text}</p>
                 <span className="text-xs text-slate-400 uppercase font-bold mt-1">Tap to continue</span>
             </div>
        </div>
    )
}

export const CelebrationDemo = () => {
    const [celebrate, setCelebrate] = useState(false);
    
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl flex justify-center relative overflow-hidden">
             <button onClick={() => setCelebrate(true)} className="px-8 py-4 bg-primary-600 text-white rounded-full font-bold shadow-lg hover:scale-105 transition-transform z-10">
                 Complete Review
             </button>
             {celebrate && Array.from({length: 20}).map((_, i) => (
                 <motion.div 
                    key={i}
                    initial={{ x: 0, y: 0, opacity: 1 }}
                    animate={{ 
                        x: (Math.random() - 0.5) * 300, 
                        y: (Math.random() - 0.5) * 300, 
                        opacity: 0 
                    }}
                    transition={{ duration: 1 }}
                    className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full"
                    style={{ backgroundColor: ['#ef4444', '#3b82f6', '#22c55e', '#eab308'][i % 4] }}
                 />
             ))}
        </div>
    )
}

export const MistakeAnalysisDemo = () => {
    const [mode, setMode] = useState<'bad' | 'good'>('bad');
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl flex flex-col items-center gap-6">
             <div className="flex gap-4">
                 <button onClick={() => setMode('bad')} className={`px-3 py-1 rounded text-xs ${mode === 'bad' ? 'bg-red-500 text-white' : 'bg-slate-800 text-slate-400'}`}>Generic Error</button>
                 <button onClick={() => setMode('good')} className={`px-3 py-1 rounded text-xs ${mode === 'good' ? 'bg-green-500 text-white' : 'bg-slate-800 text-slate-400'}`}>Diagnostic</button>
             </div>
             
             {mode === 'bad' ? (
                 <div className="w-full max-w-sm p-4 bg-red-500/10 border border-red-500/50 rounded text-red-400 font-bold text-center">
                     Incorrect. Try again.
                 </div>
             ) : (
                 <div className="w-full max-w-sm p-4 bg-primary-500/10 border border-primary-500/50 rounded">
                     <div className="font-bold text-primary-400 mb-1">Not quite.</div>
                     <p className="text-sm text-primary-200">You selected A, but that rule only applies to flexbox. For grid, use 'justify-items'.</p>
                 </div>
             )}
        </div>
    )
}

export const GoalSettingDemo = () => {
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl">
             <div className="max-w-sm mx-auto bg-slate-800 p-6 rounded-xl border border-slate-700">
                 <h3 className="text-white font-bold mb-4 text-center">Set Daily Goal</h3>
                 <div className="flex justify-between mb-2 text-xs text-slate-400 uppercase font-bold">
                     <span>Casual</span>
                     <span>Serious</span>
                 </div>
                 <input type="range" className="w-full mb-6 accent-primary-500" />
                 <button className="w-full py-3 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-lg transition-colors">
                     I Commit to 15m/Day
                 </button>
             </div>
        </div>
    )
}

export const OptimisticUIDemo = () => {
    const [msgs, setMsgs] = useState<string[]>([]);
    const [input, setInput] = useState("");
    
    const send = (e: React.FormEvent) => {
        e.preventDefault();
        setMsgs([...msgs, input]); // Instant update
        setInput("");
        // Simulate background sync
    }

    return (
        <div className="w-full p-6 bg-slate-900 rounded-xl">
             <div className="h-40 bg-slate-800 rounded border border-slate-700 mb-4 p-4 overflow-y-auto space-y-2">
                 {msgs.map((m, i) => (
                     <div key={i} className="bg-primary-600 text-white px-3 py-2 rounded-lg rounded-br-none self-end w-fit ml-auto">
                         {m}
                     </div>
                 ))}
             </div>
             <form onSubmit={send} className="flex gap-2">
                 <input value={input} onChange={e => setInput(e.target.value)} className="flex-1 bg-slate-800 rounded px-3 text-white" placeholder="Message appears instantly..." />
                 <button className="bg-primary-600 p-2 rounded text-white"><Send size={16}/></button>
             </form>
        </div>
    )
}

export const SerialPositionDemo = () => {
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl flex justify-center">
             <div className="space-y-2 w-48">
                 <div className="bg-green-500/20 border border-green-500 text-green-400 p-2 rounded font-bold text-center">First (Primacy)</div>
                 <div className="bg-slate-800 text-slate-600 p-2 rounded text-center text-sm opacity-50">Middle</div>
                 <div className="bg-slate-800 text-slate-600 p-2 rounded text-center text-sm opacity-50">Middle</div>
                 <div className="bg-slate-800 text-slate-600 p-2 rounded text-center text-sm opacity-50">Middle</div>
                 <div className="bg-green-500/20 border border-green-500 text-green-400 p-2 rounded font-bold text-center">Last (Recency)</div>
             </div>
        </div>
    )
}

export const GradientMeshDemo = () => {
    return (
        <div className="w-full h-64 bg-slate-900 rounded-xl relative overflow-hidden flex items-center justify-center">
             <motion.div animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-0 left-0 w-48 h-48 bg-purple-600 rounded-full blur-[60px] opacity-60"></motion.div>
             <motion.div animate={{ x: [20, -20, 20], y: [10, -10, 10] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-0 right-0 w-48 h-48 bg-primary-600 rounded-full blur-[60px] opacity-60"></motion.div>
             <div className="relative z-10 text-white font-bold text-2xl tracking-tighter mix-blend-overlay">Aurora UI</div>
        </div>
    )
}

export const ColorBlindnessDemo = () => {
    const [simulate, setSimulate] = useState(false);
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl flex flex-col items-center gap-6">
             <button onClick={() => setSimulate(!simulate)} className="px-4 py-2 bg-slate-800 border border-slate-700 text-slate-300 rounded text-xs">
                 {simulate ? 'Disable Filter' : 'Simulate Deuteranopia'}
             </button>
             
             <div className={`flex gap-4 p-6 bg-white rounded-xl ${simulate ? 'grayscale sepia-[.5]' : ''}`}>
                 <div className="w-20 h-20 bg-red-500 rounded flex items-center justify-center text-white font-bold flex-col">
                     <AlertTriangle size={24} className="mb-1"/> Error
                 </div>
                 <div className="w-20 h-20 bg-green-500 rounded flex items-center justify-center text-white font-bold flex-col">
                     <Check size={24} className="mb-1"/> Good
                 </div>
             </div>
             {simulate && <p className="text-xs text-slate-400">Without icons, these colors look nearly identical.</p>}
        </div>
    )
}

export const LinearCommandPalette = () => {
    return (
        <div className="w-full p-8 bg-[#0F1115] rounded-xl flex justify-center">
             <div className="w-full max-w-md bg-[#1D1F25] border border-white/10 rounded-lg shadow-2xl overflow-hidden">
                 <div className="p-3 border-b border-white/5 flex items-center gap-3">
                     <div className="px-1.5 py-0.5 bg-[#31353E] text-white/50 text-[10px] rounded font-mono">Cmd K</div>
                     <input className="bg-transparent outline-none text-white text-sm placeholder:text-white/20 w-full" placeholder="Type a command..." autoFocus/>
                 </div>
                 <div className="p-2">
                     <div className="px-3 py-2 hover:bg-white/5 rounded text-white/80 text-sm flex items-center gap-3 cursor-pointer">
                         <FileText size={14}/> Create Issue
                     </div>
                     <div className="px-3 py-2 bg-[#5E6AD2] rounded text-white text-sm flex items-center gap-3 cursor-pointer">
                         <User size={14}/> Assign to Me
                     </div>
                     <div className="px-3 py-2 hover:bg-white/5 rounded text-white/80 text-sm flex items-center gap-3 cursor-pointer">
                         <ArrowRight size={14}/> Change Status
                     </div>
                 </div>
             </div>
        </div>
    )
}

export const DuolingoMascot = () => {
    const [mood, setMood] = useState<'happy' | 'sad'>('happy');
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl flex flex-col items-center gap-6">
             <div className="flex gap-4">
                 <button onClick={() => setMood('happy')} className="px-3 py-1 bg-green-500/20 text-green-500 rounded text-xs border border-green-500/50">Streak Saved</button>
                 <button onClick={() => setMood('sad')} className="px-3 py-1 bg-blue-500/20 text-blue-500 rounded text-xs border border-blue-500/50">Streak Lost</button>
             </div>
             <motion.div 
                animate={{ rotate: mood === 'happy' ? [0, 10, -10, 0] : 0, scale: mood === 'happy' ? 1.1 : 0.9 }}
                className={`w-32 h-32 rounded-3xl flex items-center justify-center text-6xl shadow-xl transition-colors duration-500 ${mood === 'happy' ? 'bg-green-500' : 'bg-blue-500'}`}
             >
                 {mood === 'happy' ? <Smile className="text-white w-20 h-20"/> : <Frown className="text-white w-20 h-20"/>}
             </motion.div>
        </div>
    )
}

export const AirbnbMapToggle = () => {
    const [hoverId, setHoverId] = useState<number | null>(null);
    return (
        <div className="w-full h-80 bg-white rounded-xl flex overflow-hidden border border-slate-200 text-slate-900">
             <div className="w-1/2 p-4 overflow-y-auto space-y-4 border-r border-slate-100">
                 {[1, 2, 3].map(id => (
                     <div 
                        key={id}
                        onMouseEnter={() => setHoverId(id)}
                        onMouseLeave={() => setHoverId(null)}
                        className={`p-3 rounded-xl border transition-all cursor-pointer ${hoverId === id ? 'bg-slate-50 border-slate-900' : 'border-slate-200'}`}
                     >
                         <div className="w-full h-20 bg-slate-200 rounded-lg mb-2"></div>
                         <div className="font-bold text-sm">Cozy Apartment {id}</div>
                         <div className="text-slate-500 text-xs">$150 / night</div>
                     </div>
                 ))}
             </div>
             <div className="w-1/2 bg-slate-50 relative p-4">
                 <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>
                 {[1, 2, 3].map(id => (
                     <motion.div 
                        key={id}
                        animate={{ scale: hoverId === id ? 1.2 : 1 }}
                        className={`absolute w-12 h-8 rounded-full shadow-md flex items-center justify-center text-xs font-bold cursor-pointer transition-colors ${hoverId === id ? 'bg-slate-900 text-white z-10' : 'bg-white text-slate-900'}`}
                        style={{ top: `${id * 20}%`, left: `${id * 25}%` }}
                     >
                         $150
                     </motion.div>
                 ))}
             </div>
        </div>
    )
}

export const ImprintTap = () => {
    const [step, setStep] = useState(0);
    const total = 4;
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl flex justify-center">
            <div className="w-64 h-96 bg-white rounded-2xl overflow-hidden flex flex-col relative text-slate-900 shadow-2xl">
                 {/* Progress Bar */}
                 <div className="flex gap-1 p-2 absolute top-0 w-full z-10">
                     {Array.from({length: total}).map((_, i) => (
                         <div key={i} className={`h-1 flex-1 rounded-full ${i <= step ? 'bg-slate-900' : 'bg-slate-200'}`}></div>
                     ))}
                 </div>
                 
                 {/* Content */}
                 <div className="flex-1 bg-primary-50 flex items-center justify-center p-6">
                     <AnimatePresence mode="wait">
                        <motion.div key={step} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center">
                            <div className="w-24 h-24 bg-primary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                {step === 0 && <Brain size={40} className="text-primary-600"/>}
                                {step === 1 && <Eye size={40} className="text-primary-600"/>}
                                {step === 2 && <Hand size={40} className="text-primary-600"/>}
                                {step === 3 && <Check size={40} className="text-primary-600"/>}
                            </div>
                        </motion.div>
                     </AnimatePresence>
                 </div>
                 
                 {/* Text Area (Tap Zone) */}
                 <div 
                    className="h-32 bg-white p-6 cursor-pointer hover:bg-slate-50 active:bg-slate-100 border-t border-slate-100"
                    onClick={() => setStep((step + 1) % total)}
                 >
                     <AnimatePresence mode="wait">
                         <motion.p key={step} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="font-serif text-lg leading-relaxed">
                             {step === 0 && "Reading on a phone is physically exhausting."}
                             {step === 1 && "We prefer tapping over scrolling."}
                             {step === 2 && "Tapping creates a discrete 'beat'."}
                             {step === 3 && "This reduces cognitive load."}
                         </motion.p>
                     </AnimatePresence>
                     <div className="mt-4 text-[10px] text-slate-400 uppercase font-bold tracking-widest text-center">Tap to continue</div>
                 </div>
            </div>
        </div>
    )
}

// --- NEW COMPONENTS TO FIX MISSING EXPORTS ---

export const EmptyStateDemo = () => {
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl flex items-center justify-center text-center">
             <div className="bg-slate-800 p-8 rounded-xl max-w-sm">
                 <div className="w-20 h-20 bg-slate-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                     <Box className="text-slate-500" size={32} />
                 </div>
                 <h3 className="text-white font-bold mb-2">No Projects Yet</h3>
                 <p className="text-slate-400 text-sm mb-6">Create your first project to get started with the analytics dashboard.</p>
                 <button className="bg-primary-600 text-white px-4 py-2 rounded-lg font-bold text-sm">Create Project</button>
             </div>
        </div>
    )
}

export const NeumorphismDemo = () => {
    return (
        <div className="w-full p-12 bg-[#e0e5ec] rounded-xl flex items-center justify-center">
             <div className="w-32 h-32 rounded-[30px] bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex items-center justify-center text-slate-500">
                 <Zap size={32} />
             </div>
        </div>
    )
}

export const ProgressiveDisclosureDemo = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl">
             <div className="bg-white rounded-lg p-4 text-slate-900 max-w-sm mx-auto">
                 <div className="flex justify-between items-center mb-2">
                     <span className="font-bold">Advanced Settings</span>
                     <button onClick={() => setShow(!show)} className="p-1 rounded hover:bg-slate-100">
                         {show ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                     </button>
                 </div>
                 {show && (
                     <div className="space-y-2 mt-2 pt-2 border-t border-slate-100 text-sm animate-in slide-in-from-top-2">
                         <div className="flex justify-between">
                             <span>API Key</span>
                             <input className="border rounded px-1 w-24" placeholder="..." />
                         </div>
                         <div className="flex justify-between">
                             <span>Webhook</span>
                             <input className="border rounded px-1 w-24" placeholder="..." />
                         </div>
                     </div>
                 )}
             </div>
        </div>
    )
}

export const MysteryNavigationDemo = () => {
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl flex justify-center gap-4">
             {['Home', 'Search', 'Profile'].map((label, i) => (
                 <div key={i} className="group relative w-12 h-12 bg-slate-700 rounded-full cursor-pointer hover:bg-primary-600 transition-colors">
                     <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                         {label}
                     </div>
                 </div>
             ))}
        </div>
    )
}

export const ScrollJackingDemo = () => {
    return (
        <div className="w-full p-8 bg-slate-900 rounded-xl flex justify-center">
             <div className="bg-slate-800 p-4 rounded text-center text-slate-400 border border-slate-700 border-dashed">
                 <MousePointerClick className="mx-auto mb-2" />
                 <p className="text-xs">Scroll Jacking Demo Visualized</p>
                 <p className="text-[10px] mt-2 text-red-400">User scroll input intercepted...</p>
             </div>
        </div>
    )
}

export const GestaltProximityDemo = () => {
    return (
        <div className="w-full p-8 bg-white rounded-xl flex justify-center gap-12">
             <div className="flex gap-1">
                 <div className="w-4 h-4 bg-black rounded-full"></div>
                 <div className="w-4 h-4 bg-black rounded-full"></div>
                 <div className="w-4 h-4 bg-black rounded-full"></div>
             </div>
             <div className="flex gap-1">
                 <div className="w-4 h-4 bg-black rounded-full"></div>
                 <div className="w-4 h-4 bg-black rounded-full"></div>
             </div>
        </div>
    )
}

export const GestaltCommonRegionDemo = () => {
    return (
        <div className="w-full p-8 bg-white rounded-xl flex justify-center items-center gap-8">
             <div className="w-4 h-4 bg-black rounded-full"></div>
             <div className="p-4 border-2 border-primary-500 rounded-lg flex gap-4 bg-primary-50">
                 <div className="w-4 h-4 bg-primary-600 rounded-full"></div>
                 <div className="w-4 h-4 bg-primary-600 rounded-full"></div>
             </div>
             <div className="w-4 h-4 bg-black rounded-full"></div>
        </div>
    )
}