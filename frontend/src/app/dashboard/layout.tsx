import React from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden">
            {/* SIDEBAR */}
            <aside className="w-64 bg-[var(--surface-dark)] border-r border-[var(--surface-border)] p-6 hidden md:flex flex-col">
                <div className="flex items-center gap-2 mb-10">
                    <div className="w-8 h-8 rounded bg-gradient-to-tr from-[var(--teal-accent)] to-[var(--primary-purple)] flex items-center justify-center glow">
                        <span className="text-white font-bold text-sm">FP</span>
                    </div>
                    <span className="font-bold text-lg">FinPilotABI</span>
                </div>

                <nav className="flex-1 space-y-2">
                    <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[var(--primary-purple)]/10 border border-[var(--primary-purple)]/20 text-[var(--primary-purple)] transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" /></svg>
                        <span className="font-medium text-sm">Dashboard</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20v-6M6 20V10M18 20V4" /></svg>
                        <span className="font-medium text-sm">Allocations</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /></svg>
                        <span className="font-medium text-sm">Workflow Agent</span>
                    </a>
                </nav>

                <div className="mt-auto">
                    <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 text-gray-400 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs text-white">U</div>
                        <div className="text-sm">
                            <div className="font-medium text-white">User Account</div>
                            <div className="text-xs">Free Tier</div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="flex-1 overflow-y-auto">
                {/* TOP BAR */}
                <header className="h-16 border-b border-[var(--surface-border)] flex items-center justify-between px-8">
                    <h2 className="font-semibold">Overview</h2>
                    <button className="px-4 py-2 rounded bg-white/5 hover:bg-white/10 text-sm font-medium transition-colors border border-white/10">
                        Run Sanitizer
                    </button>
                </header>

                {/* PAGE CONTENT */}
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
