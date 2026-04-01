export function PrimeBanner() {
  return (
    <>
      <div className="bg-gradient-to-br from-bannerGradientFrom to-bannerGradientTo px-8 py-5 text-center text-white">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <strong className="text-xl font-semibold leading-snug sm:text-2xl md:text-[1.5rem] lg:text-[1.65rem]">
              MaPrimeAdapt&apos; 2026 — jusqu&apos;à 70% de financement pour vos travaux
              d&apos;adaptation
            </strong>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[1.05rem] leading-snug opacity-90 sm:text-[1.125rem]">
              Aide lancée en 2024, encore très peu connue des seniors
            </span>
            <a
              href="#quiz"
              className="whitespace-nowrap rounded-md bg-white px-6 py-3 text-[1rem] font-medium text-goldDeep no-underline transition-opacity hover:opacity-90 sm:text-[1.05rem]"
            >
              Vérifiez vos droits →
            </a>
            <span className="text-[0.75rem] font-light tracking-[0.06em] opacity-95 sm:text-[0.8rem]">
              Service gratuit et sans engagement
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-bannerGradientTo/25 bg-sageLight px-6 py-2.5 text-center">
        <p className="mx-auto w-full max-w-[1200px] text-[0.9rem] italic leading-relaxed text-charcoal md:text-[0.95rem]">
          Accompagnement personnalisé vers les aides de l&apos;ANAH, l&apos;APA et les crédits
          d&apos;impôts 2026.
        </p>
      </div>
    </>
  );
}
