import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  AtSign,
  BriefcaseBusiness,
  Check,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Presentation,
  Quote,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Psyche Academy | Empowering Minds, Shaping Futures",
  description: "Practical learning programmes for English, confidence, careers, and personal growth.",
};

const programmes = [
  {
    icon: Target,
    title: "Career Development",
    description: "Clarify your direction and build the communication, interview, and workplace skills to move forward.",
  },
  {
    icon: BriefcaseBusiness,
    title: "IELTS Preparation",
    description: "Focused coaching and exam practice to help you approach your target band with confidence.",
  },
  {
    icon: MessageCircle,
    title: "Spoken English",
    description: "Speak naturally, listen actively, and express yourself clearly in everyday and professional settings.",
  },
  {
    icon: Sparkles,
    title: "Personality Development",
    description: "Strengthen self-awareness, confidence, presence, and the habits that support lasting growth.",
  },
  {
    icon: HeartHandshake,
    title: "Soft Skills",
    description: "Develop the teamwork, leadership, problem-solving, and communication skills people remember.",
  },
  {
    icon: Presentation,
    title: "Corporate Training & Psychology Workshops",
    description: "Practical, people-centred workshops that help teams communicate better, perform better, and thrive.",
  },
];

const results = [
  ["01", "Learn by doing", "Interactive sessions that turn insight into practical, everyday confidence."],
  ["02", "Grow at your pace", "Supportive guidance for learners, professionals, and teams at every stage."],
  ["03", "Carry it forward", "Skills designed to make a difference beyond the classroom or workshop."],
];

const testimonials = [
  ["The sessions gave me the confidence to speak up in interviews and at work. I could feel the difference immediately.", "Programme learner"],
  ["Psyche Academy made development feel practical, encouraging, and genuinely personal—not intimidating.", "Workshop participant"],
];

function BrandMark({ footer = false }: { footer?: boolean }) {
  return (
    <span className={`relative block shrink-0 overflow-hidden ${footer ? "h-20 w-24" : "h-14 w-16"}`} aria-hidden="true">
      <Image
        src="/images/psyche-academy-logo.png"
        alt=""
        width={1254}
        height={1254}
        className={`absolute left-1/2 max-w-none -translate-x-1/2 ${footer ? "top-[-15px] w-[142px]" : "top-[-10px] w-[100px]"}`}
        priority={!footer}
      />
    </span>
  );
}

export default function WelcomePage() {
  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto bg-[#faf9f5] text-[#173526]">
      <main className="overflow-hidden">
        <section className="relative isolate">
          <div className="pointer-events-none absolute -left-44 top-16 -z-10 h-96 w-96 rounded-full bg-[#d9eedb] blur-3xl" />
          <div className="pointer-events-none absolute -right-28 top-[-8rem] -z-10 h-[30rem] w-[30rem] rounded-full bg-[#f2dfbd] blur-3xl" />

          <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
            <Link href="/welcome" className="flex items-center gap-2.5" aria-label="Psyche Academy home">
              <BrandMark />
              <span className="text-base font-extrabold tracking-tight text-[#163d2c] sm:text-lg">
                Psyche <span className="text-[#d27542]">Academy</span>
              </span>
            </Link>
            <a href="https://wa.me/15550192834" className="rounded-full bg-[#1e4d38] px-4 py-2.5 text-xs font-extrabold text-white shadow-lg shadow-[#1e4d38]/15 transition hover:bg-[#173d2d] sm:px-5 sm:text-sm">
              Enquire now
            </a>
          </nav>

          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-20 pt-9 sm:px-8 sm:pt-14 lg:grid-cols-[1.08fr_.92fr] lg:px-12 lg:pb-28">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#cde3cb] bg-[#edf7eb] px-3.5 py-2 text-xs font-extrabold uppercase tracking-[0.13em] text-[#296245]">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> Empowering minds. Shaping futures.
              </p>
              <h1 className="mt-6 text-5xl font-black leading-[0.98] tracking-[-0.06em] text-[#173826] sm:text-6xl lg:text-7xl">
                Build Confidence. <span className="text-[#d27542]">Master English.</span> Achieve Your Dreams.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#53675a] sm:text-xl">
                A welcoming place to build practical skills for your studies, career, conversations, and personal growth.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#programmes" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1e4d38] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[#1e4d38]/20 transition hover:-translate-y-0.5 hover:bg-[#173d2d]">
                  Explore our programmes <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href="https://wa.me/15550192834" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1e4d38]/20 bg-white/70 px-6 py-3.5 text-sm font-extrabold text-[#1e4d38] transition hover:bg-white">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" /> Chat on WhatsApp
                </a>
              </div>
              <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#607568]">
                <Check className="h-4 w-4 text-[#438557]" strokeWidth={3} aria-hidden="true" /> Scan, explore, and connect in a few taps.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="relative overflow-hidden rounded-[2rem] bg-[#1f4d38] p-6 shadow-2xl shadow-[#315640]/20 sm:p-8">
                <div className="absolute -right-10 -top-12 h-48 w-48 rounded-full bg-[#79ad7b]/40" />
                <div className="absolute -bottom-16 -left-12 h-40 w-40 rounded-full border-[25px] border-[#eab66f]/70" />
                <div className="relative">
                  <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#c5ddca]">One academy, many possibilities</p>
                  <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white">Your next chapter starts with one conversation.</h2>
                  <div className="mt-7 rounded-2xl bg-[#fdfcf8] p-5 text-[#1b3729] shadow-xl">
                    <p className="text-sm font-bold text-[#607568]">Designed for real progress</p>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {["English", "Confidence", "Career"].map((item) => (
                        <span key={item} className="rounded-xl bg-[#e8f3e6] px-2 py-3 text-center text-xs font-extrabold text-[#286143]">{item}</span>
                      ))}
                    </div>
                    <p className="mt-5 text-sm leading-6 text-[#607568]">Choose the support that meets you where you are—and helps you move forward.</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-2 rounded-2xl border border-[#d8e7d7] bg-white px-4 py-3 shadow-xl shadow-[#315640]/10 sm:left-[-1rem] sm:px-5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#6c7f70]">Made for growth</p>
                <p className="mt-1 text-sm font-extrabold text-[#214733]">Skills with a real-world impact.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="programmes" className="scroll-mt-6 bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#ce7140]">Our Programmes</p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.045em] text-[#173826] sm:text-5xl">Find the path that feels right for you.</h2>
              <p className="mt-4 text-lg leading-8 text-[#607568]">Explore six practical learning experiences for individuals, professionals, and organisations.</p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {programmes.map(({ icon: Icon, title, description }, index) => (
                <article key={title} className="group rounded-3xl border border-[#e4ebe1] bg-[#fdfdfa] p-6 transition hover:-translate-y-1 hover:border-[#b8d7ba] hover:shadow-xl hover:shadow-[#315640]/8">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e7f3e5] text-[#2d724a]"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                    <span className="text-xs font-black tracking-widest text-[#b4c4b5]">0{index + 1}</span>
                  </div>
                  <h3 className="mt-7 text-xl font-extrabold tracking-tight text-[#1d4531]">{title}</h3>
                  <p className="mt-3 min-h-20 text-sm leading-6 text-[#637668]">{description}</p>
                  <a href="https://wa.me/15550192834" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#286143] transition group-hover:text-[#d27542]">
                    Enquire about this <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
            <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl bg-[#1f4d38] px-6 py-7 text-center sm:flex-row sm:text-left lg:px-9">
              <div>
                <p className="text-xl font-extrabold text-white">Not sure where to begin?</p>
                <p className="mt-1 text-sm text-[#c5ddca]">Tell us your goal and we&apos;ll help you choose a starting point.</p>
              </div>
              <a href="https://wa.me/15550192834" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#f2c985] px-5 py-3 text-sm font-extrabold text-[#244231] transition hover:bg-[#f7d79e]">
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp us
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#f2f6ee] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.86fr_1.14fr] lg:items-start">
            <div className="rounded-[2rem] bg-[#e6b36c] p-7 sm:p-9">
              <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#754321]">A note from the founder</p>
              <Quote className="mt-8 h-9 w-9 text-[#89532a]" aria-hidden="true" />
              <blockquote className="mt-5 text-2xl font-black leading-tight tracking-tight text-[#244231] sm:text-3xl">“Every learner deserves a space where they can grow, be heard, and recognise their own potential.”</blockquote>
              <p className="mt-8 text-sm font-extrabold text-[#5d391f]">Founder, Psyche Academy</p>
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#ce7140]">The Psyche approach</p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.045em] text-[#173826] sm:text-5xl">Progress that stays with you.</h2>
              <div className="mt-9 space-y-5">
                {results.map(([number, title, description]) => (
                  <div key={number} className="flex gap-5 rounded-2xl bg-white p-5 shadow-sm">
                    <span className="text-lg font-black text-[#d27542]">{number}</span>
                    <div><h3 className="font-extrabold text-[#214733]">{title}</h3><p className="mt-1 text-sm leading-6 text-[#637668]">{description}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#ce7140]">Learner stories</p><h2 className="mt-3 text-4xl font-black tracking-[-0.045em] text-[#173826] sm:text-5xl">Confidence, in their own words.</h2></div><UsersRound className="h-10 w-10 text-[#a7d0a7]" aria-hidden="true" /></div>
            <div className="mt-9 grid gap-5 md:grid-cols-2">
              {testimonials.map(([quote, role]) => (
                <figure key={quote} className="rounded-3xl border border-[#e4ebe1] p-7 sm:p-8"><Quote className="h-7 w-7 text-[#d27542]" aria-hidden="true" /><blockquote className="mt-5 text-xl font-bold leading-8 text-[#264633]">“{quote}”</blockquote><figcaption className="mt-6 text-sm font-extrabold text-[#6a7e6e]">— {role}</figcaption></figure>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#173d2d] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#f2c985]">Let&apos;s talk</p>
            <div className="mt-3 grid gap-8 lg:grid-cols-[1fr_.78fr] lg:items-end">
              <div><h2 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl">Your next step can be a simple hello.</h2><p className="mt-5 max-w-xl text-lg leading-8 text-[#c5ddca]">Call, message, or email our team to ask a question, discuss a programme, or plan training for your organisation.</p></div>
              <a href="https://wa.me/15550192834" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#f2c985] px-6 py-4 text-sm font-extrabold text-[#1d4531] transition hover:bg-[#f7d79e] lg:w-auto"><MessageCircle className="h-5 w-5" aria-hidden="true" /> Start a WhatsApp conversation</a>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <a href="tel:+15550192834" className="contact-link"><Phone className="h-5 w-5" /> <span><b>Call</b><small>+1 (555) 019-2834</small></span></a>
              <a href="https://wa.me/15550192834" className="contact-link"><MessageCircle className="h-5 w-5" /> <span><b>WhatsApp</b><small>Message our team</small></span></a>
              <a href="mailto:support@psycheacademy.com" className="contact-link"><Mail className="h-5 w-5" /> <span><b>Email</b><small>support@psycheacademy.com</small></span></a>
              <a href="#contact" className="contact-link"><AtSign className="h-5 w-5" /> <span><b>Instagram</b><small>@psycheacademy</small></span></a>
              <a href="#contact" className="contact-link"><UsersRound className="h-5 w-5" /> <span><b>LinkedIn</b><small>Psyche Academy</small></span></a>
              <a href="#contact" className="contact-link"><MapPin className="h-5 w-5" /> <span><b>Address</b><small>Visit us for a conversation</small></span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#102d21] px-5 py-9 text-[#c5ddca] sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-2"><BrandMark footer /><div><p className="font-extrabold text-white">Psyche Academy</p><p className="mt-1 text-xs">Empowering minds. Shaping futures.</p></div></div>
          <a href="https://wa.me/15550192834" className="inline-flex items-center gap-2 text-sm font-extrabold text-[#f2c985] hover:text-[#f7d79e]"><MessageCircle className="h-4 w-4" /> Contact us on WhatsApp</a>
        </div>
      </footer>

      <style>{`.contact-link{display:flex;align-items:center;gap:0.9rem;border:1px solid rgba(197,221,202,.22);border-radius:1rem;padding:1rem;color:#fff;transition:background .2s,border-color .2s}.contact-link:hover{background:rgba(255,255,255,.08);border-color:rgba(242,201,133,.7)}.contact-link svg{color:#f2c985;flex:none}.contact-link b,.contact-link small{display:block}.contact-link b{font-size:.875rem}.contact-link small{margin-top:.15rem;font-size:.75rem;color:#c5ddca}`}</style>
    </div>
  );
}
