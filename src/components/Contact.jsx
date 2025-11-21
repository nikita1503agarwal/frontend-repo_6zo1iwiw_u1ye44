import { Phone, Mail, MapPin, MessageSquare, Send } from 'lucide-react'

export default function Contact(){
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.06),transparent_50%)]" />
      <div className="relative mx-auto max-w-[1140px] px-6 md:px-8 grid md:grid-cols-12 gap-10 items-start">
        {/* Form */}
        <div className="md:col-span-7">
          <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-slate-100">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Contact & Enroll</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="h-12 px-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Name" />
              <input className="h-12 px-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Email" type="email" />
              <input className="h-12 px-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Phone" />
              <select className="h-12 px-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option>Interest</option>
                <option>Beginner N5</option>
                <option>Elementary N4</option>
                <option>Conversation</option>
              </select>
              <textarea className="md:col-span-2 h-28 px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Message" />
              <button className="md:col-span-2 h-[54px] rounded-full text-white bg-gradient-to-r from-blue-500 to-violet-500 inline-flex items-center justify-center gap-2">
                Send <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Info */}
        <div className="md:col-span-5">
          <div className="relative bg-white rounded-3xl p-8 shadow-sm ring-1 ring-slate-100">
            <div className="absolute -top-6 left-8 w-14 h-14 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.20),transparent_60%)]" />
            <div className="absolute -top-4 right-8">
              <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none" stroke="#94a3b8" strokeWidth="2">
                <path d="M10 70 L50 50 L90 70 L50 20 Z" />
                <path d="M50 20 L60 10" />
              </svg>
            </div>
            <div className="space-y-4 relative">
              <a href="#" className="inline-flex items-center gap-2 px-4 h-10 rounded-full bg-green-500/10 text-green-700 border border-green-600/20">
                <MessageSquare size={18}/> WhatsApp us
              </a>
              <div className="flex items-center gap-3 text-slate-700"><Mail size={18}/> hello@fledge.academy</div>
              <div className="flex items-center gap-3 text-slate-700"><Phone size={18}/> +1 555 0123</div>
              <div className="flex items-center gap-3 text-slate-700"><MapPin size={18}/> Tokyo • Remote</div>
            </div>
          </div>
          <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-violet-50 text-slate-800">
            <div className="flex items-center justify-between">
              <p className="text-sm md:text-base">You don’t need talent to learn Japanese — just the right guidance.</p>
              <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none" stroke="#94a3b8" strokeWidth="2">
                <path d="M10 70 L50 50 L90 70 L50 20 Z" />
                <path d="M50 20 L60 10" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
