import { motion } from 'framer-motion'
import { Calendar, Laptop2, Sprout } from 'lucide-react'

const steps = [
  { title: 'Free Trial', desc: 'Experience our live teaching style…', icon: Calendar, kanji: '体験', tone: 'white' },
  { title: 'Live Classes', desc: 'Learn step-by-step…', icon: Laptop2, kanji: '学ぶ', tone: 'gradient' },
  { title: 'Grow Weekly', desc: 'Build vocabulary, speak confidently…', icon: Sprout, kanji: '成長', tone: 'accent' },
]

function Step({ title, desc, Icon, kanji, tone }) {
  return (
    <div className={`relative w-full max-w-sm p-6 rounded-2xl ${
      tone === 'white' ? 'bg-white shadow-sm' : tone === 'gradient' ? 'bg-gradient-to-br from-blue-50 to-violet-50 border border-blue-100' : 'bg-white shadow-sm ring-1 ring-violet-100'
    }`}>
      <div className="absolute -top-[1px] -right-[1px] w-8 h-8 bg-gradient-to-br from-blue-500 to-violet-500 clip-path-polygon rounded-tr-2xl" />
      <style>{`.clip-path-polygon{clip-path: polygon(0 0,100% 0,100% 100%);}`}</style>
      <div className="absolute inset-0 pointer-events-none p-3 flex items-end justify-end opacity-10 text-2xl font-semibold text-slate-700">{kanji}</div>
      <div className="relative z-10">
        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-4">
          <Icon className="text-slate-700" size={20} />
        </div>
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <p className="text-slate-600 text-sm mt-1">{desc}</p>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(148,163,184,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-[1140px] px-6 md:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">How it works</h2>
        </div>

        {/* Wave line that draws itself */}
        <motion.svg viewBox="0 0 1200 200" className="w-full h-40 md:h-48" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2 }}>
          <defs>
            <linearGradient id="wave" x1="0" x2="1">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          <motion.path d="M0 120 C 200 40, 400 200, 600 120 S 1000 40, 1200 120" fill="none" stroke="url(#wave)" strokeWidth="4" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2 }} />
        </motion.svg>

        {/* Steps along the wave */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <Step key={i} title={s.title} desc={s.desc} Icon={s.icon} kanji={s.kanji} tone={s.tone} />
          ))}
        </div>

        {/* Tiny crane following the wave */}
        <motion.div initial={{ x: 0 }} whileInView={{ x: [0, 200, 400, 600, 800, 1000] }} transition={{ duration: 6, ease: 'easeInOut' }} className="mt-6 opacity-70">
          <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none" stroke="#94a3b8" strokeWidth="2">
            <path d="M10 70 L50 50 L90 70 L50 20 Z" />
            <path d="M50 20 L60 10" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
