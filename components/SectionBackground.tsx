"use client";

interface SectionBackgroundProps {
  variant?: "default" | "purple" | "pink" | "blue";
  intensity?: "low" | "medium" | "high";
}

export default function SectionBackground({ 
  variant = "default", 
  intensity = "medium" 
}: SectionBackgroundProps) {
  const gradients = {
    default: "from-purple-600 via-pink-600 to-purple-700",
    purple: "from-purple-600 via-purple-500 to-purple-700",
    pink: "from-pink-600 via-purple-500 to-pink-700",
    blue: "from-blue-600 via-purple-500 to-pink-600",
  };

  const opacities = {
    low: "opacity-15",
    medium: "opacity-20",
    high: "opacity-25",
  };

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Base gradient background - CONTINUO sin cortes */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
      
      {/* Overlay gradient para seamless transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent" />
      
      {/* Main glow orb */}
      <div 
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[800px] aspect-square rounded-full blur-3xl ${opacities[intensity]} bg-gradient-to-r ${gradients[variant]} transition-opacity duration-1000`}
      />
      
      {/* Secondary glow (top right) */}
      <div 
        className={`absolute right-0 top-0 w-[40vw] h-[40vh] rounded-full blur-3xl opacity-10 bg-gradient-to-br ${gradients[variant]} transition-opacity duration-1000`}
      />
      
      {/* Bottom glow for seamless transition */}
      <div 
        className={`absolute left-0 bottom-0 w-[40vw] h-[40vh] rounded-full blur-3xl opacity-10 bg-gradient-to-tl ${gradients[variant]} transition-opacity duration-1000`}
      />
      
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
    </div>
  );
}
