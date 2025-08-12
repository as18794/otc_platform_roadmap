// pages/index.tsx
import Head from 'next/head'
import Image from 'next/image'
import { useMemo } from 'react'

/** ---------------- Icons (no extra deps) ---------------- **/
const IconGear = (props: any) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}><path fill="currentColor" d="M10.2 2.4h3.6l.5 2.2c.5.1 1 .3 1.5.6l2-1.2 2.5 2.5-1.2 2c.3.5.5 1 .6 1.5l2.2.5v3.6l-2.2.5c-.1.5-.3 1-.6 1.5l1.2 2-2.5 2.5-2-1.2c-.5.3-1 .5-1.5.6l-.5 2.2h-3.6l-.5-2.2c-.5-.1-1-.3-1.5-.6l-2 1.2L3.7 18l1.2-2c-.3-.5-.5-1-.6-1.5L2.1 14v-3.6l2.2-.5c.1-.5.3-1 .6-1.5l-1.2-2L6.2 3.9l2 1.2c.5-.3 1-.5 1.5-.6l.5-2.1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg>
)
const IconChat = (props: any) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}><path fill="currentColor" d="M4 3h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2Z"/></svg>
)
const IconGlobe = (props: any) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.9 6H15.8c-.5-1.5-1.2-3-1.8-3.8A8 8 0 0 1 18.9 8ZM12 4c.9 1.3 1.8 3.1 2.2 4H9.8C10.2 7.1 11.1 5.3 12 4ZM5.1 8h3.1A13 13 0 0 1 6.6 4.2 8 8 0 0 0 5.1 8Zm0 8a8 8 0 0 0 1.5 3.8A13 13 0 0 1 8.2 16H5.1Zm3.1 0h7.6c-.5 1.6-1.3 3.4-2.2 4a8 8 0 0 1-3.2 0c-.9-.6-1.7-2.4-2.2-4ZM18.9 16H15.8c.4 1.5 1.1 3 1.7 3.8A8 8 0 0 0 18.9 16ZM9.8 10h4.4c.1.6.2 1.3.2 2s-.1 1.4-.2 2H9.8c-.1-.6-.2-1.3-.2-2s.1-1.4.2-2Z"/></svg>
)
const IconChart = (props: any) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}><path fill="currentColor" d="M3 4h2v16H3V4Zm4 8h2v8H7v-8Zm4-5h2v13h-2V7Zm4 3h2v10h-2V10Zm4-6h2v16h-2V4Z"/></svg>
)
const IconShield = (props: any) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}><path fill="currentColor" d="M12 2 4 5v6c0 5 3.4 9.8 8 11 4.6-1.2 8-6 8-11V5l-8-3Z"/></svg>
)

/** ---------------- UI helpers ---------------- **/
function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="max-w-5xl mx-auto text-center mb-10">
      <h2 className="text-3xl sm:text-4xl font-semibold">{title}</h2>
      {subtitle && <p className="mt-2 text-neutral-700">{subtitle}</p>}
      <span className="mt-4 block h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-500" />
    </div>
  )
}

function Card({
  icon,
  title,
  blurb,
  items,
  footnote,
  accent = 'from-emerald-400 via-sky-400 to-indigo-500',
}: {
  icon: React.ReactNode
  title: string
  blurb: string
  items: string[]
  footnote?: string
  accent?: string
}) {
  return (
    <div className="relative rounded-xl border border-neutral-200 p-6 bg-white shadow-sm hover:shadow-lg transition-transform hover:-translate-y-0.5">
      <div className={`absolute inset-x-0 -top-px h-1 bg-gradient-to-r ${accent}`} />
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-md bg-gradient-to-br from-emerald-100 to-sky-100 text-sky-700">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-neutral-800">{blurb}</p>
      <ul className="mt-4 space-y-2">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-neutral-900 shrink-0" />
            <span className="text-neutral-900">{it}</span>
          </li>
        ))}
      </ul>
      {footnote && <p className="mt-4 text-sm text-neutral-600">{footnote}</p>}
    </div>
  )
}

/** ---------------- Page ---------------- **/
export default function Home() {
  // 18-month, value-first timeline
  const timeline = useMemo(
    () => [
      { when: 'Months 3-4', title: 'Automated Trade Booking (Internal)', detail: 'Book OTC index option trades accurately in minutes; reduce manual touchpoints.' },
      { when: 'Months 6-8', title: 'Broker RFQ Console (Internal)', detail: 'Create RFQs, track quotes, expiry, and execution on one page with audit trail.' },
      { when: 'Months 9–12', title: 'Client Portal (Read-Only)', detail: 'Clients view trade history, RFQ outcomes, and daily market snapshots securely.' },
      { when: 'Months 12–14', title: 'Client RFQ (Pilot) + Basic STP', detail: 'Selected clients can request quotes; tickets generated automatically post-trade.' },
      { when: 'Months 15–18', title: 'Analytics & Best-Execution Reports', detail: 'Spread analytics, hit-rates, timestamps, and exportable best-ex packs.' },
    ],
    []
  )

  return (
    <>
      <Head>
        <title>Magen OTC Platform to Challenge TradeWeb</title>
        <meta name="description" content="Focused plan to deliver core Tradeweb-like functionality for OTC index derivatives." />
      </Head>

      {/* ---------- Header ---------- */}
      <header className="relative border-b bg-white">
        <div className="absolute inset-x-0 -bottom-px h-1 bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-500" />
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold">Magen Platform to Challenge TradeWeb</span>
          </div>
          <nav className="hidden sm:flex gap-6 text-sm text-neutral-700">
            <a href="#how" className="hover:text-neutral-900">How it works</a>
            <a href="#tools" className="hover:text-neutral-900">Key tools</a>
            <a href="#timeline" className="hover:text-neutral-900">Timeline</a>
          </nav>
        </div>
      </header>

      <main className="bg-gradient-to-b from-white via-neutral-50 to-neutral-100 relative overflow-hidden">
        {/* Decorative gradient blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-emerald-300/40 via-sky-300/40 to-indigo-300/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-fuchsia-300/30 via-violet-300/30 to-sky-300/30 blur-3xl" />

        {/* ---------- Hero ---------- */}
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 bg-white/80 backdrop-blur text-sm text-neutral-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Focus: internal accuracy & speed first
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight">
              Build the core Tradeweb-like flows — then scale to clients
            </h1>
            <p className="mt-4 text-lg text-neutral-700 max-w-3xl">
              Start with automated trade booking and the broker RFQ console. Add a secure client portal and finish with analytics & best-execution reports.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#tools" className="inline-flex items-center rounded-md bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-600 text-white px-4 py-2 font-medium shadow hover:opacity-95 transition">View deliverables</a>
              <a href="#timeline" className="inline-flex items-center rounded-md border border-neutral-300 bg-white px-4 py-2 font-medium hover:bg-neutral-100 transition">See timeline</a>
            </div>
          </div>
        </section>

        {/* ---------- How it works (sequential) ---------- */}
        <section id="how" className="max-w-6xl mx-auto px-4 py-14">
          <SectionTitle title="How it works" />
          <ol className="grid md:grid-cols-2 gap-6">
            {[
              { step: '1', title: 'Foundation: Secure Web Platform', text: 'Private network, sign-in, encryption, logging. A base for every tool that follows.' },
              { step: '2', title: 'Automated Trade Booking (internal)', text: 'Validated post-trade tickets with audit trail to cut manual rework.' },
              { step: '3', title: 'Broker RFQ Console (internal)', text: 'Create RFQs, track quotes, expiry, and execution on one screen.' },
              { step: '4', title: 'Client Portal (read-only)', text: 'Clients view trades, RFQ outcomes, and daily snapshots — securely.' },
              { step: '5', title: 'Client RFQ (pilot)', text: 'Selected clients request quotes with broker oversight before execution.' },
              { step: '6', title: 'Analytics & Reports', text: 'Spread analysis, hit-rates, timestamps, and exportable best-ex packs.' },
            ].map((s, i) => (
              <li key={i} className="relative rounded-xl bg-white border border-neutral-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-gradient-to-br from-emerald-500 to-sky-600 text-white grid place-items-center text-sm font-semibold shadow">{s.step}</div>
                <div className="text-lg font-semibold">{s.title}</div>
                <p className="mt-2 text-neutral-800">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ---------- Key tools (expanded) ---------- */}
        <section id="tools" className="max-w-6xl mx-auto px-4 py-10">
          <SectionTitle title="Key tools" subtitle="Deliverables that emulate core Tradeweb workflows" />

          <div className="grid md:grid-cols-2 gap-6">
            <Card
              icon={<IconGear className="h-6 w-6" />}
              title="Automated Trade Booking (STP starter)"
              blurb="Generate validated post-trade tickets instantly and reduce operational risk."
              items={[
                'Guided ticket form (product, tenor, strike, size, counterparty)',
                'Validation rules (required fields, date checks, notional math)',
                'Auto-numbers, timestamps, edit history & reason codes',
                'Exports for back-office/compliance (PDF/CSV), retry queue',
              ]}
              footnote="Next: connect to clearing/DTCC/venues via standard messages."
              accent="from-emerald-400 via-cyan-400 to-sky-500"
            />
            <Card
              icon={<IconChat className="h-6 w-6" />}
              title="Broker RFQ Console"
              blurb="Track every RFQ from open to executed; keep a clean audit trail."
              items={[
                'Create RFQs, set expiry, attach notes and client tags',
                'View incoming quotes side-by-side; time-stamped',
                'Mark winner, record reason code, close with one click',
                'Historical search by client, product, tenor, date',
              ]}
              footnote="Next: notifications and live streaming updates."
              accent="from-sky-400 via-indigo-400 to-violet-500"
            />
            <Card
              icon={<IconGlobe className="h-6 w-6" />}
              title="Client Portal (Read-Only first)"
              blurb="Give clients a clear window into activity without email back-and-forth."
              items={[
                'Trade history with filters and download',
                'RFQ outcomes and timestamps',
                'Morning market snapshot (daily PDF)',
                'Per-client entitlements & access rules',
              ]}
              footnote="Next: pilot Client RFQ with broker oversight."
              accent="from-violet-400 via-fuchsia-400 to-rose-500"
            />
            <Card
              icon={<IconChart className="h-6 w-6" />}
              title="Analytics & Best-Execution"
              blurb="Turn activity into insight and prove value."
              items={[
                'Spread analysis by product/tenor',
                'Hit-rate by counterparty and time-of-day',
                'Turnaround time and response depth',
                'One-click best-execution packs (PDF/CSV)',
              ]}
              footnote="Next: client scorecards and trend alerts."
              accent="from-amber-400 via-orange-400 to-pink-500"
            />
            <Card
              icon={<IconShield className="h-6 w-6" />}
              title="Security & Audit (always on)"
              blurb="Controls that keep risk low and stakeholders comfortable."
              items={[
                'Role-based access and sign-in',
                'Encryption in transit and at rest',
                'Structured logs and immutable audit trail',
                'Backups and restore drills',
              ]}
              accent="from-neutral-400 via-slate-400 to-emerald-400"
            />
          </div>
        </section>

	{/* ---------- Timeline (mobile-clean, desktop-fancy) ---------- */}
<section id="timeline" className="max-w-6xl mx-auto px-4 py-12">
  <div className="max-w-5xl mx-auto text-center mb-10">
    <h2 className="text-3xl sm:text-4xl font-semibold">Timeline</h2>
    <p className="mt-2 text-neutral-700">Paced to ship value early and build steadily</p>
    <span className="mt-4 block h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-500" />
  </div>

  {/* Mobile: stacked cards (no center line) */}
  <ul className="md:hidden space-y-4">
    {timeline.map((t, i) => (
      <li key={i} className="relative rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
        <span className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-gradient-to-b from-emerald-400 via-sky-400 to-indigo-500" />
        <div className="text-sm font-semibold text-neutral-500">{t.when}</div>
        <div className="mt-1 text-base font-semibold">{t.title}</div>
        <p className="mt-1 text-neutral-800 leading-relaxed">{t.detail}</p>
      </li>
    ))}
  </ul>

  {/* Desktop: center line with alternating sides */}
  <div className="relative hidden md:block">
    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-300 via-sky-300 to-emerald-300" />
    <div className="space-y-10">
      {timeline.map((t, idx) => (
        <div key={idx} className="relative grid grid-cols-2 items-center gap-10">
          {/* Left / Right text blocks alternate */}
          <div className={idx % 2 === 0 ? "text-right pr-10" : "col-start-2 pl-10"}>
            <div className="inline-block rounded-full px-3 py-1 text-xs font-semibold bg-neutral-100 text-neutral-600">
              {t.when}
            </div>
            <div className="mt-2 text-lg font-semibold">{t.title}</div>
            <p className="mt-1 text-neutral-800">{t.detail}</p>
          </div>

          {/* Center dot */}
          <div className={`absolute left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-neutral-900 ring-4 ring-white shadow`} />

        </div>
      ))}
    </div>
  </div>
</section>


        {/* ---------- CTA ---------- */}
        <section className="border-t bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-600">
          <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-white">
              <h3 className="text-xl font-semibold">Next step</h3>
              <p className="opacity-90">Start with Automated Trade Booking, then layer on the RFQ console.</p>
            </div>
            <a
              href="#tools"
              className="inline-flex items-center rounded-md bg-white text-neutral-900 px-4 py-2 font-medium shadow hover:bg-neutral-100 transition"
            >
              View deliverables
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-neutral-100">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-neutral-600">
          © {new Date().getFullYear()} Magen. All rights reserved.
        </div>
      </footer>
    </>
  )
}
