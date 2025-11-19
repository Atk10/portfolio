'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Operations from '@/components/operations'
import Loadout from '@/components/loadout'
import MissionHistory from '@/components/mission-history'
import Badges from '@/components/badges'
import Terminal from '@/components/terminal'
import Footer from '@/components/footer'
import BootSequence from '@/components/boot-sequence'

export default function Home() {
  const [showBoot, setShowBoot] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowBoot(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen w-full">
      {showBoot && <BootSequence />}
      <Navbar />
      <Hero />
      <Operations />
      <Loadout />
      <MissionHistory />
      <Badges />
      <Terminal />
      <Footer />
    </main>
  )
}
