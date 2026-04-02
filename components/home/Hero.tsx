import { HeroEligibilityCard } from "./HeroEligibilityCard";
import { HeroInstitutionalStrip } from "./HeroInstitutionalStrip";

export function Hero() {
  return (
    <section className="bg-warmWhite">
      <div className="mx-auto max-w-[1200px] px-8 pb-[90px] pt-8 sm:pt-10">
        <div className="mx-auto max-w-[720px] text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-goldBorder bg-goldLight px-3.5 py-1.5 text-[0.82rem] font-medium text-gold">
            <span aria-hidden>🛡️</span>
            <span>Conseil indépendant & gratuit</span>
          </div>

          <h1 className="mb-5 font-sans text-[2.1rem] font-bold leading-[1.2] tracking-tight text-charcoal sm:text-[2.6rem] md:text-[2.85rem]">
            Jusqu&apos;à{" "}
            <span className="bg-gradient-to-br from-bannerGradientFrom to-bannerGradientTo bg-clip-text text-[1.12em] font-black tabular-nums text-transparent sm:text-[1.08em]">
              15 400 €
            </span>{" "}
            d&apos;aides pour financer vos travaux d&apos;adaptation
          </h1>

          <p className="mx-auto max-w-[560px] text-[1.05rem] font-light leading-relaxed text-textMuted sm:text-[1.1rem]">
            MaPrimeAdapt&apos; peut prendre en charge une partie de vos travaux.
          </p>
        </div>

        <div className="mx-auto mt-10 w-full max-w-[520px]">
          <HeroEligibilityCard />
        </div>

        <HeroInstitutionalStrip />
      </div>
    </section>
  );
}
