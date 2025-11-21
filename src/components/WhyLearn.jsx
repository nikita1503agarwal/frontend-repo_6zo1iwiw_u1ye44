import { Briefcase, Globe2, Plane, BookCheck, Heart, GraduationCap } from 'lucide-react'

const benefits = [
  { icon: Briefcase, title: 'Career Growth', desc: 'Stand out with bilingual skills.', kanji: '仕事' },
  { icon: Globe2, title: 'Cultural Depth', desc: 'Understand anime, art, and traditions.', kanji: '文化' },
  { icon: Plane, title: 'Travel Ease', desc: 'Navigate Japan with confidence.', kanji: '旅' },
  { icon: BookCheck, title: 'JLPT Ready', desc: 'Structured prep for N5/N4.', kanji: 'N5/N4' },
  { icon: Heart, title: 'Harmony', desc: 'Learn the spirit of 和 and community.', kanji: '和' },
  { icon: GraduationCap, title: 'Learn Simply', desc: 'Clear steps that actually stick.', kanji: '学ぶ' },
]

function Card({ Icon, title, desc, kanji }) {
  return (
    <div className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Origami corner fold */}
      <div className="absolute -top-[1px] -right-[1px] w-10 h-10 bg-gradient-to-br from-blue-500 to-violet-500 rounded-tr-2xl clip-path-polygon" />
      <style>{`.clip-path-polygon{clip-path: polygon(0 0,100% 0,100% 100%);}`}</style>

      {/* Kanji watermark */}
      <div className="absolute inset-0 pointer-events-none select-none flex items-end justify-end p-3 opacity-10 text-3xl font-semibold text-slate-700">
        {kanji}
      </div>

      <div className="relative z-10">
        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-4">
          <Icon className="text-slate-700" size={20} />
        </div>
        <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
        <p className="text-slate-600 text-sm">{desc}</p>
      </div>
    </div>
  )
}

export default function WhyLearn() {
  return (
    <section className="relative py-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(148,163,184,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-[1140px] px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Why Learn Japanese?</h2>
          <p className="text-slate-600 mt-3">Discover opportunities, culture, and a new way of thinking.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <Card key={i} Icon={b.icon} title={b.title} desc={b.desc} kanji={b.kanji} />
          ))}
        </div>
      </div>
    </section>
  )
}
