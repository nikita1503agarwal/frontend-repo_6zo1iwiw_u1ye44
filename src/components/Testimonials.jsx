import { motion } from 'framer-motion'

function Bubble({ name, city, text, jp }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Origami fold */}
      <div className="absolute -top-[1px] -right-[1px] w-10 h-10 bg-gradient-to-br from-blue-500 to-violet-500 clip-path-polygon rounded-tr-2xl" />
      <style>{`.clip-path-polygon{clip-path: polygon(0 0,100% 0,100% 100%);}`}</style>
      {/* Kanji watermark */}
      <div className="absolute inset-0 pointer-events-none flex items-end justify-end p-3 opacity-10 text-2xl font-semibold text-slate-700 select-none">楽しい</div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-violet-500" />
          <span className="font-medium text-slate-900">{name}</span>
          <span className="text-slate-500 text-sm">• {city}</span>
        </div>
        <p className="text-slate-700">{text}</p>
        <p className="text-slate-500 text-sm mt-2">{jp}</p>
      </div>
    </motion.div>
  )
}

export default function Testimonials(){
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(148,163,184,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-[1140px] px-6 md:px-8">
        <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-10 text-center">What students say</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Bubble name="Aisha" city="Dubai" text="The classes are so clear and friendly. I started speaking from week one!" jp="とても分かりやすいです。" />
          <Bubble name="Marco" city="Milan" text="I love the cultural tips—now anime and travel make more sense." jp="文化の説明が好きです。" />
          <Bubble name="Hana" city="Singapore" text="The step-by-step approach keeps me motivated every week." jp="毎週やる気が出ます。" />
        </div>
        {/* Floating crane */}
        <motion.div initial={{ y: -6 }} animate={{ y: 6 }} transition={{ repeat: Infinity, repeatType: 'mirror', duration: 4 }} className="absolute left-10 -top-4 opacity-70">
          <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none" stroke="#94a3b8" strokeWidth="2">
            <path d="M10 70 L50 50 L90 70 L50 20 Z" />
            <path d="M50 20 L60 10" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
