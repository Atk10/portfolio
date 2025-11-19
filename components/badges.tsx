'use client'

interface Badge {
  title: string
  category: 'certification' | 'achievement'
  year: string
  description: string
}

const allBadges: Badge[] = [
  {
    title: 'Splunk Fundamentals',
    category: 'certification',
    year: '2025',
    description: 'Intro, Using Fields, Event Analysis',
  },
  {
    title: 'Cybersecurity Incident Response Analysis',
    category: 'certification',
    year: '2025',
    description: 'Advanced incident response and threat analysis',
  },
  {
    title: '(ISC)² Certified in Cybersecurity (CC)',
    category: 'certification',
    year: '2025',
    description: '4/5 Domains Completed – In Progress',
  },
  {
    title: '1st Place – TCS Sustainathon Saudi Arabia 2025',
    category: 'achievement',
    year: '2025',
    description: 'Desert Bloom project – 400+ teams competed',
  },
  {
    title: 'IBM Python for Data Science, AI & Development',
    category: 'certification',
    year: '2024',
    description: 'Advanced Python programming for data science and AI applications',
  },
  {
    title: 'Top 10 Finalist – TCS Sustainathon Saudi Arabia 2024',
    category: 'achievement',
    year: '2024',
    description: '300+ teams competed',
  },
  {
    title: 'Top 10 MVP – Future Disruptors Program, LEAP 2024',
    category: 'achievement',
    year: '2024',
    description: 'Software AG sponsored program',
  },
  {
    title: 'Certificate of Appreciation – IAU',
    category: 'achievement',
    year: '2024',
    description: 'For leadership and community contributions',
  },
  {
    title: 'NCCC 2024 – Core Organizer',
    category: 'achievement',
    year: '2024',
    description: 'Recognized for organizing the National Computing Colleges Conference (May 8–9, 2024).',
  },
  {
    title: 'Handis Engineering Hackathon – IAU',
    category: 'achievement',
    year: '2024',
    description: 'Contribution to engineering-focused hackathon at the College of Engineering (Apr 27, 2024).',
  },
  {
    title: 'Community Partnership – IAU (حفل حصاد)',
    category: 'achievement',
    year: '2024',
    description: 'Recognition for contributions to university-wide community initiatives.',
  },
  {
    title: 'Annual Innovation Event – IAU',
    category: 'achievement',
    year: '2024',
    description: 'Participated in the 2024 innovation showcase (Apr 16–17, 2024).',
  },
  {
    title: 'Estazid Exhibit – IAU',
    category: 'achievement',
    year: '2023',
    description: 'Outstanding work in organizing the Estazid Exhibit (Jan 17–18, 2023).',
  },
]

const badges = allBadges.sort((a, b) => {
  if (a.year !== b.year) {
    return parseInt(b.year) - parseInt(a.year)
  }
  return a.category.localeCompare(b.category)
})

export default function Badges() {
  return (
    <section id="badges" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold cyber-text-glow mb-4">Badges</h2>
          <p className="text-slate-400 text-lg">Certifications and achievements unlocked along the way.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {badges.map((badge, idx) => (
            <div
              key={badge.title}
              className={`glass-panel p-6 rounded-lg terminal-border hover:scale-105 transition-all duration-300 animate-fade-in-up group ${
                badge.category === 'achievement' ? 'border-[#c71585]/30' : 'border-[#00d9ff]/30'
              }`}
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-white group-hover:text-[#00d9ff] transition-colors flex-1 text-sm sm:text-base">{badge.title}</h3>
                <span className={`text-xs font-mono px-2 py-1 rounded ml-2 flex-shrink-0 ${
                  badge.year === '2025' 
                    ? 'bg-[#00d9ff]/20 text-[#00d9ff]' 
                    : 'bg-[#c71585]/20 text-[#c71585]'
                }`}>
                  {badge.year}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
