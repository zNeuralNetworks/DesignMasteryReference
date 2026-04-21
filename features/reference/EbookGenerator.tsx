import React from 'react';
import { Link } from 'react-router-dom';
import { Printer, ArrowLeft, BookOpen, Layers } from 'lucide-react';
import { entries } from '@/data/index';
import { StaticVisual } from '@/features/demos/StaticVisuals';

export const EbookGenerator = () => {
  const handlePrint = () => {
    window.print();
  };

  const renderContent = (content: string) => {
    return content.split('\n').map((line, i) => {
      if (line.startsWith('# ')) return <h2 key={i} className="text-2xl font-bold text-slate-900 mb-4 mt-8 break-after-avoid">{line.replace('# ', '')}</h2>
      if (line.startsWith('### ')) return <h3 key={i} className="text-lg font-bold text-slate-800 mb-3 mt-6 break-after-avoid">{line.replace('### ', '')}</h3>
      if (line.startsWith('* ')) return <li key={i} className="ml-4 text-slate-700 mb-1 list-disc">{line.replace('* ', '')}</li>
      if (line.startsWith('> ')) return <blockquote key={i} className="border-l-4 border-primary-500 pl-4 italic bg-slate-50 p-4 rounded-r-lg my-6 text-slate-700 break-inside-avoid">{line.replace('> ', '')}</blockquote>
      if (line.trim() === '') return <br key={i} className="content-spacer"/>
      return <p key={i} className="mb-4 text-slate-700 leading-relaxed text-justify">{line}</p>
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 pb-20">
      {/* Navigation & Controls (Hidden in Print) */}
      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200 p-4 no-print">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-slate-500 hover:text-primary-600 transition-colors text-sm font-medium">
                <ArrowLeft size={16} /> Back to Reference Library
            </Link>
            <button 
                onClick={handlePrint}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg transition-all hover:scale-105"
            >
                <Printer size={16} /> Print / Save as PDF
            </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-8 md:px-0 print-content">
        
        {/* Cover Page */}
        <div className="min-h-[60vh] flex flex-col justify-center items-center text-center border-b-2 border-slate-100 mb-16 pb-16 pt-16">
            <div className="w-24 h-24 bg-primary-600 rounded-2xl flex items-center justify-center text-white font-bold text-4xl shadow-2xl mb-8">DM</div>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">Design Mastery Reference</h1>
            <p className="text-xl text-slate-500 font-light uppercase tracking-widest mb-12">The Complete Reference Library</p>
            <div className="flex gap-8 text-sm text-slate-400 font-mono">
                <span>v1.0.0</span>
                <span>•</span>
                <span>{entries.length} Entries</span>
                <span>•</span>
                <span>Generated {new Date().toLocaleDateString()}</span>
            </div>
        </div>

        {/* Table of Contents */}
        <div className="mb-24 print-break-after">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 pb-4 border-b border-slate-200">
                <Layers className="text-primary-600"/> Table of Contents
            </h2>
            <div className="grid grid-cols-1 gap-y-2">
                {entries.map((entry, index) => (
                    <a href={`#entry-${entry.id}`} key={entry.id} className="flex items-baseline gap-4 hover:bg-slate-50 p-2 rounded group no-underline">
                        <span className="font-mono text-slate-400 text-sm w-8">{(index + 1).toString().padStart(2, '0')}</span>
                        <span className="font-medium text-slate-700 group-hover:text-primary-600">{entry.title}</span>
                        <div className="flex-1 border-b border-dotted border-slate-300 mx-2 relative -top-1"></div>
                        <span className="text-xs uppercase font-bold text-slate-400">{entry.domain}</span>
                    </a>
                ))}
            </div>
        </div>

        {/* Reference Loop */}
        <div className="space-y-12">
            {entries.map((entry, index) => (
                <article 
                    key={entry.id} 
                    id={`entry-${entry.id}`} 
                    className="print-break-before pt-12 border-t border-slate-100 first:border-0"
                >
                    <div className="mb-8">
                        <div className="flex justify-between items-center mb-4">
                             <span className="text-primary-600 font-bold tracking-widest text-xs uppercase block border border-primary-200 bg-primary-50 px-2 py-1 rounded">
                                 {entry.domain}
                             </span>
                             <span className="font-mono text-slate-300 text-sm">#{index + 1}</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                            {entry.title.includes(':') ? entry.title.split(':')[1].trim() : entry.title}
                        </h1>
                        <p className="text-lg text-slate-500 leading-relaxed font-light italic">
                            {entry.description}
                        </p>
                    </div>

                    {/* Static Visual for Print Context */}
                    <div className="my-8 print-avoid-break static-visual-container">
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 flex items-center justify-center">
                             <div className="scale-125 transform p-4">
                                <StaticVisual type={entry.interactiveComponent || entry.domain} />
                             </div>
                        </div>
                        <p className="text-center text-xs text-slate-400 mt-2 italic">Figure {index + 1}: {entry.title}</p>
                    </div>

                    <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600">
                        {renderContent(entry.content)}
                    </div>
                </article>
            ))}
        </div>

        {/* Print Footer */}
        <div className="hidden print-footer mt-12 pt-4 border-t border-slate-200 text-center text-xs text-slate-400">
            <p>Design Mastery Reference • Printed on {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};