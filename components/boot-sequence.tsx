'use client'

import { useState, useEffect } from 'react'

export default function BootSequence() {
  const [lines, setLines] = useState<string[]>([])

  useEffect(() => {
    const bootLines = [
      'Initializing AbdullahOS...',
      'Loading systems: Cybersecurity | Data Analytics | Community Leadership | Innovation',
      'Connecting to neural network...',
      'All systems ONLINE.',
    ]

    let currentLine = 0
    let currentChar = 0
    let displayedLines: string[] = []

    const interval = setInterval(() => {
      if (currentLine < bootLines.length) {
        if (currentChar < bootLines[currentLine].length) {
          displayedLines[currentLine] = (displayedLines[currentLine] || '') + bootLines[currentLine][currentChar]
          currentChar++
          setLines([...displayedLines])
        } else {
          currentLine++
          currentChar = 0
          if (currentLine < bootLines.length) {
            displayedLines[currentLine] = ''
          }
        }
      } else {
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-[#050509] z-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4">
        <div className="font-mono text-sm text-[#00d9ff] space-y-2">
          {lines.map((line, i) => (
            <div key={i} className="flex items-start">
              <span className="text-[#c71585] mr-2 animate-pulse">&gt;</span>
              <span>{line}</span>
              {i === lines.length - 1 && <span className="animate-pulse">_</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
