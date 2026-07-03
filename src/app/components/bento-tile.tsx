import { ReactNode } from "react";
import { motion } from "motion/react";

type Color =
  | "cream"
  | "pink"        // brand pink solid
  | "blush"       // soft pink tint
  | "peach"
  | "charcoal"
  | "sky"
  | "lime"
  | "white";

const palette: Record<Color, string> = {
  cream:    "bg-[#F5EFE6] text-[#2A2320] border-[#1F1B1A]/[0.06]",
  pink:     "bg-[#EE6E82] text-white border-white/10",
  blush:    "bg-[#FFE4E8] text-[#3A1F27] border-[#EE6E82]/15",
  peach:    "bg-[#FFC9B5] text-[#3A1F1A] border-[#3A1F1A]/[0.05]",
  charcoal: "bg-[#1F1B1A] text-[#F5EFE6] border-white/[0.05]",
  sky:      "bg-[#CFE3E8] text-[#1B2D33] border-[#1B2D33]/[0.05]",
  lime:     "bg-[#DDE86A] text-[#1F2409] border-[#1F2409]/[0.05]",
  white:    "bg-white text-[#2A2320] border-[#1F1B1A]/[0.06]",
};

type CardProps = {
  children: ReactNode;
  className?: string;
  color?: Color;
  interactive?: boolean;
  padded?: boolean;
};

export function Card({
  children,
  className = "",
  color = "white",
  interactive = true,
  padded = true,
}: CardProps) {
  return (
    <motion.div
      whileHover={interactive ? { y: -2 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`relative overflow-hidden rounded-[24px] border shadow-[0_1px_0_rgba(0,0,0,0.03),0_10px_28px_-18px_rgba(238,110,130,0.35)] ${palette[color]} ${padded ? "p-5" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}

export const BentoTile = Card;

export function CardHead({
  icon,
  label,
  action,
  muted,
}: {
  icon?: ReactNode;
  label: string;
  action?: ReactNode;
  muted?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <div
        className={`inline-flex items-center gap-1.5 uppercase tracking-[0.09em] ${muted ? "opacity-55" : "opacity-75"}`}
        style={{ fontSize: 11 }}
      >
        {icon}
        {label}
      </div>
      {action ? <div style={{ fontSize: 12 }}>{action}</div> : null}
    </div>
  );
}

export function Stat({
  value,
  unit,
  hint,
  size = "lg",
}: {
  value: ReactNode;
  unit?: string;
  hint?: string;
  size?: "md" | "lg" | "xl";
}) {
  const sizes = { md: 40, lg: 56, xl: 72 };
  return (
    <div>
      <div
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: sizes[size],
          lineHeight: 0.95,
          letterSpacing: "-0.02em",
        }}
      >
        {value}
        {unit ? <span style={{ fontSize: sizes[size] * 0.4 }}> {unit}</span> : null}
      </div>
      {hint ? (
        <div className="mt-1 opacity-60" style={{ fontSize: 12 }}>
          {hint}
        </div>
      ) : null}
    </div>
  );
}
