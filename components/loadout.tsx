'use client'

export default function Loadout() {
  const skillGroups = [
    {
      title: 'Cybersecurity & Systems',
      items: [
        'Threat Detection',
        'Incident Response Fundamentals',
        'Security Operations Concepts',
        'Network Security Basics (TCP/IP, routing, protocols)',
        'Operating Systems Fundamentals',
        'Wireshark',
        'Splunk (Intro / Using Fields / Event Analysis)',
        'Oledump (Macro & File Inspection)',
        'Cisco Networking Basics',
        'IT Infrastructure Concepts',
        'Enterprise Architecture (Foundational Knowledge)',
        'Information Systems Management',
      ],
    },
    {
      title: 'Data & Analytics',
      items: [
        'Python (Pandas, NumPy, Jupyter)',
        'SQL Querying & Data Management',
        'Data Cleaning & Preprocessing',
        'Data Mining (Association Rules, Classification, Clustering)',
        'Data Warehousing (Star/Snowflake, Fact/Dim tables, ETL)',
        'OLAP (Roll-up, Drill-down, Slice, Dice)',
        'Statistical Analysis & Probability',
        'Excel Data Analysis',
        'Power BI Dashboards',
        'Pattern Discovery & Outlier Detection',
      ],
    },
    {
      title: 'Development & Business',
      items: [
        'Object-Oriented Programming (OOP)',
        'Data Structures & Algorithms',
        'Web-Based Systems Fundamentals',
        'Mobile App Development Basics',
        'Software Quality & Testing Basics',
        'System Analysis & Design (Use Cases, UML, Diagrams)',
        'Business Process Management (BPMN 2.0)',
        'Project Management Fundamentals',
        'Business Analysis',
        'Organizational Behavior & Strategy Basics',
        'UX & HCI Fundamentals',
      ],
    },
  ]

  return (
    <section id="loadout" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold cyber-text-glow mb-4">Loadout</h2>
          <p className="text-slate-400 text-lg">Tools, stacks, and capabilities I bring into every mission.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group, idx) => (
            <div key={group.title} className="glass-panel p-8 rounded-lg terminal-border animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="pb-3 mb-3 border-t border-[#00d9ff]/10"></div>
              <h3 className="text-lg font-mono text-[#00d9ff] uppercase tracking-wider mb-6 pb-4 border-b border-[#00d9ff]/20">
                {group.title}
              </h3>

              <div className="space-y-3">
                {group.items.map((item) => (
                  <div key={item} className="badge-chip block w-full text-left transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,217,255,0.3)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
