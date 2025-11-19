'use client'

import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-[#00d9ff]/20 py-8 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} AbdullahOS.</span>
            <span>All rights reserved.</span>
          </div>
          <div className="flex items-center gap-1 text-[#00d9ff]">
            <span>Made with</span>
            <Heart className="w-4 h-4 fill-current animate-pulse" />
            <span>by Abdullah</span>
          </div>
          <div className="text-xs text-slate-500">v1.3 — Last updated 2025</div>
        </div>
      </div>
    </footer>
  )
}
