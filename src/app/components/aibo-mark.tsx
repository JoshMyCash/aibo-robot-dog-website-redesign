import aiboLogo from "../../imports/Aibo_logo_2018.png";

export function AiboMark({ className = "", height = 26 }: { className?: string; height?: number }) {
  return (
    <img
      src={aiboLogo}
      alt="aibo"
      className={className}
      style={{ height, width: "auto", display: "block" }}
    />
  );
}
