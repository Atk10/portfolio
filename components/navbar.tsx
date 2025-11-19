'use client'

import { useState } from 'react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Operations', href: '#operations' },
    { label: 'Loadout', href: '#loadout' },
    { label: 'Mission History', href: '#history' },
    { label: 'Badges', href: '#badges' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 w-full z-40 glass-panel border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00d9ff] rounded-full animate-pulse"></div>
            <a href="#" className="text-xl font-bold cyber-text-glow font-mono">
              AbdullahOS
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-slate-300 hover:text-[#00d9ff] transition-colors duration-300 hover:underline underline-offset-4"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-8 h-8 flex flex-col justify-between"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className={`w-full h-0.5 bg-[#00d9ff] transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-full h-0.5 bg-[#00d9ff] ${mobileOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-full h-0.5 bg-[#00d9ff] transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm text-slate-300 hover:text-[#00d9ff] transition-colors py-2 pl-2 border-l border-[#00d9ff]/20 hover:border-[#00d9ff]"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
