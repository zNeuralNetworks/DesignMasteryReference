import React from 'react';
import { Grid, Eye, MousePointer2, Lock, Zap, Check, AlertTriangle, Search, User, XCircle, Layout, PieChart, Image as ImageIcon, Video, Heart, Moon, Sun, Upload, Trash2, Trophy, Type, Smartphone, Hand, Activity, Settings, ArrowRight, Flame, Calendar, HelpCircle, Target, Award, PlayCircle, Send, AlertOctagon, MousePointerClick, Layers, Command, List as ListIcon, Map as MapIcon, Smile, Frown, MousePointer, Box, Plus, FileText, Download, Brain, Cloud, Monitor, Star } from 'lucide-react';

const Container = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
  <div className={`w-full border border-slate-200 bg-slate-50 rounded-lg p-6 flex flex-col items-center justify-center print:border-slate-300 print:bg-white print-avoid-break h-32 ${className}`}>
    {children}
  </div>
);

// --- Component Definitions ---

const Bioluminescent = () => (
    <Container className="bg-slate-900 border-cyan-900">
        <div className="w-24 h-24 rounded-full border-2 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.5)] flex items-center justify-center">
            <Zap className="text-lime-400" />
        </div>
    </Container>
);

const SwissPolarity = () => (
    <Container className="bg-white border-black">
        <div className="border-2 border-black p-2 w-24 h-24 flex flex-col justify-between">
            <span className="font-black text-2xl">01</span>
            <div className="w-full h-2 bg-black"></div>
        </div>
    </Container>
);

const Glassmorphism = () => (
    <Container className="relative overflow-hidden bg-gradient-to-br from-primary-100 to-purple-100">
       <div className="absolute top-2 right-6 w-16 h-16 bg-purple-300 rounded-full opacity-50 blur-xl"></div>
       <div className="absolute bottom-2 left-6 w-20 h-20 bg-primary-300 rounded-full opacity-50 blur-xl"></div>
       <div className="relative z-10 w-40 h-16 bg-white/40 border border-white/50 shadow-sm rounded-xl flex items-center justify-center backdrop-blur-md">
           <span className="font-semibold text-slate-700 text-xs">Frosted</span>
       </div>
    </Container>
);

const BentoGrid = () => (
    <Container>
        <div className="grid grid-cols-3 gap-2 w-40 h-24">
            <div className="col-span-2 row-span-2 bg-primary-100 rounded border border-primary-200"></div>
            <div className="bg-slate-200 rounded"></div>
            <div className="bg-slate-200 rounded"></div>
            <div className="col-span-3 bg-purple-100 rounded border border-purple-200"></div>
        </div>
    </Container>
);

const SkeletonLoader = () => (
    <Container>
        <div className="w-48 space-y-3">
            <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                <div className="space-y-2 flex-1 pt-1">
                    <div className="h-2 bg-slate-200 rounded w-1/2"></div>
                    <div className="h-2 bg-slate-200 rounded w-1/3"></div>
                </div>
            </div>
            <div className="h-12 bg-slate-100 rounded border border-slate-200"></div>
        </div>
    </Container>
);

const MicroInteraction = () => (
    <Container>
        <div className="flex gap-4 items-center">
             <div className="p-3 rounded-full bg-slate-100 border border-slate-200 text-red-500 shadow-sm">
                 <Heart className="fill-red-500" size={20} />
             </div>
             <div className="px-4 py-1.5 bg-primary-600 text-white rounded-lg font-bold text-xs shadow-md shadow-primary-200">Submit</div>
        </div>
    </Container>
);

const MysteryNavigation = () => (
    <Container className="bg-white">
         <div className="flex gap-4">
             {[1,2,3].map(i => (
                 <div key={i} className="w-10 h-10 bg-slate-200 rounded-full relative group flex items-center justify-center text-slate-400">?</div>
             ))}
         </div>
         <div className="mt-2 h-1 w-24 bg-red-100 rounded"></div>
    </Container>
);

const ScrollJacking = () => (
    <Container>
         <div className="w-32 h-24 border border-slate-300 rounded bg-white relative overflow-hidden flex flex-col items-center shadow-sm">
             <div className="h-12 w-full bg-slate-50 border-b border-slate-200 flex items-center justify-center text-[8px] text-slate-400">Page 1</div>
             <div className="h-12 w-full bg-slate-50 border-b border-slate-200 flex items-center justify-center text-[8px] text-slate-400">Page 2</div>
             <div className="absolute inset-0 bg-slate-900/10 flex items-center justify-center backdrop-blur-[1px]">
                 <Lock size={16} className="text-slate-600" />
             </div>
         </div>
    </Container>
);

const GestaltProximity = () => (
    <Container className="bg-white">
         <div className="flex gap-6">
             <div className="flex gap-1">
                 <div className="w-3 h-3 bg-slate-800 rounded-full"></div>
                 <div className="w-3 h-3 bg-slate-800 rounded-full"></div>
             </div>
             <div className="flex gap-1">
                 <div className="w-3 h-3 bg-slate-800 rounded-full"></div>
                 <div className="w-3 h-3 bg-slate-800 rounded-full"></div>
                 <div className="w-3 h-3 bg-slate-800 rounded-full"></div>
             </div>
         </div>
    </Container>
);

const GestaltCommonRegion = () => (
    <Container className="bg-white">
        <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
            <div className="p-2 border border-primary-200 bg-primary-50 rounded flex gap-2">
                <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
            </div>
        </div>
    </Container>
);

const DuolingoMascot = () => (
    <Container className="bg-green-50/50 border-green-200">
        <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
            <Smile className="text-white w-10 h-10" />
        </div>
    </Container>
);

const LinearCommandPalette = () => (
    <Container className="bg-[#0F1115] border-slate-800">
         <div className="w-40 bg-[#1D1F25] border border-slate-700 rounded-lg p-2 shadow-2xl">
             <div className="flex items-center gap-2 border-b border-slate-700 pb-2 mb-2">
                 <span className="text-slate-500 text-[8px]">Cmd K</span>
                 <div className="h-1.5 w-0.5 bg-primary-500 animate-pulse"></div>
             </div>
             <div className="space-y-1">
                 <div className="h-1.5 bg-slate-700 rounded w-3/4"></div>
                 <div className="h-1.5 bg-slate-700/50 rounded w-1/2"></div>
             </div>
         </div>
    </Container>
);

const AirbnbMapToggle = () => (
    <Container>
         <div className="flex gap-2">
             <div className="bg-slate-100 p-2 rounded-lg border border-slate-200"><ListIcon size={16} className="text-slate-400" /></div>
             <div className="bg-slate-900 text-white p-2 rounded-lg shadow-lg"><MapIcon size={16} /></div>
         </div>
    </Container>
);

const ImprintTap = () => (
    <Container>
        <div className="w-20 h-28 bg-white border border-slate-200 rounded-xl shadow-md p-1.5 flex flex-col gap-1.5">
            <div className="h-10 bg-primary-50 rounded-lg flex items-center justify-center"><Brain size={14} className="text-primary-500"/></div>
            <div className="h-1.5 w-full bg-slate-100 rounded"></div>
            <div className="h-1.5 w-2/3 bg-slate-100 rounded"></div>
            <div className="mt-auto self-center w-5 h-5 rounded-full bg-slate-50 border border-slate-200"></div>
        </div>
    </Container>
);

const FluidMotion = () => (
    <Container>
        <div className="flex gap-1.5 items-end h-16 justify-center">
            <div className="w-3 h-6 bg-primary-300 rounded-full"></div>
            <div className="w-3 h-10 bg-primary-400 rounded-full"></div>
            <div className="w-3 h-14 bg-primary-500 rounded-full"></div>
            <div className="w-3 h-8 bg-primary-400 rounded-full"></div>
        </div>
    </Container>
);

const ScrollAnimation = () => (
    <Container>
        <div className="w-32 h-20 bg-slate-100 rounded-lg border border-slate-200 relative overflow-hidden flex items-center justify-center shadow-inner">
            <div className="absolute right-2 top-2 bottom-2 w-1 bg-slate-200 rounded-full">
                <div className="w-full h-1/3 bg-primary-500 rounded-full top-1/3 absolute"></div>
            </div>
            <div className="w-8 h-8 bg-primary-500 rounded flex items-center justify-center text-white text-[8px] font-bold shadow-lg transform rotate-12">3D</div>
        </div>
    </Container>
);

const Flashcard = () => (
    <Container>
         <div className="w-20 h-28 bg-white border-2 border-slate-200 border-b-4 rounded-xl flex items-center justify-center shadow-sm">
             <HelpCircle className="text-slate-300" />
         </div>
    </Container>
);

const DarkMode = () => (
    <Container className="bg-slate-900 border-slate-800">
        <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-yellow-400 border border-slate-700"><Moon size={16}/></div>
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-orange-400 border border-slate-200"><Sun size={16}/></div>
        </div>
    </Container>
);

const VariableFonts = () => (
    <Container>
        <div className="flex items-baseline gap-1">
            <span className="font-thin text-2xl text-slate-400">A</span>
            <span className="font-normal text-2xl text-slate-600">A</span>
            <span className="font-black text-2xl text-primary-600">A</span>
        </div>
    </Container>
);

const Toast = () => (
    <Container className="relative overflow-hidden bg-slate-100">
        <div className="bg-white border border-slate-200 px-3 py-2 rounded-lg shadow-lg text-[10px] flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center"><Check size={8} className="text-white"/></div>
            <span className="font-medium text-slate-600">Saved</span>
        </div>
    </Container>
);

const SwipeAction = () => (
    <Container>
        <div className="w-40 h-10 bg-red-500 rounded-lg flex items-center justify-end px-3 relative overflow-hidden shadow-sm">
            <Trash2 className="text-white w-4 h-4"/>
            <div className="absolute inset-y-0 left-0 w-32 bg-white flex items-center px-3 border-r border-slate-200">
                <div className="w-6 h-6 bg-slate-200 rounded-full"></div>
            </div>
        </div>
    </Container>
);

const FileUpload = () => (
    <Container>
        <div className="w-32 h-20 border-2 border-dashed border-primary-300 bg-primary-50 rounded-lg flex flex-col items-center justify-center gap-1">
            <Upload className="text-primary-500 w-4 h-4" />
            <span className="text-[8px] text-primary-400 uppercase font-bold">Drop File</span>
        </div>
    </Container>
);

const Onboarding = () => (
    <Container className="bg-slate-900 border-slate-800">
        <div className="relative">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center relative z-10 shadow-[0_0_0_999px_rgba(0,0,0,0.5)] ring-2 ring-white">
                <Star className="text-white w-6 h-6" />
            </div>
        </div>
    </Container>
);

const Leaderboard = () => (
    <Container>
         <div className="w-32 space-y-1">
             <div className="flex justify-between items-center bg-yellow-100 p-1.5 rounded border border-yellow-200">
                 <span className="text-[10px] font-bold text-yellow-800">1. You</span>
                 <Trophy size={10} className="text-yellow-600"/>
             </div>
             <div className="flex justify-between items-center bg-slate-50 p-1.5 rounded border border-slate-100 opacity-60">
                 <span className="text-[10px]">2. Mike</span>
             </div>
             <div className="flex justify-between items-center bg-slate-50 p-1.5 rounded border border-slate-100 opacity-40">
                 <span className="text-[10px]">3. Sarah</span>
             </div>
         </div>
    </Container>
);

const FocusVisual = () => (
    <Container>
        <div className="px-3 py-1.5 bg-white border-2 border-primary-500 ring-2 ring-primary-200 rounded-md text-[10px] font-bold text-primary-700 shadow-sm">
            Button
        </div>
    </Container>
);

const HicksLaw = () => (
    <Container>
        <div className="flex gap-4">
            <div className="w-12 p-1 bg-red-50 border border-red-100 rounded flex flex-col gap-1">
                {[1,2,3,4].map(i => <div key={i} className="h-1 bg-red-200 rounded"></div>)}
            </div>
            <div className="w-12 p-1 bg-green-50 border border-green-100 rounded flex flex-col gap-2">
                <div className="h-2 bg-green-200 rounded"></div>
                <div className="h-2 bg-green-200 rounded"></div>
            </div>
        </div>
    </Container>
);

const SerialPosition = () => (
    <Container>
         <div className="flex gap-1 items-end">
             <div className="w-3 h-10 bg-primary-500 rounded-t"></div>
             <div className="w-3 h-5 bg-slate-200 rounded-t"></div>
             <div className="w-3 h-5 bg-slate-200 rounded-t"></div>
             <div className="w-3 h-10 bg-primary-500 rounded-t"></div>
         </div>
    </Container>
);

const FittsLaw = () => (
    <Container>
        <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute left-6 w-3 h-3 rounded-full border border-red-400 bg-red-50"></div>
            <MousePointer className="text-slate-400 absolute" size={16}/>
            <div className="absolute right-6 w-10 h-10 rounded-full bg-green-100 border-2 border-green-500 shadow-sm"></div>
        </div>
    </Container>
);

const AtomicDesign = () => (
    <Container>
        <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
            <ArrowRight size={10} className="text-slate-300" />
            <div className="flex gap-0.5 p-0.5 border rounded bg-white">
                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
                <div className="w-3 h-1.5 bg-slate-300 rounded"></div>
            </div>
            <ArrowRight size={10} className="text-slate-300" />
            <Layout size={14} className="text-slate-400" />
        </div>
    </Container>
);

const DesignTokens = () => (
    <Container>
        <div className="flex gap-2">
            <div className="w-5 h-5 rounded-full bg-blue-500 shadow-sm ring-2 ring-white"></div>
            <div className="w-5 h-5 rounded-full bg-orange-500 shadow-sm ring-2 ring-white"></div>
            <div className="w-5 h-5 rounded-full bg-green-500 shadow-sm ring-2 ring-white"></div>
        </div>
    </Container>
);

const ComponentProps = () => (
    <Container>
        <div className="flex flex-col gap-2 items-center">
            <div className="w-12 h-5 bg-primary-600 rounded shadow-sm"></div>
            <div className="w-16 h-7 bg-primary-600 rounded shadow-sm"></div>
        </div>
    </Container>
);

const ColorRule = () => (
    <Container>
        <div className="w-16 h-16 rounded-full border-4 border-white shadow-md flex overflow-hidden rotate-45">
            <div className="w-[60%] bg-slate-100 h-full"></div>
            <div className="w-[30%] bg-slate-300 h-full"></div>
            <div className="w-[10%] bg-primary-500 h-full"></div>
        </div>
    </Container>
);

const TypographyVisual = () => (
    <Container>
        <div className="flex items-end gap-1 border-b border-slate-200 pb-1">
            <div className="text-[10px] text-slate-300">Aa</div>
            <div className="text-sm text-slate-400">Aa</div>
            <div className="text-xl font-bold text-slate-600">Aa</div>
        </div>
    </Container>
);

const ThumbZone = () => (
    <Container>
        <div className="w-14 h-20 border-2 border-slate-200 rounded-lg relative overflow-hidden bg-white shadow-sm">
             <div className="absolute bottom-0 right-0 w-20 h-20 bg-green-500/20 rounded-full blur-md"></div>
        </div>
    </Container>
);

const WebVitals = () => (
     <Container>
         <div className="w-20 h-20 border border-slate-200 rounded p-1 flex flex-col gap-1 relative bg-white shadow-sm">
             <div className="h-1.5 bg-slate-200 rounded w-full"></div>
             <div className="h-1.5 bg-slate-200 rounded w-2/3"></div>
             <div className="absolute top-6 left-0 right-0 h-6 bg-orange-50 border-y border-orange-200 flex items-center justify-center text-[6px] text-orange-500 font-bold uppercase tracking-wide">
                 Shift
             </div>
         </div>
     </Container>
);

const Debounce = () => (
    <Container>
        <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
            <div className="w-px h-4 bg-slate-300 mx-0.5"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-green-200"></div>
        </div>
    </Container>
);

const Virtualization = () => (
    <Container>
        <div className="w-20 h-20 border border-slate-200 rounded overflow-hidden relative bg-white shadow-sm">
            <div className="space-y-1 p-1 opacity-20">
                <div className="h-3 bg-slate-200 rounded"></div>
                <div className="h-3 bg-slate-200 rounded"></div>
            </div>
            <div className="absolute top-1/3 left-0 right-0 h-6 border-y-2 border-primary-500 bg-primary-50/50"></div>
            <div className="space-y-1 p-1 opacity-20 mt-6">
                <div className="h-3 bg-slate-200 rounded"></div>
            </div>
        </div>
    </Container>
);

const Confidence = () => (
    <Container>
         <div className="flex gap-2">
             <div className="px-2 py-1 bg-yellow-50 text-yellow-600 rounded text-[8px] border border-yellow-200">Maybe</div>
             <div className="px-2 py-1 bg-green-50 text-green-600 rounded text-[8px] border border-green-200 font-bold">Sure</div>
         </div>
    </Container>
);

const Chunking = () => (
    <Container>
        <div className="flex gap-1.5">
            <div className="w-6 h-10 border border-slate-200 rounded bg-white shadow-sm"></div>
            <div className="w-6 h-10 border border-slate-200 rounded bg-white shadow-sm"></div>
            <div className="w-6 h-10 border border-slate-200 rounded bg-white shadow-sm"></div>
        </div>
    </Container>
);

const Scaffolding = () => (
    <Container>
        <div className="flex flex-col items-center gap-1">
             <div className="w-12 h-6 bg-slate-100 rounded border border-slate-200 flex items-center justify-center text-[8px] text-slate-400">Hint</div>
             <ArrowRight size={10} className="rotate-90 text-slate-300" />
             <div className="w-12 h-6 bg-primary-50 rounded border border-primary-100 flex items-center justify-center text-[8px] text-primary-500 font-bold">Answer</div>
        </div>
    </Container>
);

const Streak = () => (
    <Container>
        <div className="flex flex-col items-center">
            <Flame className="text-orange-500 fill-orange-500 w-8 h-8 drop-shadow-sm" />
            <span className="text-[10px] font-bold text-orange-600 mt-1">12 Days</span>
        </div>
    </Container>
);

const VisualEssay = () => (
    <Container>
        <div className="w-20 h-28 border border-slate-200 rounded bg-white flex flex-col shadow-sm">
            <div className="flex-1 bg-slate-50 flex items-center justify-center"><ImageIcon size={14} className="text-slate-300"/></div>
            <div className="h-10 p-1 space-y-1">
                <div className="h-1 bg-slate-200 rounded w-full"></div>
                <div className="h-1 bg-slate-200 rounded w-2/3"></div>
            </div>
        </div>
    </Container>
);

const Celebration = () => (
    <Container>
        <div className="relative">
             <Award size={32} className="text-yellow-400" />
             <div className="absolute -top-2 -right-3 text-primary-500 font-bold text-xs bg-white rounded-full px-1 shadow-sm border border-slate-100">+10</div>
        </div>
    </Container>
);

const MistakeAnalysis = () => (
    <Container>
         <div className="bg-red-50 border border-red-100 p-2 rounded text-[8px] text-red-500 flex flex-col items-center text-center w-24">
             <span className="font-bold mb-0.5">Incorrect</span>
             <span className="opacity-75 leading-tight">Because X is not Y</span>
         </div>
    </Container>
);

const GoalSetting = () => (
    <Container>
        <div className="w-24 h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <div className="w-2/3 h-full bg-primary-500"></div>
        </div>
        <div className="flex justify-between w-24 mt-1">
            <span className="text-[8px] text-slate-400">Start</span>
            <span className="text-[8px] text-primary-600 font-bold">Goal</span>
        </div>
    </Container>
);

const OptimisticUI = () => (
    <Container>
        <div className="flex items-center gap-2 border border-slate-200 rounded-full pr-2 pl-1 py-1 bg-white shadow-sm">
            <div className="bg-primary-600 text-white px-2 py-0.5 rounded-full text-[8px]">Message</div>
            <Check size={10} className="text-green-500" />
        </div>
    </Container>
);

const GradientMesh = () => (
    <Container className="bg-slate-900 overflow-hidden border-slate-800">
         <div className="w-16 h-16 bg-purple-500 rounded-full blur-xl opacity-50 absolute top-0 left-0"></div>
         <div className="w-16 h-16 bg-cyan-500 rounded-full blur-xl opacity-50 absolute bottom-0 right-0"></div>
    </Container>
);

const ColorBlindness = () => (
    <Container>
        <div className="flex gap-2 filter grayscale contrast-75">
            <div className="w-8 h-8 rounded bg-red-500"></div>
            <div className="w-8 h-8 rounded bg-green-500"></div>
        </div>
        <Eye size={12} className="absolute bottom-2 right-2 text-slate-400" />
    </Container>
);

const EmptyState = () => (
    <Container>
        <div className="flex flex-col items-center">
            <Box className="text-slate-300 mb-1" size={24} />
            <div className="h-1 w-10 bg-slate-200 rounded"></div>
        </div>
    </Container>
);

const Neumorphism = () => (
    <Container className="bg-slate-100 border-slate-200">
        <div className="w-12 h-12 rounded-xl bg-slate-100 shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-slate-100 shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff]"></div>
        </div>
    </Container>
);

const ProgressiveDisclosure = () => (
     <Container>
         <div className="w-24 border border-slate-200 rounded bg-white p-2 shadow-sm">
             <div className="flex justify-between items-center mb-1">
                 <div className="h-1.5 w-12 bg-slate-200 rounded"></div>
                 <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
             </div>
             <div className="h-px bg-slate-100 w-full mb-1"></div>
             <div className="h-1 w-16 bg-slate-100 rounded"></div>
         </div>
     </Container>
);

const AntiPattern = () => (
    <Container className="bg-red-50 text-red-400 border-red-100">
        <XCircle size={24} />
        <span className="text-[10px] font-bold mt-2 uppercase tracking-wide">Don't Do This</span>
    </Container>
);

const GestaltLayout = () => (
     <Container className="bg-white text-slate-400">
        <Layout size={24} />
        <span className="text-[10px] font-bold mt-2 uppercase tracking-wide">Layout</span>
     </Container>
);

const OperatorConsoleDemo = () => (
    <Container className="bg-[#0d1117] border-[#30363d]">
        <div className="w-full space-y-1.5">
            <div className="flex items-center gap-2 border-b border-[#30363d] pb-1">
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-amber-400">STATUS</span>
            </div>
            {[['BUILD', 'PASSING', true], ['COVERAGE', '94%', true], ['ERRORS', '0.02%', false]].map(([k, v, ok]) => (
                <div key={String(k)} className="flex items-center justify-between">
                    <span className="text-[9px] font-mono text-[#8b949e]">{String(k)}</span>
                    <span className={`text-[9px] font-mono font-bold ${ok ? 'text-emerald-400' : 'text-rose-400'}`}>{String(v)}</span>
                </div>
            ))}
        </div>
    </Container>
);

const QuietLuxuryDemo = () => (
    <Container className="bg-[#faf7f2] border-stone-200">
        <div className="w-full space-y-2">
            <div className="border-t border-stone-200 pt-2">
                <p className="font-serif text-lg leading-tight tracking-tight text-[#1a1611]">Editorial</p>
            </div>
            <p className="text-[10px] leading-relaxed text-stone-500 font-sans">Restraint as identity.</p>
            <div className="border-t border-stone-200"></div>
            <span className="text-[9px] uppercase tracking-widest text-[#c2714f] font-sans">Portfolio</span>
        </div>
    </Container>
);

const SystemAtlasDemo = () => (
    <Container className="bg-zinc-50 border-zinc-200">
        <div className="w-full space-y-1.5">
            <div className="flex items-center gap-2">
                <span className="text-[9px] font-medium uppercase tracking-wider text-zinc-500">Domain</span>
                <span className="text-[9px] font-medium text-zinc-700">Style</span>
            </div>
            <div className="h-px bg-zinc-200"></div>
            <p className="text-[11px] font-semibold text-zinc-900">System Atlas</p>
            <p className="text-[10px] text-zinc-500 leading-snug">Reference-document aesthetic for complex systems.</p>
            <a className="text-[9px] text-blue-600 font-medium">Read entry →</a>
        </div>
    </Container>
);

const TechnicalBlueprintDemo = () => (
    <Container className="bg-[#002855] border-white/10 [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:16px_16px]">
        <div className="w-full space-y-1.5">
            <div className="border border-dashed border-white/20 p-2">
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#9ec8ff]">COMPONENT: Button</span>
                <div className="mt-1.5 border border-white/40 px-2 py-1 inline-block">
                    <span className="text-[9px] font-mono text-white">[ SUBMIT ]</span>
                </div>
            </div>
            <div className="text-[8px] font-mono text-[#9ec8ff]/60">width: 80px · height: 28px</div>
        </div>
    </Container>
);

const DefaultFallback = ({ type }: {type: string}) => (
    <Container className="h-32 text-slate-400">
         <div className="flex flex-col items-center gap-2">
            <Grid size={24} className="opacity-50" />
            <span className="text-[10px] font-mono uppercase tracking-widest">{type}</span>
         </div>
    </Container>
);

// --- Registry & Fallback Logic ---

const VISUAL_REGISTRY: Record<string, React.FC> = {
    'BioluminescentDemo': Bioluminescent,
    'SwissPolarityDemo': SwissPolarity,
    'Glassmorphism': Glassmorphism,
    'GlassmorphismDemo': Glassmorphism,
    'BentoGrid': BentoGrid,
    'BentoGridDemo': BentoGrid,
    'SkeletonLoader': SkeletonLoader,
    'SkeletonLoaderDemo': SkeletonLoader,
    'MicroInteraction': MicroInteraction,
    'MicroInteractionDemo': MicroInteraction,
    'MysteryNavigationDemo': MysteryNavigation,
    'ScrollJackingDemo': ScrollJacking,
    'GestaltProximityDemo': GestaltProximity,
    'GestaltCommonRegionDemo': GestaltCommonRegion,
    'DuolingoMascot': DuolingoMascot,
    'LinearCommandPalette': LinearCommandPalette,
    'AirbnbMapToggle': AirbnbMapToggle,
    'ImprintTap': ImprintTap,
    'FluidMotion': FluidMotion,
    'FluidMotionDemo': FluidMotion,
    'ScrollAnimation': ScrollAnimation,
    'ScrollAnimationDemo': ScrollAnimation,
    'FlashcardDemo': Flashcard,
    'DarkMode': DarkMode,
    'DarkModeDemo': DarkMode,
    'VariableFonts': VariableFonts,
    'VariableFontsDemo': VariableFonts,
    'Toast': Toast,
    'ToastDemo': Toast,
    'SwipeAction': SwipeAction,
    'SwipeActionDemo': SwipeAction,
    'FileUpload': FileUpload,
    'FileUploadDemo': FileUpload,
    'Onboarding': Onboarding,
    'OnboardingTourDemo': Onboarding,
    'LeaderboardDemo': Leaderboard,
    'FocusDemo': FocusVisual,
    'HicksLawDemo': HicksLaw,
    'SerialPositionDemo': SerialPosition,
    'FittsLawDemo': FittsLaw,
    'AtomicDesignDemo': AtomicDesign,
    'DesignTokensDemo': DesignTokens,
    'ComponentPropsDemo': ComponentProps,
    'ColorRuleDemo': ColorRule,
    'TypographyDemo': TypographyVisual,
    'ThumbZoneDemo': ThumbZone,
    'Performance': WebVitals,
    'WebVitalsDemo': WebVitals,
    'DebounceDemo': Debounce,
    'VirtualizationDemo': Virtualization,
    'ConfidenceDemo': Confidence,
    'ChunkingDemo': Chunking,
    'ScaffoldingDemo': Scaffolding,
    'StreakDemo': Streak,
    'VisualEssay': VisualEssay,
    'VisualEssayDemo': VisualEssay,
    'CelebrationDemo': Celebration,
    'MistakeAnalysisDemo': MistakeAnalysis,
    'GoalSettingDemo': GoalSetting,
    'OptimisticUIDemo': OptimisticUI,
    'GradientMeshDemo': GradientMesh,
    'ColorBlindnessDemo': ColorBlindness,
    'EmptyState': EmptyState,
    'Neumorphism': Neumorphism,
    'ProgressiveDisclosure': ProgressiveDisclosure,
    'Anti-Pattern': AntiPattern,
    'Gestalt': GestaltLayout,
    'OperatorConsoleDemo': OperatorConsoleDemo,
    'QuietLuxuryDemo': QuietLuxuryDemo,
    'SystemAtlasDemo': SystemAtlasDemo,
    'TechnicalBlueprintDemo': TechnicalBlueprintDemo,
};

const getCategoryVisual = (category: string) => {
    switch(category) {
        case 'UI Trend': return Glassmorphism;
        case 'EdTech': return VisualEssay;
        case 'Performance': return WebVitals;
        case 'Accessibility': return ColorBlindness;
        case 'Psychology': return HicksLaw;
        case 'Design Systems': return AtomicDesign;
        case 'Mobile UX': return ThumbZone;
        case 'Case Study': return ImprintTap;
        case 'Theme': return Bioluminescent;
        case 'Color Theory': return ColorRule;
        case 'Typography': return TypographyVisual;
        default: return null;
    }
}

export const StaticVisual = ({ type }: { type: string }) => {
    const Component = VISUAL_REGISTRY[type] || getCategoryVisual(type);
    
    if (Component) {
        return <Component />;
    }

    return <DefaultFallback type={type} />;
};