import Image from "next/image";
import Link from "next/link";

export function Services() {
  return (
    <section className="w-full border-b border-borderDefault bg-cream" id="services">
      <div className="mx-auto max-w-[1320px] px-8 pb-20 pt-10 sm:pt-12">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-sans text-[2.4rem] font-bold leading-[1.2] tracking-tight text-charcoal">
            Tout pour adapter votre logement
          </h2>
          <p className="mx-auto max-w-[560px] text-[1.05rem] text-textMuted">
            Des guides complets, des conseils sur les aides et des artisans vérifiés pour chaque type de travaux.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 min-[900px]:grid-cols-2" id="douche">
          <Link href="#" className="flex flex-col overflow-hidden rounded-2xl border border-borderDefault bg-white text-inherit no-underline transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]">
            <div className="relative h-44 w-full shrink-0 overflow-hidden bg-sageLight/40">
              <Image
                src="/images/douche_senior.jpeg"
                alt="Douche à l'italienne et salle de bain adaptée"
                fill
                className="object-cover"
                sizes="(max-width: 899px) 100vw, 50vw"
                priority={false}
              />
            </div>
            <div className="flex-1 px-8 pb-6 pt-8">
              <h3 className="mb-4 font-sans text-[1.125rem] font-medium leading-snug text-charcoal sm:text-[1.2rem]">
                Douche senior & remplacement de baignoire
              </h3>
              <div className="flex flex-wrap gap-1.5">
                <span className="rounded-full border border-goldBorder bg-goldLight px-2.5 py-1 text-[0.75rem] text-gold">✓ MaPrimeAdapt&apos;</span>
                <span className="rounded-full border border-borderDefault bg-cream px-2.5 py-1 text-[0.75rem] text-textMuted">Devis gratuit</span>
                <span className="rounded-full border border-borderDefault bg-cream px-2.5 py-1 text-[0.75rem] text-textMuted">Artisans agréés</span>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-borderDefault bg-cream px-8 py-5">
              <div className="text-[0.82rem] text-textMuted">
                À partir de <strong className="text-base text-charcoal">2 500 €</strong> après aides
              </div>
              <span className="flex items-center gap-1 text-[0.85rem] font-medium text-sage">Tout savoir →</span>
            </div>
          </Link>

          <Link href="#" className="flex flex-col overflow-hidden rounded-2xl border border-borderDefault bg-white text-inherit no-underline transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]" id="monte">
            <div className="relative h-44 w-full shrink-0 overflow-hidden bg-sageLight/40">
              <Image
                src="/images/monte_escalier.jpeg"
                alt="Escalier intérieur et aménagement pour monte-escalier"
                fill
                className="object-cover"
                sizes="(max-width: 899px) 100vw, 50vw"
              />
            </div>
            <div className="flex-1 px-8 pb-6 pt-8">
              <h3 className="mb-4 font-sans text-[1.125rem] font-medium leading-snug text-charcoal sm:text-[1.2rem]">
                Monte-escalier & élévateur
              </h3>
              <div className="flex flex-wrap gap-1.5">
                <span className="rounded-full border border-goldBorder bg-goldLight px-2.5 py-1 text-[0.75rem] text-gold">✓ Éligible aides</span>
                <span className="rounded-full border border-borderDefault bg-cream px-2.5 py-1 text-[0.75rem] text-textMuted">Intérieur & extérieur</span>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-borderDefault bg-cream px-8 py-5">
              <div className="text-[0.82rem] text-textMuted">
                Devis de <strong className="text-base text-charcoal">3 000 – 15 000 €</strong>
              </div>
              <span className="flex items-center gap-1 text-[0.85rem] font-medium text-sage">Comparer →</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
