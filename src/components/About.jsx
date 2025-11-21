import { CheckCircle2 } from 'lucide-react'

const points = [
  'Beginner-friendly',
  'Small batches',
  'Cultural explanations',
  'Speaking from week 1',
  'JLPT aligned',
]

export default function About() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.06),transparent_40%)]" />
      <div className="relative mx-auto max-w-[1140px] px-6 md:px-8 grid md:grid-cols-12 gap-10 items-center">
        {/* Left visuals */}
        <div className="md:col-span-6">
          <div className="relative">
            {/* Wing-inspired gradient shapes */}
            <div className="absolute -top-10 -left-8 w-40 h-40 rounded-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 blur-2xl" />
            <div className="absolute -bottom-8 -right-8 w-52 h-52 rounded-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 blur-2xl" />

            <div className="relative bg-white rounded-3xl p-10 shadow-sm ring-1 ring-slate-100">
              {/* Crane outline */}
              <svg viewBox="0 0 100 100" className="w-20 h-20 text-slate-300" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 70 L50 50 L90 70 L50 20 Z" />
                <path d="M50 20 L60 10" />
              </svg>
              {/* Kanji watermark */}
              <div className="absolute right-6 bottom-6 text-5xl text-slate-200/70 select-none">未来</div>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="md:col-span-6">
          <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
            We help beginners speak Japanese the right way.
          </h3>
          <p className="text-slate-600 mb-6">
            Our mission is to make learning Japanese simple, structured, and deeply connected to its culture. We guide you through live sessions, practice, and real-life usage.
          </p>
          <ul className="space-y-3">
            {points.map((p, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-700"><CheckCircle2 className="text-blue-500" size={18} /> {p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
