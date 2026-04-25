import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans overflow-hidden">
      
      {/* HEADER */}
      <header className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full absolute top-0 left-0 right-0 z-50">
        <div className="flex items-center gap-2">
          {/* Logo element representing 'S' */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[var(--teal-accent)] to-[var(--primary-purple)] flex items-center justify-center glow">
            <span className="text-white font-bold text-sm">FP</span>
          </div>
          <span className="font-bold text-xl tracking-wide">FinPilotABI</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#" className="hover:text-white transition-colors">Products</a>
          <a href="#" className="hover:text-white transition-colors">Industries</a>
          <a href="#" className="hover:text-white transition-colors">Resources</a>
          <a href="#" className="hover:text-white transition-colors">Partners</a>
        </nav>
        
        <div className="flex items-center gap-4 text-sm font-medium">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Login</a>
          <a href="#" className="px-5 py-2.5 rounded-full bg-[var(--surface-border)] border border-gray-700 hover:bg-gray-800 transition-colors flex items-center gap-2">
            See a Demo
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
        </div>
      </header>
      
      {/* HERO SECTION */}
      <section className="relative pt-40 md:pt-52 pb-20 px-8 flex flex-col items-center justify-center text-center">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary-purple)] opacity-10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[var(--electric-blue)] opacity-[0.15] rounded-full blur-[80px] pointer-events-none"></div>

        <h1 className="max-w-4xl text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Financial intelligence for <br className="hidden md:block"/> real operations.
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10">
          Run structured, repeatable financial assessments and multi-agent portfolio workflows across your team, without relying on manual follow-ups.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="px-8 py-3.5 rounded-full bg-[var(--primary-purple)] text-white font-medium hover:bg-[var(--primary-accent)] transition-all glow flex items-center gap-2">
            Get started
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </button>
          <button className="px-8 py-3.5 rounded-full bg-transparent border border-gray-600 text-white font-medium hover:bg-[var(--surface-dark)] hover:border-gray-500 transition-all flex items-center gap-2">
            Request a demo
          </button>
        </div>
        
        {/* Abstract 3D Mockup Container */}
        <div className="mt-20 relative w-full max-w-5xl h-[400px] md:h-[500px] mx-auto perspective-1000">
          {/* Main Cube Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[250px] md:h-[250px] bg-gradient-to-br from-[var(--surface-border)] to-[var(--surface-dark)] border border-gray-700/50 rounded-2xl shadow-2xl flex items-center justify-center shadow-[0_0_50px_rgba(109,40,217,0.3)] z-10 transform -rotate-12 hover:rotate-0 transition-transform duration-700">
             <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[var(--teal-accent)] to-[var(--primary-purple)] flex items-center justify-center glow-teal">
                <span className="text-white font-bold text-2xl">FP</span>
             </div>
          </div>
          
          {/* Side Panel 1 */}
          <div className="absolute top-[20%] left-[5%] md:left-[15%] w-[240px] bg-[var(--surface-dark)] border border-gray-700/80 rounded-xl p-4 shadow-xl z-20 backdrop-blur-sm transform rotate-6 hover:rotate-0 transition-transform duration-500">
            <div className="flexItems-center gap-3 mb-3 border-b border-gray-800 pb-3">
              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs">U1</div>
              <div className="text-sm font-medium">Verify User Data</div>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-full bg-gray-800 rounded"></div>
              <div className="h-2 w-3/4 bg-gray-800 rounded"></div>
            </div>
            <div className="mt-4 flex gap-2">
              <span className="px-2 py-1 bg-[var(--primary-purple)]/20 text-[var(--primary-purple)] rounded text-xs">Santizer Agent</span>
            </div>
          </div>
          
          {/* Side Panel 2 */}
          <div className="absolute bottom-[20%] right-[5%] md:right-[15%] w-[220px] bg-[var(--surface-dark)] border border-gray-700/80 rounded-xl p-4 shadow-xl z-0 backdrop-blur-sm transform -rotate-6 hover:rotate-0 transition-transform duration-500">
            <div className="text-sm font-medium mb-3">Integrations</div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                 <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold">PG</div>
                 <span className="text-xs text-gray-400">PostgreSQL Vector</span>
              </div>
              <div className="flex items-center gap-3">
                 <div className="w-6 h-6 rounded bg-green-500/20 flex items-center justify-center text-green-400 text-xs font-bold">LLM</div>
                 <span className="text-xs text-gray-400">Groq / Gemini Synthesizer</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* LOGO BAR */}
      <section className="py-12 border-y border-[var(--surface-border)] bg-[var(--surface-dark)]/50">
        <div className="max-w-7xl mx-auto px-8 flex flex-col items-center">
          <p className="text-xs font-bold tracking-[0.2em] text-gray-500 mb-8 uppercase">Helping leading brands work smarter</p>
          <div className="flex flex-wrap justify-center gap-12 text-gray-400 font-semibold opacity-60">
             <span>ICONIC</span>
             <span>LOGIQUE</span>
             <span>PRELUDE</span>
             <span>SIGNET</span>
             <span>EMBLEM</span>
          </div>
        </div>
      </section>
      
      {/* WORKFLOW BUILDER SECTION */}
      <section className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-5/12 space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[var(--primary-purple)] glow"></div>
            <span className="text-sm font-bold tracking-widest text-gray-400 uppercase">Build Workflows</span>
          </div>
          <h2 className="text-4xl font-bold">Workflow builder</h2>
          <p className="text-gray-400 text-lg">
            Design deterministic financial flows using clear steps and rules—built for reliability, not hallucinations. 
            Connect isolated data to rigorous investment strategies safely.
          </p>
        </div>
        
        <div className="w-full md:w-7/12 relative">
          <div className="bg-[var(--surface-dark)] border border-[var(--surface-border)] p-6 rounded-2xl">
            {/* Flow Step 1 */}
            <div className="flex relative">
              <div className="w-full border border-gray-700 bg-black p-4 rounded-xl flex items-center gap-4 mb-4 shadow-lg z-10 hover:border-gray-500 transition-colors">
                <div className="w-10 h-10 rounded bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Trigger</h4>
                  <p className="text-xs text-gray-500">User completes Onboarding Form</p>
                </div>
              </div>
              <div className="absolute left-9 top-14 bottom-0 w-0.5 bg-gray-800 -z-0"></div>
            </div>
            
            {/* Flow Step 2 */}
            <div className="flex relative pl-5 mt-2">
              <div className="w-full border border-gray-700 bg-black p-4 rounded-xl flex items-center gap-4 mb-4 shadow-lg z-10 hover:border-gray-500 transition-colors">
                 <div className="w-10 h-10 rounded bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Health Calculator</h4>
                  <p className="text-xs text-gray-500">Calculate Emergency Fund & Debt-to-Income</p>
                </div>
              </div>
              <div className="absolute left-9 top-14 bottom-0 w-0.5 bg-gray-800 -z-0"></div>
            </div>
            
            {/* Flow Step 3: AI Agent */}
            <div className="flex relative pl-5 mt-2">
              <div className="w-full border border-[var(--primary-purple)] bg-[#100826] p-4 rounded-xl flex flex-col gap-3 shadow-lg z-10 glow">
                 <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-[var(--primary-purple)] flex items-center justify-center text-white glow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a8 8 0 0 0-8 8v4a2 2 0 0 0 2 2h2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4h2a2 2 0 0 0 2-2v-4a8 8 0 0 0-8-8z"/><path d="M12 18v4"/><path d="M8 22h8"/></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[var(--primary-purple)] drop-shadow-[0_0_5px_rgba(139,92,246,0.5)]">AI Synthesizer</h4>
                    <p className="text-xs text-gray-400">Retrieves RAG Truths</p>
                  </div>
                 </div>
                 <div className="mt-2 bg-black border border-gray-800 rounded p-3">
                   <p className="text-xs text-gray-500 italic">"Draft a cohesive, empathetic financial plan using guidelines retrieved from vector DB..."</p>
                 </div>
              </div>
            </div>
            
            {/* Add Node Button */}
            <div className="flex justify-center mt-6">
              <button className="flexItems-center justify-center w-10 h-10 rounded-full bg-gray-800 border border-gray-700 hover:bg-gray-700 transition-colors text-gray-400 hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
