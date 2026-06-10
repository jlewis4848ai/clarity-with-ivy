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
            <div className="cw-serif text-xl text-slate-900 tracking-tight">Clarity Under Pressure</div>
            <div className="flex items-center gap-3">
              <Link href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                style={{ background: "#0D1B2A" }}
                className="rounded-full px-4 py-2 text-sm font-medium text-white hover:opacity-90">
                Book a Clarity Session
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
              <ClarityAnimation className="mb-4 -ml-1" />

              <h1 className="cw-serif text-white leading-tight"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.2 }}>
                Results without visibility is just a secret.
              </h1>
              <p className="mt-4 text-sky-300 font-medium"
                style={{ fontSize: "1.125rem" }}>
                Visibility without results is just noise.
              </p>
              <p className="mt-6 text-slate-300 leading-relaxed max-w-2xl"
                style={{ fontSize: "1.125rem" }}>
                You work hard and deliver. But the right people aren't seeing it. You keep getting
                passed over by people who are louder, not better.{" "}
                <strong className="text-white font-medium">Clarity Under Pressure</strong> teaches
                professionals how to deliver with clarity and be seen with integrity.
                No fake politics. No self-promotion. Just the real moves that make results count.
              </p>
            </div>
          </div>
        </section>

        {/* ── SOCIAL PROOF ── */}
        <div style={{ borderBottom: "1px solid #E2E8F0", background: "#F8FAFC" }}>
          <div className="mx-auto max-w-6xl px-6 py-6 flex flex-wrap items-center justify-center gap-10">
            {[
              { value: "7,000+", label: "Community members" },
              { value: "4.6 ★",  label: "Average rating"   },
              { value: "582",    label: "Reviews"           },
              { value: "20+",    label: "Years experience"  },
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
              Smart, hardworking professionals who keep getting overlooked. Not because they aren't
              good enough. Because results alone aren't enough anymore.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: "◎",
                color: "#FDF4FF",
                iconColor: "#7C3AED",
                title: "You deliver. Nobody notices.",
                body: "You put in the work and the results are real. But somehow the credit goes elsewhere or disappears entirely. You're doing everything right except being seen.",
              },
              {
                icon: "⚡",
                color: "#FFF7ED",
                iconColor: "#EA580C",
                title: "You freeze in the moments that matter.",
                body: "High-stakes presentation. Difficult client. Meeting with leadership. The moments that define careers are the exact moments you can't find the right words.",
              },
              {
                icon: "↑",
                color: "#EFF6FF",
                iconColor: "#2563EB",
                title: "Less capable people keep getting promoted.",
                body: "They aren't better than you. They're just more visible. And you don't know how to close that gap without becoming someone you're not.",
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

        {/* ── SIX MOVES ── */}
        <section id="method" style={{ background: "#0D1B2A" }} className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">
                The Methodology
              </div>
              <h2 className="cw-serif text-white" style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}>
                The Clarity Under Pressure Method
              </h2>
              <p className="mt-4 text-slate-400 max-w-xl mx-auto">
                Six moves for professionals who want to deliver results and make sure the right people see them.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  n: "01", accent: "#38BDF8",
                  title: "Sense",
                  body: "Read what everyone is feeling but not saying. Find the real problem beneath the presenting problem.",
                },
                {
                  n: "02", accent: "#A78BFA",
                  title: "Orient",
                  body: "Figure out exactly what this specific situation needs. Not a generic solution. The precise response this moment requires.",
                },
                {
                  n: "03", accent: "#34D399",
                  title: "Structure",
                  body: "Bring order to chaos without being rigid. Create the container that makes people safe enough to move.",
                },
                {
                  n: "04", accent: "#FB923C",
                  title: "Trust",
                  body: "Build it before you push. Nothing moves without it.",
                },
                {
                  n: "05", accent: "#F472B6",
                  title: "Simplify",
                  body: "Find the one thing that needs to be said and say it directly. No over-explaining.",
                },
                {
                  n: "06", accent: "#FBBF24",
                  title: "Amplify",
                  body: "Make your results visible to the right people with integrity. Not fake politics. Not self-promotion. Strategic visibility.",
                },
              ].map((p) => (
                <div key={p.n}
                  style={{ border: "1px solid rgba(255,255,255,.08)", background: "rgba(255,255,255,.04)" }}
                  className="rounded-2xl p-8">
                  <div className="cw-serif mb-1" style={{ fontSize: "2rem", color: p.accent }}>{p.n}</div>
                  <h3 className="font-semibold text-lg mb-3" style={{ color: p.accent }}>{p.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OFFERS ── */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center mb-14">
            <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
              Work With Ivy
            </div>
            <h2 className="cw-serif text-slate-900" style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}>
              Pick your starting point
            </h2>
            <p className="mt-3 text-slate-500 max-w-lg mx-auto">
              Every engagement is built around one thing: your specific situation, right now.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "The Clarity Session",
                duration: "90 minutes",
                description: "You bring one specific situation. You leave knowing exactly what's really happening and exactly what to do about it this week.",
                cta: "Book a Session",
                accent: "#0EA5E9",
                highlight: false,
              },
              {
                name: "The Pressure Sprint",
                duration: "4 sessions over 30 days",
                description: "One specific challenge solved in 30 days. Real moves. Real result. You deliver something visible and the right people see it.",
                cta: "Start the Sprint",
                accent: "#8B5CF6",
                highlight: true,
              },
              {
                name: "Clarity Under Pressure Cohort",
                duration: "6 weeks · 10-15 people",
                description: "Learn all six moves with a small group. Live coaching on your actual situations every week. Runs twice per year.",
                cta: "Join the Waitlist",
                accent: "#34D399",
                highlight: false,
              },
            ].map((offer) => (
              <div key={offer.name}
                style={{
                  border: offer.highlight ? `2px solid ${offer.accent}` : "1px solid #E2E8F0",
                  background: offer.highlight ? "#0D1B2A" : "#FFFFFF",
                }}
                className="rounded-2xl p-8 flex flex-col shadow-sm">
                {offer.highlight && (
                  <div className="text-xs font-semibold uppercase tracking-widest mb-4"
                    style={{ color: offer.accent }}>
                    Most Popular
                  </div>
                )}
                <div className="font-semibold mb-1"
                  style={{ color: offer.highlight ? "#FFFFFF" : "#0F172A" }}>
                  {offer.name}
                </div>
                <div className="text-xs mb-4" style={{ color: offer.highlight ? "#94A3B8" : "#64748B" }}>
                  {offer.duration}
                </div>
                <p className="text-sm leading-relaxed flex-1 mb-8"
                  style={{ color: offer.highlight ? "#CBD5E1" : "#475569" }}>
                  {offer.description}
                </p>
                <Link href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                  style={{ background: offer.accent }}
                  className="rounded-full px-6 py-3 text-sm font-semibold text-white hover:opacity-90 text-center">
                  {offer.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div style={{ background: "linear-gradient(135deg, #0D1B2A 0%, #0F2A3D 100%)" }}
            className="rounded-3xl p-10 md:p-20 text-center text-white">
            <h2 className="cw-serif mb-5" style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}>
              Ready to be seen for the work you already do?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed">
              20+ years of navigating pressure, complexity, and high-stakes moments. Now in your corner.
              Start with a single 90-minute session and leave with a clear plan for your specific situation.
            </p>
            <Link href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
              style={{ background: "#0EA5E9" }}
              className="inline-block rounded-full px-10 py-4 text-sm font-semibold text-white hover:opacity-90">
              Book a Clarity Session
            </Link>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ borderTop: "1px solid #E2E8F0" }} className="bg-white py-12">
          <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <div className="cw-serif text-slate-700 text-lg">Clarity Under Pressure</div>
            <div className="flex gap-6">
              <a href="#method" className="hover:text-slate-700">The Method</a>
              <Link href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="hover:text-slate-700">Book a Session</Link>
            </div>
            <div>© 2026 Clarity Under Pressure</div>
          </div>
        </footer>

      </div>
    </>
  );
}
