import { useState } from 'react'
import { Plus } from 'lucide-react'

const items = [
  { q: 'How do I book a free trial?', a: 'Use the contact form to choose trial and we will schedule your session within 24 hours.' },
  { q: 'Are classes live or recorded?', a: 'All classes are live and interactive with optional recordings for review.' },
  { q: 'What level should I start at?', a: 'We recommend N5 for beginners. We assess during the trial to place you correctly.' },
  { q: 'Do you prepare for JLPT?', a: 'Yes, our curriculum aligns with JLPT N5/N4 with structured practice.' },
  { q: 'How big are class sizes?', a: 'Small batches of 4–8 students for maximum speaking time.' },
  { q: 'What tools do I need?', a: 'Any laptop with Zoom/Meet and a stable internet connection.' },
]

function ScrollItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full text-left flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-3">
          {/* Scroll bars */}
          <div className="w-1.5 self-stretch bg-gradient-to-b from-slate-300 to-slate-200 rounded" />
          <span className="font-medium text-slate-900">{q}</span>
        </div>
        <Plus className={`transition-transform ${open ? 'rotate-45' : ''}`} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="px-5 pb-5 text-slate-600 relative">
            {/* Rice paper texture via subtle pattern */}
            <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(148,163,184,0.12),transparent_60%)]" />
            {/* Kanji watermark */}
            <div className="absolute right-4 bottom-3 text-3xl text-slate-300 select-none">問</div>
            <p className="relative z-10">{a}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FAQ(){
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(148,163,184,0.10),transparent_40%)]" />
      <div className="relative mx-auto max-w-[1140px] px-6 md:px-8">
        <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-8 text-center">Frequently asked questions</h3>
        <div className="space-y-4 max-w-3xl mx-auto">
          {items.map((it, i) => <ScrollItem key={i} q={it.q} a={it.a} />)}
        </div>
      </div>
    </section>
  )
}
