export default function DashboardPage() {
    return (
        <div className="max-w-5xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Welcome back!</h1>
                <div className="text-sm text-gray-400">March 22, 2026</div>
            </div>

            {/* METRICS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[var(--surface-dark)] p-6 rounded-xl border border-[var(--surface-border)] shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                    </div>
                    <p className="text-gray-400 text-sm font-medium mb-1">Total Allocated</p>
                    <h3 className="text-2xl font-bold">$12,450.00</h3>
                </div>

                <div className="bg-[var(--surface-dark)] p-6 rounded-xl border border-[var(--surface-border)] shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                    </div>
                    <p className="text-gray-400 text-sm font-medium mb-1">Health Score</p>
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                        A+ <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">Optimal</span>
                    </h3>
                </div>

                <div className="bg-[var(--surface-dark)] p-6 rounded-xl border border-[var(--surface-border)] shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    </div>
                    <p className="text-gray-400 text-sm font-medium mb-1">Risk Profile</p>
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                        Aggressive <span className="text-xs bg-[var(--primary-purple)]/20 text-[var(--primary-purple)] px-2 py-0.5 rounded">80/20</span>
                    </h3>
                </div>
            </div>

            {/* AGENT STATUS */}
            <div>
                <h2 className="text-lg font-semibold mb-4">Multi-Agent Workflow Status</h2>
                <div className="bg-black border border-gray-800 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-800">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 glow-teal"></div>
                            <span className="font-medium text-sm">Pipeline Idle</span>
                        </div>
                        <span className="text-xs text-gray-500">Last run: 2 hours ago</span>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                            <div className="w-6 text-center text-emerald-400">✓</div>
                            <div className="w-32 font-medium">Santizer Agent</div>
                            <div className="flex-1 border-t border-dashed border-gray-700"></div>
                            <div className="text-xs">Data verified</div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                            <div className="w-6 text-center text-emerald-400">✓</div>
                            <div className="w-32 font-medium">Health Calc</div>
                            <div className="flex-1 border-t border-dashed border-gray-700"></div>
                            <div className="text-xs">Formula executed</div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                            <div className="w-6 text-center text-[var(--teal-accent)] animate-pulse">⟳</div>
                            <div className="w-32 font-medium text-white">RAG Researcher</div>
                            <div className="flex-1 border-t border-dashed border-gray-700"></div>
                            <div className="text-xs text-[var(--teal-accent)]">Waiting for manual trigger...</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
