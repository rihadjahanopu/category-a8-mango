export default function MarqueeSection() {
  return (
    <section className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] text-white py-4 overflow-hidden shadow-lg  my-10 relative z-20">
      <div className="whitespace-nowrap flex animate-[marquee_25s_linear_infinite] skew-y-2">
        <span className="text-xl font-bold tracking-wider mx-6 flex items-center gap-4">
          🔥 NEW ARRIVALS: THE SILENT ECHO{" "}
          <span className="w-2 h-2 rounded-full bg-white"></span>
        </span>
        <span className="text-xl font-bold tracking-wider mx-6 flex items-center gap-4">
          ✨ TRENDING: REACT JS MASTERCLASS{" "}
          <span className="w-2 h-2 rounded-full bg-white"></span>
        </span>
        <span className="text-xl font-bold tracking-wider mx-6 flex items-center gap-4">
          🚀 TOP RATED: QUANTUM REALITY{" "}
          <span className="w-2 h-2 rounded-full bg-white"></span>
        </span>
        {/* Duplicated for seamless scrolling */}
        <span className="text-xl font-bold tracking-wider mx-6 flex items-center gap-4">
          🔥 NEW ARRIVALS: THE SILENT ECHO{" "}
          <span className="w-2 h-2 rounded-full bg-white"></span>
        </span>
        <span className="text-xl font-bold tracking-wider mx-6 flex items-center gap-4">
          ✨ TRENDING: REACT JS MASTERCLASS{" "}
          <span className="w-2 h-2 rounded-full bg-white"></span>
        </span>
        <span className="text-xl font-bold tracking-wider mx-6 flex items-center gap-4">
          🚀 TOP RATED: QUANTUM REALITY{" "}
          <span className="w-2 h-2 rounded-full bg-white"></span>
        </span>
      </div>
    </section>
  );
}
