'use client'

import { useState } from 'react'
import { Mail, Linkedin } from 'lucide-react'

export default function Terminal() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold cyber-text-glow mb-4">Terminal Access</h2>
          <p className="text-slate-400 text-lg">Open a secure channel.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="flex flex-col justify-between animate-slide-in-left">
            <p className="text-slate-300 leading-relaxed mb-8">
              Have an opportunity, collaboration, or question? I'd love to connect. Let's work together to build something amazing.
            </p>

            {/* Direct Contact */}
            <div className="space-y-4">
              <a href="mailto:ATalkhatrawi@outlook.com" className="flex items-center gap-3 text-slate-300 group" style={{ transition: "0.2s ease" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#42e8ff";
                  (e.currentTarget as HTMLElement).style.textShadow = "0 0 6px rgba(0, 255, 255, 0.35)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#cbd5e1";
                  (e.currentTarget as HTMLElement).style.textShadow = "none";
                }}>
                <Mail className="w-5 h-5 group-hover:text-[#00d9ff]" />
                <span className="font-mono">ATalkhatrawi@outlook.com</span>
              </a>

              <a href="https://www.linkedin.com/in/abdullah-alkhatrawi-164375270/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 group" style={{ transition: "0.2s ease" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#42e8ff";
                  (e.currentTarget as HTMLElement).style.textShadow = "0 0 6px rgba(0, 255, 255, 0.35)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#cbd5e1";
                  (e.currentTarget as HTMLElement).style.textShadow = "none";
                }}>
                <Linkedin className="w-5 h-5 group-hover:text-[#00d9ff]" />
                <span className="font-mono">&gt; My Linkedin profile</span>
              </a>
            </div>
          </div>

          {/* Right Side - Terminal Form */}
          <div className="glass-panel p-8 rounded-lg terminal-border animate-slide-in-left" style={{ animationDelay: '100ms' }}>
            <div className="font-mono text-xs text-slate-400 mb-6 pb-4 border-b border-[#00d9ff]/20">
              <div className="text-[#00d9ff]">&gt; send a message to Abdullah</div>
              <div className="text-slate-500 mt-2">parameters: name, email, subject, message</div>
            </div>

            {submitted ? (
              <div className="text-center py-8">
                <p className="text-[#00d9ff] font-mono mb-2">Message transmitted successfully!</p>
                <p className="text-sm text-slate-400">I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-mono text-[#00d9ff] uppercase block mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#00d9ff]/30 rounded text-white font-mono text-sm focus:outline-none focus:border-[#00d9ff] transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-[#00d9ff] uppercase block mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#00d9ff]/30 rounded text-white font-mono text-sm focus:outline-none focus:border-[#00d9ff] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-[#00d9ff] uppercase block mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#00d9ff]/30 rounded text-white font-mono text-sm focus:outline-none focus:border-[#00d9ff] transition-colors"
                    placeholder="Message subject"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-[#00d9ff] uppercase block mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#00d9ff]/30 rounded text-white font-mono text-sm focus:outline-none focus:border-[#00d9ff] transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full cyber-button px-6 py-3 rounded-lg font-mono font-semibold uppercase text-sm">
                  {'>'} Transmit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
