import Link from "next/link";
import ClarityAnimation from "@/components/clarity-animation";

const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL ??
  "https://calendly.com/ivy-pm/clarity-with-ivy";

export default function HomePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');
        .cw-serif { font-family: 'DM Serif Display', Georgia, serif; }
        .cw-sans  { font-family: 'DM Sans', system-ui, sans-serif; }
      `}</style>

      <div className="cw-sans">

        {/* ── NAV ── */}
        <header style={{ borderBottom: "1px solid #E2E8F0", background: "rgba(255,255,255,0.97)" }}
          className="sticky top-0 z-50 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
            <div className="cw-serif text-xl text-slate-900 tracking-tight">Clarity with Ivy</div>
            <nav className="hidden md:flex items-center gap-7 text-sm text-slate-500">
              <a href="#coaching" className="hover:text-slate-800">Coaching</a>
              <a href="#about" className="hover:text-slate-800">About</a>
            </nav>
            <div className="flex items-center gap-3">
              <Link href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                style={{ background: "#0D1B2A" }}
                className="rounded-full px-4 py-2 text-sm font-medium text-white hover:opacity-90">
                Book a call
              </Link>
            </div>
          </div>
        </header>

        {/* ── HERO ── */}
        <section style={{
          background: "linear-gradient(135deg, #0D1B2A 0%, #0F2235 60%, #0D2340 100%)",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0, opacity: 0.15,
            backgroundImage: "radial-gradient(ellipse at 20% 60%, #0EA5E9 0%, transparent 55%), radial-gradient(ellipse at 85% 15%, #8B5CF6 0%, transparent 50%)",
          }} />
          <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
            <div className="max-w-3xl">
              <div style={{ border: "1px solid rgba(255,255,255,.15)", background: "rgba(255,255,255,.08)" }}
                className="mb-6 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-sky-300">
                For middle managers who are ready to lead on purpose
              </div>

              <ClarityAnimation className="mb-4 -ml-1" />

              <h1 className="cw-serif text-white leading-tight"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.2 }}>
                Cut through the noise. Lead with intention.
              </h1>
              <p className="mt-6 text-slate-300 leading-relaxed max-w-2xl"
                style={{ fontSize: "1.125rem" }}>
                You're caught between executive pressure and team reality. You're working hard,
                but momentum feels elusive. <strong className="text-white font-medium">Clarity with Ivy</strong> gives
                middle managers the frameworks, AI coaching, and community to lead with direction —
                without burning out or pretending to have all the answers.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Link href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                  style={{ background: "#0EA5E9" }}
                  className="rounded-full px-7 py-3.5 text-sm font-semibold text-white hover:opacity-90 text-center">
                  Book a discovery call
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <div style={{ borderBottom: "1px solid #E2E8F0", background: "#F8FAFC" }}>
          <div className="mx-auto max-w-6xl px-6 py-6 flex flex-wrap items-center justify-center gap-10">
            {[
              { value: "7,000+", label: "Managers trained" },
              { value: "4.6 ★",  label: "Average rating"  },
              { value: "582",    label: "Reviews"          },
              { value: "1:1",    label: "Personalized coaching" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold text-slate-900">{s.value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── PAIN POINTS ── */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center mb-14">
            <h2 className="cw-serif text-slate-900" style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}>
              Sound familiar?
            </h2>
            <p className="mt-3 text-slate-500 max-w-lg mx-auto">
              Middle management is one of the hardest and most underserved roles in any organization.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: "↕",
                color: "#EFF6FF",
                iconColor: "#2563EB",
                title: "Pulled in every direction",
                body: "Leadership says one thing. Your team needs another. You're the one absorbing pressure from both sides — with no clear path forward.",
              },
              {
                icon: "↻",
                color: "#F0FDF4",
                iconColor: "#059669",
                title: "Busy but not moving forward",
                body: "Your calendar is full but your priorities feel murky. You're working hard and still wondering if you're working on the right things.",
              },
              {
                icon: "◎",
                color: "#FDF4FF",
                iconColor: "#7C3AED",
                title: "Invisible to the people above",
                body: "You do great work, but it doesn't translate into visibility, recognition, or the opportunity you've been quietly waiting for.",
              },
            ].map((card) => (
              <div key={card.title}
                style={{ border: "1px solid #E2E8F0" }}
                className="rounded-2xl bg-white p-7 shadow-sm">
                <div style={{ background: card.color, color: card.iconColor }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold mb-4">
                  {card.icon}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── THREE PILLARS ── */}
        <section id="coaching" style={{ background: "#0D1B2A" }} className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">
                What Clarity with Ivy gives you
              </div>
              <h2 className="cw-serif text-white" style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}>
                Three pillars of clarity
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  n: "01", accent: "#38BDF8",
                  title: "Clarity of Direction",
                  body: "Know exactly what to focus on and why. Cut through competing priorities and build a leadership narrative that resonates up, down, and across your org.",
                },
                {
                  n: "02", accent: "#A78BFA",
                  title: "Clarity of Communication",
                  body: "Say the right things to the right people. Frameworks for managing up, leading your team, and navigating the difficult conversations that matter most.",
                },
                {
                  n: "03", accent: "#34D399",
                  title: "Clarity of Growth",
                  body: "Build a career and leadership style that fits who you actually are. No more performing someone else's version of what a leader looks like.",
                },
              ].map((p) => (
                <div key={p.n}
                  style={{ border: "1px solid rgba(255,255,255,.08)", background: "rgba(255,255,255,.04)" }}
                  className="rounded-2xl p-8">
                  <div className="cw-serif mb-4" style={{ fontSize: "2.5rem", color: p.accent }}>{p.n}</div>
                  <h3 className="font-semibold mb-3" style={{ color: p.accent }}>{p.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COACH AIVY ── */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #F0F9FF 50%, #EDE9FE 100%)", border: "1px solid #BAE6FD" }}
            className="rounded-3xl p-8 md:p-14 flex flex-col lg:flex-row items-start lg:items-center gap-10">
            <div className="flex-1">
              <div className="text-xs font-semibold uppercase tracking-widest text-sky-600 mb-3">
                AI-Powered Coaching
              </div>
              <h2 className="cw-serif text-slate-900 mb-4" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                Meet Coach AIvy
              </h2>
              <p className="text-slate-600 leading-relaxed mb-7 max-w-lg">
                Get on-demand clarity for your toughest leadership moments. Whether you're dreading
                a stakeholder conversation, stuck on a team conflict, or need to structure your
                thinking before a big meeting — Coach AIvy delivers practical scripts, frameworks,
                and next steps instantly.
              </p>
              <span
                style={{ background: "#0EA5E9" }}
                className="inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-white hover:opacity-90 cursor-pointer">
                Try Coach AIvy free →
              </span>
            </div>

            {/* Mock chat bubble UI */}
            <div className="w-full lg:w-72 shrink-0">
              <div style={{ border: "1px solid #E0F2FE", boxShadow: "0 4px 24px rgba(14,165,233,.12)" }}
                className="rounded-2xl bg-white p-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div style={{ background: "#E0F2FE", color: "#0369A1" }}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0">IV</div>
                  <div style={{ background: "#F1F5F9" }}
                    className="rounded-2xl rounded-tl-none px-3.5 py-2.5 text-xs text-slate-700 leading-relaxed">
                    How can I help you find clarity today?
                  </div>
                </div>
                <div className="flex items-start gap-3 flex-row-reverse">
                  <div style={{ background: "#EDE9FE", color: "#6D28D9" }}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0">Me</div>
                  <div style={{ background: "#4F46E5" }}
                    className="rounded-2xl rounded-tr-none px-3.5 py-2.5 text-xs text-white leading-relaxed">
                    I have a tough stakeholder review tomorrow...
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div style={{ background: "#E0F2FE", color: "#0369A1" }}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0">IV</div>
                  <div style={{ background: "#F1F5F9" }}
                    className="rounded-2xl rounded-tl-none px-3.5 py-2.5 text-xs text-slate-700 leading-relaxed">
                    Let's prepare together. Here's a 3-step framework to walk in with confidence...
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
                    className="flex-1 rounded-full px-3.5 py-2 text-xs text-slate-400">
                    Ask Ivy anything...
                  </div>
                  <div style={{ background: "#0EA5E9" }}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer">
                    →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 1:1 COACHING CTA ── */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div style={{ background: "linear-gradient(135deg, #0D1B2A 0%, #0F2A3D 100%)" }}
            className="rounded-3xl p-10 md:p-20 text-center text-white">
            <div className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-4">1:1 Coaching</div>
            <h2 className="cw-serif mb-5" style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}>
              Ready for real clarity?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed">
              One-on-one coaching with Ivy gives you a dedicated thinking partner who understands
              the specific pressures of middle management. Together, you'll build the clarity and
              confidence to lead on your own terms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                style={{ background: "#0EA5E9" }}
                className="rounded-full px-8 py-3.5 text-sm font-semibold text-white hover:opacity-90">
                Book a discovery call
              </Link>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ borderTop: "1px solid #E2E8F0" }} className="bg-white py-12">
          <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <div className="cw-serif text-slate-700 text-lg">Clarity with Ivy</div>
            <div className="flex gap-6">
              <a href="#coaching" className="hover:text-slate-700">Coaching</a>
              <Link href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="hover:text-slate-700">Book a Call</Link>
            </div>
            <div>© 2025 Clarity with Ivy</div>
          </div>
        </footer>

      </div>
    </>
  );
}
