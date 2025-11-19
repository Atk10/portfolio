'use client'

interface TimelineEntry {
  title: string
  dates: string
  location: string
  highlights: string[]
}

const entries: TimelineEntry[] = [
  {
    title: 'Strategic Project Manager – ByTechs Initiative',
    dates: '01/2025 – Present',
    location: 'Khobar, Saudi Arabia',
    highlights: [
      'Lead strategic projects across ByTechs\' departments and initiatives.',
      'Oversee planning, execution, and delivery of multi-team operations.',
      'Develop strategic frameworks to scale communities and programs.',
    ],
  },
  {
    title: 'Head of Community Management – ByTechs Initiative',
    dates: '08/2024 – Present',
    location: 'Khobar, Saudi Arabia',
    highlights: [
      'Lead Community Management Department overseeing 7+ specialized communities',
      'Supervise 4 operational units aligned with strategic goals',
      'Drive community innovation using emerging technologies',
    ],
  },
  {
    title: 'President – Programming Club at IAU',
    dates: '09/2023 – 08/2024',
    location: 'Khobar, Saudi Arabia',
    highlights: [
      'Directed club operations and increased participation through strategic initiatives',
      'Led competitions at the National Computing and Coding Carnival',
      'Earned a Shield of Appreciation for expanding learning opportunities',
    ],
  },
  {
    title: 'Pilot of Events – AWS Cloud Club',
    dates: '08/2023 – 01/2024',
    location: 'Khobar, Saudi Arabia',
    highlights: [
      'Served as the first Pilot of Events for AWS Cloud Club in the Middle East',
      'Organized AWS workshops and hands-on cloud training',
      'Collaborated with AWS Educate and industry professionals',
    ],
  },
  {
    title: 'Bachelor of Computer Information Systems – IAU',
    dates: '2021 – Present',
    location: 'Khobar, Saudi Arabia',
    highlights: [
      'Senior CIS student focusing on cybersecurity and data analytics',
      'Engaged in hackathons, communities, and technical projects',
      'Tied learning to real-world use cases and impact',
    ],
  },
]

export default function MissionHistory() {
  return (
    <section id="history" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold cyber-text-glow mb-4">Mission History</h2>
          <p className="text-slate-400 text-lg">Roles, responsibilities, and impact in communities and organizations.</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00d9ff] via-[#c71585] to-[#00d9ff] transform -translate-x-1/2"></div>

          {/* Timeline Entries */}
          <div className="space-y-8 relative z-10">
            {entries.map((entry, idx) => (
              <div key={entry.title} className="animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="flex gap-8 sm:gap-0">
                  {/* Left Column */}
                  <div className="sm:w-1/2 sm:text-right sm:pr-8">
                    <div className="sm:hidden absolute left-0 w-8 h-8 bg-[#00d9ff] rounded-full transform -translate-x-1.5 top-0 border-4 border-[#050509]"></div>
                    <div className="hidden sm:block absolute left-1/2 w-4 h-4 bg-[#00d9ff] rounded-full transform -translate-x-1/2 top-4 border-4 border-[#050509]"></div>
                  </div>

                  {/* Right Column - Content */}
                  <div className="sm:w-1/2 sm:pl-8">
                    <div className="glass-panel p-6 rounded-lg terminal-border">
                      <h3 className="text-lg font-semibold text-white mb-1">{entry.title}</h3>
                      <p className="text-sm text-[#00d9ff] font-mono mb-1">{entry.dates}</p>
                      <p className="text-sm text-slate-400 mb-4">{entry.location}</p>

                      <ul className="space-y-2">
                        {entry.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-slate-300 flex gap-2">
                            <span className="text-[#c71585] flex-shrink-0">▸</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
