'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Project {
  id: number
  codename: string
  badge: string
  role: string
  description: string
  tags: string[]
  details: string
  image: string
  carouselImages: string[]
}

const projects: Project[] = [
  {
    id: 1,
    codename: 'OPERATION: Desert Bloom',
    badge: '1st Place – TCS Sustainathon Saudi Arabia 2025 (400+ teams)',
    role: 'UI & IoT Developer',
    description: 'A solar-powered irrigation system for desert agriculture. Built the UI and developed the IoT logic and integration flow. Achieved 1st place among more than 400 teams.',
    tags: ['IoT Logic', 'Sustainability', 'Solar Systems', 'UI Design'],
    details: 'Led the UI development and IoT system integration for a comprehensive desert irrigation platform. Designed an intuitive interface for farmers to monitor and optimize irrigation cycles using solar-powered systems, resulting in significant water conservation and winning 1st place among 400+ competing teams.',
    image: '/logos/qaterni.png',
    carouselImages: [
      '/images/201.png',
      '/images/202.png',
    ],
  },
  {
    id: 2,
    codename: 'OPERATION: Aqua Saving',
    badge: 'Top 10 Finalist – TCS Sustainathon Saudi Arabia 2024 (300+ teams)',
    role: 'UI Developer & Problem-Solving Lead',
    description: 'Designed the UI and led the problem-solving process for a smart water optimization solution. Reached the Top 10 among 300+ teams.',
    tags: ['UI Development', 'Problem Solving', 'Sustainability', 'Hackathon'],
    details: 'Designed and implemented user interface for an advanced water conservation system. Collaborated with engineers to solve complex challenges in real-time water usage monitoring and optimization, reaching Top 10 finalist status among 300+ teams.',
    image: '/logos/aqua-saving.png',
    carouselImages: [
      '/images/101.png',
      '/images/102.png',
      '/images/103.png',
      '/images/104.png',
      '/images/105.png',
    ],
  },
  {
    id: 3,
    codename: 'OPERATION: Metal Gurd',
    badge: 'Finalists – MECC Hackathon 2025',
    role: 'Data Engineering & AI Developer',
    description: 'Developed an AI-powered system that analyzes pipeline health, detects corrosion levels, and predicts ERF>1 failure events. Built the data pipeline, preprocessing logic, ML model, and dashboard interface with GIS mapping.',
    tags: ['Machine Learning', 'Data Engineering', 'GIS Mapping', 'Predictive Analytics', 'Dashboard Design'],
    details: 'Built a comprehensive AI system for pipeline integrity monitoring. Developed end-to-end data pipeline including preprocessing, trained ML models for corrosion detection and failure prediction, and created an interactive GIS-enabled dashboard for real-time monitoring and analysis.',
    image: '/logos/metal-gurd.png',
    carouselImages: [
      '/images/301.png',
      '/images/302.png',
    ],
  },
]

export default function Operations() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({})

  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.carouselImages.length)
    }
  }

  const handlePrevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.carouselImages.length) % selectedProject.carouselImages.length)
    }
  }

  return (
    <section id="operations" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold cyber-text-glow mb-4">Operations</h2>
          <p className="text-slate-400 text-lg">Key missions and projects I've led or contributed to.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-lg terminal-border group cursor-pointer hover:scale-105 transition-all duration-300 animate-fade-in-up overflow-hidden"
              onClick={() => {
                setSelectedProject(project)
                setCurrentImageIndex(0)
              }}
            >
              <div className="relative w-full h-64 overflow-hidden bg-gradient-to-b from-[#0a0f14] to-[#0d1218] p-3 flex items-center justify-center">
                <img
                  src={imageErrors[project.id] ? "/placeholder-logo.png" : project.image}
                  alt={project.codename}
                  className="object-contain w-full h-full transition-all duration-300 hover:shadow-lg"
                  style={{
                    boxShadow: "0 0 0 rgba(0, 255, 255, 0)",
                    transition: "0.25s ease",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    display: "block"
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!imageErrors[project.id] && !target.src.includes("placeholder-logo.png")) {
                      setImageErrors(prev => ({ ...prev, [project.id]: true }));
                      target.src = "/placeholder-logo.png";
                    }
                  }}
                  onMouseEnter={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.boxShadow = "0 0 18px rgba(0, 255, 255, 0.35)";
                  }}
                  onMouseLeave={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.boxShadow = "0 0 0 rgba(0, 255, 255, 0)";
                  }}
                />
                <div className="absolute inset-0 border-b-2 border-[#00d9ff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="mb-4 pb-4 border-b border-[#00d9ff]/20">
                  <h3 className="text-sm font-mono text-[#00d9ff] uppercase tracking-wider">{project.codename}</h3>
                </div>

                <div className="mb-4">
                  <span className="inline-block badge-chip text-xs mb-3">{project.badge}</span>
                  <p className="text-xs text-slate-400 font-mono uppercase">Role: {project.role}</p>
                </div>

                <p className="text-slate-300 text-sm mb-4 leading-relaxed" style={{ lineHeight: "1.5" }}>{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-[#c71585]/10 text-[#c71585] rounded border border-[#c71585]/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="text-xs font-mono text-[#00d9ff] hover:text-white transition-colors">
                  {'>'} View Case File
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" style={{ backdropFilter: "blur(12px)" }} onClick={() => setSelectedProject(null)}>
            <div className="glass-panel p-0 rounded-lg terminal-border max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="relative bg-[#0d1218] flex items-center justify-center py-8" style={{ minHeight: '400px' }}>
                <Image
                  src={selectedProject.carouselImages[currentImageIndex] || "/placeholder.svg"}
                  alt={`${selectedProject.codename} - Image ${currentImageIndex + 1}`}
                  width={600}
                  height={800}
                  className="object-contain max-h-[70vh] w-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d1218]" />
                
                {/* Navigation Buttons */}
                {selectedProject.carouselImages.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-[#00d9ff]/30 rounded-lg transition-colors z-10"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5 text-[#00d9ff]" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-[#00d9ff]/30 rounded-lg transition-colors z-10"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5 text-[#00d9ff]" />
                    </button>
                    
                    {/* Image Counter */}
                    <div className="absolute bottom-3 right-3 px-3 py-1 bg-black/60 rounded text-xs text-[#00d9ff] font-mono">
                      {currentImageIndex + 1} / {selectedProject.carouselImages.length}
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-mono text-[#00d9ff] uppercase mb-2">{selectedProject.codename}</h3>
                    <p className="text-slate-400 font-mono text-sm">{selectedProject.role}</p>
                  </div>
                  <button onClick={() => setSelectedProject(null)} className="text-2xl text-slate-400 hover:text-[#00d9ff]">
                    ✕
                  </button>
                </div>

                <div className="space-y-6" style={{ lineHeight: "1.5" }}>
                  <div>
                    <h4 className="text-sm font-mono text-[#00d9ff] uppercase mb-2">Mission Brief</h4>
                    <p className="text-slate-300">{selectedProject.description}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-mono text-[#00d9ff] uppercase mb-2">Impact & Outcome</h4>
                    <p className="text-slate-300 text-sm">{selectedProject.badge}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-mono text-[#00d9ff] uppercase mb-2">Stack & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 bg-[#c71585]/10 text-[#c71585] rounded border border-[#c71585]/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
