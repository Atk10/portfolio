'use client'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up">
          {/* Left Side - Identity Module */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 leading-tight">
                Abdullah Tariq
                <br />
                <span className="cyber-text-glow">Alkhatrawi</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-400 mb-6 leading-relaxed">
                Senior CIS Student | Cybersecurity & Data Analytics | Community Leader
              </p>
              <p className="text-slate-300 leading-relaxed max-w-md">
                Senior CIS student at Imam Abdulrahman Bin Faisal University in Khobar. Specializing in cybersecurity and data analytics. Leading communities and driving tech innovation through real-world impact.
              </p>
            </div>

            {/* Status Tags */}
            <div className="flex flex-wrap gap-3">
              <div className="badge-chip">Head of Community Management – ByTechs</div>
              <div className="badge-chip">Former President – IAU Programming Club</div>
              <div className="badge-chip">1st Place – TCS Sustainathon 2025</div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#operations" className="cyber-button px-6 py-3 rounded-lg font-mono font-semibold">
                {'>'} View Operations
              </a>
            </div>
          </div>

          {/* Right Side - System Overview Panel */}
          <div className="glass-panel p-8 rounded-lg terminal-border animate-slide-in-left">
            <div className="space-y-6">
              <div className="border-b border-[#00d9ff]/20 pb-4">
                <h3 className="text-sm font-mono text-[#00d9ff] uppercase tracking-wider mb-2">System Overview</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs font-mono text-[#00d9ff] uppercase">Current Ops</p>
                  <p className="text-slate-300 mt-1">Cybersecurity, Data Analytics, Community Building</p>
                </div>

                <div>
                  <p className="text-xs font-mono text-[#00d9ff] uppercase">Location</p>
                  <p className="text-slate-300 mt-1">Khobar, Saudi Arabia</p>
                </div>

                <div>
                  <p className="text-xs font-mono text-[#00d9ff] uppercase">Mission Focus</p>
                  <p className="text-slate-300 mt-1">Impact-driven tech, hackathons, and community-led innovation</p>
                </div>

                <div>
                  <p className="text-xs font-mono text-[#00d9ff] uppercase">Uptime</p>
                  <p className="text-slate-300 mt-1">Active since 2021 in CIS & tech communities</p>
                </div>
              </div>

              <div className="border-t border-[#00d9ff]/20 pt-4 mt-6">
                <div className="flex justify-between text-xs font-mono text-slate-400">
                  <span>Status: <span className="text-green-400">ONLINE</span></span>
                  <span>v1.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
