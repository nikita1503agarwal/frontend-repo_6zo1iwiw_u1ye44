export default function Footer(){
  return (
    <footer className="relative py-16 bg-white border-t">
      <div className="mx-auto max-w-[1140px] px-6 md:px-8 grid md:grid-cols-4 gap-8 items-start">
        <div className="md:col-span-2">
          {/* Logo with gradient wing */}
          <div className="flex items-center gap-3 mb-3">
            <svg viewBox="0 0 120 120" className="w-8 h-8" aria-hidden>
              <defs>
                <linearGradient id="wing-footer" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
              <g fill="url(#wing-footer)">
                <path d="M20 80c30-5 50-25 70-60-5 30-20 58-55 78-8 4-18 4-25-2 3-6 6-12 10-16z" />
              </g>
            </svg>
            <span className="font-medium text-slate-900">Fledge Academy</span>
          </div>
          <div className="writing-vertical-rl text-slate-400 text-sm">日本語を学ぼう</div>
          <style>{`.writing-vertical-rl{writing-mode: vertical-rl;}`}</style>
        </div>
        <div>
          <nav className="space-y-2 text-slate-700">
            <a href="#" className="block hover:text-slate-900">Home</a>
            <a href="#courses" className="block hover:text-slate-900">Courses</a>
            <a href="#contact" className="block hover:text-slate-900">Contact</a>
          </nav>
        </div>
        <div className="text-slate-500 text-sm md:text-right md:self-end">© {new Date().getFullYear()} Fledge Academy.</div>
      </div>
    </footer>
  )
}
