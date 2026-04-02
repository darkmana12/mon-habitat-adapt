export function PrimeBanner() {
  return (
    <div className="border-b border-white/15 bg-gradient-to-br from-bannerGradientFrom to-bannerGradientTo px-8 py-5 text-center text-white">
      <div className="mx-auto w-full max-w-[1200px]">
        <strong className="text-xl font-semibold leading-snug sm:text-2xl md:text-[1.5rem] lg:text-[1.65rem]">
          MaPrimeAdapt&apos; 2026 — jusqu&apos;à{" "}
          <span className="font-bold">70% de financement</span> pour vos travaux d&apos;adaptation
        </strong>
      </div>
    </div>
  );
}
