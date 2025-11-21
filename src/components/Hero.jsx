import { motion } from 'framer-motion'
import { ArrowRight, Play, BookOpen } from 'lucide-react'

const GradientWingLogo = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 120 120" className={className} aria-hidden>
    <defs>
      <linearGradient id="wing" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
    <g fill="url(#wing)">
      <path d="M20 80c30-5 50-25 70-60-5 30-20 58-55 78-8 4-18 4-25-2 3-6 6-12 10-16z" />
    </g>
  </svg>
)

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background: subtle rising sun + waves */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="absolute top-1/4 -right-24 w-[680px] h-[680px] rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.10),transparent_60%)]" />
        {/* Bottom wave as inline SVG to avoid data-URI parsing issues */}
        <svg
          className="absolute inset-x-0 bottom-0 h-64 w-full opacity-40"
          viewBox="0 0 1440 256"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="#e5e7eb"
            fillOpacity="0.25"
            d="M0,160L60,170.7C120,181,240,203,360,208C480,213,600,203,720,202.7C840,203,960,213,1080,213.3C1200,213,1320,203,1380,197.3L1440,192L1440,256L1380,256C1320,256,1200,256,1080,256C960,256,840,256,720,256C600,256,480,256,360,256C240,256,120,256,60,256L0,256Z"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-[1140px] px-6 md:px-8 py-20 md:py-28 grid md:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Left: Text */}
        <div className="md:col-span-6">
          <div className="flex items-center gap-3 mb-6">
            <GradientWingLogo />
            <span className="tracking-tight text-slate-800 text-lg">Fledge Academy</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-slate-900">
            Learn Japanese Online — From Zero to Confidence.
          </h1>
          {/* Brushstroke divider */}
          <div className="mt-4 mb-6 h-5">
            <svg viewBox="0 0 300 20" className="w-40" aria-hidden>
              <defs>
                <linearGradient id="strokeGrad" x1="0" x2="1">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
              <path d="M2 10c40 5 80-12 120-6s80 18 120 6" stroke="url(#strokeGrad)" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.9"/>
            </svg>
          </div>
          <p className="text-slate-600 text-lg md:text-xl max-w-prose">
            Live interactive classes, cultural immersion, and simple step-by-step progress.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 px-6 h-12 rounded-full text-white bg-gradient-to-r from-blue-500 to-violet-500 shadow-sm hover:shadow-md transition-shadow">
              Book Free Trial <ArrowRight size={18} />
            </a>
            <a href="#courses" className="inline-flex items-center gap-2 px-6 h-12 rounded-full border border-slate-300 text-slate-700 hover:bg-white/60 backdrop-blur">
              See Courses <BookOpen size={18} />
            </a>
          </div>
        </div>

        {/* Right: Image / Illustration */}
        <div className="md:col-span-6">
          <div className="relative aspect-[4/3] rounded-3xl bg-white shadow-xl overflow-hidden">
            {/* Minimal student illustration */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white" />
            <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)]" />
            <div className="absolute right-8 bottom-8">
              <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex items-center gap-3 bg-white/80 backdrop-blur rounded-2xl px-4 py-3 shadow">
                <Play className="text-blue-500" size={18} />
                <span className="text-sm text-slate-700">Live class starting soon</span>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="absolute left-10 top-10">
              <div className="w-40 h-52 rounded-xl border bg-white/70 backdrop-blur p-4 shadow-sm">
                <div className="h-4 w-24 bg-slate-200 rounded mb-3" />
                <div className="space-y-2">
                  <div className="h-2 w-28 bg-slate-200 rounded" />
                  <div className="h-2 w-32 bg-slate-200 rounded" />
                  <div className="h-2 w-20 bg-slate-200 rounded" />
                </div>
                <div className="mt-4 h-7 w-28 rounded-full bg-gradient-to-r from-blue-400 to-violet-500" />
              </div>
            </motion.div>
            {/* Subtle crane */}
            <motion.div initial={{ y: -6 }} animate={{ y: 6 }} transition={{ repeat: Infinity, repeatType: 'mirror', duration: 3 }} className="absolute right-10 top-10 opacity-70">
              <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none" stroke="#94a3b8" strokeWidth="2">
                <path d="M10 70 L50 50 L90 70 L50 20 Z" />
                <path d="M50 20 L60 10" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
