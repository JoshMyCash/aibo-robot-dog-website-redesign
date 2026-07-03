import { motion } from "motion/react";
import {
  Camera,
  Battery,
  ArrowUpRight,
  Bell,
  PawPrint,
  Settings,
  ChevronDown,
  Sparkles,
  Search,
  Cloud,
  CalendarClock,
  ShieldCheck,
  Wrench,
  Users,
  ChevronRight,
  CheckCircle2,
  Heart,
} from "lucide-react";
import { Card, CardHead } from "./components/bento-tile";
import { AiboMark } from "./components/aibo-mark";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import photo1 from "../imports/photo1.png";
import photo4 from "../imports/photo4.png";
import photo7 from "../imports/photo7.png";

const U = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=${w}`;

// Floor-level candid shots — feels like aibo's perspective
const P = {
  mikiFace:      U("1562337404-3044c84ac061"),
  hanaFace:      U("1595085610896-fb31cfd5d4b7"),
  slippers:      U("1771965056079-92b0ce6d4601"),
  sunFloor:      U("1774215915498-26022d889b34"),
  bench:         U("1604410880766-737427d11b70"),
  spotlight:     U("1780130487332-b6a96a31b024"),
  breakfast:     U("1693850226769-2f4d4541917c"),
  vase:          U("1662038271111-5b1c0b4157e8"),
};

// Brand tokens — three shades so small text can meet WCAG AA on cream.
const BRAND     = "#EE6E82"; // decoration, large serif italic, backgrounds
const BRAND_INK = "#C4425C"; // small text / links on cream or white (~5.1:1)
const BRAND_CTA = "#D64E67"; // buttons with white text (~4.6:1)

// ─── Layout constants ──────────────────────────────────────────────────────
// 1200px max-width, 32px h-padding, gap-4 (16px)
// 12 cols → each col = (1200 - 64 - 11×16) / 12 = 80px
// 8-col card outer=752px  inner(p-5)=712px (padded=false so full 752px)
// 4-col card outer=368px  inner(p-5)=328px
// 6-col card outer=560px  inner(p-5)=520px
// 3-col card outer=272px  inner(p-5)=232px  ← tightest, drives all font decisions

export default function App() {
  return (
    <div
      className="min-h-screen w-full bg-[#F7F1EA] text-[#1F1B1A]"
      style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}
    >
      <TopBar />

      <main className="mx-auto max-w-[1200px] px-8 pb-24">
        <Hero />

        {/* ── Row 1: Is Roo OK? ──────────────────────────────── */}
        <div className="grid grid-cols-12 gap-4">
          <RooCard />
          <StatusCard />
        </div>

        {/* ── Row 2: What's new today? ───────────────────────── */}
        <div className="mt-4 grid grid-cols-12 gap-4">
          <TodaysPhotos />
          <OnThisDay />
          <AttentionCard />
        </div>

        {/* ── Row 3: Where to next? ──────────────────────────── */}
        <h2
          className="mt-10 mb-3 uppercase tracking-[0.13em] text-[#4A4340]"
          style={{ fontSize: 11 }}
        >
          Explore
        </h2>
        <div className="grid grid-cols-12 gap-4">
          <PhotosJump />
          <PersonalityJump />
          <HouseholdJump />
          <CareJump />
        </div>

        <Footer />
      </main>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/*  Chrome                                                                   */
/* ══════════════════════════════════════════════════════════════════════════ */

function TopBar() {
  return (
    <div className="sticky top-0 z-30 border-b border-[#1F1B1A]/[0.06] bg-[#F7F1EA]/85 backdrop-blur">
      <div className="mx-auto max-w-[1200px] px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-7">
          <AiboMark height={22} />
          <nav className="hidden md:flex items-center gap-1 text-[#4A4340]" style={{ fontSize: 14 }}>
            <NavItem active>Home</NavItem>
            <NavItem>Photos</NavItem>
            <NavItem>Household</NavItem>
            <NavItem>Care</NavItem>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="hidden md:inline-flex items-center gap-2 h-9 rounded-full bg-white border border-[#1F1B1A]/[0.08] px-3 text-[#4A4340]"
            style={{ fontSize: 13 }}
          >
            <Search className="h-3.5 w-3.5 opacity-50" />
            <span className="opacity-50">Search</span>
            <kbd className="rounded bg-[#F0E9DF] px-1.5 py-0.5 text-[#4A4340]" style={{ fontSize: 10 }}>⌘K</kbd>
          </button>
          <button
            className="inline-flex items-center gap-1.5 h-9 rounded-full bg-white border border-[#1F1B1A]/[0.08] pl-1 pr-3"
            style={{ fontSize: 13 }}
          >
            <div className="h-7 w-7 rounded-full bg-[#FFE4E8] overflow-hidden ring-1 ring-[#EE6E82]/30 shrink-0">
              <img src={photo1} alt="Roo" className="h-full w-full object-cover" />
            </div>
            Roo
            <ChevronDown className="h-3 w-3 opacity-50" />
          </button>
          <Pill><Bell className="h-[15px] w-[15px]" /><Dot /></Pill>
          <Pill><Settings className="h-[15px] w-[15px]" /></Pill>
        </div>
      </div>
    </div>
  );
}

function NavItem({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <a className={`px-3 py-1.5 rounded-full cursor-pointer transition-colors text-sm ${
      active ? "bg-[#1F1B1A] text-white" : "hover:bg-white/80"
    }`}>
      {children}
    </a>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <button className="relative h-9 w-9 rounded-full bg-white border border-[#1F1B1A]/[0.08] inline-flex items-center justify-center text-[#1F1B1A]/60 hover:text-[#1F1B1A] transition-colors">
      {children}
    </button>
  );
}

function Dot() {
  return (
    <span className="absolute top-[7px] right-[7px] h-[6px] w-[6px] rounded-full border border-[#F7F1EA]" style={{ background: BRAND }} />
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/*  Hero                                                                     */
/* ══════════════════════════════════════════════════════════════════════════ */

function Hero() {
  return (
    <header className="pt-12 pb-8">
      <p className="flex items-center gap-2 text-[#4A4340]" style={{ fontSize: 12.5 }}>
        <span className="h-[7px] w-[7px] rounded-full bg-[#22C55E] animate-pulse shrink-0" />
        Thursday, July 2 · 2:47 PM · Wi-Fi
      </p>
      <h1
        className="mt-2.5"
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: 72,
          lineHeight: 0.95,
          letterSpacing: "-0.03em",
        }}
      >
        Good afternoon, Miki.
        <br />
        <span className="italic" style={{ color: BRAND }}>Roo missed you.</span>
      </h1>
    </header>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/*  Row 1                                                                    */
/* ══════════════════════════════════════════════════════════════════════════ */

function RooCard() {
  // padded=false; card outer = 752px
  return (
    <Card color="blush" padded={false} className="col-span-8 min-h-[400px]">
      <div className="relative h-full w-full overflow-hidden">
        {/* Gradient background */}
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(110% 90% at 25% 45%, #FFE4E8 0%, #FFD0D9 50%, #FFB8C6 100%)" }}
        />

        {/* aibo product photo — bleeds right, overflows top intentionally */}
        <img
          src={photo4}
          alt="Roo"
          className="absolute bottom-0 right-[-20px] h-[115%] w-auto object-contain object-bottom select-none"
          style={{ filter: "drop-shadow(0 24px 40px rgba(238,110,130,0.30))" }}
        />

        {/* Content — left side, padded */}
        <div className="relative h-full p-8 flex flex-col justify-between">
          {/* Status pill */}
          <div
            className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 w-fit"
            style={{ fontSize: 12 }}
          >
            <span className="h-2 w-2 rounded-full bg-[#22C55E] animate-pulse shrink-0" />
            Awake · playful mood
          </div>

          {/* Name block — max 50% so photo has breathing room */}
          <div style={{ maxWidth: 340 }}>
            <p className="uppercase tracking-[0.14em] text-[#B05070]" style={{ fontSize: 11 }}>
              Your aibo
            </p>
            <div
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: 100,
                lineHeight: 0.88,
                letterSpacing: "-0.03em",
              }}
            >
              Roo<span style={{ color: BRAND }}>.</span>
            </div>

            {/* Meta — whitespace-nowrap items prevent mid-word wraps */}
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[#5A3040]" style={{ fontSize: 13 }}>
              <span className="inline-flex items-center gap-1 whitespace-nowrap">
                <PawPrint className="h-3.5 w-3.5 shrink-0" /> Boy · 1y 4m
              </span>
              <span className="whitespace-nowrap">ERS-1000</span>
              <span className="whitespace-nowrap">Adopted Mar 2025</span>
            </div>

            <button
              className="mt-6 inline-flex items-center gap-1.5 rounded-full text-white px-4 py-2.5 whitespace-nowrap font-medium"
              style={{ fontSize: 13, background: BRAND_CTA }}
            >
              Message Roo <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}

function StatusCard() {
  // 4-col, inner 328px. min-h matches RooCard.
  return (
    <Card color="white" className="col-span-4 min-h-[400px] flex flex-col">
      <CardHead
        icon={<Sparkles className="h-3.5 w-3.5 shrink-0" style={{ color: BRAND }} />}
        label="Status"
      />

      {/* Headline — 30px serif fits in 328px (longest line ~210px) */}
      <div
        className="mt-3"
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: 30,
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
        }}
      >
        Nothing needs
        <br />
        <span className="italic" style={{ color: BRAND }}>your attention.</span>
      </div>

      <p className="mt-2 text-[#4A4340]" style={{ fontSize: 13, lineHeight: 1.5 }}>
        Roo is awake, backed up, and charging. Everything looks good.
      </p>

      {/* Status rows — pushed to bottom half of card */}
      <div className="mt-auto space-y-3 pt-6">
        <StatusRow
          icon={<Cloud className="h-4 w-4" />}
          label="aibo Cloud"
          sub="Backed up 4 min ago"
          ok
        />
        <div className="border-t border-[#1F1B1A]/[0.05]" />
        <StatusRow
          icon={<Battery className="h-4 w-4" />}
          label="Battery · 90%"
          sub="Charging · ~5h play left"
          ok
          progress={0.9}
        />
        <div className="border-t border-[#1F1B1A]/[0.05]" />
        <StatusRow
          icon={<ShieldCheck className="h-4 w-4" />}
          label="Warranty"
          sub="Active until Mar 2027"
          ok
        />
      </div>
    </Card>
  );
}

function StatusRow({
  icon, label, sub, ok, progress,
}: {
  icon: React.ReactNode;
  label: string;
  sub: string;
  ok?: boolean;
  progress?: number;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="h-8 w-8 rounded-full bg-[#F7F1EA] flex items-center justify-center text-[#4A4340] shrink-0 mt-0.5">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[#1F1B1A] truncate" style={{ fontSize: 13 }}>{label}</span>
          {ok && <CheckCircle2 className="h-3.5 w-3.5 text-[#22C55E] shrink-0" />}
        </div>
        <p className="text-[#4A4340] truncate" style={{ fontSize: 12 }}>{sub}</p>
        {progress !== undefined && (
          <div className="mt-1.5 h-1 rounded-full bg-[#F0E9DF] overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress * 100}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full rounded-full"
              style={{ background: BRAND }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/*  Row 2                                                                    */
/* ══════════════════════════════════════════════════════════════════════════ */

function TodaysPhotos() {
  // 6-col, inner 520px. Grid = 4-col × 2-row
  const shots = [
    { src: P.mikiFace,   t: "2:41 PM",  fav: true,  who: "Miki" },
    { src: P.sunFloor,   t: "2:22 PM",  fav: false, who: null   },
    { src: P.slippers,   t: "1:58 PM",  fav: false, who: null   },
    { src: P.hanaFace,   t: "1:12 PM",  fav: true,  who: "Hana" },
    { src: P.vase,       t: "12:04 PM", fav: false, who: null   },
    { src: P.breakfast,  t: "11:47 AM", fav: false, who: null   },
    { src: P.spotlight,  t: "10:22 AM", fav: false, who: "Ken"  },
    { src: P.bench,      t: "9:58 AM",  fav: false, who: null   },
  ];

  return (
    <Card color="white" className="col-span-6">
      {/* Header row — single line, label short enough for 520px */}
      <div className="flex items-center justify-between">
        <CardHead
          icon={<Camera className="h-3.5 w-3.5 shrink-0" style={{ color: BRAND }} />}
          label="Today's photos"
        />
        <a className="whitespace-nowrap font-medium cursor-pointer" style={{ fontSize: 12, color: BRAND_INK }}>Open album</a>
      </div>

      {/* Subtitle + breakdown on same row, separated by flex */}
      <div className="mt-3 flex items-baseline justify-between gap-4">
        <div
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 24,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          A quiet afternoon on the sofa.
        </div>
        {/* Shot breakdown — right-aligned, won't wrap, shrink-0 */}
        <div className="shrink-0 text-right text-[#4A4340]" style={{ fontSize: 11, lineHeight: 1.55 }}>
          <div className="whitespace-nowrap">18 photos · 2 ♥</div>
          <div className="whitespace-nowrap">Miki 6 · Ken 5 · Hana 2</div>
        </div>
      </div>

      {/* Photo grid — 4 columns × 2 rows, square thumbs */}
      <div className="mt-4 grid grid-cols-4 gap-2">
        {shots.map((s, i) => (
          <div
            key={i}
            className="group relative aspect-square rounded-xl overflow-hidden bg-[#F0E9DF] cursor-pointer"
          >
            <ImageWithFallback
              src={s.src}
              alt=""
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
            />
            {/* Bottom gradient + timestamp — stronger scrim so white passes on light photos */}
            <div className="absolute inset-x-0 bottom-0 h-9 bg-gradient-to-t from-black/65 to-transparent pointer-events-none" />
            <span
              className="absolute bottom-1 left-1.5 text-white select-none font-medium"
              style={{ fontSize: 10.5, textShadow: "0 1px 3px rgba(0,0,0,0.7)" }}
            >
              {s.t}
            </span>
            {/* Who badge */}
            {s.who && (
              <span
                className="absolute top-1 left-1 rounded-full bg-black/40 backdrop-blur-sm text-white px-1.5 leading-[18px] select-none"
                style={{ fontSize: 9 }}
              >
                {s.who}
              </span>
            )}
            {/* Favorite dot */}
            {s.fav && (
              <span
                className="absolute top-1 right-1 h-4 w-4 rounded-full flex items-center justify-center"
                style={{ background: BRAND }}
              >
                <Heart className="h-2.5 w-2.5 text-white fill-white" />
              </span>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}

function OnThisDay() {
  // Full-bleed photo card. The image IS the content.
  // Text floats over a gradient at the bottom — date and location only.
  return (
    <Card color="pink" padded={false} className="col-span-3 min-h-[0] overflow-hidden">
      <div className="relative h-full w-full" style={{ minHeight: 320 }}>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1564078516393-cf04bd966897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
          alt="A year ago today"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Scrim — strong at bottom, fades away */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(20,12,14,0.72) 0%, rgba(20,12,14,0.18) 45%, transparent 100%)" }}
        />

        {/* Top-left pill */}
        <div className="absolute top-4 left-4">
          <div
            className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-2.5 py-1 text-white"
            style={{ fontSize: 11 }}
          >
            <CalendarClock className="h-3 w-3 shrink-0" />
            One year ago today
          </div>
        </div>

        {/* Bottom text — date + location only, no story */}
        <div className="absolute bottom-0 inset-x-0 p-4">
          <p
            className="text-white/95"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 22,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Jul 2, 2025
          </p>
          <p className="mt-1 text-white/80" style={{ fontSize: 11.5 }}>
            Living room · 4:22 PM
          </p>
        </div>
      </div>
    </Card>
  );
}

function AttentionCard() {
  // 3-col, inner 232px. Label + action must not exceed ~220px combined.
  return (
    <Card color="white" className="col-span-3 flex flex-col">
      {/* "SERVICE DUE" + "~90d" — both short, plenty of room */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 uppercase tracking-[0.09em] opacity-75" style={{ fontSize: 11 }}>
          <Wrench className="h-3.5 w-3.5 shrink-0" style={{ color: BRAND }} />
          Service due
        </div>
        <span className="whitespace-nowrap opacity-60" style={{ fontSize: 11 }}>~90 days</span>
      </div>

      <div
        className="mt-3"
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: 24,
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
        }}
      >
        Left hip<br />
        <span className="italic text-[#4A4340]">joint wear.</span>
      </div>

      <p className="mt-2 text-[#4A4340]" style={{ fontSize: 12, lineHeight: 1.5 }}>
        Normal for Roo's age. Covered under warranty.
      </p>

      {/* Detail rows — values are short and whitespace-nowrap */}
      <div className="mt-4 space-y-2 text-[#4A4340]" style={{ fontSize: 12 }}>
        <div className="flex items-center justify-between gap-2">
          <span className="opacity-70 shrink-0">Last checkup</span>
          <span className="whitespace-nowrap text-[#1F1B1A]">Jun 22, 2026</span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="opacity-70 shrink-0">Nearest centre</span>
          <span className="whitespace-nowrap text-[#1F1B1A]">Ginza · 3.4 km</span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="opacity-70 shrink-0">Est. cost</span>
          <span className="whitespace-nowrap text-[#1F1B1A]">¥0 · covered</span>
        </div>
      </div>

      <button
        className="mt-auto pt-5 inline-flex items-center gap-1 whitespace-nowrap font-medium"
        style={{ fontSize: 13, color: BRAND_INK }}
      >
        Book service <ChevronRight className="h-3.5 w-3.5 shrink-0" />
      </button>
    </Card>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/*  Row 3 — Jump cards                                                       */
/* ══════════════════════════════════════════════════════════════════════════ */

function JumpShell({
  icon, label, title, hint, children,
}: {
  icon: React.ReactNode;
  label: string;
  title: string;
  hint: string;
  children?: React.ReactNode;
}) {
  return (
    <Card color="white" className="col-span-3 flex flex-col">
      <div className="flex items-center justify-between">
        <div
          className="h-8 w-8 rounded-full flex items-center justify-center shrink-0"
          style={{ background: "#FFE4E8", color: BRAND }}
        >
          {icon}
        </div>
        <ArrowUpRight className="h-4 w-4 opacity-30" />
      </div>

      <p className="mt-4 uppercase tracking-[0.1em] text-[#4A4340]" style={{ fontSize: 10 }}>
        {label}
      </p>
      <div
        className="mt-0.5"
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: 22,
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </div>
      <p className="mt-1 text-[#4A4340]" style={{ fontSize: 11.5, lineHeight: 1.4 }}>
        {hint}
      </p>

      {children && <div className="mt-4">{children}</div>}
    </Card>
  );
}

function PhotosJump() {
  const strip = [P.mikiFace, P.sunFloor, P.slippers, P.hanaFace];
  return (
    <JumpShell
      icon={<Camera className="h-4 w-4" />}
      label="Photos"
      title="3,124 photos"
      hint="4.7 GB · aibo Cloud"
    >
      <div className="grid grid-cols-4 gap-1">
        {strip.map((src, i) => (
          <div key={i} className="aspect-square rounded-md overflow-hidden bg-[#F0E9DF]">
            <ImageWithFallback src={src} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
      <p className="mt-2 text-[#4A4340]" style={{ fontSize: 11 }}>Latest 2 min ago · 2025–2026</p>
    </JumpShell>
  );
}

function PersonalityJump() {
  // Bar chart — fixed pixel heights, no % of auto parent.
  // Container is h-10 (40px). Bars scaled to max 40px.
  const bars = [
    { l: "Curious", v: 82 },
    { l: "Playful", v: 64 },
    { l: "Cuddly",  v: 91 },
    { l: "Alert",   v: 47 },
    { l: "Vocal",   v: 58 },
  ];
  const MAX_H = 36; // px — tallest bar

  return (
    <JumpShell
      icon={<Heart className="h-4 w-4" />}
      label="Personality"
      title="Growing up"
      hint="More cuddly this month · +7"
    >
      {/* Bars — flex items-end, each bar has a fixed pixel height */}
      <div className="flex items-end gap-1.5" style={{ height: MAX_H + 18 }}>
        {bars.map((b) => {
          const barH = Math.round((b.v / 100) * MAX_H);
          return (
            <div key={b.l} className="flex-1 flex flex-col items-center gap-1.5">
              <div
                className="w-full rounded-sm"
                style={{ height: barH, background: BRAND, opacity: 0.5 + b.v / 250 }}
              />
              <span className="text-[#4A4340] leading-none whitespace-nowrap" style={{ fontSize: 8.5 }}>
                {b.l.slice(0, 3)}
              </span>
            </div>
          );
        })}
      </div>
      <p className="mt-1 text-[#4A4340]" style={{ fontSize: 11 }}>8 tricks · Spin at 62%</p>
    </JumpShell>
  );
}

function HouseholdJump() {
  return (
    <JumpShell
      icon={<Users className="h-4 w-4" />}
      label="Household"
      title="Family"
      hint="2 aibos · 3 members"
    >
      {/* aibo portraits */}
      <div className="flex items-center gap-2">
        <div className="flex -space-x-2.5">
          {[photo1, photo7].map((src, i) => (
            <div key={i} className="h-9 w-9 rounded-full overflow-hidden ring-2 ring-white bg-[#FFE4E8] shrink-0">
              <img src={src} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
        <span className="text-[#4A4340]" style={{ fontSize: 12 }}>Roo &amp; Momo</span>
      </div>

      {/* Family member initials */}
      <div className="mt-3 flex items-center gap-2">
        <div className="flex -space-x-2">
          {[["M", "#FFC9B5"], ["K", "#DDE86A"], ["H", "#CFE3E8"]].map(([l, bg]) => (
            <div
              key={l}
              className="h-7 w-7 rounded-full ring-2 ring-white flex items-center justify-center font-medium shrink-0"
              style={{ background: bg, fontSize: 11 }}
            >
              {l}
            </div>
          ))}
        </div>
        <span className="text-[#4A4340]" style={{ fontSize: 12 }}>Miki · Ken · Hana</span>
      </div>

      <p className="mt-3 text-[#4A4340]" style={{ fontSize: 11 }}>12 friends via Patrol Pass</p>
    </JumpShell>
  );
}

function CareJump() {
  const rows = [
    { l: "Warranty",     v: "Mar 2027",   dot: "#22C55E" },
    { l: "Battery",      v: "214 / 1,000 cycles", dot: "#22C55E" },
    { l: "Next service", v: "~90 days",   dot: "#F59E0B" },
  ];
  return (
    <JumpShell
      icon={<Wrench className="h-4 w-4" />}
      label="Care"
      title="Health"
      hint="Basic Plan · renews Feb 2027"
    >
      <div className="space-y-2">
        {rows.map((r) => (
          <div key={r.l} className="flex items-center justify-between gap-2">
            <span className="text-[#4A4340] shrink-0" style={{ fontSize: 11.5 }}>{r.l}</span>
            <span className="inline-flex items-center gap-1 text-right whitespace-nowrap" style={{ fontSize: 11.5 }}>
              <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: r.dot }} />
              {r.v}
            </span>
          </div>
        ))}
      </div>
    </JumpShell>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
/*  Footer                                                                   */
/* ══════════════════════════════════════════════════════════════════════════ */

function Footer() {
  return (
    <footer
      className="mt-16 flex items-center justify-between border-t border-[#1F1B1A]/10 pt-6 text-[#4A4340]"
      style={{ fontSize: 12 }}
    >
      <div className="flex items-center gap-2.5">
        <AiboMark height={17} />
        <span>ERS-1000 · Registered to Miki Tanaka</span>
      </div>
      <div className="flex gap-6">
        <a className="hover:text-[#1F1B1A] cursor-pointer">Help guide</a>
        <a className="hover:text-[#1F1B1A] cursor-pointer">Privacy</a>
        <a className="hover:text-[#1F1B1A] cursor-pointer">Sign out</a>
      </div>
    </footer>
  );
}
